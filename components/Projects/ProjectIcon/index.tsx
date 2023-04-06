import React from "react";
import Image from "next/image";
import style from "./projectIcon.module.css";

export interface ProjectIconProps {
  icons: {
    src: string;
    alt: string;
    name: string;
  }[];
}

const ProjectIcon = ({ icons }: ProjectIconProps) => {
  return (
    <>
      {icons.map((icon, index) => (
        <div className={style.container} key={index}>
          <div className={style.icon}>
            <Image
              src={icon.src}
              alt={icon.alt}
              width={80}
              height={80}
              className={style.image}
            />
          </div>
          <div className={style.name}>{icon.name}</div>
        </div>
      ))}
    </>
  );
};

export default ProjectIcon;
