"use client";

import { useEffect, useRef } from "react";
import { useRive, useStateMachineInput } from "@rive-app/react-canvas";
import useOnScreen from "../../services/useOnScreen";

type Props = {
  number: number;
};

const Stars = ({ number }: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useOnScreen(ref, {});
  const isVisible = !!entry?.isIntersecting;

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
    <div ref={ref} onClick={() => "clicou aqui"}>
      <RiveComponent className="w-[300px] h-[75px] rounded-full" />
    </div>
  );
};

export default Stars;
