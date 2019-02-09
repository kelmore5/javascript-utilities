'use strict';

type PromiseErrorCallback = (err: any) => any;
type NullErrorCallback = (err: any) => null;

/**
 * General functions for javascript
 */

class Utilities {
    public static stringify = (datum: any) => JSON.stringify(datum);

    // noinspection JSUnusedGlobalSymbols
    /**
     * Calculates the difference in years, months, and days between two given dates
     *
     * @param {Date} date1 The first date
     * @param {Date} date2 The second date
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

    public static delay(milliseconds: number): Promise<void> {
        return new Promise(function (resolve) {
            setTimeout(() => resolve(), milliseconds);
        });
    }

    public static errorCallback(callback: PromiseErrorCallback): NullErrorCallback {
        return (err: any) => {
            callback(err);
            return null;
        };
    }

    // noinspection JSUnusedGlobalSymbols
    /**
     * Mostly used for debugging/testing. Runs a promise and logs the result or error
     * @param {Promise<any>} promise A promise to be run
     */
    public static logPromise(promise: Promise<any>): void {
        promise.then(function (result) {
            console.log(result);
        })
            .catch(function (err) {
                console.log(err);
            });
    }

    public static output(output: any, substring?: number): void {
        console.log(this.stringify(output).substring(0, substring || Infinity));
    }

    public static randomBoolean(): boolean {
        return Math.random() >= 0.5;
    }

    // noinspection JSUnusedGlobalSymbols
    public static runScript(promise: Promise<any>, exit_after = false, message_text = 'Script finished'): Promise<void> {
        return promise.then(() => {
            console.log(message_text);
            if (exit_after) {
                process.exit(0);
            }

        }).catch(console.log);
    }
}

export {PromiseErrorCallback, NullErrorCallback, Utilities as utils};
