---
id: "nft_team_react"
title: "Module: @nft-team/react"
sidebar_label: "@nft-team/react"
sidebar_position: 0
custom_edit_url: null
---

## Functions

### ClientOnly

▸ **ClientOnly**(`«destructured»`): `ReactElement` \| ``null``

**`Description`**

Component의 mount 여부를 확인하여 mount가 된 경우, Component를 render해줍니다.
mount되지 않은 경우에는 Component를 render해주지 않습니다.

SSR 환경에서 실제로 컴포넌트가 브라우저에서 mount 된 이후에만 해당 Component를 보여주고 싶을때 사용합니다.
(SSR 환경에서 Hydration 오류로 인해서 에러가 발생하는 문제를 해결합니다.)

**`Example`**

```tsx
function ClintOnlyComponent() {
 return (
   <ClientOnly>
     <div>Render only client environment</div>
   </ClientOnly>
 );
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `children?` | `ReactNode` |

#### Returns

`ReactElement` \| ``null``

#### Defined in

[packages/react/src/components/ClientOnly.tsx:23](https://github.com/mbti-nf-team/frontend-libraries/blob/e94e3e1/packages/react/src/components/ClientOnly.tsx#L23)

___

### DelayRenderComponent

▸ **DelayRenderComponent**(`«destructured»`): ``null`` \| `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `PropsWithChildren`<`Props`\> |

#### Returns

``null`` \| `Element`

#### Defined in

[packages/react/src/components/DelayRenderComponent.tsx:11](https://github.com/mbti-nf-team/frontend-libraries/blob/e94e3e1/packages/react/src/components/DelayRenderComponent.tsx#L11)

___

### GlobalPortal

▸ **GlobalPortal**(`«destructured»`): ``null`` \| `ReactPortal`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `PropsWithChildren`<`Props`\> |

#### Returns

``null`` \| `ReactPortal`

#### Defined in

[packages/react/src/components/GlobalPortal.tsx:10](https://github.com/mbti-nf-team/frontend-libraries/blob/e94e3e1/packages/react/src/components/GlobalPortal.tsx#L10)

___

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

[packages/react/src/hooks/useActionKeyEvent.ts:6](https://github.com/mbti-nf-team/frontend-libraries/blob/e94e3e1/packages/react/src/hooks/useActionKeyEvent.ts#L6)

___

### useBoolean

▸ **useBoolean**(`initialValue?`): [`boolean`, () => `void`, () => `void`, (`nextValue?`: `boolean`) => `void`]

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `initialValue` | `boolean` | `false` |

#### Returns

[`boolean`, () => `void`, () => `void`, (`nextValue?`: `boolean`) => `void`]

#### Defined in

[packages/react/src/hooks/useBoolean.ts:3](https://github.com/mbti-nf-team/frontend-libraries/blob/e94e3e1/packages/react/src/hooks/useBoolean.ts#L3)

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

[packages/react/src/hooks/useDebounce.ts:3](https://github.com/mbti-nf-team/frontend-libraries/blob/e94e3e1/packages/react/src/hooks/useDebounce.ts#L3)

___

### useIsMounted

▸ **useIsMounted**(): `boolean`

**`Description`**

Component의 mount 여부를 확인하는 hook 입니다.
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

[packages/react/src/hooks/useIsMounted.ts:18](https://github.com/mbti-nf-team/frontend-libraries/blob/e94e3e1/packages/react/src/hooks/useIsMounted.ts#L18)

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

### useResizeViewportHeight

▸ **useResizeViewportHeight**(): `void`

#### Returns

`void`

#### Defined in

[packages/react/src/hooks/useResizeViewportHeight.ts:3](https://github.com/mbti-nf-team/frontend-libraries/blob/e94e3e1/packages/react/src/hooks/useResizeViewportHeight.ts#L3)

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

[packages/react/src/hooks/useTimeout.ts:5](https://github.com/mbti-nf-team/frontend-libraries/blob/e94e3e1/packages/react/src/hooks/useTimeout.ts#L5)
