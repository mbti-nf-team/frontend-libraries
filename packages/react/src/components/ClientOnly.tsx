import { PropsWithChildren, ReactElement } from 'react';

import useIsMounted from '../hooks/useIsMounted';

/**
 * @description Component의 mount 여부를 확인하여 mount가 된 경우, Component를 render해줍니다.
 * mount되지 않은 경우에는 Component를 render해주지 않습니다.
 *
 * SSR 환경에서 실제로 컴포넌트가 브라우저에서 mount 된 이후에만 해당 Component를 보여주고 싶을때 사용합니다.
 * (SSR 환경에서 Hydration 오류로 인해서 에러가 발생하는 문제를 해결합니다.)
 *
 * @example
 * ```tsx
 * function ClintOnlyComponent() {
 *  return (
 *    <ClientOnly>
 *      <div>Render only client environment</div>
 *    </ClientOnly>
 *  );
 * }
 * ```
 */
function ClientOnly({ children }: PropsWithChildren): ReactElement | null {
  const isMounted = useIsMounted();

  if (!isMounted) {
    return null;
  }

  return (
    <>{children}</>
  );
}

export default ClientOnly;
