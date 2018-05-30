[@kelmore5/utilities](../README.md) > ["spreadsheets"](../modules/_spreadsheets_.md) > [SpreadsheetTools](../classes/_spreadsheets_.spreadsheettools.md)

# Class: SpreadsheetTools

Javascript functions for handling spreadsheet files

## Hierarchy

**SpreadsheetTools**

## Index

### Methods

* [addJSONToWorkbook](_spreadsheets_.spreadsheettools.md#addjsontoworkbook)
* [convertJSONForOutput](_spreadsheets_.spreadsheettools.md#convertjsonforoutput)
* [jsonToCSV](_spreadsheets_.spreadsheettools.md#jsontocsv)
* [outputToExcel](_spreadsheets_.spreadsheettools.md#outputtoexcel)
* [parseFile](_spreadsheets_.spreadsheettools.md#parsefile)
* [saveWorkbook](_spreadsheets_.spreadsheettools.md#saveworkbook)
* [splitCSVFile](_spreadsheets_.spreadsheettools.md#splitcsvfile)

---

## Methods

<a id="addjsontoworkbook"></a>

### `<Static>` addJSONToWorkbook

▸ **addJSONToWorkbook**(book: *`Workbook`*, sheet_name: *`string`*, json: *`any`[]*, fields?: *`string`[]*): `void`

*Defined in spreadsheets.ts:193*

**Parameters:**

| Param | Type |
| ------ | ------ |
| book | `Workbook` |
| sheet_name | `string` |
| json | `any`[] |
| `Optional` fields | `string`[] |

**Returns:** `void`

___
<a id="convertjsonforoutput"></a>

### `<Static>` convertJSONForOutput

▸ **convertJSONForOutput**T(jsons: *`T`[]*, keys: *`string`[]*, ignore?: *`string`[]*, boolean_keys?: *`string`[]*): `T`[]

*Defined in spreadsheets.ts:129*

**Type parameters:**

#### T :   `any` &#124; `Model`<`any`>

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| jsons | `T`[] | - |
| keys | `string`[] | - |
| `Default value` ignore | `string`[] |  [] |
| `Default value` boolean_keys | `string`[] |  [] |

**Returns:** `T`[]

___
<a id="jsontocsv"></a>

### `<Static>` jsonToCSV

▸ **jsonToCSV**(output_path: *`string`*, data: *`any`[]*, headers?: *`string`[]*): `Promise`<`Object`>

*Defined in spreadsheets.ts:101*

**Parameters:**

| Param | Type |
| ------ | ------ |
| output_path | `string` |
| data | `any`[] |
| `Optional` headers | `string`[] |

**Returns:** `Promise`<`Object`>

___
<a id="outputtoexcel"></a>

### `<Static>` outputToExcel

▸ **outputToExcel**(req: *[ExcelOutputRequest](../interfaces/_spreadsheets_.exceloutputrequest.md)*): `Promise`<`Object`>

*Defined in spreadsheets.ts:157*

**Parameters:**

| Param | Type |
| ------ | ------ |
| req | [ExcelOutputRequest](../interfaces/_spreadsheets_.exceloutputrequest.md) |

**Returns:** `Promise`<`Object`>

___
<a id="parsefile"></a>

### `<Static>` parseFile

▸ **parseFile**(filename: *`string`*, filePath: *`string`*, callback: *`function`*): `void`

*Defined in spreadsheets.ts:43*

Takes a filename and file path of a CSV or Excel file and returns a json representation of the file.

Will return an array - Each index is a sheet in the file (as a json object) with the keys: sheet (name), headers (of the file), and rows (json representation of row with header:value for each data point)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| filename | `string` |  The file name of the file |
| filePath | `string` |  The file path of the file |
| callback | `function` |

**Returns:** `void`

___
<a id="saveworkbook"></a>

### `<Static>` saveWorkbook

▸ **saveWorkbook**(workbook: *`Workbook`*, file_name: *`string`*, output_path: *`string`*, xlsx?: *`boolean`*, csv?: *`boolean`*): `Promise`<`Object`>

*Defined in spreadsheets.ts:175*

**Parameters:**

| Param | Type |
| ------ | ------ |
| workbook | `Workbook` |
| file_name | `string` |
| output_path | `string` |
| `Optional` xlsx | `boolean` |
| `Optional` csv | `boolean` |

**Returns:** `Promise`<`Object`>

___
<a id="splitcsvfile"></a>

### `<Static>` splitCSVFile

▸ **splitCSVFile**(filename: *`string`*, filepath: *`string`*, callback: *`Function`*): `void`

*Defined in spreadsheets.ts:81*

**Parameters:**

| Param | Type |
| ------ | ------ |
| filename | `string` |
| filepath | `string` |
| callback | `Function` |

**Returns:** `void`

___

