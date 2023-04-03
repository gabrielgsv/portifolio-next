"use client";
import React from "react";
import { useRive, useStateMachineInput } from "@rive-app/react-canvas";
import style from "./style.module.css";

const AnimatedHead = () => {
  const { rive, RiveComponent } = useRive({
    src: "/animated_head.riv",
    stateMachines: "default",
    autoplay: true,
  });

  const ideaAnimation = useStateMachineInput(rive, "default", "Idea");

  return (
    <>
      <div className={style.container}>
        <div className={style.about}>
          <p>bla bla bla bla bla</p>
          <p>bla bla bla bla bla</p>
          <p>bla bla bla bla bla</p>
          <p>bla bla bla bla bla</p>
          <p>bla bla bla bla bla</p>
          <p>bla bla bla bla bla</p>
        </div>

        <div className={style.animation}>
          <RiveComponent
            onClick={() => ideaAnimation?.fire()}
            style={{ width: 500, height: 500 }}
          />
        </div>
      </div>
    </>
  );
};

export default AnimatedHead;
