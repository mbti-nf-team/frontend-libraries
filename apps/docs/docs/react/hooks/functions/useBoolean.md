# Function: useBoolean()

> **useBoolean**(`initialValue`): [`boolean`, () => `void`, () => `void`, (`nextValue`?) => `void`]

## Parameters

• **initialValue**: `boolean` = `false`

초기값을 세팅

## Returns

[`boolean`, () => `void`, () => `void`, (`nextValue`?) => `void`]

## Description

`boolean` 타입으로만 반환하는 `useState`를 쉽게 사용할 수 있는 hook 입니다.

## Example

```ts
const [isOpen, openModal, closeModal, toggleModal] = useBoolean();
```

## Defined in

[packages/react/src/hooks/useBoolean.ts:13](https://github.com/mbti-nf-team/frontend-libraries/blob/08b9d43288f72c3d793bb8f598c64f689d769c2e/packages/react/src/hooks/useBoolean.ts#L13)