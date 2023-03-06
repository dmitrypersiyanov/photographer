import React from "react";
import { useState } from "react";

const Portfolio = () => {

    // const [current, setCurrent] = useState('https://images.pexels.com/photos/2409681/pexels-photo-2409681.jpeg?auto=compress&cs=tinysrgb&w=1200');
    
    // const handleImage = (e) => {
    //     setCurrent(e);
    // }

    return(
        <div id="portfolio" className="pb-20 px-5 md:px-20 pt-40 lg:px-20 bg-darkest">
            <h2 className="text-fancy text-4xl font-bold md:text-center text-left">Check out my portfolio</h2>
            <h4 className="text-white text-xl capitalize font-semibold text-left mt-8">Ladies Casual</h4>
                <div className="container min-w-full w-full grid grid-cols-2 small:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-darkest gap-5 mt-6">
                    <img
                        id="10"
                        // onClick={(e) => handleImage(e.target.src)}
                        className="md:hover:cursor-pointer w-full h-full rounded-lg object-cover"
                        src="https://images.pexels.com/photos/1090387/pexels-photo-1090387.jpeg?auto=compress&cs=tinysrgb&w=1200"
                        />
                    <img
                        id="11"
                        // onClick={(e) => handleImage(e.target.src)}
                        className="md:hover:cursor-pointer w-full h-full rounded-lg object-cover"
                        src="https://images.pexels.com/photos/5256142/pexels-photo-5256142.jpeg?auto=compress&cs=tinysrgb&w=1200"
                        />
                    <img
                        id="12"
                        // onClick={(e) => handleImage(e.target.src)}
                        className="md:hover:cursor-pointer w-full h-full rounded-lg object-cover"
                        src="https://images.pexels.com/photos/8158583/pexels-photo-8158583.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
                        />
                    <img
                        id="13"
                        // onClick={(e) => handleImage(e.target.src)}
                        className="md:hover:cursor-pointer w-full h-full rounded-lg h- object-cover"
                        src="https://images.pexels.com/photos/1090408/pexels-photo-1090408.jpeg?auto=compress&cs=tinysrgb&w=600"
                        />
                    <img
                        id="14"
                        // src={current}
                        src="https://images.pexels.com/photos/2409681/pexels-photo-2409681.jpeg?auto=compress&cs=tinysrgb&w=1200"
                        className="hidden md:block w-full h-full rounded-lg md:col-span-2 object-cover md:row-span-2 shadow-sm lg:col-start-1 lg:row-start-1"
                    />
                </div>

            <h4 className="text-white text-xl capitalize font-semibold text-left mt-12">Ladies Fashion</h4>
                <div className="container w-full min-w-full grid grid-cols-2 small:grid-cols-1 md:grid-cols-2 bg-darkest gap-5 pt-5 rounded-lg lg:grid-cols-4">
                    <img
                        id='6'
                        // onClick={(e) => handleImage(e.target.src)}
                        className="md:hover:cursor-pointer w-full h-full object-cover rounded-lg"
                        src="https://images.pexels.com/photos/2229490/pexels-photo-2229490.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    />
                    <img
                        id="7"
                        // onClick={(e) => handleImage(e.target.src)}
                        className="md:hover:cursor-pointer w-full h-full object-cover rounded-lg"
                        src="https://images.pexels.com/photos/923210/pexels-photo-923210.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    />
                    <img
                        id="8"
                        // onClick={(e) => handleImage(e.target.src)}
                        className="md:hover:cursor-pointer w-full h-full object-cover rounded-lg"
                        src="https://images.pexels.com/photos/707377/pexels-photo-707377.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    />
                    <img
                        id="9"
                        // onClick={(e) => handleImage(e.target.src)}
                        className="md:hover:cursor-pointer w-full h-full object-cover rounded-lg"
                        src="https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    />
                </div>

        <h4 className="text-white text-xl capitalize font-semibold text-left mt-12">Couples</h4>
            
            <div className="container min-w-full w-full grid grid-cols-2 small:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-darkest gap-5 mt-6">
                <img
                    id="1"
                    src="https://images.pexels.com/photos/1572219/pexels-photo-1572219.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    // src={current}
                    className="hidden md:block w-full h-full rounded-lg md:col-span-2 shadow-sm lg:col-start-3 md:row-span-2 lg:row-start-1"
                />
                <img
                    id="2"
                    // onClick={(e) => handleImage(e.target.src)}
                    className="md:hover:cursor-pointer w-full h-full rounded-lg object-cover"
                    src="https://images.pexels.com/photos/930676/pexels-photo-930676.jpeg?auto=compress&cs=tinysrgb&w=1200"
                />
                <img
                    id="3"
                    // onClick={(e) => handleImage(e.target.src)}
                    className="md:hover:cursor-pointer w-full h-full rounded-lg object-cover"
                    src="https://images.pexels.com/photos/773124/pexels-photo-773124.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    />
                <img
                    id="4"
                    // onClick={(e) => handleImage(e.target.src)}
                    className="md:hover:cursor-pointer w-full h-full rounded-lg object-cover"
                    src="https://images.pexels.com/photos/1198839/pexels-photo-1198839.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    />
                <img
                    id="5"
                    // onClick={(e) => handleImage(e.target.src)}
                    className="md:hover:cursor-pointer w-full h-full rounded-lg object-cover"
                    src="https://images.pexels.com/photos/1024970/pexels-photo-1024970.jpeg?auto=compress&cs=tinysrgb&w=1200"
                />
        </div>
    </div>
    )
};

export default Portfolio;