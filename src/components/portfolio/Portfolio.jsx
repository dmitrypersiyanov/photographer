import React, { useState } from "react";
import { portfolio } from "../../data";
import { motion, AnimatePresence } from "framer-motion";
import { Close } from "../../icons/icons";

const Portfolio = () => {
  const [selectedIdCasual, setSelectedIdCasual] = useState(null);
  const [selectedIdCouples, setSelectedIdCouples] = useState(null);
  return (
    <div
      id="portfolio"
      className="pb-32 px-5 md:px-20 pt-24 md:pt-32 lg:px-20 bg-darkest"
    >
      <h2 className="text-fancy text-4xl font-bold md:text-center text-left pr-10">
        Check out my portfolio
      </h2>
      <h4 className="text-white text-xl capitalize font-semibold text-left mt-8">
        Ladies Casual
      </h4>
      <div className="relative container min-w-full w-full grid grid-cols-2 small:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-darkest gap-5 mt-6">
        {portfolio.casual.map((item) => {
          return (
            <>
              <motion.img
                layoutId={item.id}
                onClick={() => setSelectedIdCasual(item.id)}
                key={item.id}
                alt="casual"
                src={item.url}
                className={`${
                  item.id == "5"
                    ? "pointer-events-none lg:pointer-events-auto hidden hover:cursor-pointer md:block w-full h-[265px] sm:h-full rounded-lg md:col-span-2 object-cover md:row-span-2 shadow-sm lg:col-start-1 lg:row-start-1"
                    : "pointer-events-none lg:pointer-events-auto md:hover:cursor-pointer w-full h-[265px] sm:h-full rounded-lg object-cover"
                }`}
              />
            </>
          );
        })}

        <div
          className={`${
            selectedIdCasual > 0 ? "absolute" : "hidden"
          } top-0 left-0 w-full h-full bg-slate-800 z-10 opacity-90`}
        ></div>

        <AnimatePresence>
          {selectedIdCasual && (
            <motion.div
              className="absolute top-0 left-0 bottom-0 right-0 w-full lg:w-1/2 h-full mx-auto rounded-lg overflow-hidden z-20"
              layoutId={selectedIdCasual}
            >
              {portfolio.casual
                .filter((item) => item.id === selectedIdCasual)
                .map((item) => {
                  return (
                    <motion.img
                      className="w-full h-full object-cover "
                      src={item.url}
                      key={item.id}
                      alt="casual"
                    />
                  );
                })}
              <motion.div
                className="w-12 h-12 rounded-full bg-slate-100 absolute top-8 right-8 text-sm flex justify-center items-center cursor-pointer group"
                onClick={() => setSelectedIdCasual(null)}
              >
                <motion.div className="group-hover:rotate-180 transition-rotate duration-500">
                  <Close />
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <h4 className="text-white text-xl capitalize font-semibold text-left mt-12">
        Ladies Fashion
      </h4>
      <div className="container w-full min-w-full grid grid-cols-2 small:grid-cols-1 md:grid-cols-2 bg-darkest gap-5 pt-5 rounded-lg lg:grid-cols-4">
        {portfolio.fashion.map((item) => {
          return (
            <>
              <img
                key={item.id}
                alt="fashion"
                src={item.url}
                className="pointer-events-none lg:pointer-events-auto md:hover:cursor-pointer md:hover:scale-105 transition-scale duration-500 w-full h-[265px] sm:h-full object-cover rounded-lg"
              />
            </>
          );
        })}
      </div>

      <h4 className="text-white text-xl capitalize font-semibold text-left mt-12">
        Couples
      </h4>

      <div className="relative container min-w-full w-full grid grid-cols-2 small:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-darkest gap-5 mt-6">
        {portfolio.couples.map((item) => {
          return (
            <>
              <motion.img
                layoutId={item.id}
                onClick={() => setSelectedIdCouples(item.id)}
                key={item.id}
                alt="couples"
                src={item.url}
                className={`${
                  item.id == "10"
                    ? "pointer-events-none lg:pointer-events-auto md:hover:cursor-pointer hidden sm:block w-full h-[265px] sm:h-full rounded-lg md:col-span-2 shadow-sm lg:col-start-3 md:row-span-2 lg:row-start-1"
                    : "pointer-events-none lg:pointer-events-auto md:hover:cursor-pointer w-full h-[265px] sm:h-full rounded-lg object-cover"
                }`}
              />
            </>
          );
        })}
        <div
          className={`${
            selectedIdCouples > 0 ? "absolute" : "hidden"
          } top-0 left-0 w-full h-full bg-slate-800 z-10 opacity-90`}
        ></div>

        <AnimatePresence>
          {selectedIdCouples && (
            <motion.div
              className="absolute top-0 left-0 bottom-0 right-0 w-1/2 h-full mx-auto rounded-lg overflow-hidden z-20"
              layoutId={selectedIdCouples}
            >
              {portfolio.couples
                .filter((item) => item.id === selectedIdCouples)
                .map((item) => {
                  return (
                    <motion.img
                      className="w-full h-full object-cover"
                      src={item.url}
                      key={item.id}
                    />
                  );
                })}
              <motion.div
                className="w-12 h-12 rounded-full bg-slate-100 absolute top-8 right-8 text-sm flex justify-center items-center cursor-pointer group"
                onClick={() => setSelectedIdCouples(null)}
              >
                <motion.div className="group-hover:rotate-180 transition-rotate duration-500">
                  <Close />
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Portfolio;
