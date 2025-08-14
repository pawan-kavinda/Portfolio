import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Images
import ai from "../assets/ml.jpg";
import gc from "../assets/Projects/gc.jpg";
import ems from "../assets/Projects/ems.jpg";
import sm from "../assets/Projects/sm.jpg";
import takso from "../assets/takso.png";
import fs from "../assets/Projects/fs.jpg";
import podi from "../assets/podi.png";
import agent from "../assets/agent.png";
import genie from "../assets/genie.png";
import voting from "../assets/voting.png";
import pf from "../assets/Projects/pf.png";
import em from "../assets/Projects/em.jpg";

// Reusable Project Card
const ProjectCard = ({ to, imageSrc, alt, category }) => {
  return (
    <div className="relative group rounded-2xl overflow-hidden shadow-2xl transform transition duration-300 hover:scale-105">
      {to ? (
        <Link to={to}>
          <img src={imageSrc} alt={alt} className="w-full h-64 object-cover" />
        </Link>
      ) : (
        <img src={imageSrc} alt={alt} className="w-full h-64 object-cover" />
      )}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent p-4">
        <p className="text-white font-bold text-lg md:text-xl">{alt}</p>
        <span className="text-xs md:text-sm px-2 py-1 bg-blue-600 rounded mt-2 inline-block">
          {category}
        </span>
      </div>
    </div>
  );
};

const Work = () => {
  const projects = [
    {
      category: "Web",
      items: [
        { to: "/takso", image: takso, name: "Takso Application" },
        { to: "/dialog-genie", image: genie, name: "Dialog Genie Application" },
        {
          to: "/podi-business",
          image: podi,
          name: "Podi Business Application",
        },
        { to: "/agent-ai", image: agent, name: "Agent AI Application" },
        { to: "/supermarket", image: sm, name: "Supermarket Application" },
        { to: "/ems", image: em, name: "EMS Application" },
      ],
    },
    {
      category: "Mobile",
      items: [
        { to: "/foodstore", image: fs, name: "Food Store Application" },
        { image: pf, name: "Portfolio Application" },
      ],
    },
    {
      category: "AI & ML",
      items: [
        { to: "/ai", image: ai, name: "Mobile Phone Price Predictor" },
        { to: "/groupchat", image: gc, name: "Multi Threaded Group Chat" },
      ],
    },
    {
      category: "Cryptography & Security",
      items: [
        {
          to: "/voting-system",
          image: voting,
          name: "Voting System Using Cryptography",
        },
      ],
    },
  ];

  return (
    <div id="work" className="bg-black px-8 md:px-32 py-12 mx-auto">
      <motion.h1
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-indigo-900 mb-16 text-center"
      >
        Projects
      </motion.h1>

      {projects.map((section) => (
        <section key={section.category} className="mb-20">
          <h2 className="text-3xl md:text-4xl font-semibold text-orange-400 mb-8 border-b border-gray-700 pb-2">
            {section.category} Applications
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {section.items.map((project) => (
              <ProjectCard
                key={project.name}
                to={project.to}
                imageSrc={project.image}
                alt={project.name}
                category={section.category}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Work;
