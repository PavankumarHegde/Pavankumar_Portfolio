import React, { useState } from 'react';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <div className="theme-switcher">
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ThemeSwitcher;
