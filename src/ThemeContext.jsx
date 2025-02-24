import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "Default");
  const [unit, setUnit] = useState(localStorage.getItem("unit") || "Celsius");

  // Apply the theme to the body when it changes
  useEffect(() => {
    document.body.setAttribute("data-theme", theme.toLowerCase());
  }, [theme]);

  // Save settings in localStorage when they change
  useEffect(() => {
    localStorage.setItem("theme", theme);
    localStorage.setItem("unit", unit);
  }, [theme, unit]);

  return <ThemeContext.Provider value={{ theme, setTheme, unit, setUnit }}>{children}</ThemeContext.Provider>;
}
