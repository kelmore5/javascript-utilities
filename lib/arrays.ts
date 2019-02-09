'use strict';
import {Set} from 'typescript-collections';
import {jsons, JSONStatChecks} from './dictionaries';

/**
 * Utility functions for javascript arrays
 */

class ArrayTools {
    /**
     * Adds an array to a set
     *
     * @param set The set to receive array
     * @param array The array to be added
     */
    public static addArrayToSet(set: Set<any>, array: any[]): void {
        array.forEach(set.add, set);
    }

    // noinspection JSUnusedGlobalSymbols
    public static chunkArray<T>(array: T[], step: number): Array<T[]> {
        const chunks = [];
        for (let i = 0; i < array.length; i += step) {
            chunks.push(array.slice(i, i + step));
        }
        return chunks;
    }

    // noinspection JSUnusedGlobalSymbols
    public static containsAll<T extends any>(query: T[], comparator: T[]): boolean {
        let contains_all: boolean = true;

        for (let i = 0; i < query.length; i++) {
            const q = query[i];
            contains_all = contains_all && comparator.includes(q);

            if (!contains_all) {
                break;
            }
        }

        return contains_all;
    }

    public static containsAny<T extends any>(query: T[], comparator: T[]): boolean {
        for (let i = 0; i < query.length; i++) {
            if (comparator.includes(query[i])) {
                return true;
            }
        }

        return false;
    }

    // noinspection JSUnusedGlobalSymbols
    /**
     * Creates the cross of two arrays
     *
     * @param {T[]} array1
     * @param {T[]} array2
     * @returns {T[]} Returns the cross between array1 and array2
     */
    public static crossArray<T>(array1: T[], array2: T[]): T[] {
        const cross: T[] = [];
        array1.forEach(function (data) {
            if (array2.indexOf(data) > -1) {
                cross.push(data);
            }
        });
        return cross;
    }

    // noinspection JSUnusedGlobalSymbols
    public static filterNull<T extends any>(array: T[]): T[] {
        return array.filter(item => !!item);
    }

    public static getStats(array: any[]): JSONStatChecks {
        const stats: JSONStatChecks = {types: {}, sizes: {}};

        array.forEach(datum => {
            if (datum) {
                const new_stat = jsons.getVariableStats(datum);

                // Add to possible stats for output
                const current_size = stats.sizes[new_stat.type] || 0;
                stats.sizes[new_stat.type] = current_size > new_stat.size ?
                    current_size : new_stat.size;
                stats.types[new_stat.type] = (stats.types[new_stat.type] || 0) + 1;
            }
        });

        return stats;
    }

    // noinspection JSUnusedGlobalSymbols
    public static getUniqueValueIndexes<T extends any>(array: T[]): number[][] {
        const checked = new Set<T>();
        const equal_indexes: number[][] = [];
        for (let i = 0; i < array.length; i++) {
            const a = array[i];
            if (!checked.contains(a)) {
                const new_equal_indexes: number[] = [i];
                for (let j = i + 1; j < array.length; j++) {
                    const b = array[j];
                    if (a === b) {
                        new_equal_indexes.push(j);
                    }
                }

                equal_indexes.push(new_equal_indexes);
                checked.add(a);
            }
        }

        return equal_indexes;
    }

    // noinspection JSUnusedGlobalSymbols
    public static mergeBooleans(array: Array<boolean>): boolean {
        for (const bool of array) {
            if (!bool) {
                return false;
            }
        }

        return true;
    }

    // noinspection JSUnusedGlobalSymbols
    public static mergeInner<T extends any>(dest: T[], src: T[]): T[] {
        src.forEach(item => dest.push(item));
        return dest;
    }

    public static removeInner<T extends any>(array: T[],
                                             checkFunction: RemoveFunction<T>) {
        const to_remove: any[] = array.map(checkFunction)
            .map((item, idx) => item ? idx : -1)
            .filter(num => num >= 0);

        let count = 0;
        to_remove.forEach((idx: number) => {
            array.splice(idx - count++, 1);
        });

        return array;
    }

    // noinspection JSUnusedGlobalSymbols
    public static sortDates(a: Date, b: Date) {
        if (!a && !b) {
            return 0;
        } else if (!a) {
            return -1;
        } else if (!b) {
            return 1;
        }
        return a.getTime() - b.getTime();
    }

    // noinspection JSUnusedGlobalSymbols
    public static transformToArray<T extends any>(obj: Array<T> | T): Array<T> {
        if (!Array.isArray(obj)) {
            return [obj];
        }

        return obj;
    }

    public static unique(array: Array<string | number>): any[] {
        const temp = new Set();
        array.forEach(item => temp.add(item));
        return temp.toArray();
    }
}

export declare type RemoveFunction<T extends any> = (result: T, idx?: number) => boolean;

export {ArrayTools as arrays};
