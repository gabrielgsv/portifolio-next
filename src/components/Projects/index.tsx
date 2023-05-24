import React from "react";
import componentsStyle from "../style.module.css";
import style from "./style.module.css";
import ProjectsAnimation from "./ProjectsAnimation";
import ProjectIcon from "./ProjectIcon";

const Projects = () => {
  const icons = [
    {
      src: "/agriculture.png",
      alt: "Agriculture icon",
      name: "Agriculture",
    },
    {
      src: "/ecommerce.png",
      alt: "Ecommerce icon",
      name: "Ecommerce",
    },
    {
      src: "/planet.png",
      alt: "ThreeJs Planet icon",
      name: "ThreeJs Planet",
    },
    {
      src: "/pet.png",
      alt: "Adote um Pet icon",
      name: "Adote um Pet",
    },
    {
      src: "/drink.png",
      alt: "Drinks  icon",
      name: "Drinks ",
    },
    {
      src: "/marvel.png",
      alt: "Marvel Wiki icon",
      name: "Marvel Wiki",
    },
  ];
  return (
    <>
      <div className={componentsStyle.container}>
        <div>
          <ProjectsAnimation />
        </div>
        <div className={style.container}>
          <ProjectIcon icons={icons} />
        </div>
      </div>
    </>
  );
};

export default Projects;
