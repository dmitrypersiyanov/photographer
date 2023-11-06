import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Instagram = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  const variants = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.2 },
    },
    hidden: { opacity: 0, scale: 0 },
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
    // else {
    //   control.start("hidden");
    // }
  }, [control, inView]);

  return (
    <div className="w-full bg-darkest h-auto py-10 md:py-24 px-5 md:px-20 flex justify-center items-center">
      <motion.div
        ref={ref}
        variants={variants}
        animate={control}
        initial="hidden"
        className="w-full lg:w-[700px] h-[170px] md:h-[250px] bg-insta rounded-xl p-5 md:p-7 cursor-pointer"
      >
        <a
          href="https://www.instagram.com/"
          className="w-full h-full bg-darkest rounded-xl flex items-center drop-shadow-5xl transition-all duration-500 justify-center"
        >
          <h2 className="text-text-primary text-md md:text-xl m-0">
            View more on{" "}
            <span className="font-bold bg-clip-text bg-insta text-transparent">
              INSTAGRAM
            </span>
          </h2>
        </a>
      </motion.div>
    </div>
  );
};

export default Instagram;
