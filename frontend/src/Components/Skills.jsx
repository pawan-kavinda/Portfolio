import React from "react";
import react from "../assets/react.png";
import flutter from "../assets/flutter.jpg";
import asp from "../assets/asp.png";
import sql from "../assets/sql.png";
import tailwind from "../assets/tailwind.jpg";
import node from "../assets/node.png";
import { motion } from "framer-motion";
import mongo from "../assets/mongo.svg";
import fb from "../assets/firebase.png";
import docker from "../assets/d.png";
import azure from "../assets/azure.jpg";

const motionIcons = (duration) => ({
  initial: { y: -20 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Skills = () => {
  return (
    <div className="bg-black max-w-full mx-auto my-auto ">
      <motion.h1
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="bg-gradient-to-bl from-fuchsia-500 to-indigo-900 bg-clip-text text-transparent text-4xl sm:text-5xl font-bold  mx-4 px-3 pb-8 text-center "
      >
        TECHNICAL STACK
      </motion.h1>
      <div className="bg-black  text-gray-300 md:h-[350px] grid grid-cols-3 md:grid-cols-5 place-items-center md:flex md:justify-between md:items-center mx-auto max-w-[1250px] md:gap-0 gap-11 ">
        <motion.div
          variants={motionIcons(10)}
          initial="initial"
          animate="animate"
          className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-pink-700 justify-center
         group-container flex flex-col items-center m-4 sm:my-0 md:rounded-2xl md:border-4 border-neutral-800 border-2 rounded-xl h-[100px] md:h-[120px] w-[100px] md:w-[120px]"
        >
          <img src={react} width={100} height={100} alt="" />
        </motion.div>
        <motion.div
          variants={motionIcons(1)}
          initial="initial"
          animate="animate"
          className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-pink-700 justify-center
         group-container flex flex-col items-center m-4 sm:my-0 md:rounded-2xl md:border-4 border-neutral-800 border-2 rounded-xl h-[100px]  md:h-[120px] w-[100px] md:w-[120px]"
        >
          <img src={flutter} width={100} height={100} alt="" />
        </motion.div>
        <motion.div
          variants={motionIcons(20)}
          initial="initial"
          animate="animate"
          className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-pink-700 justify-center
         group-container flex flex-col items-center m-4 sm:my-0 md:rounded-2xl md:border-4 border-neutral-800 border-2 rounded-xl h-[100px] md:h-[120px] w-[100px] md:w-[120px]"
        >
          <img src={asp} width={100} height={100} alt="" />
        </motion.div>
        <motion.div
          variants={motionIcons(1)}
          initial="initial"
          animate="animate"
          className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-pink-700 justify-center
         group-container flex flex-col items-center m-4 sm:my-0 md:rounded-2xl md:border-4 border-neutral-800 border-2 rounded-xl h-[100px] md:h-[120px] w-[100px] md:w-[120px]"
        >
          <img src={sql} width={100} height={100} alt="" />
        </motion.div>
        <motion.div
          variants={motionIcons(15)}
          initial="initial"
          animate="animate"
          className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-pink-700 justify-center
         group-container flex flex-col items-center m-4 sm:my-0 md:rounded-2xl md:border-4 border-neutral-800 border-2 rounded-xl h-[100px] md:h-[120px] w-[100px] md:w-[120px]"
        >
          <img src={tailwind} width={100} height={100} alt="" />
        </motion.div>
        <motion.div
          variants={motionIcons(50)}
          initial="initial"
          animate="animate"
          className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-pink-700 justify-center
         group-container flex flex-col items-center m-4 sm:my-0 md:rounded-2xl md:border-4 border-neutral-800 border-2 rounded-xl h-[100px] md:h-[120px] w-[100px] md:w-[120px]"
        >
          <img src={node} width={100} height={100} alt="" />
        </motion.div>
        <motion.div
          variants={motionIcons(2.5)}
          initial="initial"
          animate="animate"
          className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-pink-700 justify-center
         group-container flex flex-col items-center m-4 sm:my-0 md:rounded-2xl md:border-4 border-neutral-800 border-2 rounded-xl h-[100px] md:h-[120px] w-[100px] md:w-[120px]"
        >
          <img src={mongo} width={100} height={100} alt="" />
        </motion.div>
        <motion.div
          variants={motionIcons(2.5)}
          initial="initial"
          animate="animate"
          className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-pink-700 justify-center
         group-container flex flex-col items-center m-4 sm:my-0 md:rounded-2xl md:border-4 border-neutral-800 border-2 rounded-xl h-[100px] md:h-[120px] w-[100px]  md:w-[120px]"
        >
          <img src={fb} width={100} height={100} alt="" />
        </motion.div>
        <motion.div
          variants={motionIcons(2.5)}
          initial="initial"
          animate="animate"
          className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-pink-700 justify-center
         group-container flex flex-col items-center m-4 sm:my-0 md:rounded-2xl md:border-4 border-neutral-800 border-2 rounded-xl h-[100px] md:h-[120px] w-[100px]  md:w-[120px]"
        >
          <img src={docker} width={100} height={100} alt="" />
        </motion.div>
        <motion.div
          variants={motionIcons(2.5)}
          initial="initial"
          animate="animate"
          className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-pink-700 justify-center
         group-container flex flex-col items-center m-4 sm:my-0 md:rounded-2xl md:border-4 border-neutral-800 border-2 rounded-xl h-[100px] md:h-[120px] w-[100px]  md:w-[120px]"
        >
          <img src={azure} width={100} height={100} alt="" />
        </motion.div>
      </div>
    </div>
  );
};
export default Skills;
