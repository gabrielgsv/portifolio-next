"use client";
import useStore from "@/src/store/useStore";
import useThemeStore from "../../store/useThemeStore";
import MoonIcon from "./MoonIcon";
import SunIcon from "./SunIcon";

const ThemeButton = () => {
  const theme = useStore(useThemeStore, (state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  return (
    <>
      <label className="swap swap-rotate float-right">
        <input
          type="checkbox"
          checked={theme === "garden"}
          onChange={() => toggleTheme()}
        />

        <SunIcon />
        <MoonIcon />
      </label>
    </>
  );
};

export default ThemeButton;
