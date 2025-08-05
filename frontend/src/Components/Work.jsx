import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Images
import ai from "../assets/Projects/ai.jpg";
import gc from "../assets/Projects/gc.jpg";
import ems from "../assets/Projects/ems.jpg";
import sm from "../assets/Projects/sm.jpg";
import fs from "../assets/Projects/fs.jpg";
import brain from "../assets/Projects/brain.jpg";
import pf from "../assets/Projects/pf.png";
import em from "../assets/Projects/em.jpg";

// Reusable Project Card
const ProjectCard = ({ to, imageSrc, alt }) => {
  return (
    <div
      className="transform transition-transform duration-300 hover:scale-105 hover:bg-yellow-900 overflow-hidden shadow-lg shadow-blue-700
      flex justify-center items-center mx-auto h-[200px] w-[200px] md:w-[400px] md:bg-gray-700 bg-cover relative rounded"
    >
      {to ? (
        <Link to={to}>
          <img src={imageSrc} alt={alt} width={390} height={200} />
        </Link>
      ) : (
        <img src={imageSrc} alt={alt} width={390} height={200} />
      )}
    </div>
  );
};

const Work = () => {
  return (
    <div className="max-w-full mx-auto bg-black p-5" id="work">
      <div className="pb-8">
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
          className="text-4xl md:text-6xl font-bold p-6 md:px-64 mb-3 bg-gradient-to-bl from-fuchsia-500 to-indigo-900 bg-clip-text text-transparent"
        >
          Projects
        </motion.p>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5 p-8">
        <ProjectCard to="/takso" imageSrc={sm} alt="Takso" />
        <ProjectCard to="/dialog-genie" imageSrc={sm} alt="Dialog Genie" />
        <ProjectCard to="/podi-business" imageSrc={sm} alt="Podi Business" />
        <ProjectCard to="/clean-control" imageSrc={sm} alt="Clean Control" />
        <ProjectCard to="/supermarket" imageSrc={sm} alt="Supermarket" />
        <ProjectCard to="/ems" imageSrc={em} alt="EMS" />
        <ProjectCard to="/ai" imageSrc={ai} alt="AI Project" />
        <ProjectCard to="/foodstore" imageSrc={fs} alt="Food Store" />
        <ProjectCard to="/groupchat" imageSrc={gc} alt="Group Chat" />
        <ProjectCard imageSrc={pf} alt="Portfolio" />
        <ProjectCard imageSrc={brain} alt="Brain Project" />
      </div>
    </div>
  );
};

export default Work;
