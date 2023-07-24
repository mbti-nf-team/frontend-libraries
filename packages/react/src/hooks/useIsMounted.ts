import { useEffect, useState } from 'react';
/**
 * @description Component의 mount 여부를 확인하는 hook 입니다.
 * SSR 환경에서 실제로 컴포넌트가 브라우저에서 mount 된 이후에 어떤 동작을 실행하기 위해서 사용합니다.
 *
 * @example
 * ```ts
 * const isMounted = useIsMounted();
 *
 * useEffect(() => {
 *   if (isMounted) {
 *     return;
 *   }
 * }, [isMounted]);
 *
 * ```
 */
function useIsMounted() {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}

export default useIsMounted;
