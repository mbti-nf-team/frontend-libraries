import { EffectCallback, useEffect } from 'react';

function useEffectOnce(effect: EffectCallback) {
  useEffect(effect, []);
}

export default useEffectOnce;
