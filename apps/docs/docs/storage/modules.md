---
id: "modules"
title: "@nf-team/storage - v1.1.0"
sidebar_label: "Exports"
sidebar_position: 0.5
custom_edit_url: null
---

## Functions

### getLocalStorageItem

▸ **getLocalStorageItem**\<`T`\>(`key`): ``null`` \| `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

``null`` \| `T`

#### Defined in

[localStorage.ts:5](https://github.com/mbti-nf-team/frontend-libraries/blob/35d6e12/packages/storage/src/localStorage.ts#L5)

___

### getSessionStorageItem

▸ **getSessionStorageItem**\<`T`\>(`key`): ``null`` \| `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

``null`` \| `T`

#### Defined in

[sessionStorage.ts:5](https://github.com/mbti-nf-team/frontend-libraries/blob/35d6e12/packages/storage/src/sessionStorage.ts#L5)

___

### removeLocalStorageItem

▸ **removeLocalStorageItem**(`key`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`void`

#### Defined in

[localStorage.ts:20](https://github.com/mbti-nf-team/frontend-libraries/blob/35d6e12/packages/storage/src/localStorage.ts#L20)

___

### removeSessionStorageItem

▸ **removeSessionStorageItem**(`key`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`void`

#### Defined in

[sessionStorage.ts:20](https://github.com/mbti-nf-team/frontend-libraries/blob/35d6e12/packages/storage/src/sessionStorage.ts#L20)

___

### setLocalStorageItem

▸ **setLocalStorageItem**(`key`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `unknown` |

#### Returns

`void`

#### Defined in

[localStorage.ts:1](https://github.com/mbti-nf-team/frontend-libraries/blob/35d6e12/packages/storage/src/localStorage.ts#L1)

___

### setSessionStorageItem

▸ **setSessionStorageItem**(`key`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `unknown` |

#### Returns

`void`

#### Defined in

[sessionStorage.ts:1](https://github.com/mbti-nf-team/frontend-libraries/blob/35d6e12/packages/storage/src/sessionStorage.ts#L1)
