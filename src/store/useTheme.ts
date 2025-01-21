import { create } from "zustand";

export interface ThemeStore {
  theme: "light" | "dark";
  setTheme: (state: "light" | "dark") => void;
}

const useThemeStore = create<ThemeStore>((set) => ({
  theme: "light",
  setTheme: (state: "light" | "dark") => set({ theme: state }),
}));

export default useThemeStore;
