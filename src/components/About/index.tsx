import React from "react";
import componentsStyle from "../style.module.css";
import style from "./style.module.css";
import AboutAnimation from "./AboutAnimation";

const About = () => {
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
          <AboutAnimation />
        </div>
      </div>
    </>
  );
};

export default About;
