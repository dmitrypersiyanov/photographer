import React, {useEffect} from "react";
import { Checkmark } from "../../icons/icons";
import { motion, useAnimation } from "framer-motion"; //hooks for framer motion
import { useInView } from "react-intersection-observer"; //hook from react-intersection-observer

const Services = () => {

    const control = useAnimation();
    const [ref, inView] = useInView();

    const list = {
        visible: { 
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.08,
              },
        },
        hidden: { 
            opacity: 0,
            transition: {
                when: "afterChildren",
              },
         },
    }

    const item = {
        visible: { 
            opacity: 1, 
            y: 0 
        },
        hidden: { 
            opacity: 0, 
            y: 200 
        },
      }

    useEffect(() => {
        if(inView){
            control.start('visible');
        }
        // else{
        //     control.start('hidden')
        // }
    }, [control, inView]);

    // const control = useAnimation();
    // const [ref, inView] = useInView();
    
    // const servicesVariants = {
    //     visible: {
    //         opacity: 1,
    //         scale: 1,
    //         transition: {duration: 0.5}
    //     },
    //     hidden: {
    //         opacity: 0,
    //         scale: 0
    //     }
    // }

    // useEffect(() => {
    //     if(inView){
    //         control.start('visible');
    //     }
    //     else{
    //         control.start('hidden')
    //     }
    // }, [control, inView]);
    
    return(
        <div id="services" className="w-full h-auto bg-darkest pt-20 md:pt-40 flex flex-col gap-20 px-5 box-border md:px-20 lg:px-72 pb-20 md:pb-20 border-b-0 border-gray-400 border-dashed">
            <div className="bg-darkest flex flex-col justify-center items-center w-[800px] mx-auto">
                <h2 className="text-4xl font-bold  text-fancy text-left md:text-center">My services</h2>
                <p className="text-text-primary text-xl font-light text-left md:text-center mt-5">While being badly in 
                love with any type of photography, I believe that only being specific I believe that only being specific allows us to become experts in our fields</p>
            </div>

        <motion.div
        ref={ref} 
        variants={list}
        initial="hidden"
        animate={control}
        className="grid grid-cols-1 sm:grid-cols-2 md-grid-cols-2 lg:grid-cols-3 bg-darkest w-[800px] mx-auto mt-0 pt-0 pb-0 md:py-0 gap-5">
                <div className="flex-col flex gap-5">
                    <motion.div 
                    variants={item}
                    className="flex flex-col bg-darker w-full h-40 p-5 rounded-lg hover:bg-darkest border-dashed border-transparent transition-all duration-300 hover:border-dashed border-2 hover:border-fancy">
                        <Checkmark />
                        <h3 className="text-white text-left mt-auto font-light text-lg">Ladies (formal)</h3>
                    </motion.div>
                    <motion.div 
                    variants={item}
                    className="flex flex-col bg-darker w-full h-40 p-5 rounded-lg hover:bg-darkest border-transparent border-dashed transition-all duration-300 hover:border-dashed border-2 hover:border-fancy">
                        <Checkmark />
                        <h3 className="text-white text-left mt-auto font-light text-lg">Ladies (formal)</h3>
                    </motion.div>
                </div>

                <div className="flex-col flex gap-5">
                    <motion.div 
                    variants={item}
                    className="flex flex-col bg-darker w-full h-40 p-5 rounded-lg hover:bg-darkest border-dashed border-transparent transition-all duration-300 hover:border-dashed border-2 hover:border-fancy">
                        <Checkmark />
                        <h3 className="text-white text-left mt-auto font-light text-lg">Ladies (formal)</h3>
                    </motion.div>
                    <motion.div 
                    variants={item}
                    className="flex flex-col bg-darker w-full h-40 p-5 rounded-lg hover:bg-darkest border-dashed border-transparent transition-all duration-300 hover:border-dashed border-2 hover:border-fancy">
                        <Checkmark />
                        <h3 className="text-white text-left mt-auto font-light text-lg">Ladies (formal)</h3>
                    </motion.div>
                    <motion.div 
                    variants={item}
                    className="flex flex-col bg-darker w-full h-40 p-5 rounded-lg hover:bg-darkest border-dashed border-transparent transition-all duration-300 hover:border-dashed border-2 hover:border-fancy">
                        <Checkmark />
                        <h3 className="text-white text-left mt-auto font-light text-lg">Ladies (formal)</h3>
                    </motion.div>
                </div>

                <div className="flex-col flex gap-5">
                    <motion.div 
                    variants={item}
                    className="flex flex-col bg-darker w-full h-40 p-5 rounded-lg hover:bg-darkest border-dashed border-transparent transition-all duration-300 hover:border-dashed border-2 hover:border-fancy">
                        <Checkmark />
                        <h3 className="text-white text-left mt-auto font-light text-lg">Ladies (formal)</h3>
                    </motion.div>
                    <motion.div 
                    variants={item}
                    className="flex flex-col bg-darker w-full h-40 p-5 rounded-lg hover:bg-darkest border-dashed border-transparent transition-all duration-300 hover:border-dashed border-2 hover:border-fancy">
                        <Checkmark />
                        <h3 className="text-white text-left mt-auto font-light text-lg">Ladies (formal)</h3>
                    </motion.div>
                </div>













                {/* <div className="flex flex-col bg-darkest w-full h-40 p-5 rounded-lg hover:bg-darkest border-transparent border-dashed transition-border duration-500 hover:border-dashed border-2 hover:border-fancy">
                    <Checkmark />
                    <h3 className="text-white text-left mt-auto font-light text-lg">Ladies (casual)</h3>
                </div>
                <div className="flex flex-col bg-darkest w-full h-40 p-5 rounded-lg hover:bg-darkest border-transparent border-dashed transition-border duration-500 hover:border-dashed border-2 hover:border-fancy">
                    <Checkmark />
                    <h3 className="text-white text-left mt-auto font-light text-lg">Ladies (pregnant)</h3>
                </div>
                <div className="flex flex-col bg-darkest w-full h-40 p-5 rounded-lg hover:bg-darkest border-transparent border-dashed transition-border duration-500 hover:border-dashed border-2 hover:border-fancy">
                    <Checkmark />
                    <h3 className="text-white text-left mt-auto font-light text-lg">Ladies (fashion)</h3>
                </div>
                <div className="flex flex-col bg-darkest w-full h-40 p-5 rounded-lg hover:bg-darkest border-transparent border-dashed transition-border duration-500 hover:border-dashed border-2 hover:border-fancy">
                    <Checkmark />
                    <h3 className="text-white text-left mt-auto font-light text-lg">Families (casual)</h3>
                </div>
                <div className="flex flex-col bg-darkest w-full h-40 p-5 rounded-lg hover:bg-darkest border-transparent border-dashed transition-border duration-500 hover:border-dashed border-2 hover:border-fancy">
                    <Checkmark />
                    <h3 className="text-white text-left mt-auto font-light text-lg">Couples (casual)</h3>
                </div> */}
        </motion.div>
        </div>
    )
};

export default Services;