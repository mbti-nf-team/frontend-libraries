import { PropsWithChildren } from 'react';
import ReactDOM from 'react-dom';

import useIsMounted from '../hooks/useIsMounted';

interface Props {
  elementId?: string;
}

/**
 * @description 부모 컴포넌트의 DOM 외부에 존재하는 DOM 노드에 렌더링 할 수 있게 해주는
 * `ReactDOM.createPortal`를 이용해 컴포넌트를 렌더링해줍니다. <br />
 * 공통적인 UI(모달, 팝업, 알림 등)나 부모 컴포넌트에
 * `overflow: hidden`, `z-index`와 같은 스타일이 있을 때 부모 엘리먼트에 의존적이지 않아야하는 경우 유용합니다.
 *
 * @example
 * ```html title="html"
 * <div id="portal-container" />
 * ```
 *
 * ```tsx title="tsx"
 * function SampleComponent() {
 *
 *  return (
 *    <GlobalPortal elementId="portal-container">
 *      <div>Render component</div>
 *    </GlobalPortal>
 *  );
 * }
 * ```
 *
 * @param elementId - 부모 엘리먼트가 아닌 다른 DOM 트리의 elementId값
 */
function GlobalPortal({ elementId = 'portal-container', children }: PropsWithChildren<Props>) {
  const isMounted = useIsMounted();

  if (!isMounted) {
    return null;
  }

  const portalRoot = document.getElementById(elementId);

  if (!portalRoot) {
    return null;
  }

  return ReactDOM.createPortal(children, portalRoot);
}

export default GlobalPortal;
