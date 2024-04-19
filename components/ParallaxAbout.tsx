"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const ParallaxAbout = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0.1 1", "1 0"],
  });
  //   const { scrollYProgress } = useScroll();
  //   useEffect(() => {
  //     console.log(scrollYProgress);
  //   }, [scrollYProgress]);

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-50%", "-10%"]);

  return (
    <div className="h-[20rem] overflow-hidden relative" ref={ref}>
      <motion.img
        src="https://images.pexels.com/photos/20584389/pexels-photo-20584389/free-photo-of-a-woman-sitting-in-a-room-with-a-window.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="bg"
        style={{
          y: backgroundY,
        }}
        className="w-full "
      />
      <div className="absolute bottom-0 flex flex-col items-center justify-center w-full h-full text-center bg-[#3a4966bb] ">
        <h1 className="mt-1 mb-3 text-3xl font-semibold">
          Creating a product is not the goal, providing convenience is the goal
        </h1>
        <p className="text-[1rem] font-semibold w-[38rem] ">
          Asking appropriate questions, finding the most important value that is
          supposed to be created and introduced, and focusing on that to
          develop, is the chief and very first responsibility of a product
          manager in every single project. Appropriate user experience is the
          offspring of this effort from my point of view.
        </p>
      </div>
    </div>
  );
};
export default ParallaxAbout;
