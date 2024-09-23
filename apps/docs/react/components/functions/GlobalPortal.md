# Function: GlobalPortal()

> **GlobalPortal**(`elementId`): `null` \| `ReactPortal`

## Parameters

• **elementId**: `PropsWithChildren`\<`Props`\>

부모 엘리먼트가 아닌 다른 DOM 트리의 elementId값

## Returns

`null` \| `ReactPortal`

## Description

부모 컴포넌트의 DOM 외부에 존재하는 DOM 노드에 렌더링 할 수 있게 해주는
`ReactDOM.createPortal`를 이용해 컴포넌트를 렌더링해줍니다. <br />
공통적인 UI(모달, 팝업, 알림 등)나 부모 컴포넌트에
`overflow: hidden`, `z-index`와 같은 스타일이 있을 때 부모 엘리먼트에 의존적이지 않아야하는 경우 유용합니다.

## Example

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

## Defined in

[packages/react/src/components/GlobalPortal.tsx:34](https://github.com/mbti-nf-team/frontend-libraries/blob/808e2257613043e0b3668dbe433b6914a17272db/packages/react/src/components/GlobalPortal.tsx#L34)
