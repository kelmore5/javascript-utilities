[@kelmore5/utilities](../README.md) > ["strings"](../modules/_strings_.md) > [StringTools](../classes/_strings_.stringtools.md)

# Class: StringTools

Javascript functions for strings

## Hierarchy

**StringTools**

## Index

### Methods

* [findMatch](_strings_.stringtools.md#findmatch)
* [matchStrings](_strings_.stringtools.md#matchstrings)
* [normalizeArrayInner](_strings_.stringtools.md#normalizearrayinner)
* [normalizeString](_strings_.stringtools.md#normalizestring)
* [onlyAscii](_strings_.stringtools.md#onlyascii)
* [regularizeString](_strings_.stringtools.md#regularizestring)
* [regularizeStringArray](_strings_.stringtools.md#regularizestringarray)
* [replaceAll](_strings_.stringtools.md#replaceall)
* [toProperCase](_strings_.stringtools.md#topropercase)

---

## Methods

<a id="findmatch"></a>

### `<Static>` findMatch

▸ **findMatch**(search_key: *`string`*, lookup: *`string`[]*):  `string` &#124; [StringMatchScore](../interfaces/_strings_.stringmatchscore.md)[]

*Defined in [strings.ts:139](https://github.com/kelmore5/javascript-utilities/blob/c0347fb/lib/strings.ts#L139)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| search_key | `string` |
| lookup | `string`[] |

**Returns:**  `string` &#124; [StringMatchScore](../interfaces/_strings_.stringmatchscore.md)[]

___
<a id="matchstrings"></a>

### `<Static>` matchStrings

▸ **matchStrings**(array_a: *`string`[]*, array_b: *`string`[]*): [SimilarityScoreResponse](../interfaces/_strings_.similarityscoreresponse.md)

*Defined in [strings.ts:161](https://github.com/kelmore5/javascript-utilities/blob/c0347fb/lib/strings.ts#L161)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| array_a | `string`[] |
| array_b | `string`[] |

**Returns:** [SimilarityScoreResponse](../interfaces/_strings_.similarityscoreresponse.md)

___
<a id="normalizearrayinner"></a>

### `<Static>` normalizeArrayInner

▸ **normalizeArrayInner**(array: *`string`[]*): `void`

*Defined in [strings.ts:45](https://github.com/kelmore5/javascript-utilities/blob/c0347fb/lib/strings.ts#L45)*

Normalizes all the strings within a string array

See [normalizeString](_strings_.stringtools.md#normalizestring)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| array | `string`[] |  An array of strings |

**Returns:** `void`

___
<a id="normalizestring"></a>

### `<Static>` normalizeString

▸ **normalizeString**(string: *`string`*): `string`

*Defined in [strings.ts:33](https://github.com/kelmore5/javascript-utilities/blob/c0347fb/lib/strings.ts#L33)*

Primarily used for creating search keys. Takes a string and normalizes it, where normalize means changing the string to lower case, replacing all spaces with underscores, and removing any trailing whitespace

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| string | `string` |  The string to normalize |

**Returns:** `string`
The normalized string

___
<a id="onlyascii"></a>

### `<Static>` onlyAscii

▸ **onlyAscii**(string: *`string`*): `string`

*Defined in [strings.ts:120](https://github.com/kelmore5/javascript-utilities/blob/c0347fb/lib/strings.ts#L120)*

Removes all the non-ascii characters from a string and returns the string

Usually used before adding string values to a database, since non-ascii values can cause crashes...

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| string | `string` |  The string to remove the ascii characters from |

**Returns:** `string`
The string with only ascii characters

___
<a id="regularizestring"></a>

### `<Static>` regularizeString

▸ **regularizeString**(string: *`string`*): `string`

*Defined in [strings.ts:61](https://github.com/kelmore5/javascript-utilities/blob/c0347fb/lib/strings.ts#L61)*

Primarily used to de-normalize a string. Regularizes a string, where regularize means replacing all the underscores with spaces and changing the string to propercase

See [normalizeString](_strings_.stringtools.md#normalizestring) and [toProperCase](_strings_.stringtools.md#topropercase)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| string | `string` |  The string to regularize |

**Returns:** `string`
The regularized string

___
<a id="regularizestringarray"></a>

### `<Static>` regularizeStringArray

▸ **regularizeStringArray**(array: *`string`[]*): `string`[]

*Defined in [strings.ts:103](https://github.com/kelmore5/javascript-utilities/blob/c0347fb/lib/strings.ts#L103)*

Regularizes all the strings within an array

See [regularizeString](_strings_.stringtools.md#regularizestring)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| array | `string`[] |  An array of strings |

**Returns:** `string`[]

___
<a id="replaceall"></a>

### `<Static>` replaceAll

▸ **replaceAll**(datum: *`string`*, search: *`Array`< `RegExp` &#124; `string`>*, replace: *`Array`< `string` &#124; `null`>*): `string`

*Defined in [strings.ts:124](https://github.com/kelmore5/javascript-utilities/blob/c0347fb/lib/strings.ts#L124)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| datum | `string` |
| search | `Array`< `RegExp` &#124; `string`> |
| replace | `Array`< `string` &#124; `null`> |

**Returns:** `string`

___
<a id="topropercase"></a>

### `<Static>` toProperCase

▸ **toProperCase**(string: *`string`*): `string`

*Defined in [strings.ts:19](https://github.com/kelmore5/javascript-utilities/blob/c0347fb/lib/strings.ts#L19)*

Changes a string to proper case (aka Titles all string values between spaces)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| string | `string` |  A string (probably in lowercase) |

**Returns:** `string`
The string with propered case

___

