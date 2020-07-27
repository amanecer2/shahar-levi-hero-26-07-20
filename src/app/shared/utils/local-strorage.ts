export const getLocalStorage = <T>(key: string): T => {
  return JSON.parse(localStorage.getItem(key));
};

export const setLocalStorage = (key: string, value: any = '') => {
  localStorage.setItem(key, JSON.stringify(value));
};

