[@kelmore5/utilities](../README.md) > ["utilities"](../modules/_utilities_.md) > [Utilities](../classes/_utilities_.utilities.md)

# Class: Utilities

General functions for javascript

## Hierarchy

**Utilities**

## Index

### Methods

* [calcDate](_utilities_.utilities.md#calcdate)
* [createLevCompare](_utilities_.utilities.md#createlevcompare)
* [delay](_utilities_.utilities.md#delay)
* [httpsRequest](_utilities_.utilities.md#httpsrequest)
* [logPromise](_utilities_.utilities.md#logpromise)
* [output](_utilities_.utilities.md#output)
* [removeHTMLTags](_utilities_.utilities.md#removehtmltags)
* [runScript](_utilities_.utilities.md#runscript)
* [stringify](_utilities_.utilities.md#stringify)

---

## Methods

<a id="calcdate"></a>

### `<Static>` calcDate

▸ **calcDate**(date1: *`Date`*, date2: *`Date`*): `object`

*Defined in utilities.ts:31*

Calculates the difference in years, months, and days between two given dates

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| date1 | `Date` |  The first date |
| date2 | `Date` |  The second date |

**Returns:** `object`
A json object containing
key values days, months, and years - ie the difference between the two dates

___
<a id="createlevcompare"></a>

### `<Static>` createLevCompare

▸ **createLevCompare**(compare_array: *`string`[]*): `any`

*Defined in utilities.ts:106*

**Parameters:**

| Param | Type |
| ------ | ------ |
| compare_array | `string`[] |

**Returns:** `any`

___
<a id="delay"></a>

### `<Static>` delay

▸ **delay**(milliseconds: *`number`*): `Promise`<`void`>

*Defined in utilities.ts:95*

**Parameters:**

| Param | Type |
| ------ | ------ |
| milliseconds | `number` |

**Returns:** `Promise`<`void`>

___
<a id="httpsrequest"></a>

### `<Static>` httpsRequest

▸ **httpsRequest**T(props: * `string` &#124; `https.RequestOptions`*): `Promise`<`T`>

*Defined in utilities.ts:118*

**Type parameters:**

#### T :  `any`
**Parameters:**

| Param | Type |
| ------ | ------ |
| props |  `string` &#124; `https.RequestOptions`|

**Returns:** `Promise`<`T`>

___
<a id="logpromise"></a>

### `<Static>` logPromise

▸ **logPromise**(promise: *`Promise`<`any`>*): `void`

*Defined in utilities.ts:46*

Mostly used for debugging/testing. Runs a promise and logs the result or error

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| promise | `Promise`<`any`> |  A promise to be run |

**Returns:** `void`

___
<a id="output"></a>

### `<Static>` output

▸ **output**(output: *`any`*, substring?: *`number`*): `void`

*Defined in utilities.ts:19*

**Parameters:**

| Param | Type |
| ------ | ------ |
| output | `any` |
| `Optional` substring | `number` |

**Returns:** `void`

___
<a id="removehtmltags"></a>

### `<Static>` removeHTMLTags

▸ **removeHTMLTags**(html: *`string`*): `string`

*Defined in utilities.ts:55*

**Parameters:**

| Param | Type |
| ------ | ------ |
| html | `string` |

**Returns:** `string`

___
<a id="runscript"></a>

### `<Static>` runScript

▸ **runScript**(promise: *`Promise`<`any`>*, exit_after?: *`boolean`*, message_text?: *`string`*): `void`

*Defined in utilities.ts:101*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| promise | `Promise`<`any`> | - |
| `Default value` exit_after | `boolean` | false |
| `Default value` message_text | `string` | &quot;Script finished&quot; |

**Returns:** `void`

___
<a id="stringify"></a>

### `<Static>` stringify

▸ **stringify**(datum: *`any`*): `string`

*Defined in utilities.ts:17*

**Parameters:**

| Param | Type |
| ------ | ------ |
| datum | `any` |

**Returns:** `string`

___

