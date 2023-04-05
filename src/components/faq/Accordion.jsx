import React, { useState } from "react";
import { QuestionMark } from "../../icons/icons";
import { ChevronUp } from "../../icons/icons";
import { ChevronDown } from "../../icons/icons";
import { Camera } from "../../icons/icons";
import { Question } from "../../icons/icons";

const Accordion = ({ title, description }) => {
  const [active, setActive] = useState(false);
  return (
    <div className="w-full mx-auto shadow-md">
      <div
        onClick={() => setActive(!active)}
        className={`${
          active
            ? "bg-darker rounded-tl-lg rounded-tr-lg"
            : "bg-darker rounded-lg"
        } transition-all duration-500 hover:rounded-bl-none hover:rounded-br-none hover:bg-darker py-5 px-5 sm:px-8 group cursor-pointer flex items-center justify-start gap-5`}
      >
        {/* <span className='pt-0.5'><QuestionMark/></span> */}
        {/* <span className='pt-0.5'><Camera/></span> */}
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
    </div>
  );
};

export default Accordion;
