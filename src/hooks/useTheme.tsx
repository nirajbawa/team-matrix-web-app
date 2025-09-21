"use client";
import useThemeStore from "@/store/useTheme";
import { useEffect } from "react";

const useTheme = (): [string, () => void] => {
  const theme = useThemeStore((state) => state.theme); // Get current theme
  const setTheme = useThemeStore((state) => state.setTheme); // Get setter for theme

  const changeTheme = (): void => {
    // Directly set the theme value rather than passing a function
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    // // Check the system's color scheme preference
    // const prefersDarkScheme = window.matchMedia(
    //   "(prefers-color-scheme: dark)"
    // ).matches;

    // // Set the initial theme based on system preference
    // setTheme(prefersDarkScheme ? "dark" : "light");

    // // Listen for system theme changes
    // const themeListener = (e: MediaQueryListEvent) => {
    //   setTheme(e.matches ? "dark" : "light");
    // };

    // const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    // mediaQuery.addEventListener("change", themeListener);

    // // Cleanup the event listener on component unmount
    // return () => {
    //   mediaQuery.removeEventListener("change", themeListener);
    // };
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return [theme, changeTheme];
};

export default useTheme;
