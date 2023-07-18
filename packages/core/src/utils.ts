export const checkNull = (value?: string | null, replacementValue?: string): string => {
  if (value) {
    return value;
  }

  if (replacementValue) {
    return replacementValue;
  }

  return '';
};

export const checkNumNull = (value?: number | null): number => {
  if (!value) {
    return 0;
  }

  return value;
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
