import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface ThemeStore {
  theme: "light" | "dark";
  setTheme: (state: "light" | "dark") => void;
}

const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      theme: "dark",
      setTheme: (state: "light" | "dark") => set({ theme: state }),
    }),
    {
      name: "theme-storage", // Key for localStorage
    }
  )
);

export default useThemeStore;
