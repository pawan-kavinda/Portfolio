import React from "react";
import about from "../assets/abou.jpg";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Experience from "./Experience";

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
          <motion.h2
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-4xl md:text-6xl p-6 md:px-20 text-center font-bold mb-4 primary-color 
          bg-gradient-to-bl from-fuchsia-500 to-indigo-900 bg-clip-text text-transparent"
          >
            About Me
          </motion.h2>
          <motion.p 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className=" md:px-16 lg:text-lg 
          "
          >
            I am Pawan Dissanayake, final year computer engineering undergraduate
            student in Faculty of Engineering, University of Ruhuna. A
            passionate developer dedicated to crafting innovative solutions
            through code. With a keen eye for detail and a love for
            problem-solving, I thrive in the dynamic world of software
            development. My journey in tech has equipped me with a diverse skill
            set spanning new technologies, allowing me to
            tackle challenges with creativity and precision. Whether it's
            building intuitive user interfaces or optimizing backend systems, I
            am committed to delivering high-quality, scalable solutions that
            make a meaningful impact. Let's connect and build something
            incredible together!
          </motion.p>
        </div>
        <motion.img
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="mx-auto my-auto rounded-3xl py-10 md:py-0"
          src={about}
          width={350}
          height={350}
        />
      </div>
      <Experience/>
    </div>
  );
};

export default About;
