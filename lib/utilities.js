"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * General functions for javascript
 */
var Utilities = (function () {
    function Utilities() {
    }
    /**
     * Calculates the difference in years, months, and days between two given dates
     *
     * @param {Date} date1 The first date
     * @param {Date} date2 The second date
     * @returns {{days: number; months: number; years: number}} A json object containing
     * key values days, months, and years - ie the difference between the two dates
     */
    Utilities.calcDate = function (date1, date2) {
        var diff = Math.floor(date1.getTime() - date2.getTime());
        var day = 1000 * 60 * 60 * 24;
        var days = Math.floor(diff / day);
        var months = Math.floor(days / 31);
        var years = Math.floor(months / 12);
        return { days: days, months: months, years: years };
    };
    return Utilities;
}());
exports.utils = Utilities;
