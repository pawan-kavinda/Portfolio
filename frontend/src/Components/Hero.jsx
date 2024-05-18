import React from "react";
import profile from "../assets/profile.jpg";
import about from "../assets/about.jpg";
import { TypeAnimation } from "react-type-animation";
import {motion} from 'framer-motion'
import resume from '../assets/resume.pdf'
const Hero = () => {
  return (
    <div className="text-center sm:text:center md:text-start grid grid-cols-1 sm:grid-cols-3 items-center gap-8 max-w-full md:h-screen mx-auto py-8
    bg-black " id="hero">
      <div className="col-span-1 my-auto mx-auto">
        <div className="my-auto mx-auto w-[200px] h-auto lg:w-[300px]">
          <motion.img initial={{x:-100,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:0.5,delay:0.5}}  src={about} alt="profile image" className=" rounded-3xl "/>
        </div>

      </div>
      <div className="col-span-2 my-auto px-10">
        <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold">
          {/* <span className="primary-color justify-center">I'M A</span> */}
          <br />
          <TypeAnimation
            className="text-gray-400 text-center"
            sequence={[
              "FRONTEND DEV",
              1000,
              "BACKEND DEV",
              1000,
              "MOBILE DEV",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          ></TypeAnimation>
        </h1>
        <motion.p initial={{x:100,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:0.5,delay:0.5}} className="bg-gradient-to-bl from-rose-900 to-zinc-600 bg-clip-text text-transparent sm:text-2xl my-3 py-3 font-bold text-2xl md:text-4xl">
       
            {/* I am Pawan Dissanayake, 3 rd year computer engineering undergraduate
            student in Faculty of Engineering, University of Ruhuna. I’m writing
            this to express my interest in the six-month software engineering
            internship at your company starting from 1st of July. I have decent
            experience in ASP.Net and MERN stack for web development and flutter
            for mobile development also have experience in machine learning with
            python. Fluent in java,c# and c++ . I've attached my CV and cover
            letter with this email.Thank you for considering my application.
            Best regards, Pawan Dissanayake. */}
            Hi , I'm Pawan Kavinda Dissanayake
         
        </motion.p>
        <motion.p initial={{x:100,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:0.5,delay:1}} className="text-white sm:text-2xl font-bold my-3 text-2xl md:text-4xl py-3">
          Computer Engineering Undergraduate
        </motion.p>

        <div className="my-8 flex items-center justify-center md:justify-start">
          <div className="my-6">
            <a
              href="https://raw.githubusercontent.com/pawan-kavinda/Portfolio/main/frontend/src/assets/resume.pdf"  download="Pawan_Kavinda_Dissanayake_Resume.pdf"
              className="ml-6 px-6 py-3 w-full border border-white hover:border-collapse rounded-xl mr-4 bg-gradient-to-br from-blue-950 to bg-green-600 text-white hover:border-none">
            
               Download Resume
            </a>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;
