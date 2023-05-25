import { create } from "zustand";

interface ThemeStore {
  theme: string;
  toggleTheme: () => void;
}

const useThemeStore = create<ThemeStore>((set) => ({
  theme: "emerald",
  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === "emerald" ? "halloween" : "emerald",
    })),
}));

export default useThemeStore;
