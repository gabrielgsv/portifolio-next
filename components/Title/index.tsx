import Image from "next/image";
import React from "react";

import componentStyle from "../style.module.css";

const Title = () => {
  return (
    <div className={componentStyle.container} style={{ gap: 30 }}>
      <Image
        src="/perfil.jpg"
        alt="Foto perfil"
        style={{ borderRadius: 50 }}
        width={100}
        height={100}
      />
      <h1>Gabriel Soares Vilela</h1>
    </div>
  );
};

export default Title;
