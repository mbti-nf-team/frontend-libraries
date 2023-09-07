import { act, renderHook } from '@testing-library/react';

import useEffectOnce from './useEffectOnce';

describe('useEffectOnce', () => {
  const effectCallback = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const useEffectOnceHook = () => renderHook(() => useEffectOnce(effectCallback));

  it('effect callback 함수가 1번 호출되어야만 한다', () => {
    useEffectOnceHook();

    expect(effectCallback).toHaveBeenCalledTimes(1);
  });

  it('rendering이 여러번 발생해도 effect callback 함수가 1번 호출되어야만 한다', () => {
    const { rerender } = useEffectOnceHook();

    act(() => {
      rerender();
    });

    expect(effectCallback).toHaveBeenCalledTimes(1);
  });
});
