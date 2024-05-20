import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [isDarkmode, setIsDarkmode] = useState(() => {
    const savedTheme = localStorage.getItem('isDarkmode');
    if (savedTheme === null) return true;
    return savedTheme === 'true' ? true : false;
  });

  const darkIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    </svg>
  );

  const lightIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkmode == true) root.classList.add('dark');
    else root.classList.remove('dark');
    localStorage.setItem('isDarkmode', isDarkmode);
  }, [isDarkmode]);

  const toggleTheme = () => {
    setIsDarkmode((prevMode) => !prevMode);
  };

  return (
    <div
      onClick={toggleTheme}
      className={`w-8 h-8 relative rounded-full transition duration-500 transform p-1 text-white ${
        isDarkmode == true ? 'bg-gray-700' : 'bg-yellow-500'
      }`}
    >
      {isDarkmode == true ? darkIcon : lightIcon}
    </div>
  );
};

export default ThemeToggle;
