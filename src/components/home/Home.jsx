import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion"; //hooks for framer motion
import { useInView } from "react-intersection-observer"; //hook from react-intersection-observer

const Home = ({ contactRef }) => {
  const handleScroll = (e) => {
    e.preventDefault();
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  // const servicesVariants = {
  //     visible: {
  //         opacity: 1,
  //         scale: 1,
  //         transition: {duration: 0.5},
  //         x: 0,
  //     },
  //     hidden: {
  //         opacity: 0,
  //         scale: 0,
  //         x: 300
  //     }
  // }

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

  // const control = useAnimation();
  // const [ref, inView] = useInView();

  // const useAnimateOnInView = () => {

  //     useEffect(() => {
  //         setTimeout(() => {
  //             if(inView){
  //                 control.start('visible');
  //             }
  //             else{
  //                 control.start('hidden')
  //             }
  //         }, [500])
  //     }, [control, inView]);
  //     return {ref};
  // };

  // const {ref:banana} = useAnimateOnInView();
  // const {ref:apple} = useAnimateOnInView();

  return (
    <div className="w-full bg-darkest h-auto sm:h-[650px] mt-24 grid grid-cols-1 sm:grid-cols-2 pb-10 sm:pb-0">
      <div className="bg-darkest p-5 pt-10 sm:p-10 md:p-15 md:pl-24 flex flex-col justify-center">
        {/* <h1 className="block sm:hidden text-6xl sm:text-5xl md:text-6xl font-normal tracking-tight text-fancy text-left mb-5 font-sansei">Professional photography</h1> */}
        <h1 className="text-4xl mt-0 sm:text-5xl md:text-6xl font-bold tracking-tight text-fancy text-left">
          Hi, welcome to my portfolio website
        </h1>
        <img
          src="https://images.pexels.com/photos/1198839/pexels-photo-1198839.jpeg?auto=compress&cs=tinysrgb&w=1200"
          className="w-full h-auto block sm:hidden rounded-lg mt-10"
        />
        <p className="mt-8 text-xl text-gray-100 font-thin text-left">
          Check out my works and feel free to get in touch whenever you decide
          to hire me for your next photoshooting
        </p>
        <a
          href="#"
          onClick={handleScroll}
          className="max-w-max sm:max-w-max text-center mt-10 inline-block rounded-md border-transparent 
                bg-darkless py-3 px-8 transition-border duration-500 border-dashed border-2 hover:border-fancy 
                font-light text-fancy hover:bg-darkest"
        >
          Contact me
        </a>
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
              // src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
              src="https://images.pexels.com/photos/3727461/pexels-photo-3727461.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </motion.div>
          <motion.div
            variants={item}
            className="h-64 w-44 overflow-hidden rounded-lg hidden sm:block"
          >
            <img
              // src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
              src="https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
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
              // src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
              src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </motion.div>
          <motion.div
            variants={item}
            className="h-64 w-44 overflow-hidden rounded-lg"
          >
            <img
              // src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
              src="https://images.pexels.com/photos/3094422/pexels-photo-3094422.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </motion.div>
          <motion.div
            variants={item}
            className="h-64 w-44 overflow-hidden rounded-lg hidden sm:block"
          >
            <img
              // src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
              src="https://images.pexels.com/photos/2205647/pexels-photo-2205647.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
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
              // src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
              src="https://images.pexels.com/photos/2916820/pexels-photo-2916820.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </motion.div>
          <motion.div
            variants={item}
            className="h-64 w-44 overflow-hidden rounded-lg"
          >
            <img
              // src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
              src="https://images.pexels.com/photos/13780055/pexels-photo-13780055.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
    //     <div className="w-full overflow-hidden bg-darkest h-[calc(100vh-96px)] mt-24">
    //         <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-0 lg:pb-48 bg-blue-300 w-full">
    //             <div className="flex flex-row w-full bg-darkest h-full max-w-full px-20">
    //                 <div className="relative w-1/2 flex pt-36 flex-col px-10 bg-darkest">
    //                     <h1 className="font text-4xl font-bold tracking-tight text-fancy sm:text-6xl text-left">
    //                     Hi, welcome to my portfolio website
    //                     </h1>
    //                     <p className="mt-8 text-xl text-gray-100 font-thin text-left">
    //                     Check out my works and feel free to get in touch whenever you decide to hire me for your next photoshooting
    //                     </p>
    //                     <a href="#" className="sm:max-w-max w-full mt-10 inline-block rounded-md border-transparent
    //                     bg-darkless py-3 px-8 transition-border duration-500 border-dashed border-2 hover:border-fancy font-light text-fancy hover:bg-darkest"
    //                     >
    //                     Contact me
    //                     </a>
    //                 </div>

    //                 <div className="bg-darkest w-1/2 h-full grow-0 pt-80 px-0 flex justify-center">

    //                     <div className="pointer-events-none">
    //                         <div className="transform lg:top-1/2 lg:-translate-y-1/2">
    //                         <div className="flex items-center space-x-6 lg:space-x-8">
    //                             <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
    //                             <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
    //                                 <img
    //                                 src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
    //                                 alt=""
    //                                 className="h-full w-full object-cover object-center"
    //                                 />
    //                             </div>
    //                             <div className="h-64 w-44 overflow-hidden rounded-lg">
    //                                 <img
    //                                 src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
    //                                 alt=""
    //                                 className="h-full w-full object-cover object-center"
    //                                 />
    //                             </div>
    //                             </div>
    //                             <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
    //                             <div className="h-64 w-44 overflow-hidden rounded-lg">
    //                                 <img
    //                                 src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
    //                                 alt=""
    //                                 className="h-full w-full object-cover object-center"
    //                                 />
    //                             </div>
    //                             <div className="h-64 w-44 overflow-hidden rounded-lg">
    //                                 <img
    //                                 src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
    //                                 alt=""
    //                                 className="h-full w-full object-cover object-center"
    //                                 />
    //                             </div>
    //                             <div className="h-64 w-44 overflow-hidden rounded-lg">
    //                                 <img
    //                                 src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
    //                                 alt=""
    //                                 className="h-full w-full object-cover object-center"
    //                                 />
    //                             </div>
    //                             </div>
    //                             <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
    //                             <div className="h-64 w-44 overflow-hidden rounded-lg">
    //                                 <img
    //                                 src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
    //                                 alt=""
    //                                 className="h-full w-full object-cover object-center"
    //                                 />
    //                             </div>
    //                             <div className="h-64 w-44 overflow-hidden rounded-lg">
    //                                 <img
    //                                 src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
    //                                 alt=""
    //                                 className="h-full w-full object-cover object-center"
    //                                 />
    //                             </div>
    //                             </div>
    //                         </div>
    //                         </div>
    //                     </div>
    //                 </div>

    //             </div>
    //         </div>
    // </div>
  );
};

export default Home;
