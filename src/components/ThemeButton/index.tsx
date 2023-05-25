"use client";
import useThemeStore from "../../store/useThemeStore";
import MoonIcon from "./moonIcon";
import SunIcon from "./sunIcon";

const ThemeButton = () => {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  return (
    <>
      <label className="swap swap-rotate float-right">
        <input
          type="checkbox"
          checked={theme === "emerald"}
          onChange={() => toggleTheme()}
        />

        <SunIcon />
        <MoonIcon />
      </label>
    </>
  );
};

export default ThemeButton;
