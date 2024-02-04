// GlobalContext.js
import React, { useState, useEffect, createContext } from "react";

export const GlobalContext = createContext({
  currentTheme: "",
  themeSwitchHandler: () => {},
});

const GlobalContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const themeSwitchHandler = (themeType) => {
    setTheme(themeType);
  };

  const handleSystemThemeChange = () => {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setTheme(prefersDarkMode ? "dark" : "light");
  };

  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setTheme(prefersDarkMode ? "dark" : "light");

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", handleSystemThemeChange);

    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", handleSystemThemeChange);
    };
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        theme,
        themeSwitchHandler,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
