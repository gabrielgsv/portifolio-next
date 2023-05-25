"use client";
import About from "../components/About";
import Contacts from "../components/Contacts";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import ThemeButton from "../components/ThemeButton";
import Title from "../components/Title";
import useStore from "../store/useStore";
import useThemeStore from "../store/useThemeStore";

export default function Home() {
  const theme = useStore(useThemeStore, (state) => state.theme);

  return (
    <div data-theme={theme} className="p-8">
      <ThemeButton />
      <Title />
      <About />
      <div className="divider" />
      <Projects />
      <div className="divider" />
      <Skills />
      <div className="divider" />
      <Contacts />
    </div>
  );
}
