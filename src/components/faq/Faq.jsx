import React from "react";
import { accordionData } from "../../data";
import Accordion from "./Accordion";

const Faq = () => {
    return(
        <>
            <div className="w-full px-20 pt-20 md:pt-40 md:pb-40 bg-darkest">
                <h2 className="text-fancy text-4xl font-bold md:text-center text-left mb-12">Frequently asked questions</h2>
                <div className="w-[700px] mx-auto overflow-hidden grid grid-cols-1 gap-7">
                    {accordionData.map((item, index) => {
                        return(
                            <Accordion key={index} {...item} />
                        )
                    })}
                </div>
            </div>
            <div className="w-full max-w-full bg-yellow-400 -rotate-2 text-lg font-semibold overflow-hidden whitespace-nowrap gap-6 flex">
                <span>BOOK YOUR SESSION NOW!</span>
                <span>BOOK YOUR SESSION NOW!</span>
                <span>BOOK YOUR SESSION NOW!</span>
                <span>BOOK YOUR SESSION NOW!</span>
                <span>BOOK YOUR SESSION NOW!</span>
                <span>BOOK YOUR SESSION NOW!</span>
                <span>BOOK YOUR SESSION NOW!</span>
                <span>BOOK YOUR SESSION NOW!</span>
                <span>BOOK YOUR SESSION NOW!</span>
                <span>BOOK YOUR SESSION NOW!</span>
                <span>BOOK YOUR SESSION NOW!</span>
                <span>BOOK YOUR SESSION NOW!</span>
                <span>BOOK YOUR SESSION NOW!</span>
                <span>BOOK YOUR SESSION NOW!</span>
                <span>BOOK YOUR SESSION NOW!</span>
                <span>BOOK YOUR SESSION NOW!</span>
                <span>BOOK YOUR SESSION NOW!</span>
                {/* GREENYELLOW GREENYELLOW GREENYELLOW GREENYELLOW GREENYELLOW GREENYELLOW GREENYELLOW GREENYELLOW GREENYELLOW */}
            </div>
        </>
    );
};

export default Faq;