import { createContext, useContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const useGlobalContext = () => useContext(AppContext);

const getInitialDarkMode = () => {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme:dark)"
  ).matches;
  const storedDarkTheme = localStorage.getItem("darkTheme") === "true";
  return storedDarkTheme || prefersDarkMode;
};

const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    localStorage.setItem("darkTheme", newDarkTheme);
  };

  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDarkTheme);
  }, [isDarkTheme]);

  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
