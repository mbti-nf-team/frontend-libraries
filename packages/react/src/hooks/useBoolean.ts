import { useCallback, useState } from 'react';

/**
 * @description `boolean` 타입으로만 반환하는 `useState`를 쉽게 사용할 수 있는 hook 입니다.
 *
 * @example
 * ```ts
 * const [isOpen, openModal, closeModal, toggleModal] = useBoolean();
 * ```
 *
 * @param initialValue - 초기값을 세팅
 */
function useBoolean(
  initialValue = false,
): [boolean, () => void, () => void, (nextValue?: boolean) => void] {
  const [state, setState] = useState(initialValue);

  const setTrue = useCallback(() => setState(true), []);
  const setFalse = useCallback(() => setState(false), []);
  const onToggle = useCallback(() => setState((prevState) => !prevState), []);

  return [state, setTrue, setFalse, onToggle];
}

export default useBoolean;
