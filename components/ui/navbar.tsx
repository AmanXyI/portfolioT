"use client";
import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
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
const Navbar = () => {
  const [hookedYPostion, setHookedYPosition] = useState(0);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setHookedYPosition(latest);
  });
  return (
    <nav
      className={twMerge(
        "w-full flex justify-center items-center fixed gap-[20rem]  py-[1.5rem] z-[60] duration-300 text-white",
        hookedYPostion >= 0.04 ? "bg-navy-blue shadow-lg" : " "
      )}
    >
      <button className="text-[1rem] ">Tushar Choudhari</button>

      {/* nav links */}
      <div className="flex gap-14 mr-[8rem] text-[.8rem] font-[700] uppercase">
        {navLinks.map((link, index) => {
          const element = document.getElementById(link.link);
          return (
            <button
              key={index}
              className="uppercase duration-200 hover:text-dark-indigo"
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
        <a href="/resume">resume</a>
      </div>
    </nav>
  );
};

export default Navbar;
