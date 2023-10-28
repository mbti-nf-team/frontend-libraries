import { useCallback, useRef } from 'react';

function useThrottleCallback<U extends never[]>(
  callback: (...args: U) => void,
  delay: number,
  dependencyList: any[],
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
