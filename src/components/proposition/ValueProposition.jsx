import React from "react";

const ValueProposition = () => {
  return (
    <>
      <div
        id="how"
        className="min-h-[300px] bg-darkest border-b-0 border-dashed border-gray-400 w-full relative overflow-hidden pt-20 px-5 md:px-20 md:pt-40 md:pb-20 pb-10 "
      >
        {/* <div className="w-1/2 h-full absolute z-10 top-0 -right-20 from-purple-600 -skew-x-[20deg] to-blue-600 bg-gradient-to-r"></div> */}
        <h2 className="text-fancy text-4xl font-bold z-20 md:text-center text-left">
          How it works
        </h2>
        <p className="text-white w-5/6 lg:w-5/6 text-xl font-light text-center mt-5 mx-auto">
          The process involves 3 easy & straightforward steps. Yeah, that
          simple!
        </p>
        <div className="w-full pt-10 mt-5 gap-10 sm:gap-5 md:gap-10 lg:gap-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {/* <div className="p-1 outline-4 outline-dashed outline-slate-400 outline-offset-4 rounded-xl drop-shadow-12xl bg-gradient-to-br from-fancy to-[#8d6cd4]"> */}
          <div className="p-1 rounded-xl drop-shadow-12xl bg-gradient-to-br from-darker to-darker hover:from-fancy hover:to-fancy">
            <div className="bg-darker h-full w-full box-border group px-8 py-10 rounded-lg">
              <div className="rounded-full bg-fancy text-center flex items-center justify-center text-[35px] lg:text-[40px] font-bold text-darkest h-[50px] w-[50px] lg:h-[60px] lg:w-[60px] mx-0 ">
                1
              </div>
              <h3 className="font-semibold text-white text-2xl mt-5 leading-[1.1] ">
                Come up with a session idea
              </h3>
              <p className="text-gray-400 text-lg font-light mt-5 group-hover:text-gray-400 text-justify">
                Check out my portfolio my portfolio my portfolio Check out my
                portfolio my portfolio my portfolio Check out my portfolio my
                portfolio my portfolio{" "}
              </p>
            </div>
          </div>

          {/* <div className="p-1 outline-4 outline-dashed outline-slate-400 outline-offset-4 rounded-xl  drop-shadow-12xl bg-gradient-to-tl from-fancy to-[#8d6cd4]"> */}
          <div className="p-1 rounded-xl drop-shadow-12xl bg-gradient-to-tl from-darker to-darker hover:from-fancy hover:to-fancy">
            <div className="bg-darker h-full w-full box-border group px-8 py-10 rounded-lg">
              <div className="rounded-full bg-fancy text-center flex items-center justify-center text-[35px] lg:text-[40px] font-bold text-darkest h-[50px] w-[50px] lg:h-[60px] lg:w-[60px] mx-0 ">
                2
              </div>
              <h3 className="font-semibold text-white text-2xl mt-5 leading-[1.1] ">
                Pick up an option which matches your needs
              </h3>
              <p className="text-gray-400 text-lg font-light mt-5 group-hover:text-gray-400 text-justify">
                Check out my portfolio my portfolio my portfolio Check out my
                portfolio my portfolio my portfolio Check out my portfolio my
                portfolio my portfolio{" "}
              </p>
            </div>
          </div>

          <div className="col-span-2 bg-darker bg-gradient-to-tr from-darker to-darker rounded-lg max-h-[450px] drop-shadow-12xl overflow-hidden">
            <img
              //   src="https://images.pexels.com/photos/4340785/pexels-photo-4340785.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt=""
              className="w-full object-cover"
            />
            {/* <img src="https://images.pexels.com/photos/170781/pexels-photo-170781.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" className="w-full object-cover"/> */}
            {/* <img src="/images/ideas.png" alt="" className="h-full object-cover mx-auto"/> */}
          </div>
          <div className="col-span-2 bg-darker bg-gradient-to-bl from-darker to-darker rounded-lg max-h-[450px] drop-shadow-12xl overflow-hidden">
            {/* <img src="https://images.pexels.com/photos/733853/pexels-photo-733853.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" className="w-full object-cover"/> */}
          </div>

          {/* <div className="p-1 outline-4 outline-dashed outline-slate-400 outline-offset-4 rounded-xl drop-shadow-12xl bg-gradient-to-bl from-fancy to-[#8d6cd4]"> */}
          <div className="p-1 rounded-xl drop-shadow-12xl bg-gradient-to-bl from-darker to-darker hover:from-fancy hover:to-fancy">
            <div className="bg-darker h-full w-full box-border group px-8 py-10 rounded-lg">
              <div className="rounded-full bg-fancy text-center flex items-center justify-center text-[35px] lg:text-[40px] font-bold text-darkest h-[50px] w-[50px] lg:h-[60px] lg:w-[60px] mx-0 ">
                3
              </div>
              <h3 className="font-semibold text-white text-2xl mt-5 leading-[1.1] ">
                Next, tell me about your idea
              </h3>
              <p className="text-gray-400 text-lg font-light mt-5 group-hover:text-gray-400 text-justify">
                Check out my portfolio my portfolio my portfolio Check out my
                portfolio my portfolio my portfolio Check out my portfolio my
                portfolio my portfolio{" "}
              </p>
            </div>
          </div>

          {/* <div className="p-1 outline-4 outline-dashed outline-slate-400 outline-offset-4 rounded-xl drop-shadow-12xl bg-gradient-to-bl from-fancy to-[#8d6cd4]"> */}
          <div className="p-1 rounded-xl drop-shadow-12xl bg-gradient-to-tl from-darker to-darker hover:from-fancy hover:to-fancy">
            <div className="bg-darker h-full w-full box-border group px-8 py-10 rounded-lg">
              <div className="rounded-full bg-fancy text-center flex items-center justify-center text-[35px] lg:text-[40px] font-bold text-darkest h-[50px] w-[50px] lg:h-[60px] lg:w-[60px] mx-0 ">
                4
              </div>
              <h3 className="font-semibold text-white text-2xl mt-5 leading-[1.1] ">
                I will get back to discuss the overall concept
              </h3>
              <p className="text-gray-400 text-lg font-light mt-5 group-hover:text-gray-400 text-justify">
                Check out my portfolio my portfolio my portfolio Check out my
                portfolio my portfolio my portfolio Check out my portfolio my
                portfolio my portfolio{" "}
              </p>
            </div>
          </div>

          {/* <div className=" bg-darkest box-border group">
                            <div className="rounded-full bg-fancy flex items-center justify-center  text-[35px] lg:text-[40px]  font-bold text-darkest h-[50px] w-[50px] lg:h-[60px] lg:w-[60px] mx-0">4</div>
                            <h3 className="font-semibold text-white text-3xl mt-5 leading-[1.1] ">Tell me about your idea</h3>
                            <p className="text-text-secondary text-xl font-light mt-5 group-hover:text-gray-400 text-justify ">Check out my portfolio my portfolio my portfolio Check out my portfolio my portfolio my portfolio Check out my portfolio my portfolio my portfolio Check out my portfolio my portfolio my portfolio Check out my portfolio my portfolio</p>
                    </div> */}

          {/* <div className="grid grid-cols-3 md:hidden col-span-2 gap-10">
                        <div className="bg-fancy"></div>
                        <div className="p-5 bg-darkest box-border group">
                            <div className="rounded-full bg-fancy text-center flex items-center justify-center text-[40px] font-bold text-darkest h-[60px] w-[60px] mx-auto">3</div>
                            <h3 className="font-semibold text-white text-3xl mt-5 leading-[1.1] text-center">Tell me about your idea</h3>
                            <p className="text-text-secondary text-xl font-light mt-5 group-hover:text-gray-200 text-justify lg:text-center">Check out my portfolio my portfolio my portfolio Check out my portfolio my portfolio my portfolio Check out my portfolio my portfolio my portfolio Check out my portfolio my portfolio my portfolio Check out my portfolio my portfolio</p>
                        </div>
                        <div className="bg-fancy"></div>
                    </div> */}

          {/* <div className="p-5 bg-darkest box-border group">
                        <div className="rounded-full bg-fancy text-center flex items-center justify-center text-[40px] font-bold text-darkest h-[80px] w-[80px] mx-auto lg:mx-0">4</div>
                        <h3 className="font-semibold text-white text-3xl mt-5 leading-[1.1] text-center lg:text-left">Book day & time</h3>
                        <p className="text-text-secondary text-xl group-hover:text-gray-200 font-light mt-5 text-center lg:text-left">Check out my portfolio my portfolio my portfolio Check out my portfolio my portfolio my portfolio </p>
                    </div> */}
        </div>
        {/* <h2 className="text-4xl">
                Hi, I am a photographer passionate about capturing beautiful moments. 
                My approach is always personal, tailored to the subject and their needs. 
                I love working with babies, children and families but I also enjoy 
                shooting models, business women, couples or just about anything else 
                you can imagine.
                </h2> */}
        {/* <h2 className="text-4xl">
                My photos are not just a series of shots. They are the result of my quest 
                to find what inspires me and helps me tell the best story, which is 
                unique in every case
                </h2> */}
      </div>
    </>
  );
};

export default ValueProposition;
