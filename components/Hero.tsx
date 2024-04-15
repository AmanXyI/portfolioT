"use client";
import { Typewriter } from "react-simple-typewriter";
import { Meteors } from "./ui/meteors";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const navLinks = [
  {
    name: "home",
    link: "home",
  },
  {
    name: "skills",
    link: "skills",
  },
  {
    name: "timeline",
    link: "timeline",
  },
  {
    name: "portfolio",
    link: "portfolio",
  },

  {
    name: "contact",
    link: "contact",
  },
];

const Hero = () => {
  const ref = useRef(null);
  const [hookedYPostion, setHookedYPosition] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0.1 1", "1 0"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-38%", "400%"]);
  // console.log(scrollYProgress.);

  useEffect(() => {
    scrollYProgress.onChange((e) => {
      // console.log(e);

      setHookedYPosition(e);
    });
  }, [scrollYProgress]);

  return (
    <motion.section
      id="home"
      className="relative h-[100vh] overflow-hidden  bg-gradient-to-b from-[#121a34] to-[#1c204f] "
    >
      <nav
        className={twMerge(
          "w-full flex justify-between items-center fixed px-align py-[1.5rem] z-[60] duration-300 ",
          hookedYPostion >= 0.03 ? "bg-navy-blue shadow-lg" : " "
        )}
      >
        <button className="text-[1rem] font-nunito">Tushar Choudhari</button>

        {/* nav links */}
        <div className="flex gap-14 mr-[8rem] text-sm capitalize">
          {navLinks.map((link, index) => {
            const element = document.getElementById(link.link);
            return (
              <button
                key={index}
                className="capitalize duration-200 hover:text-dark-indigo"
                onClick={() => {
                  element?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                {link.name}
              </button>
            );
          })}
        </div>
      </nav>
      <article className="">
        {/* blue circle */}
        <div className="size-[50rem] rounded-full bg-[#4f46e5] translate-x-[22rem]  translate-y-[15rem] z-10 flex justify-center relative">
          {/* my story text-box */}
          <div className="absolute bg-[#0f172a] z-50 px-5 py-6 w-[23rem]  rounded-md left-0 flex flex-col gap-6 translate-x-[-8rem] translate-y-[7rem] justify-center ">
            <h1 className="text-lg font-semibold">
              The story of a tech lover!
            </h1>
            <p className="text-sm font-semibold">
              I utilize technology to bring convenience to people's lives and
              solve problems
            </p>

            <p className="text-sm font-semibold ">Here you'll find my story</p>
          </div>

          {/* image */}
          <motion.div
            // className=""
            className="translate-y-[-20rem] w-[40rem]"
            style={{
              y: backgroundY,
            }}
          >
            <Image
              src="/assets/ProfileImage.jpg"
              alt=""
              width={1000}
              height={1000}
            />
          </motion.div>

          {/* dynamic text */}
          <div className="absolute right-0 w-[28rem]  translate-x-[18.5rem] translate-y-[2.6rem] ">
            <h1 className="font-bold leading-[4.5rem] text-xxl ">
              Tushar Choudhary
            </h1>
            <div className="pt-4 pl-2 text-xl font-semibold">
              <Typewriter
                words={["Product Manager", "Project Manager", "Lorem"]}
                loop={Infinity}
                cursor={false}
                typeSpeed={150}
                deleteSpeed={100}
                delaySpeed={1000}
              />
            </div>
          </div>
        </div>
      </article>
      <div className="absolute bottom-[-45px] overflow-hidden w-full z-50 ">
        <div className="z-50 w-[300%] scale-y-[2] translate-x-[-95rem]">
          <svg viewBox="0 0 2880 48" fill="none" className="">
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="#0f172a"
            ></path>
          </svg>
        </div>
      </div>
      {/* <div className="size-10 bg-white absolute bottom-0 translate-x-[50rem]">
        fs
      </div> */}
      <div className="translate-x-[30rem]">
        <Meteors className="" number={5} />
      </div>
    </motion.section>
  );
};

export default Hero;
