import { act, renderHook } from '@testing-library/react';

import useUnmount from './useUnmount';

describe('useUnmount', () => {
  const effectCallback = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const useUnmountHook = () => renderHook(() => useUnmount(effectCallback));

  it('unmount되면 콜백함수가 호출되어야만 한다', () => {
    const { unmount } = useUnmountHook();

    act(() => {
      unmount();
    });

    expect(effectCallback).toHaveBeenCalledTimes(1);
  });
});
