---
id: "components"
title: "Module: components"
sidebar_label: "components"
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

[packages/react/src/components/ClientOnly.tsx:23](https://github.com/mbti-nf-team/frontend-libraries/blob/c4262dc/packages/react/src/components/ClientOnly.tsx#L23)

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

[packages/react/src/components/DelayRenderComponent.tsx:11](https://github.com/mbti-nf-team/frontend-libraries/blob/c4262dc/packages/react/src/components/DelayRenderComponent.tsx#L11)

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

[packages/react/src/components/GlobalPortal.tsx:10](https://github.com/mbti-nf-team/frontend-libraries/blob/c4262dc/packages/react/src/components/GlobalPortal.tsx#L10)
