'use strict';
import * as similar from 'string-similarity';
import {Set} from 'typescript-collections';
import {arrays} from './arrays';
import {Lookup} from './dictionaries';
import {maths} from './maths';
import {utils} from './utilities';

/**
 * Javascript functions for strings
 */

class StringTools {

    /**
     * Changes a string to proper case (aka Titles all string values between spaces)
     *
     * @param {string} string A string (probably in lowercase)
     * @returns {string} The string with propered case
     */
    static toProperCase(string: string): string {
        return string.replace(/\w\S*/g, function (txt: string) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }

    /**
     * Primarily used for creating search keys. Takes a string and normalizes it, where
     * normalize means changing the string to lower case, replacing all spaces with underscores,
     * and removing any trailing whitespace
     *
     * @param {string} string The string to normalize
     * @returns {string} The normalized string
     */
    static normalizeString(string: string): string {
        return string.trim().toLowerCase().replace(/ /g, '_')
            .replace(/\W/g, '');
    }

    /**
     * Normalizes all the strings within a string array
     *
     * See [[normalizeString]]
     *
     * @param {string[]} array An array of strings
     */
    static normalizeArrayInner(array: string[]): void {
        for (let i = 0; i < array.length; i++) {
            array[i] = this.normalizeString(array[i]);
        }
    }

    public static random(length: number = 20): string {
        let output: string = '';
        while (output.length < length) {
            const uppercase: boolean = utils.randomBoolean();
            const random_char: string = String.fromCharCode(maths.randomInteger(65, 90));

            output += uppercase ? random_char : random_char.toLowerCase();
        }

        return output;
    }

    /**
     * Primarily used to de-normalize a string. Regularizes a string, where
     * regularize means replacing all the underscores with spaces and changing
     * the string to propercase
     *
     * See [[normalizeString]] and [[toProperCase]]
     *
     * @param {string} string The string to regularize
     * @returns {string} The regularized string
     */
    static regularizeString(string: string): string {
        const replace_lower = [
            'At', 'Of', 'Or', 'And', 'To', 'For', 'On', 'In', 'By'
        ];

        const replace_upper = [
            'Url', 'Vp', 'Ceo', 'Usa', 'Id', 'Usa', 'Mfg', 'Mfg.', 'Svc', 'Tv', 'Dna', 'Nyc'
        ];

        const replacements: Lookup<string> = {
            'Linkedin': 'LinkedIn',
            'Url': 'URL'
        };

        string = StringTools.toProperCase(string.replace(/_/g, ' '));

        // TODO: Move to function
        replace_lower.forEach(str => {
            const lower = str.toLowerCase();
            string = string.replace(new RegExp(str + ' ', 'g'), lower + ' ');
        });

        replace_upper.forEach(str => {
            const lower = str.toUpperCase();
            string = string.replace(new RegExp(' ' + str, 'g'), ' ' + lower);
            string = string.replace(new RegExp(str + ' ', 'g'), lower + ' ');
        });

        Object.keys(replacements).forEach(key => {
            string = string.replace(new RegExp(' ' + key, 'g'), ' ' + replacements[key]);
            string = string.replace(new RegExp(key + ' ', 'g'), replacements[key] + ' ');
        });

        return string;
    }

    /**
     * Regularizes all the strings within an array
     *
     * See [[regularizeString]]
     *
     * @param {string[]} array An array of strings
     */
    static regularizeStringArray(array: string[]): string[] {
        for (let i = 0; i < array.length; i++) {
            array[i] = this.regularizeString(array[i]);
        }
        return array;
    }

    /**
     * Removes all the non-ascii characters from a string
     * and returns the string
     *
     * Usually used before adding string values to a database,
     * since non-ascii values can cause crashes...
     *
     * @param {string} string The string to remove the ascii characters from
     * @returns {string} The string with only ascii characters
     */
    static onlyAscii(string: string): string {
        return string.replace(/[^\x00-\x7F]/g, '');
    }

    public static replaceAll(datum: string, search: Array<RegExp | string>,
                             replace: Array<string | null>): string {
        if (search.length !== replace.length) {
            throw new Error('Array lengths for search and replace were not equal, can' +
                ' not make replacements');
        } else {
            search.forEach((search, idx) => {
                const replacement = replace[idx];
                replacement != null ? datum = datum.replace(search, replacement) : 0;
            });

            return datum;
        }
    }

    public static findMatch(search_key: string, lookup: string[]): string | StringMatchScore[] {
        const normalized = StringTools.normalizeString(search_key);
        const normalized_lookup = lookup.map(StringTools.normalizeString);

        let scores: StringMatchScore[] = [];

        for (let i = 0; i < normalized_lookup.length; i++) {
            const test = normalized_lookup[i];
            const lookup_key = lookup[i];

            if (test === normalized) {
                return lookup_key;
            } else {
                const score = similar.compareTwoStrings(search_key, normalized);
                scores.push({search_key, lookup_key, score});
            }
        }

        scores.sort((a: any, b: any) => a.score - b.score).reverse();
        return scores;
    }

    public static matchStrings(array_a: string[], array_b: string[]): SimilarityScoreResponse {
        const normal_array_a = array_a.map(StringTools.normalizeString);
        const normal_array_b = array_b.map(StringTools.normalizeString);

        const output: SimilarityScoreResponse = {
            matched: [], scored: [], no_match: []
        };

        const matched_keys = new Set<string>();
        normal_array_a.forEach((normal_a, idx) => {
            normal_array_b.forEach((normal_b, jdx) => {
                if (normal_a === normal_b) {
                    const key_a = array_a[idx];
                    const key_b = array_b[jdx];

                    matched_keys.add(key_a);
                    output.matched.push({key_a, key_b, score: 1});
                }
            });
        });

        normal_array_a.forEach((normal_a, idx) => {
            normal_array_b.forEach((normal_b, jdx) => {
                const key_a = array_a[idx];
                const key_b = array_b[jdx];

                if (!matched_keys.contains(key_a)) {
                    const score = similar.compareTwoStrings(normal_a, normal_b);
                    if (score > 0.5) {
                        output.scored.push({key_a, key_b, score});
                    }
                }
            });
        });

        output.scored.sort((a, b) => a.score - b.score).reverse();

        const scored = arrays.unique(output.scored.map(score => score.key_a));
        const no_match = array_a.filter(key =>
            !scored.includes(key) && !matched_keys.contains(key));

        output.no_match = no_match.map(key_a => {
            return {key_a, score: 0};
        });

        return output;
    }
}

export interface SimilarityScoreResponse {
    matched: SimilarityScore[];
    scored: SimilarityScore[];
    no_match: SimilarityScore[];
}

export interface SimilarityScore {
    key_a?: string;
    key_b?: string;
    score?: number;
}

interface StringMatchScore {
    search_key: string;
    lookup_key: string;
    score: number;
}

export {StringMatchScore, StringTools as strings};
