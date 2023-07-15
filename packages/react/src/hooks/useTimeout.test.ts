import { act, renderHook } from '@testing-library/react';

import useTimeout from './useTimeout';

describe('useTimeout()', () => {
  const callback = jest.fn();

  beforeEach(() => {
    jest.useFakeTimers();
    callback.mockClear();
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  it('should call the callback after 1 min', () => {
    const delay = 60000;

    renderHook(() => useTimeout(callback, delay));

    expect(callback).not.toHaveBeenCalled();

    act(() => {
      jest.advanceTimersByTime(delay);
    });

    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('should not do anything if "delay" is null', () => {
    const delay = null;

    renderHook(() => useTimeout(callback, delay));

    expect(callback).not.toHaveBeenCalled();

    act(() => {
      jest.runAllTimers();
    });

    expect(callback).not.toHaveBeenCalled();
  });
});
