"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

// content for INTRESTING PROJECTS
const projects = [
  {
    name: "project name",
    icon: "/icons/favicon_snapper.png",
    link: "/",
  },
  {
    name: "project name",
    icon: "/icons/favicon_snapper.png",
    link: "/",
  },
  {
    name: "project name",
    icon: "/icons/favicon_snapper.png",
    link: "/",
  },
];

const Career = () => {
  return (
    <div
      id="timeline"
      className="px-align py-[5rem] flex flex-col items-center"
    >
      <article className="text-center w-[35rem]">
        <p className="text-sm font-semibold text-dark-indigo">
          MY EXPERIENCE TIMELINE
        </p>
        <h1 className="mt-1 mb-3 text-3xl font-semibold">
          My Career story in brief
        </h1>
        <p className="text-[1rem] font-semibold text-grey-text">
          Since I was accepted to university, I was looking for creating
          something special, a product that can change people&apos;s life.
          I&apos;m still on that way. Find my career path until now in 2022 in
          the below timeline
        </p>
      </article>

      <article className="pt-10">
        <div className="relative timeline">
          <div className="mt-0 timeline-item">
            <div className="grid sm:grid-cols-2">
              <div className="mt-4 md:mt-0 ">
                <div className="float-left text-right pr-9 pb-9 md:ml-8">
                  <h5 className="mb-1 text-sm font-semibold ">
                    Project Manager
                  </h5>
                  <p className="mt-3 mb-0 pl-[8rem] text-[1rem] timeline-subtitle text-slate-400">
                    At Fretron, a pioneering B2B SaaS firm transforming
                    logistics, I spearheaded user-centric digital initiatives
                    for global clients. Through collaborative user mapping, I
                    devised 12 tailored product enhancements boosting new user
                    adoption from 65% to 75%. Employing Agile, I launched two
                    projects in six months generating $50K revenue alongside
                    overseeing four others. My user-focused, data-driven
                    approach optimized technology adoption and operational
                    excellence.
                  </p>
                </div>
              </div>
              {/* <!--end col--> */}
              <div
                className="border-l border-dashed pl-9"
                style={{
                  borderLeftStyle: "dashed",
                  borderLeftWidth: "2px",
                  borderColor: "#374151",
                }}
              >
                <div className="relative duration md:text-left md:mr-8">
                  <div
                    className="absolute bg-navy-blue  rounded-full size-8 right-[104.2%] top-[-.5rem] before:absolute before:size-3 before:bg-dark-indigo before:left-[50%] before:translate-x-[-50%] before:top-[50%] before:translate-y-[-50%] before:rounded-full  "
                    style={{
                      border: "dashed 2px #374151",
                    }}
                  ></div>
                  <img
                    src="/icons/favicon_fretron.png"
                    className="rounded-full size-8 translate-y-[-.3rem]"
                    alt="ico"
                  />
                  <h5 className="my-1 text-sm font-semibold">Fretron</h5>
                  <h6 className="mb-0 text-sm text-slate">
                    June 2023 – Present
                  </h6>
                </div>
              </div>
              {/* <!--end col--> */}
            </div>
            {/* <!--end grid--> */}
          </div>
          {/* <!--end timeline item--> */}
          <div className="mt-0 timeline-item">
            <div className="grid sm:grid-cols-2">
              <div
                className=""
                style={{
                  borderRightStyle: "dashed",
                  borderRightWidth: "2px",
                  borderColor: "#374151",
                }}
              >
                <div className="relative duration date-label-left md:text-right md:mr-8">
                  <div
                    className="absolute  bg-navy-blue  rounded-full size-8 left-[103.5%] top-[-.5rem] before:absolute before:size-3 before:bg-dark-indigo before:left-[50%] before:translate-x-[-50%] before:top-[50%] before:translate-y-[-50%] before:rounded-full  "
                    style={{
                      border: "dashed 2px #374151",
                    }}
                  ></div>
                  <img
                    src="/icons/favicon_blockthing.png"
                    className="rounded-full size-9 translate-y-[-.6rem] md:ml-auto"
                    alt=""
                  />
                  <h5 className="my-0 text-sm font-semibold">Blockting</h5>
                  <h6 className="mb-0 text-sm text-slate">
                    June. 2022 – May 2023
                  </h6>
                </div>
              </div>
              {/* <!--end col--> */}
              <div className="mt-4 md:mt-0">
                <div className="float-left text-left pb-9 md:ml-8">
                  <h5 className="mb-1 text-sm font-semibold title">
                    Product Manager
                  </h5>
                  <p className="mt-3 mb-0 pr-[14rem] text-[1rem] timeline-subtitle text-slate-400">
                    Blockting, comprised of industry experts, specializes in
                    devising marketing plans and development partnerships for
                    Blockchain and DeFi products. My role involves managing and
                    creating products across finance, freelancing, and tokenized
                    platforms, defining requirements and go-to-market strategies
                    to fuel SaaS startup growth. Notable achievements include
                    boosting a fan engagement platform’s monthly user base by
                    300%, orchestrating a $10K NFT collection sellout in 24
                    hours, and increasing feature adoption by 60% and
                    click-through rates by 25% through A/B testing and UX
                    optimization.
                  </p>
                </div>
              </div>
              {/* <!--end col--> */}
            </div>
            {/* <!--end grid--> */}
          </div>
          {/* <!--end timeline item--> */}
          <div className="mt-0 timeline-item">
            <div className="grid sm:grid-cols-2">
              <div className="mt-4 md:mt-0 ">
                <div className="float-left pb-5 text-right pr-9 md:ml-8">
                  <h5 className="mb-1 text-sm font-semibold ">
                    Blockchain development Intern
                  </h5>
                  <p className="mt-3 mb-0 pl-[8rem] text-[1rem] timeline-subtitle text-slate-400">
                    At Snapper Future Tech, a leading player in blockchain
                    technology, I played a key role in the flagship TraceChain
                    project, where I researched and documented blockchain
                    frameworks for supply chain improvement. Additionally, I
                    contributed significantly to the development of educational
                    content for the IBI Blockchain Education Platform, aimed at
                    empowering learners and fostering innovation in the field.
                  </p>
                </div>
              </div>
              {/* <!--end col--> */}
              <div
                className=" pl-9"
                style={{
                  borderLeftStyle: "dashed",
                  borderLeftWidth: "2px",
                  borderColor: "#374151",
                }}
              >
                <div className="relative duration md:text-left md:mr-8">
                  <div
                    // className="absolute bg-black size-8 right-[104%] top-[-.5rem] "
                    className="absolute  bg-navy-blue  rounded-full size-8 right-[104.2%] top-[-.5rem] before:absolute before:size-3 before:bg-dark-indigo before:left-[50%] before:translate-x-[-50%] before:top-[50%] before:translate-y-[-50%] before:rounded-full  "
                    style={{
                      border: "dashed 2px #374151",
                    }}
                  ></div>
                  <img
                    src="/icons/favicon_snapper.png"
                    className="rounded-full size-8 md:mr-auto translate-y-[-.4rem]"
                    alt=""
                  />
                  <h5 className="my-1 text-sm font-semibold">
                    Snapper Future Tech
                  </h5>
                  <h6 className="mb-0 text-sm text-slate">
                    February 2022 - August 2022
                  </h6>
                </div>
              </div>
              {/* <!--end col--> */}
            </div>
            {/* <!--end grid--> */}
          </div>
          {/* <!--end timeline item--> */}
        </div>
      </article>
      <div className="my-[5rem] flex gap-5">
        <h1>Intresting Projects: </h1>
        <div className="flex gap-3">
          {projects.map((project, index) => {
            return (
              <TooltipProvider key={index}>
                <Tooltip>
                  <TooltipTrigger>
                    <a href={project.link}>
                      <img
                        src={project.icon}
                        className="rounded-full size-8 md:mr-auto translate-y-[-.2rem] hover:scale-125 duration-200"
                        alt=""
                      />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="bg-navy-blue px-4 py-2 text-sm rounded-md translate-y-[-1rem] ">
                      {project.name}
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Career;
