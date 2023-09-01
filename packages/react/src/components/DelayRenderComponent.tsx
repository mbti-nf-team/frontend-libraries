import { PropsWithChildren, useEffect, useRef } from 'react';

import useBoolean from '../hooks/useBoolean';

interface Props {
  isVisible: boolean;
  initialRenderState?: boolean;
  unRenderDelay?: number;
  renderDelay?: number;
}

function DelayRenderComponent({
  isVisible, unRenderDelay = 400, renderDelay = 0, initialRenderState = false, children,
}: PropsWithChildren<Props>) {
  const [isRender, onRender, unRender] = useBoolean(initialRenderState);
  const unRenderTimer = useRef<ReturnType<typeof setTimeout>>();
  const renderTimer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    if (isVisible) {
      renderTimer.current = setTimeout(() => {
        onRender();
        renderTimer.current = undefined;
      }, renderDelay);
    }

    return () => {
      clearTimeout(renderTimer.current);
    };
  }, [onRender, renderDelay, isVisible]);

  useEffect(() => {
    if (!isVisible) {
      unRenderTimer.current = setTimeout(() => {
        unRender();
        unRenderTimer.current = undefined;
      }, unRenderDelay);
    }

    return () => {
      clearTimeout(unRenderTimer.current);
    };
  }, [unRender, unRenderDelay, isVisible]);

  if (!isRender) {
    return null;
  }

  return (
    <>{children}</>
  );
}

export default DelayRenderComponent;
