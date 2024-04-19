"use client";
import { useState } from "react";
import ImgCard from "./ui/ImgCard";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";

const portfolioContents = [
  {
    title: "project",
    type: "project",
    imgAdd:
      "https://images.pexels.com/photos/11909386/pexels-photo-11909386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "/",
    duration: "2020",
    desc: "User-friendly application.",
  },
  {
    title: "certification",
    type: "certification",
    imgAdd:
      "https://images.pexels.com/photos/16039120/pexels-photo-16039120/free-photo-of-sunlit-rocks-on-sea-shore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "/",
    duration: "2020",
    desc: "User-friendly application.",
  },
  {
    title: "certification",
    type: "certification",
    imgAdd:
      "https://images.pexels.com/photos/20753710/pexels-photo-20753710/free-photo-of-sunrise-in-berlin-on-film.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "/",
    duration: "2020",
    desc: "User-friendly application.",
  },
  {
    title: "domain",
    type: "domain",
    imgAdd:
      "https://images.pexels.com/photos/16441222/pexels-photo-16441222/free-photo-of-sunset-in-the-clouds.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "/",
    duration: "2020",
    desc: "User-friendly application.",
  },
];

const Projects = () => {
  const [selection, setSelection] = useState("all");
  let filteredArr = [...portfolioContents];
  if (selection !== "all") {
    filteredArr = portfolioContents.filter((item) => {
      if (selection === item.type) {
        console.log(item.type);

        return item;
      }
    });
  }

  return (
    <AnimatePresence>
      <div
        id="portfolio"
        className="flex flex-col items-center bg-navy-blue px-align pt-[10rem] pb-[10rem]"
      >
        <article className="text-center w-[35rem]">
          <p className="text-sm font-semibold text-dark-indigo">PORTFOLIO</p>
          <h1 className="mt-1 mb-3 text-3xl font-semibold">
            My Works & Projects
          </h1>
          <p className="text-[1rem] font-semibold text-grey-text">
            During the past 10 years, I&apos;ve had a brilliant opportunity to
            communicate with passionate people who had a dream to lunch an
            online business or craved to automate their business procedures.
            Converting their business dreams into a user-friendly application
            has been my main responsibility during my career life. Here you find
            some of the projects that I feel have a close relation whit their
            concept and remind me of many fantastic memories.
          </p>
        </article>
        <div className="flex gap-8 mt-16 ">
          <button
            className={twMerge(
              // "px-6 py-2 rounded-lg text-md bg-dark-indigo",
              "relative inline-flex h-12 overflow-hidden rounded-md p-[1px] ",
              selection === "all"
                ? "outline-none ring-2 ring-slate-400 ring-offset-1 ring-offset-slate-50"
                : ""
            )}
            onClick={() => setSelection("all")}
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex items-center justify-center w-full h-full px-4 py-1 text-sm font-medium text-white rounded-md cursor-pointer bg-slate-950 backdrop-blur-3xl">
              All
            </span>
          </button>
          <button
            className={twMerge(
              // "px-6 py-2 rounded-lg text-md bg-dark-indigo",
              "relative inline-flex h-12 overflow-hidden rounded-md p-[1px] ",
              selection === "project"
                ? "outline-none ring-2 ring-slate-400 ring-offset-1 ring-offset-slate-50"
                : ""
            )}
            onClick={() => setSelection("project")}
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex items-center justify-center w-full h-full px-4 py-1 text-sm font-medium text-white rounded-md cursor-pointer bg-slate-950 backdrop-blur-3xl">
              Projects
            </span>
          </button>
          <button
            className={twMerge(
              // "px-6 py-2 rounded-lg text-md bg-dark-indigo",
              "relative inline-flex h-12 overflow-hidden rounded-md p-[1px] ",
              selection === "certification"
                ? "outline-none ring-2 ring-slate-400 ring-offset-1 ring-offset-slate-50"
                : ""
            )}
            onClick={() => setSelection("certification")}
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex items-center justify-center w-full h-full px-4 py-1 text-sm font-medium text-white rounded-md cursor-pointer bg-slate-950 backdrop-blur-3xl">
              Certifications
            </span>
          </button>
          <button
            className={twMerge(
              // "px-6 py-2 rounded-lg text-md bg-dark-indigo",
              "relative inline-flex h-12 overflow-hidden rounded-md p-[1px] ",
              selection === "domain"
                ? "outline-none ring-2 ring-slate-400 ring-offset-1 ring-offset-slate-50"
                : ""
            )}
            onClick={() => setSelection("domain")}
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex items-center justify-center w-full h-full px-4 py-1 text-sm font-medium text-white rounded-md cursor-pointer bg-slate-950 backdrop-blur-3xl">
              Domain
            </span>
          </button>
        </div>
        <motion.div className="grid items-start grid-cols-4 gap-10 mt-10 duration-300">
          {filteredArr.map((item, index) => {
            return (
              <ImgCard
                key={index}
                title={item.title}
                imgAdd={item.imgAdd}
                link={item.link}
                duration={item.duration}
                desc={item.desc}
              />
            );
          })}
          {/* <ImgCard
          title="Project"
          imgAdd="https://images.pexels.com/photos/11909386/pexels-photo-11909386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          link="/"
          duration="2020"
          desc="User-friendly application."
        /> */}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
export default Projects;
