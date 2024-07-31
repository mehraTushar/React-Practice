export const useLocalStorage = (value, setValue) => {
  if (setValue === undefined) return localStorage.getItem(value);
  if (typeof setValue === 'string') localStorage.setItem(value, setValue);
  else localStorage.setItem(value, JSON.stringify(setValue));
};
