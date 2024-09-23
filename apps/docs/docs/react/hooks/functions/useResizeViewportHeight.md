# Function: useResizeViewportHeight()

> **useResizeViewportHeight**(): `void`

## Returns

`void`

## Description

스크롤을 포함한 window의 높이를 가져와 window 크기를 resize해줍니다. <br />
모바일 환경의 웹뷰에서 디바이스 및 브라우저 환경에 따라 크기가 달라져 불필요한 스크롤이 생길 수 있습니다. 이때 이 hook을 사용하면 유용합니다.

## Example

```tsx
function SampleComponent() {
  useResizeViewportHeight();

  return <div>sample text</div>
}

```

## Defined in

[packages/react/src/hooks/useResizeViewportHeight.ts:17](https://github.com/mbti-nf-team/frontend-libraries/blob/08b9d43288f72c3d793bb8f598c64f689d769c2e/packages/react/src/hooks/useResizeViewportHeight.ts#L17)
