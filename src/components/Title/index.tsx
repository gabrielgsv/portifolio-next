import Image from "next/image";
import React from "react";

const Title = () => {
  return (
    <div
      className="flex flex-col items-center justify-center"
      style={{ gap: 30, margin: 0 }}
    >
      <Image
        src="/perfil.jpg"
        alt="Foto perfil"
        className="rounded-full"
        width={100}
        height={100}
      />
      <h1 className="text-xl md:text-3xl font-bold">Gabriel Soares Vilela</h1>
    </div>
  );
};

export default Title;
