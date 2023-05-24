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
      url: "https://agriculture-gabrielsoaresvilela.vercel.app",
    },
    {
      src: "/ecommerce.png",
      alt: "Ecommerce icon",
      name: "Ecommerce",
      url: "https://ecommerce-org.vercel.app/",
    },
    {
      src: "/planet.png",
      alt: "ThreeJs Planet icon",
      name: "ThreeJs Planet",
      url: "https://threejs-earth.vercel.app/",
    },
    {
      src: "/pet.png",
      alt: "Adote um Pet icon",
      name: "Adote um Pet",
      url: "https://adote-um-pet-web.vercel.app/",
    },
    {
      src: "/drink.png",
      alt: "Drinks  icon",
      name: "Drinks ",
      url: "https://all-of-the-drinks.vercel.app/",
    },
    {
      src: "/marvel.png",
      alt: "Marvel Wiki icon",
      name: "Marvel Wiki",
      url: "https://marvel-wiki.vercel.app/",
    },
  ];
  return (
    <>
      <div className={componentsStyle.container}>
        <div style={{ textAlign: "center" }}>
          <ProjectsAnimation />
          <p style={{ marginTop: "-40px", fontSize: 25 }}>Clique aqui ☝️</p>
        </div>
        <div className={style.container}>
          <ProjectIcon icons={icons} />
        </div>
      </div>
    </>
  );
};

export default Projects;
