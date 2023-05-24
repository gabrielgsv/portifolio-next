"use client";
import React from "react";
import { useRive, useStateMachineInput } from "@rive-app/react-canvas";

const AboutAnimation = () => {
  const { rive, RiveComponent } = useRive({
    src: "/animated_head.riv",
    stateMachines: "default",
    autoplay: true,
  });

  const ideaAnimation = useStateMachineInput(rive, "default", "Idea");

  return (
    <>
      <RiveComponent
        onClick={() => ideaAnimation?.fire()}
        className="w-[500px] h-[500px] rounded-full"
      />
    </>
  );
};

export default AboutAnimation;
