"use client";

import SuperManAnimation from "./SuperManAnimation";
import Stars from "./Stars";
import { useRef } from "react";
import useOnScreen from "../../services/useOnScreen";

const Skills = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useOnScreen(ref, {});
  const isVisible = !!entry?.isIntersecting;

  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-20">
        <div className="text-[20pt] w-fit" ref={ref}>
          <div className="flex items-center justify-between gap-5">
            ReactJs <Stars number={5} isVisible={isVisible} />
          </div>

          <div className="flex items-center mt-4 justify-between gap-5">
            NextJs <Stars number={4} isVisible={isVisible} />
          </div>

          <div className="flex items-center mt-4 justify-between gap-5">
            Typescript <Stars number={3} isVisible={isVisible} />
          </div>

          <div className="flex items-center mt-4 justify-between gap-5">
            Redux <Stars number={4} isVisible={isVisible} />
          </div>

          <div className="flex items-center mt-4 justify-between gap-5">
            React Native <Stars number={2} isVisible={isVisible} />
          </div>

          <div className="flex items-center mt-4 justify-between gap-5">
            NodeJs <Stars number={4} isVisible={isVisible} />
          </div>

          <div className="flex items-center mt-4 justify-between gap-5">
            Express <Stars number={3} isVisible={isVisible} />
          </div>

          <div className="flex items-center mt-4 justify-between gap-5">
            NestJs <Stars number={3} isVisible={isVisible} />
          </div>
        </div>

        <div>
          <SuperManAnimation />
        </div>
      </div>
    </>
  );
};

export default Skills;
