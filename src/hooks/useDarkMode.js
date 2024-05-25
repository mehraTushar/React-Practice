import { useEffect, useState } from 'react';

export const useDarkMode = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ?? 'dark');
  useEffect(() => {
    const head = window.document.documentElement;
    head.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, []);
  return [theme, setTheme];
};
