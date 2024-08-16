import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const About = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  const aboutVariants = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.2 },
      // x: 0,
    },
    hidden: {
      opacity: 0,
      scale: 0.7,
      // x: 300
    },
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
    <div
      id="about"
      className=" bg-darkest z-20 w-full flex relative justify-center overflow-hidden items-center py-20 md:pt-40 md:pb-40"
    >
      <motion.div
        ref={ref}
        initial="hidden"
        variants={aboutVariants}
        animate={control}
        className="w-[85%] sm:w-[80%] max-w-6xl px-0 py-0 flex flex-col relative box-border shadow-glow rounded-lg"
      >
        <div className="w-full flex flex-col lg:flex-row bg-darkest px-0 py-14 rounded-lg">
          <div className="flex w-full lg:w-2/6 justify-center lg:items-start box-border pb-14 lg:pb-0">
            <div className="w-48 h-48 bg-text-primary rounded-full overflow-hidden ">
              <img
                alt="photographer"
                className="w-full h-full object-cover"
                src="https://images.pexels.com/photos/2179205/pexels-photo-2179205.jpeg?auto=compress&cs=tinysrgb&w=600"
              />
            </div>
          </div>
          <div className="flex flex-col text-left w-full lg:w-4/6 border-l-0 lg:border-l-2 border-l-darkless border-t-2 lg:border-t-0 border-t-darkless box-border pl-10 pr-10 lg:pl-14 lg:pr-10">
            <h2 className="text-3xl font-bold text-text-primary mt-10 lg:mt-0">
              About me
            </h2>
            <p className=" text-text-secondary text-xl font-light mt-5">
            I am a creative and committed photographer known for my reliability and adaptability. I excel in collaborative environments and take initiative when working solo. Skilled at managing pressure and meeting deadlines, I consistently deliver high-quality results with enthusiasm and dedication.
            </p>
            <span className=" text-text-primary text-lg font-medium mt-5">
              Follow me on Instagram:
            </span>
            <img
              className="w-6 inline mt-4"
              src="/images/instagram.png"
              alt="instagram"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
