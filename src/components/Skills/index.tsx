import SuperManAnimation from "./SuperManAnimation";
import Stars from "./Stars";

const Skills = () => {
  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-20">
        <div className="text-[20pt] w-fit">
          <div className="flex items-center justify-between gap-5">
            ReactJs <Stars number={5} />
          </div>

          <div className="flex items-center mt-4 justify-between gap-5">
            NextJs <Stars number={4} />
          </div>

          <div className="flex items-center mt-4 justify-between gap-5">
            Typescript <Stars number={3} />
          </div>

          <div className="flex items-center mt-4 justify-between gap-5">
            Redux <Stars number={4} />
          </div>

          <div className="flex items-center mt-4 justify-between gap-5">
            React Native <Stars number={2} />
          </div>

          <div className="flex items-center mt-4 justify-between gap-5">
            NodeJs <Stars number={4} />
          </div>

          <div className="flex items-center mt-4 justify-between gap-5">
            Express <Stars number={3} />
          </div>

          <div className="flex items-center mt-4 justify-between gap-5">
            NestJs <Stars number={3} />
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
