import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
import ip from "../assets/ip.jpg";
import em from "../assets/Projects/em.jpg";
import blogger from "../assets/blogger.png";
import salaryCalculator from "../assets/salary-calculator.png";
import yourPortfolio from "../assets/your-portfolio.png";

const ProjectCard = ({ to, imageSrc, alt, category, disabled }) => {
  const cardClasses =
    "group relative rounded-2xl overflow-hidden shadow-2xl transform transition duration-300 " +
    (disabled
      ? "opacity-50 cursor-not-allowed pointer-events-none"
      : "hover:scale-105");

  return (
    <div className={cardClasses}>
      {!disabled && to ? (
        <Link to={to} className="block w-full h-full relative">
          <img src={imageSrc} alt={alt} className="w-full h-64 object-cover" />
          {category && (
            <span className="text-xs md:text-sm px-2 py-1 bg-blue-600 rounded mt-2">
              {category}
            </span>
          )}
          <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white font-bold text-lg md:text-xl text-center px-2">
              {alt}
            </p>
          </div>
        </Link>
      ) : (
        <>
          <img src={imageSrc} alt={alt} className="w-full h-64 object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center">
            <p className="text-white font-bold text-lg md:text-xl text-center px-2">
              {alt}
            </p>
            {category && (
              <span className="text-xs md:text-sm px-2 py-1 bg-blue-600 rounded mt-2">
                {category}
              </span>
            )}
            {disabled && (
              <span className="mt-2 text-red-400 text-xs italic">
                In Development
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
          category: "ReactJS + ExpressJS + MySQL",
        },
        {
          to: "/dialog-genie",
          image: genie,
          name: "Dialog Genie Application",
          category: "ReactJS + NestJS + MongoDB",
        },
        {
          to: "/podi-business",
          image: podi,
          name: "Podi Business Application",
          category: "ReactJS + NestJS + PostgreSQL",
        },
        {
          to: "/agent-ai",
          image: agent,
          name: "Agent AI Application",
          category: "ReactJs + NestJs + FastAPI + MongoDB, RAG",
        },
          {
          to: "/your-portfolio",
          image: yourPortfolio,
          name: "Your Portfolio Application",
          category: "AngularJS + NodeJS + MongoDB + Vercel",
        },
        {
          to: "/blogger",
          image: blogger,
          name: "Vite Blogger",
          category: "ReactJS, ExpressJS, NestJS, PostgreSQL,MongoDB,AWS",
        },
        {
          to: "/stall-reservation",
          image: ems,
          name: "Book Fair Stall Reservation System",
          category: "ASP.NET MVC, PostgreSQL",
        },

        {
          to: "/ems",
          image: em,
          name: "EMS Application",
          category: "ASP.NET MVC",
        },
        {
          to: "/salary-calculator",
          image: salaryCalculator,
          name: "Salary Calculator",
          category: "ReactJs + Tailwind CSS",
        }
      ],
    },
    {
      category: "Mobile",
      items: [
        {
          to: "/foodstore",
          image: fs,
          name: "Food Store Application",
          category: "Flutter + Firebase",
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
          category: "Flutter + Firebase",
        },
      ],
    },
    {
      category:
        "AI, ML & Cryptography Related Applications and Other Applications",
      items: [
        {
          to: "/attendence-system",
          image: ip,
          name: "Face recognition attendance system",
          category: "Image Processing",
          disabled: true,
        },
        {
          to: "/agent-ai",
          image: agent,
          name: "Agent AI Application",
          category: "AI",
        },
        {
          to: "/voting-system",
          image: voting,
          name: "Voting System Using Cryptography",
          category: "Cryptography",
        },
        {
          to: "/groupchat",
          image: gc,
          name: "Multi Threaded Group Chat",
          category: "Java Multi Threaded",
        },
        {
          to: "/ai",
          image: ai,
          name: "Mobile Phone Price Predictor",
          category: "ML",
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
                category={project.category}
                disabled={project.disabled}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Work;
