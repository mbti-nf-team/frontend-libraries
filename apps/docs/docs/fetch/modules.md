---
id: "modules"
title: "@nf-team/fetch - v0.0.0"
sidebar_label: "Exports"
sidebar_position: 0.5
custom_edit_url: null
---

## Interfaces

- [FetchApiRequest](interfaces/FetchApiRequest.md)

## Type Aliases

### Method

Ƭ **Method**: ``"get"`` \| ``"GET"`` \| ``"delete"`` \| ``"DELETE"`` \| ``"head"`` \| ``"HEAD"`` \| ``"options"`` \| ``"OPTIONS"`` \| ``"post"`` \| ``"POST"`` \| ``"put"`` \| ``"PUT"`` \| ``"patch"`` \| ``"PATCH"`` \| ``"purge"`` \| ``"PURGE"`` \| ``"link"`` \| ``"LINK"`` \| ``"unlink"`` \| ``"UNLINK"``

#### Defined in

[fetch.ts:3](https://github.com/mbti-nf-team/frontend-libraries/blob/35d6e12/packages/fetch/src/fetch.ts#L3)

## Functions

### fetchApi

▸ **fetchApi**\<`T`, `K`\>(`«destructured»`): `Promise`\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`FetchApiRequest`](interfaces/FetchApiRequest.md)\<`K`\> |

#### Returns

`Promise`\<`T`\>

#### Defined in

[fetch.ts:28](https://github.com/mbti-nf-team/frontend-libraries/blob/35d6e12/packages/fetch/src/fetch.ts#L28)

___

### paramsSerializer

▸ **paramsSerializer**\<`T`\>(`params`): `string`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `T` |

#### Returns

`string`

#### Defined in

[fetch.ts:23](https://github.com/mbti-nf-team/frontend-libraries/blob/35d6e12/packages/fetch/src/fetch.ts#L23)
