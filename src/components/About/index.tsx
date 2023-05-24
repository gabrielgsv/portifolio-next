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
            Olá, seja bem-vindo(a) ao meu site. Sou desenvolvedor Front-end e
            uso ReactJs para criar aplicações web.
          </p>
          <p>
            Tenho experiência com Typescript, Redux, NextJs, Context-api, React
            Hooks e outras ferramentas.
          </p>
          <p>
            Sou apaixonado por aprender novas tecnologias e criar experiências
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
