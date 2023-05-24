import React from "react";
import Image from "next/image";
import style from "./projectIcon.module.css";
import Link from "next/link";

export interface ProjectIconProps {
  icons: {
    src: string;
    alt: string;
    name: string;
    url: string;
  }[];
}

const ProjectIcon = ({ icons }: ProjectIconProps) => {
  return (
    <>
      {icons.map((icon, index) => (
        <Link
          href={icon.url}
          className={style.container}
          key={index}
          target="_blank"
        >
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
        </Link>
      ))}
    </>
  );
};

export default ProjectIcon;
