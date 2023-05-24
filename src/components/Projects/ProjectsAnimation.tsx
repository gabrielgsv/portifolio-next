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
        <RiveComponent style={{ width: 500, height: 500, borderRadius: 50 }} />
      </Link>
    </>
  );
};

export default ProjectsAnimation;
