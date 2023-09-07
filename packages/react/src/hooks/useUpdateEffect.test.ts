import { renderHook } from '@testing-library/react';

import useIsFirstRender from './useIsFirstRender';
import useUpdateEffect from './useUpdateEffect';

jest.mock('./useIsFirstRender');

describe('useUpdateEffect', () => {
  const effectCallback = jest.fn();

  beforeEach(() => {
    (useIsFirstRender as jest.Mock).mockImplementation(() => given.isFirstRender);
    jest.clearAllMocks();
  });

  const useUpdateEffectHook = () => renderHook(() => useUpdateEffect(effectCallback, []));

  context('첫 랜더링인 경우', () => {
    given('isFirstRender', () => true);

    it('effect callback 함수는 호출되지 않아만한다', () => {
      useUpdateEffectHook();

      expect(effectCallback).not.toHaveBeenCalled();
    });
  });

  context('첫 렌더링이 아닌 경우', () => {
    given('isFirstRender', () => false);

    it('첫 랜더링이 아닌 경우 effect callback 함수는 호출되어야만 한다', () => {
      useUpdateEffectHook();

      expect(effectCallback).toHaveBeenCalledTimes(1);
    });
  });
});
