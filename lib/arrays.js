"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Utility functions for javascript arrays
 */
var ArrayTools = (function () {
    function ArrayTools() {
    }
    /**
     * Adds an array to a set
     *
     * @param set The set to receive array
     * @param array The array to be added
     */
    ArrayTools.addArrayToSet = function (set, array) {
        array.forEach(set.add, set);
    };
    /**
     * Creates the cross of two arrays
     *
     * @param {T[]} array1
     * @param {T[]} array2
     * @returns {T[]} Returns the cross between array1 and array2
     */
    ArrayTools.crossArray = function (array1, array2) {
        var cross = [];
        array1.forEach(function (data) {
            if (array2.indexOf(data) > -1) {
                cross.push(data);
            }
        });
        return cross;
    };
    return ArrayTools;
}());
exports.arrays = ArrayTools;
