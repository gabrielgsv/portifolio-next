"use client";
import React from "react";
import { useRive } from "@rive-app/react-canvas";

const SuperManAnimation = () => {
  const { RiveComponent } = useRive({
    src: "/superman.riv",
    stateMachines: "orbitAnimation",
    autoplay: true,
  });
  return (
    <>
      <RiveComponent className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full" />
    </>
  );
};

export default SuperManAnimation;
