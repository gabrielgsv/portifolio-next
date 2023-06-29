import Image from "next/image";
import Link from "next/link";
import { ProjectIconType } from "..";

type ProjectIconProps = {
  icons: ProjectIconType[];
};

const ProjectIcon = ({ icons }: ProjectIconProps) => {
  return (
    <>
      {icons.map((icon, index) => (
        <div
          key={index}
          className="card w-[350px] pt-5 border-solid border-2 border-stone-400 shadow-xl"
        >
          <div className="w-full flex justify-center">
            <div className="bg-white w-[100px] h-[100px] rounded-full flex justify-center items-center border-solid border-2 border-stone-400">
              <Image
                src={icon.src}
                alt={icon.alt}
                width={80}
                height={80}
                className="rounded-full max-w-full max-h-full"
              />
            </div>
          </div>

          <div className="card-body">
            <h2 className="card-title">{icon.name}</h2>
            <p>{icon.description}</p>
            <div className="card-actions justify-around mt-5">
              <Link href={icon.url} target="_blank">
                <button className="btn bg-emerald-600 rounded-full">
                  <Image
                    src="/web.svg"
                    alt="Link do projeto"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  <span className="capitalize text-base text-white">
                    Projeto
                  </span>
                </button>
              </Link>

              <Link href={icon.github} target="_blank">
                <button className="btn bg-stone-700 rounded-full">
                  <Image
                    src="/github.svg"
                    alt="Link do projeto"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  <span className="capitalize text-base text-white">
                    Github
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectIcon;
