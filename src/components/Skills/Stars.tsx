"use client";

import { useEffect, useRef } from "react";
import { useRive, useStateMachineInput } from "@rive-app/react-canvas";

type Props = {
  number: number;
  isVisible: boolean;
};

const Stars = ({ number, isVisible }: Props) => {
  const { rive, RiveComponent } = useRive({
    src: "/rating.riv",
    stateMachines: "State Machine 1",
    autoplay: true,
  });

  const ratingInput = useStateMachineInput(rive, "State Machine 1", "rating");

  useEffect(() => {
    if (ratingInput) {
      ratingInput.value = number;
    }
  }, [ratingInput]);

  useEffect(() => {
    if (isVisible && ratingInput) {
      ratingInput.value = 0;

      setTimeout(() => {
        ratingInput.value = number;
      }, 500);
    }
  }, [isVisible]);

  return (
    <RiveComponent className="w-[60%] md:w-[250px] h-[75px] rounded-full" />
  );
};

export default Stars;
