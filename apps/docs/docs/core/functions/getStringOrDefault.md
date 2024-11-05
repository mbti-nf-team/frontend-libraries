# Function: getStringOrDefault()

> **getStringOrDefault**(`value`?, `replacementValue`?): `string`

## Parameters

• **value?**: `null` \| `string`

첫 번째 인자 `string` | `null` | `undefined`

• **replacementValue?**: `string`

두 번째 인자에 값이 존재하는 경우 첫 번째 인자가 `null` 또는 `undefined`인 경우 두번째 인자로 문자열 대체

## Returns

`string`

## Description

`null`이나 `undefined`값이 존재하는 경우 빈문자열로 대체하거나 새로운 문자열로 대체합니다. (오로지 `string` 타입으로 반환)

```ts
const value = undefined;
const result = removeNullable(value, 'newValue');
```

## Example

```ts
console.log(result); // 'newValue';
```

## Defined in

[utils.ts:14](https://github.com/mbti-nf-team/frontend-libraries/blob/3916286534b50dbdcab9c2145adbaa464419b886/packages/core/src/utils.ts#L14)
