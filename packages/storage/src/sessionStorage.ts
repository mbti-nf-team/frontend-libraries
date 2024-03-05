export const setSessionStorageItem = (key: string, value: unknown) => {
  sessionStorage.setItem(key, JSON.stringify(value));
};

export const getSessionStorageItem = <T>(key: string) => {
  if (typeof window === 'undefined') {
    return null;
  }

  try {
    const item = sessionStorage.getItem(key);
    const parsed = JSON.parse(item || '') as T | null;

    return parsed;
  } catch (error) {
    return null;
  }
};

export const removeSessionStorageItem = (key: string) => sessionStorage.removeItem(key);
