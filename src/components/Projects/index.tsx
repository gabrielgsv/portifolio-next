import ProjectIcon from "./ProjectIcon";
import ProjectsAnimation from "./ProjectsAnimation";
import projectList from "./projectList.json";

export type ProjectIconType = {
  src: string;
  alt: string;
  name: string;
  url: string;
  github: string;
  description: string;
};

const Projects = () => {
  const icons: ProjectIconType[] = projectList;
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-10">
        <div className="text-center">
          <ProjectsAnimation />
          <p className="text-xl" style={{ marginTop: "-40px" }}>
            Clique aqui ☝️
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-stretch gap-6 my-8">
          <ProjectIcon icons={icons} />
        </div>
      </div>
    </>
  );
};

export default Projects;
