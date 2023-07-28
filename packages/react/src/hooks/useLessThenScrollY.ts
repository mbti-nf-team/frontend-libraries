import { useCallback, useEffect, useState } from 'react';

import useThrottleCallback from './useThrottleCallback';

function useLessThenScrollY(targetScrollY = 0, delay = 200): boolean {
  const [isLessThenScrollY, setIsLessThenScrollY] = useState<boolean>(true);

  const handleScrollAction = useCallback(
    () => setIsLessThenScrollY(window.scrollY <= targetScrollY),
    [targetScrollY],
  );

  const throttledCallback = useThrottleCallback(handleScrollAction, delay);

  useEffect(() => {
    window.addEventListener('scroll', throttledCallback);

    return () => window.removeEventListener('scroll', throttledCallback);
  }, [throttledCallback]);

  return isLessThenScrollY;
}

export default useLessThenScrollY;
