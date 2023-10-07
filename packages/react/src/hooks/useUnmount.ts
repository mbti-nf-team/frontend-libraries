import { useRef } from 'react';

import useEffectOnce from './useEffectOnce';

function useUnmount(fn: () => void) {
  const fnRef = useRef(fn);

  // NOTE - ref 각 렌더를 업데이트하여 변경하면 최신 콜백이 실행
  fnRef.current = fn;

  useEffectOnce(() => () => fnRef.current());
}

export default useUnmount;
