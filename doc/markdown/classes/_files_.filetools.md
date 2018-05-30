[@kelmore5/utilities](../README.md) > ["files"](../modules/_files_.md) > [FileTools](../classes/_files_.filetools.md)

# Class: FileTools

Utility functions for files

## Hierarchy

**FileTools**

## Index

### Methods

* [createReturnFullPath](_files_.filetools.md#createreturnfullpath)

---

## Methods

<a id="createreturnfullpath"></a>

### `<Static>` createReturnFullPath

▸ **createReturnFullPath**(cwd: *`string`*, relative_path: *`string`*): `string`

*Defined in files.ts:19*

Used for directory testing/creation. Takes the current working directory (cwd) and a relative path to a directory, and creates the directory if it does not exist

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| cwd | `string` |  The current working directory |
| relative_path | `string` |  Relative path to a new or pre-existing folder |

**Returns:** `string`
Returns the full path of the new directory

___

