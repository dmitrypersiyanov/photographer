import React from "react";
import { accordionData } from "../../data";
import Accordion from "./Accordion";

const Faq = () => {
  return (
    <>
      <div
        id="faq"
        className="w-full px-5 md:px-20 lg:px-20 pt-20 pb-24 md:pt-32 md:pb-32 bg-darkest"
      >
        <h2 className="text-fancy text-4xl font-bold md:text-center text-left mb-12 pr-10">
          Frequently asked questions
        </h2>
        <div className="w-full lg:w-[700px] mx-auto grid grid-cols-1 gap-5 sm:gap-7">
          {accordionData.map((item, index) => {
            return <Accordion key={index} {...item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Faq;
