// Dark mode exercise
import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext('light');

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  
  const toggleTheme = () => {
    setTheme(curr => curr === "light" ? "dark" : "light");
  };

  // useEffect(() => {

  //   const savedColorScheme = localStorage.getItem(localStorageThemeKey);

  //   if (savedColorScheme) {
  //     setTheme(savedColorScheme);
  //     return;
  //   }

  //   const isDark = window.matchMedia('(prefers-color-scheme: dark)');

  //   const handleChange = () => {
  //     isDark.matches ? setTheme('dark') : setTheme('light');
  //   };

  // mediaQuery.addEventListener('change', handleChange);
  // handleChange();
  // }, [])

  return <ThemeContext.Provider value={{theme, toggleTheme}}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {return useContext(ThemeContext)};
