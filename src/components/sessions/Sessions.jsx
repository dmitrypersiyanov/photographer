import React from "react";
import { useState } from "react";
import { sessions } from "../../data";
import { CheckmarkCircle } from "../../icons/icons";

const Sessions = () => {    

    const [currentTab, setCurrentTab] = useState('Family');

    const handleClick = (e) => {
        setCurrentTab(e.target.getAttribute('data-title'));
    }

    const currentSession = sessions.find((item) => {
            return item.title.toLowerCase() === currentTab.toLowerCase();
        });


    return(
        <>
            <div id="rates" className="w-full bg-darkest pb-28 px-5 md:px-20 lg:px-20 pt-32 md:pt-40 md:pb-20">
                <h2 className="text-fancy text-4xl font-bold md:text-center text-left">Choose your option</h2>
               
                <div className="w-full rounded-xl mt-12 flex flex-col lg:flex-row nowrap overflow-hidden">
                    <div className="w-full lg:w-4/6 bg-gray-50 p-7 md:p-10">
                        <h2 className="text-lg font-medium mb-5">Choose a session type</h2>
                        
                        {/* <div className="inline-flex rounded-md shadow-sm w-full h-14 mb-5" role="group"> */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 h-auto md:grid-cols-5 md:rounded-md w-full md:h-14 lg:h-14 mb-7" role="group">
                            <button 
                            onClick={handleClick}
                            type="button"
                            data-title="Ladies Formal" 
                            className={`${currentTab === 'Ladies Formal' ? 'ring-4 ring-darkest z-10 bg-white' : 'bg-white'} md:w-full px-2 py-3 text-sm font-normal 
                            text-gray-500 hover:text-gray-600 border text-left sm:text-center
                            border-gray-200 md:rounded-l-lg hover:bg-gray-100 focus:z-10
                            focus:ring-4 focus:ring-darkest focus:bg-gray-100`}>
                                Ladies Formal
                            </button>
                            <button 
                            onClick={handleClick}
                            type="button" 
                            data-title="Ladies Casual" 
                            className={`${currentTab === 'Ladies Casual' ? 'ring-4 ring-darkest z-10 bg-white' : 'bg-white'} w-full px-2 py-3 text-sm font-normal text-gray-500 
                            hover:text-gray-600 border-l sm:border-l-0 sm:border-t border-b border-r 
                            border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-4 text-left sm:text-center
                            focus:ring-darkest focus:bg-gray-100`}>
                                Ladies Casual
                            </button>
                            <button 
                            onClick={handleClick}
                            type="button" 
                            data-title="Ladies Pregnant" 
                            className={`${currentTab === 'Ladies Pregnant' ? 'ring-4 ring-darkest z-10 bg-white' : 'bg-white'} w-full px-2 py-3 text-sm font-normal text-gray-500 
                            hover:text-gray-600 border-l border-b md:border-l-0 md:border-t md:border-b border-r 
                            hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-darkest text-left sm:text-center
                            focus:bg-gray-100`}>
                                Ladies Pregnant
                            </button>
                            <button 
                            onClick={handleClick}
                            type="button" 
                            data-title="Couples" 
                            className={`${currentTab === 'Couples' ? 'ring-4 ring-darkest z-10 bg-white' : 'bg-white'} w-full px-2 py-3 text-sm font-normal text-gray-500 
                            hover:text-gray-600 border-r border-l sm:border-l-0 md:border-r-0 md:border-t border-b hover:bg-gray-100 text-left sm:text-center
                            focus:z-10 focus:ring-4 focus:ring-darkest focus:bg-gray-100`}>
                                Couples
                            </button>
                            <button 
                            onClick={handleClick}
                            type="button" 
                            data-title="Family" 
                            className={`${currentTab === 'Family' ? 'ring-4 ring-darkest z-10 bg-white' : 'bg-white'} w-full px-2 py-3 text-sm font-normal text-gray-500 
                            hover:text-gray-600 border-l border-r border-b md:border-t border-gray-200 md:rounded-r-md text-left sm:text-center
                            hover:bg-gray-100 focus:z-10 focus:ring-4 sm:col-span-2 md:col-span-1
                            focus:ring-darkest focus:bg-gray-100`}>
                                Family
                            </button>
                        </div>
                        <h2 className="mb-3 text-md font-medium">Standard details:</h2>
                        <p className="text-lg leading-normal text-gray-500 font-light">
                            {currentSession.details}
                        </p>

                        {/* <ul>
                            {
                                sessions.map((session) => {
                                    return(
                                        <li 
                                        onClick={handleClick} 
                                        className={` ${currentTab === session.title ? 'font-semibold' : ''}`} 
                                        data-title={session.title} 
                                        key={session.id}>{session.title}</li>
                                    );
                                })
                            }
                        </ul> */}

                    </div>
                    
                    <div className="w-full lg:w-2/6 md:min-w-[380px] p-7 md:p-10 pt-0 lg:p-10 bg-white border-t-2 lg:border-t-0 lg:border-l-2 border-gray-100">
                        <h2 className="text-2xl font-bold text-left mt-8 md:mt-0 lg:mt-0 mb-5">{currentSession.title}</h2>
                        <div className="flex flex-col">
                            {/* <div className="text-gray-500 -mb-1 font-light text-md">Starts at</div> */}
                            <div className="text-gray-900 mb-5 text-4xl font-bold">${currentSession.rate}</div>
                        </div>
                        <h3 className="text-gray-900 text-lg font-medium mb-3">What's included:</h3>
                            <div className="w-full grid grid-cols-2 ">
                                <div className=" bg-white text-left font-light">Mood Board</div>
                                <div className="bg-white text-right font-medium">{currentSession.moodBoard ? 'included' : 'not included'}</div>
                                    <div className=" bg-white text-left font-light">Ideas</div>
                                    <div className="bg-white text-right font-medium">{currentSession.ideas ? 'included' : 'not included'}</div>
                                <div className=" bg-white text-left font-light">Raw Photos</div>
                                <div className=" bg-white text-right font-medium">{currentSession.photosRaw} pieces</div>
                                    <div className=" bg-white text-left font-light">Tuned Photos</div>
                                    <div className=" bg-white text-right font-medium">{currentSession.photosTuned} pieces</div>
                                <div className=" bg-white text-left font-light">Extra hour rate</div>
                                <div className=" bg-white text-right font-medium">{currentSession.extraHourRate} / hour</div>
                                    <div className="mb-2 bg-white text-left font-light">Session Duration</div>
                                    <div className="mb-2 bg-white text-right font-medium">{currentSession.sessionLength} hours</div>
                            </div>
                            {/* <a href="#" className="sm:max-w-max w-full mt-6 inline-block rounded-md border-transparent text-center 
                        py-3 bg-gradient-to-r from-fancy  to-[#c1a5fc] px-8 font-regular text-darkest hover:bg-gradient-to-l"
                        >
                        Contact me
                        </a> */}
                                        <a href="#" className="max-w-max sm:max-w-max text-center mt-5 inline-block rounded-md border-transparent 
                bg-darkless py-3 px-8 transition-border duration-500 border-dashed border-2 hover:darkest 
                font-light text-fancy hover:bg-darkest">
                    Contact me
                </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sessions;