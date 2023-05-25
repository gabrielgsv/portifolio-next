import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ThemeStore {
  theme: string;
  toggleTheme: () => void;
}

const useThemeStore = create<ThemeStore>()(
  persist(
    (set, get) => ({
      theme: "emerald",
      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === "emerald" ? "halloween" : "emerald",
        })),
    }),
    {
      name: "theme",
    }
  )
);

export default useThemeStore;
