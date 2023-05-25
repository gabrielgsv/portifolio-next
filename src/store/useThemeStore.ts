import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ThemeStore {
  theme: string;
  toggleTheme: () => void;
}

const useThemeStore = create<ThemeStore>()(
  persist(
    (set, get) => ({
      theme: "garden",
      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === "garden" ? "halloween" : "garden",
        })),
    }),
    {
      name: "theme",
    }
  )
);

export default useThemeStore;
