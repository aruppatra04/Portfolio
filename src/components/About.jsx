import aboutPic from "../assets/about.jpg";
import { ABOUT_TEXT1 } from "../constants";
import { ABOUT_TEXT2 } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
        <motion.h1 
            id="about" 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1 }}
            className="my-20 text-center text-4xl"
        > 
            About 
            <span className="text-neutral-500 font-bold"> Me</span>
        </motion.h1>
        <div className="flex flex-wrap">
            <motion.div 
                whileInView={{opacity: 1, x: 0 }}
                initial={{opacity: 0,  x: -100 }}
                transition={{ duration: 1.2 }}
                className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justify-center">
                    <img 
                        className="rounded-2xl" 
                        src= { aboutPic } 
                        width = {500}
                        height= {500}
                        alt="AboutPic" 
                    />
                </div>
            </motion.div>
            <motion.div
                whileInView={{x: 0, opacity: 1}}
                initial={{ x: 100, opacity: 0}}
                transition={{ duration: 1 }}
                className="w-full lg:w-1/2">
                <div className="flex justify-center lg:justify-start">
                    <p className="mx-10 max-w-xl pt-10 text-justify"> { ABOUT_TEXT1 } </p>
                </div>
                <div className="flex justify-center lg:justify-start">
                    <p className="mx-10 max-w-xl py-6 text-justify"> { ABOUT_TEXT2 } </p>
                </div>
            </motion.div>
        </div>
    </div>
  );
  
};

export default About;
