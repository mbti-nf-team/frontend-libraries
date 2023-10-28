import { useCallback, useRef } from 'react';

function useThrottleCallback<U extends never[]>(
  callback: (...args: U) => void,
  dependencyList: any[],
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
