import { useEffect, useRef } from 'react';

import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect';

function useTimeout(callback: () => void, delay: number | null) {
  const savedCallback = useRef(callback);

  useIsomorphicLayoutEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!delay && delay !== 0) {
      return;
    }

    const id = setTimeout(() => savedCallback.current(), delay);

    // eslint-disable-next-line consistent-return
    return () => clearTimeout(id);
  }, [delay]);
}

export default useTimeout;
