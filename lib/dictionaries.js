"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require("./");
var typescript_collections_1 = require("typescript-collections");
/**
 * Tools for javascript dictionary objects
 */
var DictionaryTools = (function () {
    function DictionaryTools() {
    }
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
    DictionaryTools.regroupJsonArrayByKey = function (json_array, key, key2) {
        var new_json_list = {};
        var disjoint = [];
        json_array.forEach(function (jsonObj) {
            var keyValue = jsonObj[key];
            if (keyValue && keyValue !== '') {
                if (key2) {
                    new_json_list[keyValue] = {};
                    new_json_list[keyValue][key2] = jsonObj;
                }
                else {
                    new_json_list[keyValue] = jsonObj;
                }
            }
            else {
                disjoint.push(jsonObj);
            }
        });
        return [new_json_list, disjoint];
    };
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
    DictionaryTools.regroupJsonArrayByKeyWithDupes = function (json_array, key) {
        var new_results = {};
        var no_key = [];
        json_array.forEach(function (json) {
            var key_value = json[key];
            if (key_value && key_value !== '') {
                if (!new_results[key_value]) {
                    new_results[key_value] = [json];
                }
                else {
                    new_results[key_value].push(json);
                }
            }
            else {
                no_key.push(json);
            }
        });
        return [new_results, no_key];
    };
    /**
     * Grabs all the data values within an array of json objects with given key
     *
     * @param {any[]} json_array The array of json objects
     * @param {string} key The key to grab from each json object
     * @returns {any[]} An array of the data values from the given key
     */
    DictionaryTools.grabAllDataByKey = function (json_array, key) {
        var results = [];
        for (var i = 0; i < json_array.length; i++) {
            var result = json_array[i][key];
            if (result && result !== '') {
                results.push(result);
            }
        }
        return results;
    };
    /**
     * Grabs all the json objects with the given key plus value
     *
     * @param {any[]} json_array An array of json objects
     * @param {string} key The key for the value to grab
     * @param {string} value The value to look for within the json object
     * @returns {any[]} A subset of json_array containing only json objects with the given key and value
     */
    DictionaryTools.grabAllDataWithKeyValue = function (json_array, key, value) {
        var results = [];
        for (var i = 0; i < json_array.length; i++) {
            var temp = json_array[i][key];
            if (temp === value) {
                results.push(json_array[i]);
            }
        }
        return results;
    };
    /**
     * Grabs all the json objects within an array of objects with the given keys.
     *
     * (Strict - will only grab the json object if it has all the given keys)
     *
     * @param {any[]} json_array An array of json objects
     * @param {string[]} keys The keys to grab from the json objects
     * @returns {any[]} A subset of json_array
     */
    DictionaryTools.grabAllDataByKeysStrict = function (json_array, keys) {
        var results = [];
        var _loop_1 = function (i) {
            var json = json_array[i];
            var reduced_json = {};
            keys.forEach(function (key) {
                if (key in json) {
                    reduced_json[key] = json[key];
                }
            });
            if (Object.keys(results).length === keys.length) {
                results.push(reduced_json);
            }
        };
        for (var i = 0; i < json_array.length; i++) {
            _loop_1(i);
        }
        return results;
    };
    /**
     * Grabs all the keys from the objects within an array of json objects (no duplicates)
     *
     * @param {any[]} json_array An array of json objects
     * @returns {any[]} The keys from the json objects inside the json_array
     */
    DictionaryTools.grabAllKeysFromArray = function (json_array) {
        var keys = new typescript_collections_1.Set();
        json_array.forEach(function (json) {
            _1.arrays.addArrayToSet(keys, Object.keys(json));
        });
        return keys.toArray();
    };
    /**
     * Checks if a json object is empty
     *
     * @param json A json object
     * @returns {boolean} true if the object is empty, false otherwise
     */
    DictionaryTools.isEmpty = function (json) {
        return Object.keys(json).length === 0;
    };
    /**
     * Normalizes the keys within json objects in an array of json objects.
     *
     * Normalize = all lowercase, spaces replaced with underscores - See [[StringTools.normalizeString]]
     *
     * @param {any[]} json_array An array of json objects
     */
    DictionaryTools.normalizeJsonArrayKeys = function (json_array) {
        json_array.forEach(function (json) {
            DictionaryTools.normalizeJsonKeys(json);
        });
    };
    /**
     * Normalizes the keys within a json object
     *
     * See [[StringTools.normalizeString]]
     *
     * @param json A json object
     */
    DictionaryTools.normalizeJsonKeys = function (json) {
        Object.keys(json).forEach(function (key) {
            var normalized = _1.strings.normalizeString(key);
            json[normalized] = json[key];
            if (normalized !== key) {
                delete json[key];
            }
        });
    };
    /**
     * Regularizes the keys with the json objects of an array of json objects
     *
     * Regularize = replace underscore with space, title key - See [[StringTools.regularizeString]]
     *
     * @param {any[]} json_array An array of json objects
     * @param {string[]} keys_to_skip Optional: Keys to skip when regularizing
     */
    DictionaryTools.regularizeJsonArrayKeys = function (json_array, keys_to_skip) {
        json_array.forEach(function (json) {
            DictionaryTools.regularizeJsonKeys(json, keys_to_skip);
        });
    };
    /**
     * Regularizes the keys within the given json object
     *
     * See [[StringTools.regularizeString]]
     *
     * @param json A json object
     * @param {string[]} keys_to_skip Optional: Keys to skip with the object
     */
    DictionaryTools.regularizeJsonKeys = function (json, keys_to_skip) {
        Object.keys(json).forEach(function (key) {
            if (keys_to_skip && keys_to_skip.indexOf(key) > -1) {
                var regular_key = _1.strings.regularizeString(key);
                json[regular_key] = json[key];
                if (regular_key !== key) {
                    delete json[key];
                }
            }
        });
    };
    /**
     * Takes a string array and creates a blank json object using the array data as keys
     *
     * @param {any[]} array The keys to be used in the json object
     * @returns {any} A json object
     */
    DictionaryTools.convertStringArrayToBlankJson = function (array) {
        var json = {};
        array.forEach(function (value) {
            json[value] = '';
        });
        return json;
    };
    /**
     * Finds the given json keys (keys_to_grab) within each json object in an array of json objects
     * (json_array) and replaces them with new key names (new_key_names)
     *
     * @param {any[]} json_array An array of json objects
     * @param {string[]} keys_to_grab The keys to replace inside the json objects
     * @param {string[]} new_key_names The new keys to be used inside the json objects
     * @returns {any[]} An array of json objects with said key replacements
     */
    DictionaryTools.replaceAllJsonKeysList = function (json_array, keys_to_grab, new_key_names) {
        json_array.forEach(function (json_item) {
            DictionaryTools.replaceJsonKeys(json_item, keys_to_grab, new_key_names);
        });
        return json_array;
    };
    /**
     * Replaces the given keys to grab with new key names inside the given json object
     *
     * @param json The json object
     * @param {string[]} keys_to_grab The keys to replace
     * @param {string[]} new_key_names The new keys to use
     * @returns {any[]} The json object with said key replacements
     */
    DictionaryTools.replaceJsonKeys = function (json, keys_to_grab, new_key_names) {
        if (keys_to_grab.length !== new_key_names.length) {
            throw 'Key array lengths do not match';
        }
        keys_to_grab.forEach(function (key, idx) {
            if (key in json) {
                json[new_key_names[idx]] = json[key];
                if (new_key_names[idx] !== json[key]) {
                    delete json[key];
                }
            }
        });
        return json;
    };
    /**
     * Adds an object to all json objects within a given json array
     * @param {any[]} json_array The json array
     * @param json The object to add to each json item in the array
     */
    DictionaryTools.addObjectToJsonArray = function (json_array, json) {
        for (var i = 0; i < json_array.length; i++) {
            json_array[i] = Object.assign({}, json_array[i], json);
        }
        return json_array;
    };
    return DictionaryTools;
}());
exports.jsons = DictionaryTools;
