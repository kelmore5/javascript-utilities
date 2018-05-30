'use strict';
import * as xlsx from 'xlsx';
import * as csv from 'csvtojson';
import * as fs from 'fs';
import {jsons} from './dictionaries';
import {strings} from './strings';
import * as Bookshelf from "bookshelf";
import * as excel from 'exceljs';
import {Workbook} from 'exceljs';
import {vsprintf} from "sprintf-js";

export interface ParsedSheet {
    sheet: string,
    headers: string[],
    rows: any[]
}

export interface ExcelOutputRequest {
    file_name: string;
    output_path: string;
    sheets: ParsedSheet[];
    csv?: boolean;
}

/**
 * Javascript functions for handling spreadsheet files
 */

class SpreadsheetTools {

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
    static parseFile(filename: string, filePath: string,
                     callback: ((sheets: ParsedSheet[]) => void)): void {
        if (filename.includes('.csv')) {
            const jsonArray: any[] = [];
            csv().fromFile(filePath).on('json', (jsonRow: any) => {
                jsonArray.push(jsonRow);
            }).on('done', function (error: any) {
                if (error) {
                    console.error(error);
                } else {
                    callback([{
                        sheet: 'Output',
                        headers: jsons.grabAllKeysFromArray(jsonArray),
                        rows: jsonArray
                    }]);
                }
            });
        } else if (filename.includes('.xls')) {
            const workbook: any = xlsx.readFile(filePath);
            const new_sheets: any[] = [];

            workbook.Workbook.Sheets.forEach(function (sheet_json: any, idx: number) {
                const new_sheet_obj = xlsx.utils.sheet_to_json(workbook.Sheets[sheet_json['name']]);
                new_sheets.push({
                    sheet: sheet_json['name'],
                    headers: jsons.grabAllKeysFromArray(new_sheet_obj),
                    rows: new_sheet_obj
                });

                if (idx + 1 === workbook.Workbook.Sheets.length) {
                    callback(new_sheets);
                }
            });
        } else {
            callback([]);
        }
    }

    static splitCSVFile(filename: string, filepath: string, callback: Function): void {
        SpreadsheetTools.parseFile(filename, filepath, function (sheets: any[]) {
            const sheet = sheets[0];
            const files = [];
            const new_row_num = 3000;

            for (let i = 0; i < sheet['rows'].length; i += new_row_num) {
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
    }

    public static jsonToCSV(output_path: string, data: any[], headers?: string[]) {
        if (!headers) {
            headers = jsons.getAllKeys(data);
        }

        console.log(headers);

        return new Promise((res, rej) => {
            let output = headers.join(',') + '\n';
            data.forEach(function (datum) {
                headers.forEach(function (header, idx) {
                    let temp = (datum[header] || '').toString();
                    temp = temp.replace(/"/g, '""');
                    temp = '"' + temp + '"' + (idx + 1 === headers.length ? '' : ',');
                    output += temp;
                });
                output += '\n';
            });

            let ext = output_path.includes('.csv');
            output_path += ext ? '' : '.csv';

            fs.writeFile(output_path, output, function (err) {
                return err ? rej(err) : res();
            });
        });
    }

    static convertJSONForOutput<T extends any | Bookshelf.Model<any>>(jsons: T[],
                                                                      keys: string[],
                                                                      ignore: string[] = [],
                                                                      boolean_keys: string[] = []): T[] {
        keys = keys.filter(key => !ignore.includes(key));
        const normal = keys.map(strings.regularizeString);

        const output: T[] = [];
        jsons.forEach(json => {
            const new_json: any = {};

            keys.forEach((key, idx) => {
                const normal_key = normal[idx];
                let datum: any = json.get(key) || json[key];

                if (boolean_keys.includes(key)) {
                    datum = datum ? 'Yes' : '';
                }

                new_json[normal_key] = datum ? datum.toString() : datum;
            });

            output.push(new_json);
        });

        return output;
    }

    public static outputToExcel(req: ExcelOutputRequest) {
        const self = SpreadsheetTools;
        const workbook = new excel.Workbook();
        workbook.creator = 'Me';
        workbook.created = new Date();

        const sheets = req.sheets;
        const file_name = req.file_name;
        const output_path = req.output_path;

        sheets.forEach(sheet => {
            self.addJSONToWorkbook(workbook, sheet.sheet, sheet.rows, sheet.headers);
        });

        return self.saveWorkbook(workbook, file_name, output_path, true, req.csv);
    }

    // TODO: Change console to logger.debug
    public static saveWorkbook(workbook: Workbook, file_name: string,
                               output_path: string, xlsx?: boolean, csv?: boolean) {
        return new Promise(async res => {
            if (xlsx) {
                const file = vsprintf('%s/%s.xlsx', [output_path, file_name]);
                await workbook.xlsx.writeFile(file).catch(console.log);
            }

            if (csv) {
                const file = vsprintf('%s/%s.csv', [output_path, file_name]);
                // TODO: Split csvs
                await workbook.csv.writeFile(file).catch(console.log);
            }

            res();
        });
    }

    public static addJSONToWorkbook(book: Workbook, sheet_name: string,
                                    json: any[], fields?: string[]) {
        const sheet = book.addWorksheet(sheet_name);
        sheet.columns = [];

        const headers = fields || jsons.getAllKeys(json);
        sheet.addRow(headers);

        sheet.columns = headers.map(header => {
            return {
                header, width: 18
            }
        });

        sheet.getRow(1).font = {
            size: 12,
            bold: true
        };

        json.forEach(row => {
            const new_row: string[] = [];

            headers.forEach(field => {
                const datum = row[field];

                if (datum !== null && datum !== undefined) {
                    new_row.push('' + datum);
                } else {
                    new_row.push('');
                }
            });

            sheet.addRow(new_row);
        });

        for (let i = 0; i < sheet.rowCount; i++) {
            const row = sheet.getRow(i);
            row.alignment = {vertical: 'top', wrapText: true};
            row.height = 15;
        }
    }
}

export {SpreadsheetTools as sheets};