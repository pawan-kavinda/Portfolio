import React from "react";
import { motion } from "framer-motion";
import tailwind from "../assets/tailwind.jpg";
import antd from "../assets/antd.svg";
import aws from "../assets/aws.png";
const motionIcons = (duration) => ({
  initial: { y: -10 },
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

const SkillCard = ({ src, name, duration = 3 }) => (
  <motion.div
    variants={motionIcons(duration)}
    initial="initial"
    animate="animate"
    className="transform transition-transform duration-300 hover:scale-110 overflow-hidden shadow-lg shadow-pink-700 flex flex-col items-center justify-center m-4 rounded-xl border-2 border-neutral-800 h-[100px] w-[100px] md:h-[120px] md:w-[120px]"
  >
    <img src={src} width={60} height={60} alt={name} />
    <p className="text-white text-sm mt-2 text-center">{name}</p>
  </motion.div>
);

const Skills = () => {
  const skillGroups = [
    {
      title: "Languages",
      skills: [
        {
          name: "JavaScript",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "TypeScript",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        {
          name: "C++",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
        },
        {
          name: "C#",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
        },
        {
          name: "Java",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        },
        {
          name: "Python",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        },
      ],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        {
          name: "React",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "React Native",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Flutter",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
        },
        {
          name: "ExpressJS",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        },
        {
          name: "ASP.NET",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
        },
        { name: "NestJS", src: "https://nestjs.com/img/logo-small.svg" },
        { name: "Ant Design", src: antd },
        {
          name: "Semantic UI",
          src: "https://raw.githubusercontent.com/Semantic-Org/Semantic-UI-React/master/docs/public/logo.png",
        },
        { name: "Tailwind CSS", src: tailwind },
        {
          name: "Bootstrap",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg",
        },
      ],
    },
    {
      title: "Databases",
      skills: [
        {
          name: "MongoDB",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        },
        {
          name: "MySQL",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        },
        {
          name: "PostgreSQL",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        },
        {
          name: "SQLite",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
        },
        {
          name: "Firebase",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
        },
      ],
    },
    {
      title: "Cloud & Tools",
      skills: [
        {
          name: "Docker",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        },
        { name: "AWS", src: aws },
        {
          name: "Jenkins",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
        },
        {
          name: "Apache Hadoop",
          src: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Hadoop_logo.svg",
        },
        {
          name: "Azure",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
        },
      ],
    },
  ];

  return (
    <div className="bg-black text-white py-12 px-6 md:px-32">
      <motion.h1
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="bg-gradient-to-bl from-fuchsia-500 to-indigo-900 bg-clip-text text-transparent text-4xl sm:text-5xl font-bold mb-12 text-center"
      >
        Technical Expertise with Demonstrated Experience
      </motion.h1>

      {skillGroups.map((group) => (
        <div key={group.title} className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-orange-400 mb-6">
            {group.title}
          </h2>
          <div className="flex flex-wrap justify-center md:justify-start gap-6">
            {group.skills.map((skill) => (
              <SkillCard key={skill.name} src={skill.src} name={skill.name} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
