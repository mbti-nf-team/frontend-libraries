# Function: useIsomorphicLayoutEffect()

> **useIsomorphicLayoutEffect**(`effect`, `deps`?): `void`

Accepts a function that contains imperative, possibly effectful code.

## Parameters

• **effect**: `EffectCallback`

Imperative function that can return a cleanup function

• **deps?**: `DependencyList`

If present, effect will only activate if the values in the list change.

## Returns

`void`

## Version

16.8.0

## See

[https://react.dev/reference/react/useEffect](https://react.dev/reference/react/useEffect)

## Defined in

[packages/react/src/hooks/useIsomorphicLayoutEffect.ts:3](https://github.com/mbti-nf-team/frontend-libraries/blob/08b9d43288f72c3d793bb8f598c64f689d769c2e/packages/react/src/hooks/useIsomorphicLayoutEffect.ts#L3)
