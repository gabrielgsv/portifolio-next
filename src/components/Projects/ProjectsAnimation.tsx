"use client";
import React from "react";
import { useRive } from "@rive-app/react-canvas";
import Link from "next/link";

const ProjectsAnimation = () => {
  const { RiveComponent } = useRive({
    src: "/octocat.riv",
    stateMachines: "Animation 1",
    autoplay: true,
  });

  return (
    <>
      <Link href="https://github.com/gabrielgsv" target="_blank">
        <RiveComponent className="w-[300px] h-[300px] mb-2 md:w-[500px] md:h-[500px] rounded-full" />
      </Link>
    </>
  );
};

export default ProjectsAnimation;
