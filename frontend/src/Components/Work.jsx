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

const ProjectCard = ({ to, imageSrc, alt, category }) => {
  return (
    <div className="group relative rounded-2xl overflow-hidden shadow-2xl transform transition duration-300 hover:scale-105">
      {to ? (
        <Link to={to} className="block w-full h-full relative">
          <img src={imageSrc} alt={alt} className="w-full h-64 object-cover" />
          {category && (
            <span className="text-xs md:text-sm px-2 py-1 bg-blue-600 rounded mt-2">
              {category}
            </span>
          )}

          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white font-bold text-lg md:text-xl text-center px-2">
              {alt}
            </p>
          </div>
        </Link>
      ) : (
        <>
          <img src={imageSrc} alt={alt} className="w-full h-64 object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white font-bold text-lg md:text-xl text-center px-2">
              {alt}
            </p>
            {category && (
              <span className="text-xs md:text-sm px-2 py-1 bg-blue-600 rounded mt-2">
                {category}
              </span>
            )}
          </div>
        </>
      )}
    </div>
  );
};

const Work = () => {
  const projects = [
    {
      category: "Web",
      items: [
        {
          to: "/takso",
          image: takso,
          name: "Takso Application",
          category: "ReactJS + ExpressJS",
        },
        {
          to: "/dialog-genie",
          image: genie,
          name: "Dialog Genie Application",
          category: "ReactJS + NestJS",
        },
        {
          to: "/podi-business",
          image: podi,
          name: "Podi Business Application",
          category: "ReactJS + NestJS",
        },
        {
          to: "/agent-ai",
          image: agent,
          name: "Agent AI Application",
          category: "Flutter",
        },

        {
          to: "/ems",
          image: em,
          name: "EMS Application",
          category: "ASP .NET",
        },
      ],
    },
    {
      category: "Mobile",
      items: [
        {
          to: "/foodstore",
          image: fs,
          name: "Food Store Application",
          category: "Flutter",
        },
        ,
        {
          to: "/podi-business",
          image: podi,
          name: "Podi Business Application",
          category: "React Native",
        },
        {
          to: "/supermarket",
          image: sm,
          name: "Supermarket Application",
          category: "Flutter",
        },
      ],
    },
    {
      category:
        "AI, ML & Cryptography Related Applications and Other Applications",
      items: [
        { to: "/groupchat", image: gc, name: "Multi Threaded Group Chat", category:"Java Multi Threaded" },
        { to: "/agent-ai", image: agent, name: "Agent AI Application", category:"AI" },
        {
          to: "/voting-system",
          image: voting,
          name: "Voting System Using Cryptography",
          category: "Cryptography",
        },
        { to: "/ai", image: ai, name: "Mobile Phone Price Predictor", category: "ML" },
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
                category={project.category}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Work;
