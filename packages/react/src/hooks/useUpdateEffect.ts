import { DependencyList, EffectCallback, useEffect } from 'react';

import useIsFirstRender from './useIsFirstRender';

function useUpdateEffect(effect: EffectCallback, deps?: DependencyList) {
  const isFirst = useIsFirstRender();

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (!isFirst) {
      return effect();
    }
  }, deps);
}

export default useUpdateEffect;
