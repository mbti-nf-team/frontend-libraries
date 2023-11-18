import { DependencyList, useCallback, useRef } from 'react';

function useThrottleCallback<U extends unknown[] = []>(
  callback: (...args: U) => void,
  dependencyList: DependencyList,
  delay: number,
) {
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const throttledCallback = useCallback((...args: U) => {
    if (!timer.current) {
      timer.current = setTimeout(() => {
        callback(...args);
        timer.current = null;
      }, delay);
    }
  }, [...dependencyList, delay]);

  return throttledCallback;
}

export default useThrottleCallback;
