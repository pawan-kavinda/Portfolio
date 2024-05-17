import React from "react";
import about from "../assets/about.jpg";
import {motion} from 'framer-motion'
import { useState, useEffect } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // When the component mounts, set isVisible to true
    setIsVisible(true);
    // When the component unmounts, set isVisible back to false
    return () => setIsVisible(false);
  }, []);
  return (
    <div className="text-white bg-black mx:auto " id="about">
      <div className="md:grid md:grid-cols-2 sm:py-16">
        <div className="my-auto mx-6">
          <motion.h2 initial={{x:-100,opacity:0}} animate={{ x: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }} transition={{duration:0.5,delay:0.5} }  className="text-4xl md:text-6xl p-6 md:px-20 text-center font-bold mb-4 primary-color">
            About Me
          </motion.h2>
          <motion.p initial={{x:-100,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:0.5,delay:1}} className="text-center md:px-16 lg:text-lg">
            I am Pawan Dissanayake, 3 rd year computer engineering undergraduate
            student in Faculty of Engineering, University of Ruhuna. I’m writing
            this to express my interest in the six-month software engineering
            internship at your company starting from 1st of July. I have decent
            experience in ASP.Net and MERN stack for web development and flutter
            for mobile development also have experience in machine learning with
            python. Fluent in java,c# and c++ . I've attached my CV and cover
            letter with this email.Thank you for considering my application.
            Best regards, Pawan Dissanayake.
          </motion.p>
        
        </div>
        <motion.img initial={{x:100,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:0.5,delay:1.5}} className="mx-auto my-auto rounded-3xl py-10 md:py-0" src={about} width={350} height={350}/>
        
      </div>
    </div>
  );
};

export default About;
