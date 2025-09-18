import React, { useState, useEffect } from "react";
import experience from "../assets/beta.jpeg";
import { motion } from "framer-motion";

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);

  return (
    <div className="text-white bg-black mx:auto" id="experience">
      <div className="md:grid md:grid-cols-2 sm:py-16">
        <motion.img
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="mx-auto my-auto rounded-3xl py-10 md:py-0"
          src={experience}
          width={550}
          height={350}
        />
        <div className="my-auto mx-6">
          <motion.h2
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-4xl md:text-6xl p-6 md:px-20 text-center font-bold mb-4 
            bg-gradient-to-bl from-fuchsia-500 to-indigo-900 bg-clip-text text-transparent"
          >
            Work Experience
          </motion.h2>

          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="md:px-16 lg:text-lg"
          >
            Worked as a full stack developer at Beta Launch for a one year (First 6 months as an Intern software engineer and after that as an Associate software engineer). During this period
            I've been able to develop my knowledge on various design patterns, project
            management, delivery and deployment processes, etc. I contributed
            to multiple active projects.
          </motion.p>

          <motion.ul
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="md:px-20 list-disc list-inside mt-4 lg:text-lg space-y-1"
          >
            <li>Dialog Genie Loan Management Application</li>
            <li>Clean Control Application</li>
            <li>Takso Application</li>
            <li>Podi Business Application</li>
          </motion.ul>

          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            className="md:px-16 lg:text-lg mt-4"
          >
            From above applications, I worked as the main developer on Dialog Genie Loan Management Application and the Takso Application while actively engaging with the clients.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
