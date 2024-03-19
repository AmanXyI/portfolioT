import { Button } from "../ui/button";
import ProjectCard from "./project-card";

const ProjectPage = () => {
  return (
    <div className="">
      <div className="z-[40] w-full  translate-y-[-2.5rem]  h-[45rem] rounded-[3rem] pt-20 px-14 ">
        <div className="flex items-center justify-between">
          <h1 className="text-[2.8rem] font-semibold">
            Lets have a look at <br />
            my <span className="text-[#fd853a]">Portfolio</span>
          </h1>
          <Button variant="primary" className="h-14">
            See All
          </Button>
        </div>
        <div className="w-full  h-[30rem] py-10 flex justify-between flex-nowrap overflow-hidden mt-6">
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
