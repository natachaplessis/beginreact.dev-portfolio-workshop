// Dark mode exercise
import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext({theme : 'light'});

const localStorageThemeKey = 'colorScheme';

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const isDark = theme==='dark';
  const isLight = theme==='light';

  useEffect(() => {

    const savedColorScheme = localStorage.getItem(localStorageThemeKey);

    if (savedColorScheme) {
      setTheme(savedColorScheme);
      return;
    }
    console.log(savedColorScheme)

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = () => {
      setTheme(mediaQuery.matches ? 'dark' : 'light');
    };

  mediaQuery.addEventListener('change', handleChange);
  handleChange();

  return () => {
    mediaQuery.removeEventListener('change', handleChange);
  }
  }, [])

  const toggleTheme = () => {
    setTheme((curr) => {
      const newTheme = curr === "light" ? "dark" : "light";
      localStorage.setItem(localStorageThemeKey, newTheme);
      return newTheme;
    }
  )};

  const values = {
    theme,
    isDark,
    isLight,
    toggleTheme,
  }

  return <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  return context;
};
