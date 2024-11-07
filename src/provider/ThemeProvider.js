"use client";
import { createContext, useContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("system");

  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem("theme");
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      if (savedTheme) {
        setTheme(savedTheme);
      } else {
        setTheme(prefersDark ? "dark" : "light");
      }
    } catch (error) {
      console.error("შეცდომა localStorage-ზე წვდომისას:", error);
    }
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleSystemThemeChange = (e) => {
      if (theme === "system") {
        const newTheme = e.matches ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
      }
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
    try {
      localStorage.setItem("theme", newTheme);
    } catch (error) {
      console.error("შეცდომით თემის დაყენებაში localStorage-ში", error);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme === "dark" ? "dark" : "light"}>{children}</div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme უნდა იყოს გამოყენებულაი ThemeProvider-ში");
  }
  return context;
};
