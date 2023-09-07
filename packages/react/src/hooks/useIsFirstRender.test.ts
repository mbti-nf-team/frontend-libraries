import { act, renderHook } from '@testing-library/react';

import useIsFirstRender from './useIsFirstRender';

describe('useIsFirstRender', () => {
  const useIsFirstRenderHook = () => renderHook(useIsFirstRender);

  context('첫 렌더링인 경우', () => {
    it('true를 반환해야만 한다', () => {
      const { result } = useIsFirstRenderHook();

      expect(result.current).toBe(true);
    });
  });

  context('첫 렌더링이 아닌 경우', () => {
    it('false를 반환해야만 한다', () => {
      const { result, rerender } = useIsFirstRenderHook();

      act(() => {
        rerender();
      });

      expect(result.current).toBe(false);
    });
  });
});
