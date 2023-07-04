import { renderHook } from '@testing-library/react';

import useResizeViewportHeight from './useResizeViewportHeight';

describe('useResizeViewportHeight', () => {
  const useResizeViewportHeightHook = () => renderHook(useResizeViewportHeight);

  it('documentElement 전역 style에 "--vh"변수가 존재해야만 한다', () => {
    useResizeViewportHeightHook();

    expect(document.documentElement.style).toContain('--vh');
  });
});
