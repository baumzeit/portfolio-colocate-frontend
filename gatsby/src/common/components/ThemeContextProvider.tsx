import React, {
  useState,
  useEffect,
  createContext,
  Dispatch,
  SetStateAction,
} from 'react';

export const ThemeContext = createContext<{
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}>({
  theme: '',
  setTheme: () => {},
});

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('');

  useEffect(() => {
    const theme = localStorage.getItem('theme') || 'dark';
    setTheme(theme);
  }, []);

  useEffect(() => {
    if (theme) {
      localStorage.setItem('theme', theme);
      const root = document.getElementsByTagName('html')[0];
      root.className = theme;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
