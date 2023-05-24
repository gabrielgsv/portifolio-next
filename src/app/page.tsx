"use client";
import About from "../components/About";
import Projects from "../components/Projects";
import ThemeButton from "../components/ThemeButton";
import Title from "../components/Title";
import useThemeStore from "../store/useThemeStore";

export default function Home() {
  const theme = useThemeStore((state) => state.theme);

  return (
    <div data-theme={theme}>
      <ThemeButton />
      <Title />
      <About />
      <div className="divider" />
      <Projects />
    </div>
  );
}
