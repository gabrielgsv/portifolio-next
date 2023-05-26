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
          className="w-28 h-28 md:w-[150px] md:h-[150px] flex flex-col items-center justify-center cursor-pointer"
          key={index}
          target="_blank"
        >
          <div className="w-16 h-16 md:w-[100px] md:h-[100px] rounded-full bg-white flex justify-center items-center border-solid border-2 border-black">
            <Image
              src={icon.src}
              alt={icon.alt}
              width={80}
              height={80}
              className="rounded-full max-w-full max-h-full"
            />
          </div>
          <div className="mt-2">{icon.name}</div>
        </Link>
      ))}
    </>
  );
};

export default ProjectIcon;
