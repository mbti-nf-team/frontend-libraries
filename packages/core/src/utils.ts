/**
 * @description `null`이나 `undefined`값이 존재하는 경우 빈문자열로 대체하거나 새로운 문자열로 대체합니다. (오로지 `string` 타입으로 반환)
 *
 * ```ts
 * const value = undefined;
 * const result = removeNullable(value, 'newValue');
 * ```
 * @example
 * console.log(result); // 'newValue';
 * @param value - 첫 번째 인자 `string` | `null` | `undefined`
 * @param replacementValue - 두 번째 인자에 값이 존재하는 경우 첫 번째 인자가 `null` 또는 `undefined`인 경우 두번째 인자로 문자열 대체
 * @returns
 */
export const removeNullable = (value?: string | null, replacementValue?: string): string => {
  if (value) {
    return value;
  }

  if (replacementValue) {
    return replacementValue;
  }

  return '';
};

export const checkNumber = (value?: number | null): number => {
  if (typeof value === 'number') {
    return value;
  }

  return 0;
};

export const emptyAThenB = (b: string, a?: string | null): string => a || b;

export const trueOrFalse = (value?: string | null | number | boolean): boolean => {
  if (!value) {
    return false;
  }

  return true;
};

export const checkEmpty = <T>(value?: T[]): T[] => {
  if (!value || !value.length) {
    return [];
  }

  return value;
};

export const isEmpty = <T>(value?: T[]) => {
  if (!value) {
    return true;
  }

  if (value.length > 0) {
    return false;
  }

  return true;
};

export const generateArrayOfNumber = (length: number) => Array.from({ length }, (_, i) => i);
