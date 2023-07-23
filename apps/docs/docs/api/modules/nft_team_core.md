---
id: "nft_team_core"
title: "Module: @nft-team/core"
sidebar_label: "@nft-team/core"
sidebar_position: 0
custom_edit_url: null
---

## Functions

### checkEmpty

▸ **checkEmpty**<`T`\>(`value?`): `T`[]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | `T`[] |

#### Returns

`T`[]

#### Defined in

[utils.ts:44](https://github.com/mbti-nf-team/frontend-libraries/blob/47d5b08/packages/core/src/utils.ts#L44)

___

### checkNumber

▸ **checkNumber**(`value?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | ``null`` \| `number` |

#### Returns

`number`

#### Defined in

[utils.ts:26](https://github.com/mbti-nf-team/frontend-libraries/blob/47d5b08/packages/core/src/utils.ts#L26)

___

### emptyAThenB

▸ **emptyAThenB**(`b`, `a?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `string` |
| `a?` | ``null`` \| `string` |

#### Returns

`string`

#### Defined in

[utils.ts:34](https://github.com/mbti-nf-team/frontend-libraries/blob/47d5b08/packages/core/src/utils.ts#L34)

___

### generateArrayOfNumber

▸ **generateArrayOfNumber**(`length`): `number`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `length` | `number` |

#### Returns

`number`[]

#### Defined in

[utils.ts:64](https://github.com/mbti-nf-team/frontend-libraries/blob/47d5b08/packages/core/src/utils.ts#L64)

___

### isEmpty

▸ **isEmpty**<`T`\>(`value?`): `boolean`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | `T`[] |

#### Returns

`boolean`

#### Defined in

[utils.ts:52](https://github.com/mbti-nf-team/frontend-libraries/blob/47d5b08/packages/core/src/utils.ts#L52)

___

### removeNullable

▸ **removeNullable**(`value?`, `replacementValue?`): `string`

**`Description`**

`null`이나 `undefined`값이 존재하는 경우 빈문자열로 대체하거나 새로운 문자열로 대체합니다. (오로지 `string` 타입으로 반환)

```ts
const value = undefined;
const result = removeNullable(value, 'newValue');
```

**`Example`**

```ts
console.log(result); // 'newValue';
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value?` | ``null`` \| `string` | 첫 번째 인자 `string` \| `null` \| `undefined` |
| `replacementValue?` | `string` | 두 번째 인자에 값이 존재하는 경우 첫 번째 인자가 `null` 또는 `undefined`인 경우 두번째 인자로 문자열 대체 |

#### Returns

`string`

#### Defined in

[utils.ts:14](https://github.com/mbti-nf-team/frontend-libraries/blob/47d5b08/packages/core/src/utils.ts#L14)

___

### trueOrFalse

▸ **trueOrFalse**(`value?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | ``null`` \| `string` \| `number` \| `boolean` |

#### Returns

`boolean`

#### Defined in

[utils.ts:36](https://github.com/mbti-nf-team/frontend-libraries/blob/47d5b08/packages/core/src/utils.ts#L36)
