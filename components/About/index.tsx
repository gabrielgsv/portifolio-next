"use client";
import React from "react";
import { useRive, useStateMachineInput } from "@rive-app/react-canvas";
import componentsStyle from "../style.module.css";
import style from "./style.module.css";

const About = () => {
  const { rive, RiveComponent } = useRive({
    src: "/animated_head.riv",
    stateMachines: "default",
    autoplay: true,
  });

  const ideaAnimation = useStateMachineInput(rive, "default", "Idea");

  return (
    <>
      <div className={componentsStyle.container}>
        <div className={style.about}>
          <p>
            Olá, bem vindo ao meu site. Sou desenvolvedor Front-end, utilizo
            ReactJs para desenvolver aplicações web.
          </p>
          <p>
            Tenho experiência em Typescript, Redux, NextJs, Context-api, React
            Hooks, entre outros.
          </p>
          <p>
            Eu gosto de aprender novas tecnologias e criar experiências
            incríveis na web.👋
          </p>
        </div>

        <div>
          <RiveComponent
            onClick={() => ideaAnimation?.fire()}
            style={{ width: 500, height: 500 }}
          />
        </div>
      </div>
    </>
  );
};

export default About;
