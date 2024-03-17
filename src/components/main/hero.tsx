import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useState } from "react";
import HeroImg from "../../../public/images/hero_profile.jpg";

const bgImageVariant = {
  enter: { y: -100, scale: 20 },
  exit: { y: 0 },
};
const primaryTextVariant = {
  enter: { y: 250, opacity: 0 },
  exit: { y: 0, opacity: 1 },
};
const secondaryTextVariant = {
  enter: { y: -200 },
  exit: { y: 0 },
};

const Hero = () => {
  const [hover, setHover] = useState(false);
  return (
    <div className="flex flex-col items-center w-full h-full pt-[6rem]">
      <motion.div
        className=""
        animate={hover ? "enter" : "exit"}
        variants={primaryTextVariant}
      >
        <h1 className="text-center font-semibold text-[4.5rem] leading-[4.5rem] mt-[5rem]">
          I'm <span className="text-[#fd853a]">Name</span>,
          <br />
          Product Manager
        </h1>
      </motion.div>

      <motion.div
        className="absolute flex w-full top-[50%] px-14 justify-between "
        variants={secondaryTextVariant}
        animate={hover ? "enter" : "exit"}
      >
        <p className="w-[16rem] font-semibold">
          <div className="">
            <Quote />
          </div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
          placeat, est doloremque exercitationem expedita aliquam,
        </p>
        <div>
          <h1 className="text-4xl font-semibold">10 Years</h1>
          <p className="text-right">Experince</p>
        </div>
      </motion.div>
      <article className="hidden md:block">
        <div
          className="bg-[#feb273] rounded-[100%] w-[40rem] h-[40rem] mt-[5rem] flex justify-center items-center z-[-40]"
          onMouseEnter={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
        >
          <img
            src={HeroImg}
            className="absolute z-40 h-[30rem] translate-y-[-17rem]"
          />
          <motion.div
            className="bg-black h-[2rem] w-[2rem]"
            variants={bgImageVariant}
            animate={hover ? "enter" : "exit"}
          ></motion.div>
        </div>
      </article>
    </div>
  );
};

export default Hero;
