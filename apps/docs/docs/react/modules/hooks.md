---
id: "hooks"
title: "Module: hooks"
sidebar_label: "hooks"
sidebar_position: 0
custom_edit_url: null
---

## Functions

### useActionKeyEvent

▸ **useActionKeyEvent**<`T`, `U`\>(`targetKeys`, `callback?`): `ActionKeyEvent`<`T`, `U`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `Element` |
| `U` | extends `unknown`[] = [] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetKeys` | `string` \| `string`[] |
| `callback?` | (`event`: `KeyboardEvent`<`T`\>, ...`args`: `U`) => `void` |

#### Returns

`ActionKeyEvent`<`T`, `U`\>

#### Defined in

[packages/react/src/hooks/useActionKeyEvent.ts:6](https://github.com/mbti-nf-team/frontend-libraries/blob/cd9551a/packages/react/src/hooks/useActionKeyEvent.ts#L6)

___

### useBoolean

▸ **useBoolean**(`initialValue?`): [`boolean`, () => `void`, () => `void`, (`nextValue?`: `boolean`) => `void`]

**`Description`**

`boolean` 타입으로만 반환하는 `useState`를 쉽게 사용할 수 있는 hook 입니다.

**`Example`**

```ts
const [isOpen, openModal, closeModal, toggleModal] = useBoolean();
```

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `initialValue` | `boolean` | `false` | 초기값을 세팅 |

#### Returns

[`boolean`, () => `void`, () => `void`, (`nextValue?`: `boolean`) => `void`]

#### Defined in

[packages/react/src/hooks/useBoolean.ts:13](https://github.com/mbti-nf-team/frontend-libraries/blob/cd9551a/packages/react/src/hooks/useBoolean.ts#L13)

___

### useDebounce

▸ **useDebounce**<`T`\>(`value`, `delay?`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `delay?` | `number` |

#### Returns

`T`

#### Defined in

[packages/react/src/hooks/useDebounce.ts:3](https://github.com/mbti-nf-team/frontend-libraries/blob/cd9551a/packages/react/src/hooks/useDebounce.ts#L3)

___

### useIsMounted

▸ **useIsMounted**(): `boolean`

**`Description`**

Component의 mount 여부를 확인하는 hook 입니다. <br />
SSR 환경에서 실제로 컴포넌트가 브라우저에서 mount 된 이후에 어떤 동작을 실행하기 위해서 사용합니다.

**`Example`**

```ts
const isMounted = useIsMounted();

useEffect(() => {
  if (isMounted) {
    return;
  }
}, [isMounted]);

```

#### Returns

`boolean`

#### Defined in

[packages/react/src/hooks/useIsMounted.ts:18](https://github.com/mbti-nf-team/frontend-libraries/blob/cd9551a/packages/react/src/hooks/useIsMounted.ts#L18)

___

### useIsomorphicLayoutEffect

▸ **useIsomorphicLayoutEffect**(`effect`, `deps?`): `void`

Accepts a function that contains imperative, possibly effectful code.

**`Version`**

16.8.0

**`See`**

https://react.dev/reference/react/useEffect

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `effect` | `EffectCallback` | Imperative function that can return a cleanup function |
| `deps?` | `DependencyList` | If present, effect will only activate if the values in the list change. |

#### Returns

`void`

#### Defined in

node_modules/@types/react/ts5.0/index.d.ts:1064

___

### useLessThenScrollY

▸ **useLessThenScrollY**(`targetScrollY?`, `delay?`): `boolean`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `targetScrollY` | `number` | `0` |
| `delay` | `number` | `200` |

#### Returns

`boolean`

#### Defined in

[packages/react/src/hooks/useLessThenScrollY.ts:5](https://github.com/mbti-nf-team/frontend-libraries/blob/cd9551a/packages/react/src/hooks/useLessThenScrollY.ts#L5)

___

### useResizeViewportHeight

▸ **useResizeViewportHeight**(): `void`

**`Description`**

스크롤을 포함한 window의 높이를 가져와 window 크기를 resize해줍니다. <br />
모바일 환경의 웹뷰에서 디바이스 및 브라우저 환경에 따라 크기가 달라져 불필요한 스크롤이 생길 수 있습니다. 이때 이 hook을 사용하면 유용합니다.

**`Example`**

```tsx
function SampleComponent() {
  useResizeViewportHeight();

  return <div>sample text</div>
}

```

#### Returns

`void`

#### Defined in

[packages/react/src/hooks/useResizeViewportHeight.ts:17](https://github.com/mbti-nf-team/frontend-libraries/blob/cd9551a/packages/react/src/hooks/useResizeViewportHeight.ts#L17)

___

### useThrottleCallback

▸ **useThrottleCallback**<`U`\>(`callback`, `delay`): (...`args`: `U`) => `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends `never`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (...`args`: `U`) => `void` |
| `delay` | `number` |

#### Returns

`fn`

▸ (`...args`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `U` |

##### Returns

`void`

#### Defined in

[packages/react/src/hooks/useThrottleCallback.ts:3](https://github.com/mbti-nf-team/frontend-libraries/blob/cd9551a/packages/react/src/hooks/useThrottleCallback.ts#L3)

___

### useTimeout

▸ **useTimeout**(`callback`, `delay`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | () => `void` |
| `delay` | ``null`` \| `number` |

#### Returns

`void`

#### Defined in

[packages/react/src/hooks/useTimeout.ts:5](https://github.com/mbti-nf-team/frontend-libraries/blob/cd9551a/packages/react/src/hooks/useTimeout.ts#L5)
