import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { motion, spring } from "framer-motion";

const cardsVariant = {
  enter: { scale: 1.1 },
  exit: { scale: 1 },
};

const Card = () => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className={twMerge(
        "bg-[#726a6a41] w-[20rem] h-full rounded-3xl flex justify-between flex-col overflow-hidden transition-all duration-300 relative",
        hover ? "bg-[#fd853a]" : ""
      )}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <header className="border-b py-[1.5rem] px-8 text-xl">
        UI / UX Design
      </header>
      <motion.main
        className="relative flex flex-col items-center "
        variants={cardsVariant}
        animate={hover ? "enter" : "exit"}
        transition={spring}
      >
        {/* main card */}
        <div className=" w-full bg-red-500  h-[15rem] rounded-3xl absolute bottom-0 z-40 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="/"
            className="w-full h-full"
          />
        </div>
        {/* background cards */}
        <div className=" w-[calc(100%-2rem)] bg-gray-500  h-[15rem] rounded-3xl absolute bottom-0 translate-y-[-1rem] z-30  "></div>
        <div className=" w-[calc(100%-4rem)] bg-gray-400  h-[15rem] rounded-3xl absolute bottom-0 translate-y-[-2rem] z-20 "></div>
      </motion.main>
      <button
        className={twMerge(
          "absolute bottom-3 z-50 bg-[#1d2939] right-3  w-[4rem] h-[4rem] rounded-full transition-all duration-300",
          hover && "bg-[#fd853a]"
        )}
      >
        =
      </button>
    </div>
  );
};

export default Card;
