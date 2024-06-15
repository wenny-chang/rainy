"use client";
import {
  createContext,
  useContext,
  useState,
  ReactElement,
  useMemo,
  useCallback,
} from "react";

export const ThemeContext = createContext({
  isDarkMode: true,
  toggleDarkMode: () => {},
});

const ThemeModeProvider: any = ({ children }: { children: ReactElement }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  const toggleDarkMode = useCallback(
    () => setIsDarkMode(!isDarkMode),
    [isDarkMode]
  );

  const context = useMemo(
    () => ({
      isDarkMode,
      toggleDarkMode,
    }),
    [isDarkMode, toggleDarkMode]
  );

  return (
    <ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>
  );
};

export default ThemeModeProvider;

export const useModeContext = () => useContext(ThemeContext);
