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
mount되지 않은 경우에는 Component를 render해주지 않습니다. <br />
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

[packages/react/src/components/ClientOnly.tsx:22](https://github.com/mbti-nf-team/frontend-libraries/blob/ba28104/packages/react/src/components/ClientOnly.tsx#L22)

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

[packages/react/src/components/DelayRenderComponent.tsx:11](https://github.com/mbti-nf-team/frontend-libraries/blob/ba28104/packages/react/src/components/DelayRenderComponent.tsx#L11)

___

### GlobalPortal

▸ **GlobalPortal**(`elementId`): ``null`` \| `ReactPortal`

**`Description`**

부모 컴포넌트의 DOM 외부에 존재하는 DOM 노드에 렌더링 할 수 있게 해주는
`ReactDOM.createPortal`를 이용해 컴포넌트를 렌더링해줍니다. <br />
공통적인 UI(모달, 팝업, 알림 등)나 부모 컴포넌트에
`overflow: hidden`, `z-index`와 같은 스타일이 있을 때 부모 엘리먼트에 의존적이지 않아야하는 경우 유용합니다.

**`Example`**

```html title="html"
<div id="portal-container" />
```

```tsx title="tsx"
function SampleComponent() {

 return (
   <GlobalPortal elementId="portal-container">
     <div>Render component</div>
   </GlobalPortal>
 );
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `elementId` | `PropsWithChildren`<`Props`\> | 부모 엘리먼트가 아닌 다른 DOM 트리의 elementId값 |

#### Returns

``null`` \| `ReactPortal`

#### Defined in

[packages/react/src/components/GlobalPortal.tsx:34](https://github.com/mbti-nf-team/frontend-libraries/blob/ba28104/packages/react/src/components/GlobalPortal.tsx#L34)
