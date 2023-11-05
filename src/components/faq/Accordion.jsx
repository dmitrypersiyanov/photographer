import React, { useState, useEffect } from "react";
import { ChevronDown } from "../../icons/icons";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Accordion = ({ title, description }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  const variants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, y: 100 },
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  const [active, setActive] = useState(false);
  return (
    <motion.div
      ref={ref}
      variants={variants}
      animate={control}
      initial="hidden"
      className="w-full mx-auto shadow-md"
    >
      <div
        onClick={() => setActive(!active)}
        className={`${
          active
            ? "bg-darker rounded-tl-lg rounded-tr-lg"
            : "bg-darker rounded-lg"
        } transition-all duration-500 hover:rounded-bl-none hover:rounded-br-none hover:bg-darker py-5 px-5 sm:px-8 group cursor-pointer flex items-center justify-start gap-5`}
      >
        <p
          className={`text-lg ${
            active ? "text-fancy" : "text-gray-400"
          } group-hover:text-fancy transition-all duration-500`}
        >
          {title}
        </p>
        <span
          onClick={() => setActive(!active)}
          className={`ml-auto transition-all bg-darker rounded-full p-2 duration-500 ${
            active ? "-rotate-180" : null
          }`}
        >
          <ChevronDown />
        </span>
      </div>
      <div
        className={`bg-slate-200 transition-all duration-700 overflow-hidden ${
          active ? "max-h-96 rounded-bl-xl rounded-br-xl" : "max-h-0"
        }`}
      >
        <p className="p-5 sm:p-8 font-light text-lg">{description}</p>
      </div>
    </motion.div>
  );
};

export default Accordion;
