"use client";
import React from "react";
import { useRive } from "@rive-app/react-canvas";

const ProjectsAnimation = () => {
  const { RiveComponent } = useRive({
    src: "/octocat.riv",
    stateMachines: "Animation 1",
    autoplay: true,
  });

  return (
    <>
      <RiveComponent style={{ width: 500, height: 500, borderRadius: 50 }} />
    </>
  );
};

export default ProjectsAnimation;
