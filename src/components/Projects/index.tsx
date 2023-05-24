import ProjectIcon from "./ProjectIcon";
import ProjectsAnimation from "./ProjectsAnimation";

const Projects = () => {
  const icons = [
    {
      src: "/agriculture.png",
      alt: "Agriculture icon",
      name: "Agriculture",
      url: "https://agriculture-gabrielsoaresvilela.vercel.app",
    },
    {
      src: "/ecommerce.png",
      alt: "Ecommerce icon",
      name: "Ecommerce",
      url: "https://ecommerce-org.vercel.app/",
    },
    {
      src: "/planet.png",
      alt: "ThreeJs Planet icon",
      name: "ThreeJs Planet",
      url: "https://threejs-earth.vercel.app/",
    },
    {
      src: "/pet.png",
      alt: "Adote um Pet icon",
      name: "Adote um Pet",
      url: "https://adote-um-pet-web.vercel.app/",
    },
    {
      src: "/drink.png",
      alt: "Drinks  icon",
      name: "Drinks ",
      url: "https://all-of-the-drinks.vercel.app/",
    },
    {
      src: "/marvel.png",
      alt: "Marvel Wiki icon",
      name: "Marvel Wiki",
      url: "https://marvel-wiki.vercel.app/",
    },
  ];
  return (
    <>
      <div className="flex flex-wrap items-center justify-center">
        <div className="text-center">
          <ProjectsAnimation />
          <p className="text-xl" style={{ marginTop: "-40px" }}>
            Clique aqui ☝️
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center w-[500px] gap-4">
          <ProjectIcon icons={icons} />
        </div>
      </div>
    </>
  );
};

export default Projects;
