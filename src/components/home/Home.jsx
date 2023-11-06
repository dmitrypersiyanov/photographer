import React, { useEffect } from "react";
import { Link } from "react-scroll";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Home = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };
  const hero = {
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.7 },
    },
    hidden: {
      x: 400,
      opacity: 0,
    },
  };

  const item = {
    visible: {
      opacity: 1,
      x: 0,
    },
    hidden: {
      opacity: 0,
      x: 200,
    },
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
    // else{
    //     control.start('hidden')
    // }
  }, [control, inView]);

  return (
    <div
      id="home"
      className="w-full bg-darkest h-auto sm:h-[650px] mt-24 grid grid-cols-1 sm:grid-cols-2 pb-10 sm:pb-0"
    >
      <div className="bg-darkest p-5 pt-10 sm:p-10 md:p-15 md:pl-24 flex flex-col justify-center">
        <h1 className="text-4xl mt-0 sm:text-5xl md:text-6xl font-bold tracking-tight text-fancy text-left">
          Hi, welcome to my portfolio
        </h1>
        <motion.div variants={hero} initial="hidden" animate="visible">
          <img
            src="https://images.pexels.com/photos/1198839/pexels-photo-1198839.jpeg?auto=compress&cs=tinysrgb&w=1200"
            className="w-full h-auto block sm:hidden rounded-lg mt-10"
            alt="beach"
          />
        </motion.div>
        <p className="mt-8 text-xl text-gray-100 font-thin text-left">
          Check out my works and feel free to get in touch whenever you decide
          to hire me for your next photoshooting
        </p>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="max-w-max sm:max-w-max text-center mt-10 inline-block rounded-md border-transparent 
                bg-darkest py-3 px-8 transition-border duration-500 border-dashed border-2 border-fancy hover:border-fancy 
                font-light text-fancy hover:bg-darkest cursor-pointer"
        >
          Contact me
        </Link>
      </div>

      <motion.div
        ref={ref}
        variants={list}
        initial="hidden"
        animate={control}
        className="bg-darkest overflow-hidden hidden sm:flex px-5 md:px-10 flex-shrink-0 gap-8 items-center justify-center sm:justify-start"
      >
        <div className="flex flex-col justify-center gap-8">
          <motion.div
            variants={item}
            className="h-64 w-44 overflow-hidden rounded-lg "
          >
            <img
              src="https://images.pexels.com/photos/3727461/pexels-photo-3727461.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="woman"
              className="h-full w-full object-cover object-center"
            />
          </motion.div>
          <motion.div
            variants={item}
            className="h-64 w-44 overflow-hidden rounded-lg hidden sm:block"
          >
            <img
              src="https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="woman"
              className="h-full w-full object-cover object-center"
            />
          </motion.div>
        </div>

        <div className="flex flex-col justify-center gap-8">
          <motion.div
            variants={item}
            className="h-64 w-44 overflow-hidden rounded-lg"
          >
            <img
              src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="woman"
              className="h-full w-full object-cover object-center"
            />
          </motion.div>
          <motion.div
            variants={item}
            className="h-64 w-44 overflow-hidden rounded-lg"
          >
            <img
              src="https://images.pexels.com/photos/3094422/pexels-photo-3094422.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="pregnant"
              className="h-full w-full object-cover object-center"
            />
          </motion.div>
          <motion.div
            variants={item}
            className="h-64 w-44 overflow-hidden rounded-lg hidden sm:block"
          >
            <img
              src="https://images.pexels.com/photos/2205647/pexels-photo-2205647.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="girl"
              className="h-full w-full object-cover object-bottom"
            />
          </motion.div>
        </div>

        <div className="flex-col justify-center gap-8 hidden sm:flex">
          <motion.div
            variants={item}
            className="h-64 w-44 overflow-hidden rounded-lg"
          >
            <img
              src="https://images.pexels.com/photos/2916820/pexels-photo-2916820.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="mountains"
              className="h-full w-full object-cover object-center"
            />
          </motion.div>
          <motion.div
            variants={item}
            className="h-64 w-44 overflow-hidden rounded-lg"
          >
            <img
              src="https://images.pexels.com/photos/13780055/pexels-photo-13780055.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="couple"
              className="h-full w-full object-cover object-center"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
