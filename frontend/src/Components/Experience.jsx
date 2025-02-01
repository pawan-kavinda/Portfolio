import React from "react";
import experience from "../assets/experience.jpeg";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Experience = () => {
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
        <motion.img
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="mx-auto my-auto rounded-3xl py-10 md:py-0"
          src={experience}
          width={350}
          height={350}
        />
        <div className="my-auto mx-6">
          <motion.h2
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-4xl md:text-6xl p-6 md:px-20 text-center font-bold mb-4 primary-color 
          bg-gradient-to-bl from-fuchsia-500 to-indigo-900 bg-clip-text text-transparent"
          >
            Work Experience
          </motion.h2>
          <motion.p 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className=" md:px-16 lg:text-lg 
          "
          >
            I'm currently working as a full stack developer at Beta launch. During this period I' ve able to develop my knowledge on various design patterns, project management,delivery and deployment process ,etc.
            Currently I'm contributing for two active projects, dialog genie loan granting application and the Takso application.
            Beside that I have experience in react , nodejs over 2 years and flutter and ASP.NET frameworks nearly 1 year during university projects and my personal projects.

          </motion.p>
        </div>
        
      </div>
    </div>
  );
};

export default Experience;
