[@kelmore5/utilities](../README.md) > ["arrays"](../modules/_arrays_.md) > [ArrayTools](../classes/_arrays_.arraytools.md)

# Class: ArrayTools

Utility functions for javascript arrays

## Hierarchy

**ArrayTools**

## Index

### Methods

* [addArrayToSet](_arrays_.arraytools.md#addarraytoset)
* [chunkArray](_arrays_.arraytools.md#chunkarray)
* [crossArray](_arrays_.arraytools.md#crossarray)
* [filterNull](_arrays_.arraytools.md#filternull)
* [getStats](_arrays_.arraytools.md#getstats)
* [getUniqueValueIndexes](_arrays_.arraytools.md#getuniquevalueindexes)
* [mergeInner](_arrays_.arraytools.md#mergeinner)
* [removeInner](_arrays_.arraytools.md#removeinner)
* [sortDates](_arrays_.arraytools.md#sortdates)
* [unique](_arrays_.arraytools.md#unique)

---

## Methods

<a id="addarraytoset"></a>

### `<Static>` addArrayToSet

▸ **addArrayToSet**(set: *`Set`<`any`>*, array: *`any`[]*): `void`

*Defined in [arrays.ts:17](https://github.com/kelmore5/javascript-utilities/blob/c0347fb/lib/arrays.ts#L17)*

Adds an array to a set

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| set | `Set`<`any`> |  The set to receive array |
| array | `any`[] |  The array to be added |

**Returns:** `void`

___
<a id="chunkarray"></a>

### `<Static>` chunkArray

▸ **chunkArray**T(array: *`T`[]*, step: *`number`*): `Array`<`T`[]>

*Defined in [arrays.ts:38](https://github.com/kelmore5/javascript-utilities/blob/c0347fb/lib/arrays.ts#L38)*

**Type parameters:**

#### T 
**Parameters:**

| Param | Type |
| ------ | ------ |
| array | `T`[] |
| step | `number` |

**Returns:** `Array`<`T`[]>

___
<a id="crossarray"></a>

### `<Static>` crossArray

▸ **crossArray**T(array1: *`T`[]*, array2: *`T`[]*): `T`[]

*Defined in [arrays.ts:28](https://github.com/kelmore5/javascript-utilities/blob/c0347fb/lib/arrays.ts#L28)*

Creates the cross of two arrays

**Type parameters:**

#### T 
**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| array1 | `T`[] |  - |
| array2 | `T`[] |  - |

**Returns:** `T`[]
Returns the cross between array1 and array2

___
<a id="filternull"></a>

### `<Static>` filterNull

▸ **filterNull**T(array: *`T`[]*): `T`[]

*Defined in [arrays.ts:89](https://github.com/kelmore5/javascript-utilities/blob/c0347fb/lib/arrays.ts#L89)*

**Type parameters:**

#### T :  `any`
**Parameters:**

| Param | Type |
| ------ | ------ |
| array | `T`[] |

**Returns:** `T`[]

___
<a id="getstats"></a>

### `<Static>` getStats

▸ **getStats**(array: *`any`[]*): [JSONStatChecks](../interfaces/_dictionaries_.jsonstatchecks.md)

*Defined in [arrays.ts:65](https://github.com/kelmore5/javascript-utilities/blob/c0347fb/lib/arrays.ts#L65)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| array | `any`[] |

**Returns:** [JSONStatChecks](../interfaces/_dictionaries_.jsonstatchecks.md)

___
<a id="getuniquevalueindexes"></a>

### `<Static>` getUniqueValueIndexes

▸ **getUniqueValueIndexes**T(array: *`T`[]*): `number`[][]

*Defined in [arrays.ts:104](https://github.com/kelmore5/javascript-utilities/blob/c0347fb/lib/arrays.ts#L104)*

**Type parameters:**

#### T :  `any`
**Parameters:**

| Param | Type |
| ------ | ------ |
| array | `T`[] |

**Returns:** `number`[][]

___
<a id="mergeinner"></a>

### `<Static>` mergeInner

▸ **mergeInner**T(dest: *`T`[]*, src: *`T`[]*): `T`[]

*Defined in [arrays.ts:46](https://github.com/kelmore5/javascript-utilities/blob/c0347fb/lib/arrays.ts#L46)*

**Type parameters:**

#### T :  `any`
**Parameters:**

| Param | Type |
| ------ | ------ |
| dest | `T`[] |
| src | `T`[] |

**Returns:** `T`[]

___
<a id="removeinner"></a>

### `<Static>` removeInner

▸ **removeInner**T(array: *`T`[]*, checkFunction: *[RemoveFunction](../modules/_arrays_.md#removefunction)<`T`>*): `T`[]

*Defined in [arrays.ts:51](https://github.com/kelmore5/javascript-utilities/blob/c0347fb/lib/arrays.ts#L51)*

**Type parameters:**

#### T :  `any`
**Parameters:**

| Param | Type |
| ------ | ------ |
| array | `T`[] |
| checkFunction | [RemoveFunction](../modules/_arrays_.md#removefunction)<`T`> |

**Returns:** `T`[]

___
<a id="sortdates"></a>

### `<Static>` sortDates

▸ **sortDates**(a: *`Date`*, b: *`Date`*): `number`

*Defined in [arrays.ts:93](https://github.com/kelmore5/javascript-utilities/blob/c0347fb/lib/arrays.ts#L93)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| a | `Date` |
| b | `Date` |

**Returns:** `number`

___
<a id="unique"></a>

### `<Static>` unique

▸ **unique**(array: *`Array`< `string` &#124; `number`>*): `any`[]

*Defined in [arrays.ts:83](https://github.com/kelmore5/javascript-utilities/blob/c0347fb/lib/arrays.ts#L83)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| array | `Array`< `string` &#124; `number`> |

**Returns:** `any`[]

___

