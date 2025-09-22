"use client";
import useTheme from "@/hooks/useTheme";
import { createContext, useContext } from "react";

// Create a context for the theme
export const ThemeContext = createContext<ReturnType<typeof useTheme> | null>(
  null
);

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const themeState = useTheme();

  return (
    <ThemeContext.Provider value={themeState}>{children}</ThemeContext.Provider>
  );
}

// Custom hook to use the theme context
export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
}
