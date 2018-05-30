"use strict";
import * as deepmerge from 'deepmerge';

import {arrays} from './arrays';
import {strings} from './strings';
import {Set} from 'typescript-collections';
import {vsprintf} from "sprintf-js";
import * as Bookshelf from "bookshelf";

/**
 * Tools for javascript dictionary objects
 */

class DictionaryTools {

    public static reduce = DictionaryTools.reduceJson;

    /**
     * Takes an array of json objects and creates a dictionary tree from it
     * based on the given keys.
     *
     * Example:
     *
     * json_array: [{key: key_value, key2: key2_value}, {key: second_key_value, ...}, ...]
     *
     * key: key
     *
     * returns: {key_value: {key: key_value, key2: key2_value}, second_key_value: {key: second_key_value, ...}, ...]
     *
     * @param {any[]} json_array An array of json objects
     * @param {string} key The key to be the root of the new json tree (must be within the json objects in the array)
     * @param {string} key2 Optional: A secondary key to be used to create a subroot (must be in the json objects in the array)
     * @returns {any[]} A json tree representation of the given array with root key and subroot key2
     */
    static regroupJsonArrayByKey(json_array: any[], key: string, key2?: string): any[] {
        const new_json_list: any = {};
        const disjoint: any[] = [];

        json_array.forEach(function (jsonObj) {
            const keyValue = jsonObj[key];
            if (keyValue && keyValue !== '') {
                if (key2) {
                    new_json_list[keyValue] = {};
                    new_json_list[keyValue][key2] = jsonObj;
                } else {
                    new_json_list[keyValue] = jsonObj;
                }
            } else {
                disjoint.push(jsonObj);
            }
        });

        return [new_json_list, disjoint];
    }

    /**
     * Takes an array of json objects and creates a dictionary tree from it based on the given key,
     * keeping any duplicate values it finds in an array
     *
     * See [[regroupJsonArrayByKey]] for more info
     *
     * @param {any[]} json_array An array of json objects
     * @param {string} key The key to be the root of the new json tree (must be within the json objects in the array)
     * @returns {any[]} A json tree representation of the given array
     */
    static regroupJsonArrayByKeyWithDupes(json_array: any[], key: string): any[] {
        const new_results: any = {};
        const no_key: any[] = [];

        json_array.forEach(function (json) {
            const key_value = json[key];
            if (key_value && key_value !== '') {
                if (!new_results[key_value]) {
                    new_results[key_value] = [json];
                } else {
                    new_results[key_value].push(json);
                }
            } else {
                no_key.push(json);
            }
        });

        return [new_results, no_key];
    }

    /**
     * Grabs all the data values within an array of json objects with given key
     *
     * @param {any[]} json_array The array of json objects
     * @param {string} key The key to grab from each json object
     * @returns {any[]} An array of the data values from the given key
     */
    static grabAllDataByKey(json_array: any[], key: string): any[] {
        const results: any[] = [];
        for (let i = 0; i < json_array.length; i++) {
            const result = json_array[i][key];
            if (result && result !== '') {
                results.push(result);
            }
        }
        return results;
    }

    static grabAllDataByKeyUnique(json_array: any[], key: string): any[] {
        const results = new Set();
        for (let i = 0; i < json_array.length; i++) {
            const result = json_array[i][key];
            if (result && result !== '') {
                results.add(result);
            }
        }
        return results.toArray();
    }

    /**
     * Grabs all the json objects with the given key plus value
     *
     * @param {any[]} json_array An array of json objects
     * @param {string} key The key for the value to grab
     * @param {string} value The value to look for within the json object
     * @returns {any[]} A subset of json_array containing only json objects with the given key and value
     */
    static grabAllDataWithKeyValue(json_array: any[], key: string, value: string): any[] {
        const results: any[] = [];
        for (let i = 0; i < json_array.length; i++) {
            const temp = json_array[i][key];
            if (temp === value) {
                results.push(json_array[i]);
            }
        }
        return results;
    }

    /**
     * Grabs all the json objects within an array of objects with the given keys.
     *
     * (Strict - will only grab the json object if it has all the given keys)
     *
     * @param {any[]} json_array An array of json objects
     * @param {string[]} keys The keys to grab from the json objects
     * @returns {any[]} A subset of json_array
     */
    static grabAllDataByKeysStrict(json_array: any[], keys: string[]): any[] {
        const results: any[] = [];
        for (let i = 0; i < json_array.length; i++) {
            const json: any = json_array[i];
            const reduced_json: any = {};

            keys.forEach(function (key) {
                if (key in json) {
                    reduced_json[key] = json[key];
                }
            });

            if (Object.keys(results).length === keys.length) {
                results.push(reduced_json);
            }
        }
        return results;
    }

    /**
     * Grabs all the keys from the objects within an array of json objects (no duplicates)
     *
     * @param {any[]} json_array An array of json objects
     * @returns {any[]} The keys from the json objects inside the json_array
     */
    static grabAllKeysFromArray(json_array: any[]): any[] {
        const keys: Set<any> = new Set();
        json_array.forEach(function (json) {
            arrays.addArrayToSet(keys, Object.keys(json));
        });
        return keys.toArray();
    }

    /**
     * Checks if a json object is empty
     *
     * @param json A json object
     * @returns {boolean} true if the object is empty, false otherwise
     */
    static isEmpty(json: any): boolean {
        return Object.keys(json).length === 0;
    }

    /**
     * Normalizes the keys within json objects in an array of json objects.
     *
     * Normalize = all lowercase, spaces replaced with underscores - See [[StringTools.normalizeString]]
     *
     * @param {any[]} json_array An array of json objects
     */
    static normalizeJsonArrayKeys(json_array: any[]): void {
        json_array.forEach(function (json) {
            DictionaryTools.normalizeJsonKeys(json);
        });
    }

    /**
     * Normalizes the keys within a json object
     *
     * See [[StringTools.normalizeString]]
     *
     * @param json A json object
     */
    static normalizeJsonKeys(json: any): void {
        Object.keys(json).forEach(function (key) {
            const normalized = strings.normalizeString(key);
            json[normalized] = json[key];

            if (normalized !== key) {
                delete json[key];
            }
        });
    }

    /**
     * Regularizes the keys with the json objects of an array of json objects
     *
     * Regularize = replace underscore with space, title key - See [[StringTools.regularizeString]]
     *
     * @param {any[]} json_array An array of json objects
     * @param {string[]} keys_to_skip Optional: Keys to skip when regularizing
     */
    static regularizeJsonArrayKeys(json_array: any[], keys_to_skip?: string[]): void {
        json_array.forEach(function (json) {
            DictionaryTools.regularizeJsonKeys(json, keys_to_skip);
        });
    }

    /**
     * Regularizes the keys within the given json object
     *
     * See [[StringTools.regularizeString]]
     *
     * @param json A json object
     * @param {string[]} keys_to_skip Optional: Keys to skip with the object
     */
    static regularizeJsonKeys(json: any, keys_to_skip?: string[]): void {
        Object.keys(json).forEach(function (key) {
            if (keys_to_skip && keys_to_skip.indexOf(key) > -1) {
                const regular_key = strings.regularizeString(key);
                json[regular_key] = json[key];

                if (regular_key !== key) {
                    delete json[key];
                }
            }
        });
    }

    /**
     * Takes a string array and creates a blank json object using the array data as keys
     *
     * @param {any[]} array The keys to be used in the json object
     * @returns {any} A json object
     */
    static convertStringArrayToBlankJson(array: string[]): any {
        const json: any = {};

        array.forEach(function (value) {
            json[value] = '';
        });

        return json;
    }

    /**
     * Finds the given json keys (keys_to_grab) within each json object in an array of json objects
     * (json_array) and replaces them with new key names (new_key_names)
     *
     * @param {any[]} json_array An array of json objects
     * @param {string[]} keys_to_grab The keys to replace inside the json objects
     * @param {string[]} new_key_names The new keys to be used inside the json objects
     * @returns {any[]} An array of json objects with said key replacements
     */
    static replaceAllJsonKeysList(json_array: any[], keys_to_grab: string[], new_key_names: string[]): any[] {
        json_array.forEach(function (json_item) {
            DictionaryTools.replaceJsonKeys(json_item, keys_to_grab, new_key_names);
        });

        return json_array;
    }

    public static convertBooleanKeys(json_array: any[], keys: string[]): any[] {
        json_array.forEach(json => {
            keys.forEach(key => {
                if (key in json) {
                    const datum: any = json[key];
                    json[key] = datum ? 'Yes' : '';
                }
            });
        });

        return json_array;
    }

    // Replaces the key values from the destination json with key values from the src json
    // using the dest_keys array as the keys to replace with using the src_keys array
    // to get keys from the src json item
    // If only null is set to true, will only set a value in dest if it does not exist
    public static replaceKeyValues(dest: any | any[], src: any | any[],
                                   dest_keys: string[], src_keys: string[],
                                   only_null = false, with_count = false): number | any {
        if (!dest || !src) {
            return with_count ? 0 : dest;
        }

        if (dest_keys.length !== src_keys.length) {
            throw new Error('Search keys does not equal replace. Fix and run again');
        }

        let count = 0;
        const mergeValues = (dest_json: any, src_json: any) => {
            dest_keys.forEach((dest_key, idx) => {
                const src_key = src_keys[idx];
                const datum = dest_json[dest_key];
                const replace = src_json[src_key];

                if (datum === null || datum === undefined) {
                    dest_json[dest_key] = src_json[src_key];
                    count += replace !== null && replace !== undefined ? 1 : 0;
                } else if (!only_null) {
                    dest_json[dest_key] = src_json[src_key] || dest_json[dest_key];
                    count += replace !== null && replace !== undefined ? 1 : 0;
                }
            });
            return dest_json;
        };

        if (Array.isArray(dest)) {
            const src_is_array = Array.isArray(src);
            if (src_is_array && dest.length !== src.length) {
                throw new Error('Tried to merge values from destination and source json arrays, ' +
                    'but lengths were not equal. Must be equal to merge')
            }

            dest.forEach((dest_item, idx) => mergeValues(dest_item, src_is_array ? src[idx] : src));
        } else {
            if (Array.isArray(src)) {
                throw new Error('Destination was a single json item while src was a json array. ' +
                    'Can not combine. Fix this and rer;un')
            }

            mergeValues(dest, src);
        }

        return with_count ? count : dest;
    }

    /**
     * Replaces the given keys to grab with new key names inside the given json object
     *
     * @param json The json object
     * @param {string[]} keys_to_grab The keys to replace
     * @param {string[]} new_key_names The new keys to use
     * @returns {any[]} The json object with said key replacements
     */
    static replaceJsonKeys(json: any, keys_to_grab: string[], new_key_names: string[]): any[] {
        if (keys_to_grab.length !== new_key_names.length) {
            throw 'Key array lengths do not match';
        }

        keys_to_grab.forEach(function (key: string, idx: number) {
            if (key in json) {
                const new_key = new_key_names[idx];
                json[new_key] = json[key];

                if (new_key !== key) {
                    delete json[key];
                }
            }
        });

        return json;
    }

    /**
     * Adds an object to all json objects within a given json array
     * @param {any[]} json_array The json array
     * @param json The object to add to each json item in the array
     */
    static addObjectToJsonArray(json_array: any[], json: any): any[] {
        for (let i = 0; i < json_array.length; i++) {
            json_array[i] = Object.assign({}, json_array[i], json);
        }

        return json_array;
    }

    /**
     * This will take in a json object and return all the keys from the object.
     * This does a deep search, so will include objects within objects and arrays.
     *
     * WARNING: Not fully tested...
     *
     * @param json Any json object
     * @returns {any} All the keys from the json object without the values
     */
    static mapJsonObject(json: any): any {
        const new_json: any = {};

        Object.keys(json).forEach(function (key) {
            if (Array.isArray(json[key])) {
                const array = json[key];
                const output: any[] = [];
                array.forEach(function (value: any) {
                    output.push(DictionaryTools.mapJsonObject(value));
                });
                new_json[key] = output;
            } else if (typeof json[key] == 'object') {
                new_json[key] = DictionaryTools.mapJsonObject(json[key]);
            } else {
                new_json[key] = typeof json[key];
            }
        });

        return new_json;
    }

    /**
     * This will take an array of json objects, find the map of each
     * object, and return all the maps merged.
     *
     * A json map is all the keys within a json object.
     *
     * This will do a deep search, so it will include objects within objects
     * and arrays.
     *
     * This is typically used when you have an array of json objects but are unsure
     * of the keys within those objects and need to get some insight.
     *
     * See [[mapJsonObject]]
     *
     * @param {any[]} json_array An array of json objects
     * @returns {any} The maps of all the json objects merged into one, or in
     * other words, all the keys from all the json objects within the array
     */
    static mapJsonArray(json_array: any[]): any {
        for (let i = 0; i < json_array.length; i++) {
            json_array[i] = DictionaryTools.mapJsonObject(json_array[i]);
        }

        return deepmerge.all(json_array);
    }

    static combineJsonAndModels(keys: string[], jsons?: any[], models?: Bookshelf.Model<any>[]) {
        const output: any = {};
        if (jsons) {
            jsons.forEach(json => {
                keys.forEach(key => output[key] = json[key]);
            });
        }

        if (models) {
            models.forEach(model => {
                keys.forEach(key => output[key] = output[key] || model.get(key));
            });
        }

        return output;
    }

    /**
     * Takes an array of json objects and regroups each json in the array by the
     * given grouping key and creates a new json output with the given regrouping names.
     *
     * json_arrays and regroup_names must be the same length
     *
     * Example:
     * Input:
     *
     * json_ararys: [[{id: 1, a: 1}, {id: 2, b: 3}, {id: 1, c: 4}], [{id: 1, a: 3}, {id: 2, c: 7}]] (length: 2)
     * regroup_names: ['profile_info', 'email_info']
     *
     * Output: {
     *  profile_info: {
     *     1: [
     *       {id: 1, a: 1},
     *       {id: 1, c: 4}
     *     ],
     *     2: [
     *       {id: 2, b: 3}
     *     ]
     *   },
     *
     *   email_info: {
     *     1: [
     *       {id: 1, a: 3}
     *     ],
     *
     *     2: [
     *       {id: 2, c: 7}
     *     ]
     *   }
     * }
     *
     *
     * @param {T[][]} json_arrays
     * @param {string[]} regroup_names
     * @param {string} regroup_key
     * @returns {any}
     */
    static regroupJsonArraysByKey<T extends any | Bookshelf.Model<any>>(json_arrays: T[][],
                                                                        regroup_names: string[],
                                                                        regroup_key: string): any {
        if (!json_arrays || !regroup_names || json_arrays.length !== regroup_names.length) {
            throw new Error('Json arrays size did not match regroup name size, or one or more ' +
                'variables were null. Match and run again');
        }

        const id_lookup: { [p: string]: any } = {};

        json_arrays.forEach((json_array, idx) => {
            json_array.forEach((json) => {
                const id_key = json.get(regroup_key) || json[regroup_key];
                const id_json = id_lookup[id_key] = id_lookup[id_key] || {};

                const group_key = regroup_names[idx];
                const group_array = id_json[group_key] = id_json[group_key] || [];

                group_array.push(json);
            });
        });

        return id_lookup;
    }

    public static stringifyAtRoot(json_array: any[], ignore_num = false): any[] {
        json_array.forEach(json => {
            Object.keys(json).forEach(key => {
                const datum = json[key];
                const type = typeof datum;

                if (datum === null || datum === undefined) {
                    json[key] = '';
                } else if (type !== 'string' && (ignore_num || type !== 'number')) {
                    json[key] = datum.toString();
                }
            });
        });

        return json_array;
    }

    public static stringify(json?: any, chars = Infinity): string {
        if (json) {
            return JSON.stringify(json).substring(0, chars);
        } else {
            return '';
        }
    }

    public static output(json?: any, chars = Infinity) {
        console.log(DictionaryTools.stringify(json, chars));
    }

    public static reduceJson(json: any, keys: string[]): any {

        Object.keys(json)
            .filter(key => !keys.includes(key))
            .forEach(key => delete json[key]);
        return json;
    }

    public static reduceList(json_array: any[], keys: string[]): any {
        json_array.map(json =>
            DictionaryTools.reduce(json, keys))
            .filter(json => Object.keys(json).length);
        return json_array;
    }

    public static createLookup<T extends any>(json_array: T[], lookup_key: string,
                                              value_keys: string[] = [], output: Lookup<T> = {}): Lookup<T> {
        json_array.forEach(json => {
            const value = json[lookup_key];
            if (value) {
                if (value_keys.length) {
                    if (value_keys.length === 1) {
                        output[value] = json[value_keys[0]];
                    } else {
                        output[value] = DictionaryTools.reduceJson(json, value_keys);
                    }
                } else {
                    output[value] = json;
                }
            }
        });
        return output;
    }

    public static createLookupArray(json_array: any[], lookup_key: string, value_keys: string[] = []): LookupArray {
        const lookup: LookupArray = {};
        json_array.forEach(json => {
            const key = json[lookup_key];
            const array = lookup[key] = lookup[key] || [];

            if (value_keys.length) {
                if (value_keys.length === 1) {
                    array.push(json[value_keys[0]]);
                } else {
                    array.push(DictionaryTools.reduceJson(json, value_keys));
                }
            } else {
                array.push(json);
            }
        });
        return lookup;
    }

    public static flattenAtRoot(json: any): any[] {
        return Object.keys(json).map((key) => json[key]);
    }

    public static replace(json_a: any, json_b: any, keys?: string[]) {
        if (!keys) {
            keys = Object.keys(json_b);
        }

        keys.forEach(key => {
            if (key in json_b) {
                json_a[key] = json_b[key];
            } else {
                json_a[key] = null;
            }
        });
        return json_a;
    }

    public static getAllKeys(json_array: any[]): string[] {
        let keys = new Set<string>();
        json_array.forEach(json => {
            Object.keys(json).forEach(key => keys.add(key))
        });
        return keys.toArray();
    }

    public static getJsonStats(json_array: any[], add_json_string = false,
                               output: JSONStats = {}): JSONStats {
        const stats = DictionaryTools.statCheckHelper(json_array);

        if (add_json_string) {
            let max = 0;
            json_array.forEach(json =>
                max = Math.max(JSON.stringify(json).length, max));

            stats['raw_data'] = {
                types: {string: json_array.length}, sizes: {string: max}
            };
        }

        const stat_keys = Object.keys(stats);
        stat_keys.forEach(key => {
            const stat = stats[key];
            const new_stat = DictionaryTools.getVariableStat(stat);
            let inner_stat: { inner_type?: JSONStatType, inner_size?: number } = {};
            let object_types: { object_types?: JSONStats } = {};

            if (stat.object_types) {
                object_types.object_types = stat.object_types;
            }

            if (stat.inner_types) {
                const temp = DictionaryTools.getVariableStat({
                    types: stat.inner_types,
                    sizes: stat.inner_sizes
                });

                if (temp) {
                    inner_stat.inner_type = temp.type;
                    inner_stat.inner_size = temp.size;
                }
            }

            if (new_stat) {
                output[key] = Object.assign(new_stat, inner_stat, object_types);
            }
        });

        return output;
    }

    public static getVariableStats(datum: any): JSONStatCheck {
        let size = -1;
        if (typeof datum === 'string') {
            // Check if type is actually integer or float
            const temp = datum.includes('.') ?
                parseFloat(datum) : parseInt(datum);
            if (!isNaN(temp)) {
                datum = temp;
                size = Math.abs(datum);
            }
        }

        // TODO: Check dates, arrays, objects...
        const datum_type = typeof datum;
        const ignore = ['symbol', 'function', 'undefined'];
        if (ignore.includes(datum_type)) {
            return;
        }

        let type: ObjectType = <ObjectType> datum_type;
        let inner_stats: { inner_types?: JSONTypeLookup, inner_sizes?: JSONTypeLookup } = {};
        if (type === 'string') {
            size = datum.length;

            // Check if stat is actually boolean
            const temp = datum.toLowerCase().trim;
            if (temp === 'true' || temp === 'false') {
                type = 'boolean';
                size = 4;
            }
        } else if (type === 'number') {
            size = datum;
        } else if (Array.isArray(datum)) {
            type = 'array';
            size = JSON.stringify(datum).length;

            const stats = arrays.getStats(datum);
            inner_stats.inner_types = stats.types;
            inner_stats.inner_sizes = stats.sizes;
        } else if (type === 'object') {
            type = 'object';
            size = JSON.stringify(datum).length;
        }

        return Object.assign({type, size}, inner_stats);
    }

    public static removeKeys(json: any, keys: string[]) {
        keys.forEach(key => delete json[key]);
        return json;
    }

    public static mergeWhereEmpty(dest: any, src: any) {
        Object.keys(src).forEach(key => {
            if (dest[key] === null || dest[key] === undefined) {
                dest[key] = src[key];
            }
        });

        return dest;
    }

    public static override(json_a: any, json_b: any, keys?: string[]) {
        keys = keys || Object.keys(json_b);
        keys.forEach(key => {
            json_a[key] = json_b[key];
        });
        return json_a;
    }

    public static removeKeysArray(json_array: any[], keys: string[]) {
        json_array.forEach(json => DictionaryTools.removeKeys(json, keys));
        return json_array;
    }

    public static countKeysWithValues(json: any): number {
        let count = 0;
        Object.keys(json).forEach(key => {
            const check = json[key];
            count += check === null || check === undefined ? 0 : 1;
        });
        return count;
    }

    public static removeWhereNulls<T extends any>(jsons: T[], all_empty_values = false): T[] {
        return jsons.map(json => DictionaryTools.removeWhereNull(json, all_empty_values));
    }

    public static checkIfNull(json: any, keys: string[]): boolean {
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            const datum = json[key];
            if (datum === null || datum === undefined) {
                return true;
            }
        }
    }

    public static removeWhereKeysNull<T extends any>(jsons: T[], keys: string[]): T[] {
        const removeFunc = (json: T) => this.checkIfNull(json, keys);
        return arrays.removeInner(jsons, removeFunc);
    }

    public static removeWhereNull<T extends any>(json: T, all_empty_values = false): T {
        const keys = Object.keys(json);
        keys.forEach(key => {
            const datum = json[key];
            if (!all_empty_values && (datum === null || datum === undefined)) {
                delete json[key];
            } else if (all_empty_values && !datum) {
                delete json[key];
            }
        });
        return json;
    }

    public static convertStatsToInterface(stats: JSONStats, name = 'Impl'): string {
        let output = DictionaryTools.convertStatsToInterfaceHelper(stats, name).reverse();
        output = [output[0]].concat(output.slice(1).sort());
        return output.join('\n') + '\n';
    }

    private static convertStatsToInterfaceHelper(stats: JSONStats, name: string, outputs: string[] = []): string[] {
        const tab = '    ';
        const convertType = (type: string): string => {
            switch (type) {
                case 'int':
                    return 'number';
                case 'double':
                    return 'number';
            }

            return type;
        };

        let output = 'interface ' + name + ' {\n';
        Object.keys(stats).forEach(key => {
            const json = stats[key];
            let type: string = json.type;

            if (type === 'object') {
                //TODO: Move space removal to string tools
                type = strings.regularizeString(key).replace(/ /g, '') + 'Res';
                DictionaryTools.convertStatsToInterfaceHelper(json.object_types, type, outputs);
            } else {
                if (type === 'array') {
                    if (json.inner_type === 'object') {
                        type = strings.regularizeString(key).replace(/ /g, '') + 'Res';
                        DictionaryTools.convertStatsToInterfaceHelper(json.object_types, type, outputs);
                        type += '[]';
                    } else {
                        type = convertType(json.inner_type) + '[]';
                    }
                } else if (type === 'undefined') {
                    type = 'any';
                } else {
                    type = convertType(type);
                }
            }

            if (!key.charAt(0).match(/[a-z]/i)) {
                key = '"' + key + '"';
            }

            output += vsprintf('%s%s: %s;\n', [tab, key, type]);
        });

        output += '}\n';
        outputs.push(output);
        return outputs;
    }

    private static getVariableStat(stats: JSONStatChecks): JSONStat {
        const size_json = stats.sizes;
        const type_json = stats.types;

        const types = Object.keys(type_json);
        let guessed_type = '';
        if (types.length === 0) {
            return null;
        } else if (types.length === 1) {
            guessed_type = types[0];
        } else {
            let maxType = '';
            let max = -1;
            // Searching for type by count from array
            // Looking for type that most appeared in key
            types.forEach(type => {
                if (type_json[type] > max) {
                    maxType = type;
                    max = type_json[type];
                }
            });

            guessed_type = maxType;
        }

        const new_stat: JSONStat = {type: null, size: 0};
        new_stat.size = size_json[guessed_type];

        if (guessed_type === 'number') {
            const max_num = new_stat.size;
            if (max_num % 1 === 0) {
                new_stat.type = 'int';
            } else {
                new_stat.type = 'double';
            }
        } else {
            new_stat.type = <JSONStatType> guessed_type;
        }

        return new_stat;
    }

    private static statCheckHelper(json_array: any[]): JSONStatsCheck {
        const stats: JSONStatsCheck = {};
        const to_check: { [p: string]: any[] } = {};

        json_array.forEach(json => {
            Object.keys(json).forEach(key => {
                const stat = stats[key] = stats[key] || {types: {}, sizes: {}};
                let datum = json[key];

                if (datum) {
                    const new_stat = DictionaryTools.getVariableStats(datum);

                    // Add to possible stats for output
                    const current_size = stat.sizes[new_stat.type] || 0;

                    stat.sizes[new_stat.type] = current_size > new_stat.size ?
                        current_size : new_stat.size;
                    stat.types[new_stat.type] = (stat.types[new_stat.type] || 0) + 1;

                    if (new_stat.type === 'object') {
                        const array = to_check[key] = to_check[key] || [];
                        array.push(datum);
                    }

                    const inner_types = new_stat.inner_types;
                    if (inner_types) {
                        const inner_sizes = new_stat.inner_sizes;

                        const current_types = stat.inner_types = stat.inner_types || {};
                        const current_sizes = stat.inner_sizes = stat.inner_sizes || {};

                        Object.keys(inner_types).forEach(inner_key => {
                            if (inner_key === 'object') {
                                to_check[key] = (to_check[key] || []).concat(datum);
                            }
                            current_types[inner_key] = (current_types[inner_key] || 0) + inner_types[inner_key];
                        });

                        Object.keys(inner_sizes).forEach(key => {
                            const current_size = current_sizes[key] || 0;
                            const size = inner_sizes[key];
                            current_sizes[key] = size > current_size ? size : current_size;
                        });
                    }
                } else {
                    if (!Object.keys(stat.types).length) {
                        stat.types['string'] = 1;
                        stat.sizes['string'] = 1;
                    }
                }
            });
        });

        Object.keys(to_check).forEach(key => {
            stats[key].object_types = DictionaryTools.getJsonStats(to_check[key]);
        });

        return stats;
    }

    private static mergeJSONStats(stat_a: JSONStats, stat_b: JSONStats) {
        Object.keys(stat_a).forEach(key => {
            const compare = stat_b[key];
            if (compare) {

            }
        });

        Object.keys(stat_b).forEach(key => {
            stat_a[key] = stat_a[key] || stat_b[key];
        });
    }
}

export interface JSONStatCheck {
    type: ObjectType;
    size: number;
    inner_types?: JSONTypeLookup;
    inner_sizes?: JSONTypeLookup;
    object_types?: JSONStats;
}

export interface JSONStatsCheck {
    [key: string]: JSONStatChecks;
}

export type ObjectType = 'string' | 'array' | 'object' | 'number' | 'boolean';

export interface JSONTypeLookup {
    string?: number;
    array?: number;
    object?: number;
    number?: number;
    boolean?: number;

    [type: string]: number;
}

export interface JSONStatChecks {
    types: JSONTypeLookup;
    sizes: JSONTypeLookup;
    inner_types?: JSONTypeLookup;
    inner_sizes?: JSONTypeLookup;
    object_types?: JSONStats;
}

export interface JSONStats {
    [key: string]: JSONStat;
}

export interface JSONStat {
    type: JSONStatType;
    size: number;
    inner_type?: JSONStatType;
    inner_size?: number;
    object_types?: JSONStats;
}

export type JSONStatType = 'int' | 'double' | 'string' | 'boolean' | 'date' | 'object' | 'array';

export interface LookupArray extends Lookup<any[]> {
}

export interface Lookup<T> {
    [lookup_key: string]: T;
}

export {DictionaryTools as jsons};
