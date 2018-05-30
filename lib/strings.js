"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Javascript functions for strings
 */
var StringTools = (function () {
    function StringTools() {
    }
    /**
     * Changes a string to proper case (aka Titles all string values between spaces)
     *
     * @param {string} string A string (probably in lowercase)
     * @returns {string} The string with propered case
     */
    StringTools.toProperCase = function (string) {
        return string.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    };
    /**
     * Primarily used for creating search keys. Takes a string and normalizes it, where
     * normalize means changing the string to lower case, replacing all spaces with underscores,
     * and removing any trailing whitespace
     *
     * @param {string} string The string to normalize
     * @returns {string} The normalized string
     */
    StringTools.normalizeString = function (string) {
        return string.trim().toLowerCase().replace(/ /g, '_')
            .replace(/\W/g, '');
    };
    /**
     * Normalizes all the strings within a string array
     *
     * See [[normalizeString]]
     *
     * @param {string[]} array An array of strings
     */
    StringTools.normalizeStringArray = function (array) {
        for (var i = 0; i < array.length; i++) {
            array[i] = this.normalizeString(array[i]);
        }
    };
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
    StringTools.regularizeString = function (string) {
        return StringTools.toProperCase(string.replace(/_/g, ' '));
    };
    /**
     * Regularizes all the strings within an array
     *
     * See [[regularizeString]]
     *
     * @param {string[]} array An array of strings
     */
    StringTools.regularizeStringArray = function (array) {
        for (var i = 0; i < array.length; i++) {
            array[i] = this.regularizeString(array[i]);
        }
    };
    return StringTools;
}());
exports.strings = StringTools;
