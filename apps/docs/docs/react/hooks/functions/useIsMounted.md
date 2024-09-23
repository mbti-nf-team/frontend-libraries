# Function: useIsMounted()

> **useIsMounted**(): `boolean`

## Returns

`boolean`

## Description

Component의 mount 여부를 확인하는 hook 입니다. <br />
SSR 환경에서 실제로 컴포넌트가 브라우저에서 mount 된 이후에 어떤 동작을 실행하기 위해서 사용합니다.

## Example

```ts
const isMounted = useIsMounted();

useEffect(() => {
  if (isMounted) {
    return;
  }
}, [isMounted]);

```

## Defined in

[packages/react/src/hooks/useIsMounted.ts:18](https://github.com/mbti-nf-team/frontend-libraries/blob/08b9d43288f72c3d793bb8f598c64f689d769c2e/packages/react/src/hooks/useIsMounted.ts#L18)
