"use client";
import { useRive } from "@rive-app/react-canvas";
import Link from "next/link";

const ContactsAnimation = () => {
  const { RiveComponent } = useRive({
    src: "/contact.riv",
    stateMachines: "State Machine 1",
    autoplay: true,
  });

  return (
    <Link
      href="https://wa.me/16992879588"
      target="_blank"
      className="text-center"
    >
      <RiveComponent className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full" />
      <p className="text-xl mb-4 mt-[-20px] md:mt-[-40px]">Clique aqui ☝️</p>
    </Link>
  );
};

export default ContactsAnimation;
