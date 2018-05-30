"use strict";

import {minify} from "html-minifier";
import * as sanitize from "sanitize-html";
import * as striptags from "striptags";
import {AllHtmlEntities} from "html-entities";
import * as levenshtein from "liblevenshtein";
import * as https from "https";

const entities = new AllHtmlEntities();

/**
 * General functions for javascript
 */

class Utilities {
    public static stringify = (datum: any) => JSON.stringify(datum);

    public static output(output: any, substring?: number) {
        console.log(this.stringify(output).substring(0, substring || Infinity));
    }

    /**
     * Calculates the difference in years, months, and days between two given dates
     *
     * @param {Date} date1 The first date
     * @param {Date} date2 The second date
     * @returns {{days: number; months: number; years: number}} A json object containing
     * key values days, months, and years - ie the difference between the two dates
     */
    static calcDate(date1: Date, date2: Date): { days: number, months: number, years: number } {
        const diff: number = Math.floor(date1.getTime() - date2.getTime());
        const day: number = 1000 * 60 * 60 * 24;

        const days: number = Math.floor(diff / day);
        const months: number = Math.floor(days / 31);
        const years: number = Math.floor(months / 12);

        return {days: days, months: months, years: years};
    }

    /**
     * Mostly used for debugging/testing. Runs a promise and logs the result or error
     * @param {Promise<any>} promise A promise to be run
     */
    static logPromise(promise: Promise<any>) {
        promise.then(function (result) {
            console.log(result);
        })
            .catch(function (err) {
                console.log(err);
            })
    }

    public static removeHTMLTags(html: string) {
        const min_props = {
            removeComments: true,
            removeEmptyAttributes: true,
            removeEmptyElements: true,
            removeOptionalTags: true,
            removeTagWhitespace: true,
            decodeEntities: true,
            minifyCSS: true,
            minifyJS: true
        };

        const san_props = {
            allowedAttributes: {},
            allowedClasses: {},
            allowedStyles: {}
        };

        try {
            html = minify(html, min_props);
            html = sanitize(html, san_props);
        } catch (ex) {
            html = striptags(html);
            try {
                html = minify(html, min_props);
                html = sanitize(html, san_props);
            } catch (ex) {
            }
        }

        html = entities.decode(html);
        // TODO: Replace with strings.onlyAsscii
        html = striptags(html).replace(/[^\x00-\x7F]/g, "");
        // html = strings.onlyAscii(striptags(html));
        html = html.replace(/^(?=\n)$|^\s*|\s*$|\n\n+/gm,
            '');

        return html;
    }

    public static delay(milliseconds: number): Promise<void> {
        return new Promise(function (resolve) {
            setTimeout(() => resolve(), milliseconds);
        });
    }

    public static runScript(promise: Promise<any>, exit_after = false, message_text = 'Script finished') {
        promise.then(() => !console.log(message_text) && exit_after ? process.exit(0) : 0)
            .catch(console.log);
    }

    public static createLevCompare(compare_array: string[]) {
        const builder = new levenshtein.Builder()
            .dictionary(compare_array, false)           // generate spelling candidates from unsorted completion_list
            .algorithm("transposition")                 // use Levenshtein distance extended with transposition
            .sort_candidates(true)                 // sort the spelling candidates before returning them
            .case_insensitive_sort(true)           // ignore character-casing while sorting terms
            .include_distance(true)             // just return the ordered terms (drop the distances)
            .maximum_candidates(10);

        return builder.build();
    }

    public static httpsRequest<T extends any>(props: string | https.RequestOptions): Promise<T> {
        let body = '';

        return new Promise((res, rej) => {
            https.get(props, response => {

                response.on('data', (data: string) =>
                    body += new Buffer(data).toString());

                response.on('end', () => {
                    try {
                        return res(JSON.parse(body));
                    } catch (ex) {
                        return rej(ex);
                    }
                });

                response.on('error', rej);
            });
        });
    }
}

export {Utilities as utils};