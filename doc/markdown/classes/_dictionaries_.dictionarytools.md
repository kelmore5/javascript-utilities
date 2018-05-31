[@kelmore5/utilities](../README.md) > ["dictionaries"](../modules/_dictionaries_.md) > [DictionaryTools](../classes/_dictionaries_.dictionarytools.md)

# Class: DictionaryTools

Tools for javascript dictionary objects

## Hierarchy

**DictionaryTools**

## Index

### Properties

* [reduce](_dictionaries_.dictionarytools.md#reduce)

### Methods

* [addObjectToJsonArray](_dictionaries_.dictionarytools.md#addobjecttojsonarray)
* [checkIfNull](_dictionaries_.dictionarytools.md#checkifnull)
* [combineJsonAndModels](_dictionaries_.dictionarytools.md#combinejsonandmodels)
* [convertBooleanKeys](_dictionaries_.dictionarytools.md#convertbooleankeys)
* [convertStatsToInterface](_dictionaries_.dictionarytools.md#convertstatstointerface)
* [convertStatsToInterfaceHelper](_dictionaries_.dictionarytools.md#convertstatstointerfacehelper)
* [convertStringArrayToBlankJson](_dictionaries_.dictionarytools.md#convertstringarraytoblankjson)
* [countKeysWithValues](_dictionaries_.dictionarytools.md#countkeyswithvalues)
* [createLookup](_dictionaries_.dictionarytools.md#createlookup)
* [createLookupArray](_dictionaries_.dictionarytools.md#createlookuparray)
* [flattenAtRoot](_dictionaries_.dictionarytools.md#flattenatroot)
* [getAllKeys](_dictionaries_.dictionarytools.md#getallkeys)
* [getJsonStats](_dictionaries_.dictionarytools.md#getjsonstats)
* [getVariableStat](_dictionaries_.dictionarytools.md#getvariablestat)
* [getVariableStats](_dictionaries_.dictionarytools.md#getvariablestats)
* [grabAllDataByKey](_dictionaries_.dictionarytools.md#graballdatabykey)
* [grabAllDataByKeyUnique](_dictionaries_.dictionarytools.md#graballdatabykeyunique)
* [grabAllDataByKeysStrict](_dictionaries_.dictionarytools.md#graballdatabykeysstrict)
* [grabAllDataWithKeyValue](_dictionaries_.dictionarytools.md#graballdatawithkeyvalue)
* [grabAllKeysFromArray](_dictionaries_.dictionarytools.md#graballkeysfromarray)
* [isEmpty](_dictionaries_.dictionarytools.md#isempty)
* [mapJsonArray](_dictionaries_.dictionarytools.md#mapjsonarray)
* [mapJsonObject](_dictionaries_.dictionarytools.md#mapjsonobject)
* [mergeJSONStats](_dictionaries_.dictionarytools.md#mergejsonstats)
* [mergeWhereEmpty](_dictionaries_.dictionarytools.md#mergewhereempty)
* [normalizeJsonArrayKeys](_dictionaries_.dictionarytools.md#normalizejsonarraykeys)
* [normalizeJsonKeys](_dictionaries_.dictionarytools.md#normalizejsonkeys)
* [output](_dictionaries_.dictionarytools.md#output)
* [override](_dictionaries_.dictionarytools.md#override)
* [reduceJson](_dictionaries_.dictionarytools.md#reducejson)
* [reduceList](_dictionaries_.dictionarytools.md#reducelist)
* [regroupJsonArrayByKey](_dictionaries_.dictionarytools.md#regroupjsonarraybykey)
* [regroupJsonArrayByKeyWithDupes](_dictionaries_.dictionarytools.md#regroupjsonarraybykeywithdupes)
* [regroupJsonArraysByKey](_dictionaries_.dictionarytools.md#regroupjsonarraysbykey)
* [regularizeJsonArrayKeys](_dictionaries_.dictionarytools.md#regularizejsonarraykeys)
* [regularizeJsonKeys](_dictionaries_.dictionarytools.md#regularizejsonkeys)
* [removeKeys](_dictionaries_.dictionarytools.md#removekeys)
* [removeKeysArray](_dictionaries_.dictionarytools.md#removekeysarray)
* [removeWhereKeysNull](_dictionaries_.dictionarytools.md#removewherekeysnull)
* [removeWhereNull](_dictionaries_.dictionarytools.md#removewherenull)
* [removeWhereNulls](_dictionaries_.dictionarytools.md#removewherenulls)
* [replace](_dictionaries_.dictionarytools.md#replace)
* [replaceAllJsonKeysList](_dictionaries_.dictionarytools.md#replacealljsonkeyslist)
* [replaceJsonKeys](_dictionaries_.dictionarytools.md#replacejsonkeys)
* [replaceKeyValues](_dictionaries_.dictionarytools.md#replacekeyvalues)
* [statCheckHelper](_dictionaries_.dictionarytools.md#statcheckhelper)
* [stringify](_dictionaries_.dictionarytools.md#stringify)
* [stringifyAtRoot](_dictionaries_.dictionarytools.md#stringifyatroot)

---

## Properties

<a id="reduce"></a>

### `<Static>` reduce

**● reduce**: *[reduceJson](_dictionaries_.dictionarytools.md#reducejson)* =  DictionaryTools.reduceJson

*Defined in [dictionaries.ts:16](https://github.com/kelmore5/javascript-utilities/blob/c0347fb/lib/dictionaries.ts#L16)*

___

## Methods

<a id="addobjecttojsonarray"></a>

### `<Static>` addObjectToJsonArray

▸ **addObjectToJsonArray**(json_array: *`any`[]*, json: *`any`*): `any`[]

*Defined in [dictionaries.ts:383](https://github.com/kelmore5/javascript-utilities/blob/c0347fb/lib/dictionaries.ts#L383)*

Adds an object to all json objects within a given json array

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| json_array | `any`[] |  The json array |
| json | `any` |  The object to add to each json item in the array |

**Returns:** `any`[]

___
<a id="checkifnull"></a>

### `<Static>` checkIfNull

▸ **checkIfNull**(json: *`any`*, keys: *`string`[]*): `boolean`

*Defined in [dictionaries.ts:771](https://github.com/kelmore5/javascript-utilities/blob/c0347fb/lib/dictionaries.ts#L771)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| json | `any` |
| keys | `string`[] |

**Returns:** `boolean`

___
<a id="combinejsonandmodels"></a>

### `<Static>` combineJsonAndModels

▸ **combineJsonAndModels**(keys: *`string`[]*, jsons?: *`any`[]*, models?: *`Model`<`any`>[]*): `any`

*Defined in [dictionaries.ts:447](https://github.com/kelmore5/javascript-utilities/blob/c0347fb/lib/dictionaries.ts#L447)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| keys | `string`[] |
| `Optional` jsons | `any`[] |
| `Optional` models | `Model`<`any`>[] |

**Returns:** `any`

___
<a id="convertbooleankeys"></a>

### `<Static>` convertBooleanKeys

▸ **convertBooleanKeys**(json_array: *`any`[]*, keys: *`string`[]*): `any`[]

*Defined in [dictionaries.ts:285](https://github.com/kelmore5/javascript-utilities/blob/c0347fb/lib/dictionaries.ts#L285)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| json_array | `any`[] |
| keys | `string`[] |

**Returns:** `any`[]

___
<a id="convertstatstointerface"></a>

### `<Static>` convertStatsToInterface

▸ **convertStatsToInterface**(stats: *[JSONStats](../interfaces/_dictionaries_.jsonstats.md)*, name?: *`string`*): `string`

*Defined in [dictionaries.ts:799](https://github.com/kelmore5/javascript-utilities/blob/c0347fb/lib/dictionaries.ts#L799)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| stats | [JSONStats](../interfaces/_dictionaries_.jsonstats.md) | - |
| `Default value` name | `string` | &quot;Impl&quot; |

**Returns:** `string`

___
<a id="convertstatstointerfacehelper"></a>

### `<Static>``<Private>` convertStatsToInterfaceHelper

▸ **convertStatsToInterfaceHelper**(stats: *[JSONStats](../interfaces/_dictionaries_.jsonstats.md)*, name: *`string`*, outputs?: *`string`[]*): `string`[]

*Defined in [dictionaries.ts:805](https://github.com/kelmore5/javascript-utilities/blob/c0347fb/lib/dictionaries.ts#L805)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| stats | [JSONStats](../interfaces/_dictionaries_.jsonstats.md) | - |
| name | `string` | - |
| `Default value` outputs | `string`[] |  [] |

**Returns:** `string`[]

___
<a id="convertstringarraytoblankjson"></a>

### `<Static>` convertStringArrayToBlankJson

▸ **convertStringArrayToBlankJson**(array: *`string`[]*): `any`

*Defined in [dictionaries.ts:258](https://github.com/kelmore5/javascript-utilities/blob/c0347fb/lib/dictionaries.ts#L258)*

Takes a string array and creates a blank json object using the array data as keys

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| array | `string`[] |  The keys to be used in the json object |

**Returns:** `any`
A json object

___
<a id="countkeyswithvalues"></a>

### `<Static>` countKeysWithValues

▸ **countKeysWithValues**(json: *`any`*): `number`

*Defined in [dictionaries.ts:758](https://github.com/kelmore5/javascript-utilities/blob/c0347fb/lib/dictionaries.ts#L758)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| json | `any` |

**Returns:** `number`

___
<a id="createlookup"></a>

### `<Static>` createLookup

▸ **createLookup**T(json_array: *`T`[]*, lookup_key: *`string`*, value_keys?: *`string`[]*, output?: *[Lookup](../interfaces/_dictionaries_.lookup.md)<`T`>*): [Lookup](../interfaces/_dictionaries_.lookup.md)<`T`>

*Defined in [dictionaries.ts:573](https://github.com/kelmore5/javascript-utilities/blob/c0347fb/lib/dictionaries.ts#L573)*

**Type parameters:**

#### T :  `any`
**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| json_array | `T`[] | - |
| lookup_key | `string` | - |
| `Default value` value_keys | `string`[] |  [] |
| `Default value` output | [Lookup](../interfaces/_dictionaries_.lookup.md)<`T`> |  {} |

**Returns:** [Lookup](../interfaces/_dictionaries_.lookup.md)<`T`>

___
<a id="createlookuparray"></a>

### `<Static>` createLookupArray

▸ **createLookupArray**(json_array: *`any`[]*, lookup_key: *`string`*, value_keys?: *`string`[]*): [LookupArray](../interfaces/_dictionaries_.lookuparray.md)

*Defined in [dictionaries.ts:592](https://github.com/kelmore5/javascript-utilities/blob/c0347fb/lib/dictionaries.ts#L592)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| json_array | `any`[] | - |
| lookup_key | `string` | - |
| `Default value` value_keys | `string`[] |  [] |

**Returns:** [LookupArray](../interfaces/_dictionaries_.lookuparray.md)

___
<a id="flattenatroot"></a>

### `<Static>` flattenAtRoot

▸ **flattenAtRoot**(json: *`any`*): `any`[]

*Defined in [dictionaries.ts:611](https://github.com/kelmore5/javascript-utilities/blob/c0347fb/lib/dictionaries.ts#L611)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| json | `any` |

**Returns:** `any`[]

___
<a id="getallkeys"></a>

### `<Static>` getAllKeys

▸ **getAllKeys**(json_array: *`any`[]*): `string`[]

*Defined in [dictionaries.ts:630](https://github.com/kelmore5/javascript-utilities/blob/c0347fb/lib/dictionaries.ts#L630)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| json_array | `any`[] |

**Returns:** `string`[]

___
<a id="getjsonstats"></a>

### `<Static>` getJsonStats

▸ **getJsonStats**(json_array: *`any`[]*, add_json_string?: *`boolean`*, output?: *[JSONStats](../interfaces/_dictionaries_.jsonstats.md)*): [JSONStats](../interfaces/_dictionaries_.jsonstats.md)

*Defined in [dictionaries.ts:638](https://github.com/kelmore5/javascript-utilities/blob/c0347fb/lib/dictionaries.ts#L638)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| json_array | `any`[] | - |
| `Default value` add_json_string | `boolean` | false |
| `Default value` output | [JSONStats](../interfaces/_dictionaries_.jsonstats.md) |  {} |

**Returns:** [JSONStats](../interfaces/_dictionaries_.jsonstats.md)

___
<a id="getvariablestat"></a>

### `<Static>``<Private>` getVariableStat

▸ **getVariableStat**(stats: *[JSONStatChecks](../interfaces/_dictionaries_.jsonstatchecks.md)*): [JSONStat](../interfaces/_dictionaries_.jsonstat.md)

*Defined in [dictionaries.ts:855](https://github.com/kelmore5/javascript-utilities/blob/c0347fb/lib/dictionaries.ts#L855)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| stats | [JSONStatChecks](../interfaces/_dictionaries_.jsonstatchecks.md) |

**Returns:** [JSONStat](../interfaces/_dictionaries_.jsonstat.md)

___
<a id="getvariablestats"></a>

### `<Static>` getVariableStats

▸ **getVariableStats**(datum: *`any`*): [JSONStatCheck](../interfaces/_dictionaries_.jsonstatcheck.md)

*Defined in [dictionaries.ts:683](https://github.com/kelmore5/javascript-utilities/blob/c0347fb/lib/dictionaries.ts#L683)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| datum | `any` |

**Returns:** [JSONStatCheck](../interfaces/_dictionaries_.jsonstatcheck.md)

___
<a id="graballdatabykey"></a>

### `<Static>` grabAllDataByKey

▸ **grabAllDataByKey**(json_array: *`any`[]*, key: *`string`*): `any`[]

*Defined in [dictionaries.ts:93](https://github.com/kelmore5/javascript-utilities/blob/c0347fb/lib/dictionaries.ts#L93)*

Grabs all the data values within an array of json objects with given key

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| json_array | `any`[] |  The array of json objects |
| key | `string` |  The key to grab from each json object |

**Returns:** `any`[]
An array of the data values from the given key

___
<a id="graballdatabykeyunique"></a>

### `<Static>` grabAllDataByKeyUnique

▸ **grabAllDataByKeyUnique**(json_array: *`any`[]*, key: *`string`*): `any`[]

*Defined in [dictionaries.ts:104](https://github.com/kelmore5/javascript-utilities/blob/c0347fb/lib/dictionaries.ts#L104)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| json_array | `any`[] |
| key | `string` |

**Returns:** `any`[]

___
<a id="graballdatabykeysstrict"></a>

### `<Static>` grabAllDataByKeysStrict

▸ **grabAllDataByKeysStrict**(json_array: *`any`[]*, keys: *`string`[]*): `any`[]

*Defined in [dictionaries.ts:143](https://github.com/kelmore5/javascript-utilities/blob/c0347fb/lib/dictionaries.ts#L143)*

Grabs all the json objects within an array of objects with the given keys.

(Strict - will only grab the json object if it has all the given keys)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| json_array | `any`[] |  An array of json objects |
| keys | `string`[] |  The keys to grab from the json objects |

**Returns:** `any`[]
A subset of json_array

___
<a id="graballdatawithkeyvalue"></a>

### `<Static>` grabAllDataWithKeyValue

▸ **grabAllDataWithKeyValue**(json_array: *`any`[]*, key: *`string`*, value: *`string`*): `any`[]

*Defined in [dictionaries.ts:123](https://github.com/kelmore5/javascript-utilities/blob/c0347fb/lib/dictionaries.ts#L123)*

Grabs all the json objects with the given key plus value

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| json_array | `any`[] |  An array of json objects |
| key | `string` |  The key for the value to grab |
| value | `string` |  The value to look for within the json object |

**Returns:** `any`[]
A subset of json_array containing only json objects with the given key and value

___
<a id="graballkeysfromarray"></a>

### `<Static>` grabAllKeysFromArray

▸ **grabAllKeysFromArray**(json_array: *`any`[]*): `any`[]

*Defined in [dictionaries.ts:168](https://github.com/kelmore5/javascript-utilities/blob/c0347fb/lib/dictionaries.ts#L168)*

Grabs all the keys from the objects within an array of json objects (no duplicates)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| json_array | `any`[] |  An array of json objects |

**Returns:** `any`[]
The keys from the json objects inside the json_array

___
<a id="isempty"></a>

### `<Static>` isEmpty

▸ **isEmpty**(json: *`any`*): `boolean`

*Defined in [dictionaries.ts:182](https://github.com/kelmore5/javascript-utilities/blob/c0347fb/lib/dictionaries.ts#L182)*

Checks if a json object is empty

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| json | `any` |  A json object |

**Returns:** `boolean`
true if the object is empty, false otherwise

___
<a id="mapjsonarray"></a>

### `<Static>` mapJsonArray

▸ **mapJsonArray**(json_array: *`any`[]*): `any`

*Defined in [dictionaries.ts:439](https://github.com/kelmore5/javascript-utilities/blob/c0347fb/lib/dictionaries.ts#L439)*

This will take an array of json objects, find the map of each object, and return all the maps merged.

A json map is all the keys within a json object.

This will do a deep search, so it will include objects within objects and arrays.

This is typically used when you have an array of json objects but are unsure of the keys within those objects and need to get some insight.

See [mapJsonObject](_dictionaries_.dictionarytools.md#mapjsonobject)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| json_array | `any`[] |  An array of json objects |

**Returns:** `any`
The maps of all the json objects merged into one, or in
other words, all the keys from all the json objects within the array

___
<a id="mapjsonobject"></a>

### `<Static>` mapJsonObject

▸ **mapJsonObject**(json: *`any`*): `any`

*Defined in [dictionaries.ts:400](https://github.com/kelmore5/javascript-utilities/blob/c0347fb/lib/dictionaries.ts#L400)*

This will take in a json object and return all the keys from the object. This does a deep search, so will include objects within objects and arrays.

WARNING: Not fully tested...

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| json | `any` |  Any json object |

**Returns:** `any`
All the keys from the json object without the values

___
<a id="mergejsonstats"></a>

### `<Static>``<Private>` mergeJSONStats

▸ **mergeJSONStats**(stat_a: *[JSONStats](../interfaces/_dictionaries_.jsonstats.md)*, stat_b: *[JSONStats](../interfaces/_dictionaries_.jsonstats.md)*): `void`

*Defined in [dictionaries.ts:957](https://github.com/kelmore5/javascript-utilities/blob/c0347fb/lib/dictionaries.ts#L957)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| stat_a | [JSONStats](../interfaces/_dictionaries_.jsonstats.md) |
| stat_b | [JSONStats](../interfaces/_dictionaries_.jsonstats.md) |

**Returns:** `void`

___
<a id="mergewhereempty"></a>

### `<Static>` mergeWhereEmpty

▸ **mergeWhereEmpty**(dest: *`any`*, src: *`any`*): `any`

*Defined in [dictionaries.ts:735](https://github.com/kelmore5/javascript-utilities/blob/c0347fb/lib/dictionaries.ts#L735)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| dest | `any` |
| src | `any` |

**Returns:** `any`

___
<a id="normalizejsonarraykeys"></a>

### `<Static>` normalizeJsonArrayKeys

▸ **normalizeJsonArrayKeys**(json_array: *`any`[]*): `void`

*Defined in [dictionaries.ts:193](https://github.com/kelmore5/javascript-utilities/blob/c0347fb/lib/dictionaries.ts#L193)*

Normalizes the keys within json objects in an array of json objects.

Normalize = all lowercase, spaces replaced with underscores - See [StringTools.normalizeString](_strings_.stringtools.md#normalizestring)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| json_array | `any`[] |  An array of json objects |

**Returns:** `void`

___
<a id="normalizejsonkeys"></a>

### `<Static>` normalizeJsonKeys

▸ **normalizeJsonKeys**(json: *`any`*): `void`

*Defined in [dictionaries.ts:206](https://github.com/kelmore5/javascript-utilities/blob/c0347fb/lib/dictionaries.ts#L206)*

Normalizes the keys within a json object

See [StringTools.normalizeString](_strings_.stringtools.md#normalizestring)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| json | `any` |  A json object |

**Returns:** `void`

___
<a id="output"></a>

### `<Static>` output

▸ **output**(json?: *`any`*, chars?: *`number`*): `void`

*Defined in [dictionaries.ts:554](https://github.com/kelmore5/javascript-utilities/blob/c0347fb/lib/dictionaries.ts#L554)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Optional` json | `any` | - |
| `Default value` chars | `number` |  Infinity |

**Returns:** `void`

___
<a id="override"></a>

### `<Static>` override

▸ **override**(json_a: *`any`*, json_b: *`any`*, keys?: *`string`[]*): `any`

*Defined in [dictionaries.ts:745](https://github.com/kelmore5/javascript-utilities/blob/c0347fb/lib/dictionaries.ts#L745)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| json_a | `any` |
| json_b | `any` |
| `Optional` keys | `string`[] |

**Returns:** `any`

___
<a id="reducejson"></a>

### `<Static>` reduceJson

▸ **reduceJson**(json: *`any`*, keys: *`string`[]*): `any`

*Defined in [dictionaries.ts:558](https://github.com/kelmore5/javascript-utilities/blob/c0347fb/lib/dictionaries.ts#L558)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| json | `any` |
| keys | `string`[] |

**Returns:** `any`

___
<a id="reducelist"></a>

### `<Static>` reduceList

▸ **reduceList**(json_array: *`any`[]*, keys: *`string`[]*): `any`

*Defined in [dictionaries.ts:566](https://github.com/kelmore5/javascript-utilities/blob/c0347fb/lib/dictionaries.ts#L566)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| json_array | `any`[] |
| keys | `string`[] |

**Returns:** `any`

___
<a id="regroupjsonarraybykey"></a>

### `<Static>` regroupJsonArrayByKey

▸ **regroupJsonArrayByKey**(json_array: *`any`[]*, key: *`string`*, key2?: *`string`*): `any`[]

*Defined in [dictionaries.ts:35](https://github.com/kelmore5/javascript-utilities/blob/c0347fb/lib/dictionaries.ts#L35)*

Takes an array of json objects and creates a dictionary tree from it based on the given keys.

Example:

json\_array: \[{key: key\_value, key2: key2\_value}, {key: second\_key_value, ...}, ...\]

key: key

returns: {key\_value: {key: key\_value, key2: key2\_value}, second\_key\_value: {key: second\_key_value, ...}, ...\]

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| json_array | `any`[] |  An array of json objects |
| key | `string` |  The key to be the root of the new json tree (must be within the json objects in the array) |
| `Optional` key2 | `string` |  Optional: A secondary key to be used to create a subroot (must be in the json objects in the array) |

**Returns:** `any`[]
A json tree representation of the given array with root key and subroot key2

___
<a id="regroupjsonarraybykeywithdupes"></a>

### `<Static>` regroupJsonArrayByKeyWithDupes

▸ **regroupJsonArrayByKeyWithDupes**(json_array: *`any`[]*, key: *`string`*): `any`[]

*Defined in [dictionaries.ts:66](https://github.com/kelmore5/javascript-utilities/blob/c0347fb/lib/dictionaries.ts#L66)*

Takes an array of json objects and creates a dictionary tree from it based on the given key, keeping any duplicate values it finds in an array

See [regroupJsonArrayByKey](_dictionaries_.dictionarytools.md#regroupjsonarraybykey) for more info

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| json_array | `any`[] |  An array of json objects |
| key | `string` |  The key to be the root of the new json tree (must be within the json objects in the array) |

**Returns:** `any`[]
A json tree representation of the given array

___
<a id="regroupjsonarraysbykey"></a>

### `<Static>` regroupJsonArraysByKey

▸ **regroupJsonArraysByKey**T(json_arrays: *`T`[][]*, regroup_names: *`string`[]*, regroup_key: *`string`*): `any`

*Defined in [dictionaries.ts:504](https://github.com/kelmore5/javascript-utilities/blob/c0347fb/lib/dictionaries.ts#L504)*

Takes an array of json objects and regroups each json in the array by the given grouping key and creates a new json output with the given regrouping names.

json\_arrays and regroup\_names must be the same length

Example: Input:

json\_ararys: \[\[{id: 1, a: 1}, {id: 2, b: 3}, {id: 1, c: 4}\], \[{id: 1, a: 3}, {id: 2, c: 7}\]\] (length: 2) regroup\_names: \['profile\_info', 'email\_info'\]

Output: { profile_info: { 1: \[ {id: 1, a: 1}, {id: 1, c: 4} \], 2: \[ {id: 2, b: 3} \] },

email_info: { 1: \[ {id: 1, a: 3} \],

```
2: [
  {id: 2, c: 7}
]
```

} }

**Type parameters:**

#### T :   `any` &#124; `Model`<`any`>

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| json_arrays | `T`[][] |  - |
| regroup_names | `string`[] |  - |
| regroup_key | `string` |  - |

**Returns:** `any`

___
<a id="regularizejsonarraykeys"></a>

### `<Static>` regularizeJsonArrayKeys

▸ **regularizeJsonArrayKeys**(json_array: *`any`[]*, keys_to_skip?: *`string`[]*): `void`

*Defined in [dictionaries.ts:225](https://github.com/kelmore5/javascript-utilities/blob/c0347fb/lib/dictionaries.ts#L225)*

Regularizes the keys with the json objects of an array of json objects

Regularize = replace underscore with space, title key - See [StringTools.regularizeString](_strings_.stringtools.md#regularizestring)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| json_array | `any`[] |  An array of json objects |
| `Optional` keys_to_skip | `string`[] |  Optional: Keys to skip when regularizing |

**Returns:** `void`

___
<a id="regularizejsonkeys"></a>

### `<Static>` regularizeJsonKeys

▸ **regularizeJsonKeys**(json: *`any`*, keys_to_skip?: *`string`[]*): `void`

*Defined in [dictionaries.ts:239](https://github.com/kelmore5/javascript-utilities/blob/c0347fb/lib/dictionaries.ts#L239)*

Regularizes the keys within the given json object

See [StringTools.regularizeString](_strings_.stringtools.md#regularizestring)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| json | `any` |  A json object |
| `Optional` keys_to_skip | `string`[] |  Optional: Keys to skip with the object |

**Returns:** `void`

___
<a id="removekeys"></a>

### `<Static>` removeKeys

▸ **removeKeys**(json: *`any`*, keys: *`string`[]*): `any`

*Defined in [dictionaries.ts:730](https://github.com/kelmore5/javascript-utilities/blob/c0347fb/lib/dictionaries.ts#L730)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| json | `any` |
| keys | `string`[] |

**Returns:** `any`

___
<a id="removekeysarray"></a>

### `<Static>` removeKeysArray

▸ **removeKeysArray**(json_array: *`any`[]*, keys: *`string`[]*): `any`[]

*Defined in [dictionaries.ts:753](https://github.com/kelmore5/javascript-utilities/blob/c0347fb/lib/dictionaries.ts#L753)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| json_array | `any`[] |
| keys | `string`[] |

**Returns:** `any`[]

___
<a id="removewherekeysnull"></a>

### `<Static>` removeWhereKeysNull

▸ **removeWhereKeysNull**T(jsons: *`T`[]*, keys: *`string`[]*): `T`[]

*Defined in [dictionaries.ts:781](https://github.com/kelmore5/javascript-utilities/blob/c0347fb/lib/dictionaries.ts#L781)*

**Type parameters:**

#### T :  `any`
**Parameters:**

| Param | Type |
| ------ | ------ |
| jsons | `T`[] |
| keys | `string`[] |

**Returns:** `T`[]

___
<a id="removewherenull"></a>

### `<Static>` removeWhereNull

▸ **removeWhereNull**T(json: *`T`*, all_empty_values?: *`boolean`*): `T`

*Defined in [dictionaries.ts:786](https://github.com/kelmore5/javascript-utilities/blob/c0347fb/lib/dictionaries.ts#L786)*

**Type parameters:**

#### T :  `any`
**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| json | `T` | - |
| `Default value` all_empty_values | `boolean` | false |

**Returns:** `T`

___
<a id="removewherenulls"></a>

### `<Static>` removeWhereNulls

▸ **removeWhereNulls**T(jsons: *`T`[]*, all_empty_values?: *`boolean`*): `T`[]

*Defined in [dictionaries.ts:767](https://github.com/kelmore5/javascript-utilities/blob/c0347fb/lib/dictionaries.ts#L767)*

**Type parameters:**

#### T :  `any`
**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| jsons | `T`[] | - |
| `Default value` all_empty_values | `boolean` | false |

**Returns:** `T`[]

___
<a id="replace"></a>

### `<Static>` replace

▸ **replace**(json_a: *`any`*, json_b: *`any`*, keys?: *`string`[]*): `any`

*Defined in [dictionaries.ts:615](https://github.com/kelmore5/javascript-utilities/blob/c0347fb/lib/dictionaries.ts#L615)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| json_a | `any` |
| json_b | `any` |
| `Optional` keys | `string`[] |

**Returns:** `any`

___
<a id="replacealljsonkeyslist"></a>

### `<Static>` replaceAllJsonKeysList

▸ **replaceAllJsonKeysList**(json_array: *`any`[]*, keys_to_grab: *`string`[]*, new_key_names: *`string`[]*): `any`[]

*Defined in [dictionaries.ts:277](https://github.com/kelmore5/javascript-utilities/blob/c0347fb/lib/dictionaries.ts#L277)*

Finds the given json keys (keys\_to\_grab) within each json object in an array of json objects (json\_array) and replaces them with new key names (new\_key_names)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| json_array | `any`[] |  An array of json objects |
| keys_to_grab | `string`[] |  The keys to replace inside the json objects |
| new_key_names | `string`[] |  The new keys to be used inside the json objects |

**Returns:** `any`[]
An array of json objects with said key replacements

___
<a id="replacejsonkeys"></a>

### `<Static>` replaceJsonKeys

▸ **replaceJsonKeys**(json: *`any`*, keys_to_grab: *`string`[]*, new_key_names: *`string`[]*): `any`[]

*Defined in [dictionaries.ts:359](https://github.com/kelmore5/javascript-utilities/blob/c0347fb/lib/dictionaries.ts#L359)*

Replaces the given keys to grab with new key names inside the given json object

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| json | `any` |  The json object |
| keys_to_grab | `string`[] |  The keys to replace |
| new_key_names | `string`[] |  The new keys to use |

**Returns:** `any`[]
The json object with said key replacements

___
<a id="replacekeyvalues"></a>

### `<Static>` replaceKeyValues

▸ **replaceKeyValues**(dest: * `any` &#124; `any`[]*, src: * `any` &#124; `any`[]*, dest_keys: *`string`[]*, src_keys: *`string`[]*, only_null?: *`boolean`*, with_count?: *`boolean`*):  `number` &#124; `any`

*Defined in [dictionaries.ts:302](https://github.com/kelmore5/javascript-utilities/blob/c0347fb/lib/dictionaries.ts#L302)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| dest |  `any` &#124; `any`[]| - |
| src |  `any` &#124; `any`[]| - |
| dest_keys | `string`[] | - |
| src_keys | `string`[] | - |
| `Default value` only_null | `boolean` | false |
| `Default value` with_count | `boolean` | false |

**Returns:**  `number` &#124; `any`

___
<a id="statcheckhelper"></a>

### `<Static>``<Private>` statCheckHelper

▸ **statCheckHelper**(json_array: *`any`[]*): [JSONStatsCheck](../interfaces/_dictionaries_.jsonstatscheck.md)

*Defined in [dictionaries.ts:897](https://github.com/kelmore5/javascript-utilities/blob/c0347fb/lib/dictionaries.ts#L897)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| json_array | `any`[] |

**Returns:** [JSONStatsCheck](../interfaces/_dictionaries_.jsonstatscheck.md)

___
<a id="stringify"></a>

### `<Static>` stringify

▸ **stringify**(json?: *`any`*, chars?: *`number`*): `string`

*Defined in [dictionaries.ts:546](https://github.com/kelmore5/javascript-utilities/blob/c0347fb/lib/dictionaries.ts#L546)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Optional` json | `any` | - |
| `Default value` chars | `number` |  Infinity |

**Returns:** `string`

___
<a id="stringifyatroot"></a>

### `<Static>` stringifyAtRoot

▸ **stringifyAtRoot**(json_array: *`any`[]*, ignore_num?: *`boolean`*): `any`[]

*Defined in [dictionaries.ts:529](https://github.com/kelmore5/javascript-utilities/blob/c0347fb/lib/dictionaries.ts#L529)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| json_array | `any`[] | - |
| `Default value` ignore_num | `boolean` | false |

**Returns:** `any`[]

___

