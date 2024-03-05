export const setLocalStorageItem = (key: string, value: unknown) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorageItem = <T>(key: string) => {
  if (typeof window === 'undefined') {
    return null;
  }

  try {
    const item = localStorage.getItem(key);
    const parsed = JSON.parse(item || '') as T | null;

    return parsed;
  } catch (error) {
    return null;
  }
};

export const removeLocalStorageItem = (key: string) => localStorage.removeItem(key);
