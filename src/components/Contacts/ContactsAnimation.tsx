"use client";
import React from "react";
import { useRive, useStateMachineInput } from "@rive-app/react-canvas";

const ContactsAnimation = () => {
  const { rive, RiveComponent } = useRive({
    src: "/contact.riv",
    stateMachines: "State Machine 1",
    autoplay: true,
  });

  return (
    <div>
      <RiveComponent className="w-[500px] h-[500px] rounded-full" />
    </div>
  );
};

export default ContactsAnimation;
