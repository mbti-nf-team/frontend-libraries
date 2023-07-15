import { KeyboardEvent, useCallback } from 'react';

type ActionKeyEvent<T, U extends unknown[] = []> = (event: KeyboardEvent<T>, ...args: U) => void;

// NOTE - keyboard event code - https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values
function useActionKeyEvent<T = Element, U extends unknown[] = []>(
  targetKeys: string | string[],
  callback?: (event: KeyboardEvent<T>, ...args: U) => void,
): ActionKeyEvent<T, U> {
  const onKeyEvent = useCallback((event: KeyboardEvent<T>, ...args: U) => {
    const isArray = Array.isArray(targetKeys);
    const isMultipleKeyEvent = isArray && (
      targetKeys.includes(event.code) || targetKeys.includes(event.key)
    );

    const isKeyEvent = !isArray && (event.code === targetKeys || event.key === targetKeys);

    if (event.nativeEvent.isComposing) {
      return;
    }

    if (isMultipleKeyEvent || isKeyEvent) {
      callback?.(event, ...args);
    }
  }, [targetKeys, callback]);

  return onKeyEvent;
}

export default useActionKeyEvent;
