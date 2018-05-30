"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var xlsx = require("xlsx");
var csv = require("csvtojson");
var fs = require("fs");
var _1 = require("./");
/**
 * Javascript functions for handling spreadsheet files
 */
var SpreadsheetTools = (function () {
    function SpreadsheetTools() {
    }
    /**
     * Takes a filename and file path of a CSV or Excel file and returns a json representation
     * of the file.
     *
     * Will return an array - Each index is a sheet in the file (as a json object) with the keys: sheet (name),
     * headers (of the file), and rows (json representation of row with header:value for each data point)
     *
     * @param {string} filename The file name of the file
     * @param {string} filePath The file path of the file
     * @param {(sheets: {sheet: string; headers: any[]; rows: any[]}[]) => void} callback The function
     * that will receive the resulting json object
     */
    SpreadsheetTools.parseFile = function (filename, filePath, callback) {
        if (filename.includes('.csv')) {
            var jsonArray_1 = [];
            csv().fromFile(filePath).on('json', function (jsonRow) {
                jsonArray_1.push(jsonRow);
            }).on('done', function (error) {
                if (error) {
                    console.error(error);
                }
                else {
                    callback([{
                            sheet: 'Output',
                            headers: _1.jsons.grabAllKeysFromArray(jsonArray_1),
                            rows: jsonArray_1
                        }]);
                }
            });
        }
        else if (filename.includes('.xls')) {
            var workbook_1 = xlsx.readFile(filePath);
            var new_sheets_1 = [];
            workbook_1.Workbook.Sheets.forEach(function (sheet_json, idx) {
                var new_sheet_obj = xlsx.utils.sheet_to_json(workbook_1.Sheets[sheet_json['name']]);
                new_sheets_1.push({
                    sheet: sheet_json['name'],
                    headers: _1.jsons.grabAllKeysFromArray(new_sheet_obj),
                    rows: new_sheet_obj
                });
                if (idx + 1 === workbook_1.Workbook.Sheets.length) {
                    callback(new_sheets_1);
                }
            });
        }
        else {
            callback([]);
        }
    };
    SpreadsheetTools.splitCSVFile = function (filename, filepath, callback) {
        SpreadsheetTools.parseFile(filename, filepath, function (sheets) {
            var sheet = sheets[0];
            var files = [];
            var new_row_num = 3000;
            for (var i = 0; i < sheet['rows'].length; i += new_row_num) {
                files.push({
                    sheet: sheet['sheet'],
                    headers: sheet['headers'],
                    rows: sheet['rows'].slice(i, i + new_row_num)
                });
            }
            files.forEach(function (file, idx) {
                SpreadsheetTools.jsonToCSV('Zenprospect' + '_' + (idx + 1), file['headers'], file['rows']);
            });
        });
    };
    SpreadsheetTools.jsonToCSV = function (filename, headers, data) {
        var output = headers.join(',') + '\n';
        data.forEach(function (datum) {
            headers.forEach(function (header, idx) {
                var temp = (datum[header] || '');
                temp = temp.replace(/"/g, '""');
                temp = '"' + temp + '"' + (idx + 1 === headers.length ? '' : ',');
                output += temp;
            });
            output += '\n';
        });
        var output_dir = _1.files.createReturnFullPath(__dirname, './output');
        fs.writeFile(output_dir + '/' + filename + '.csv', output, function (err) {
        });
    };
    return SpreadsheetTools;
}());
exports.sheets = SpreadsheetTools;
