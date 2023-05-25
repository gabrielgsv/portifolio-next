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
      <RiveComponent className="w-[440px] h-[440px] rounded-full" />
    </>
  );
};

export default SuperManAnimation;
