import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ExtraCurricular = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);

  const activities = [
    {
      icon: "🏏",
      title: "Playing Cricket",
      description:
        "I'm passionate about cricket and can identify myself as an all-rounder😉. Cricket has taught me valuable lessons about teamwork, strategy, and perseverance that I apply in my professional life as well.",
    },
    {
      icon: "🎯",
      title: "Leadership & Team Management",
      description:
        "I've led and worked as team member in various project during my academic career. Also in my working period of 'Beta Launch' I have worked with multiple teams such as mobile team QA team and also with clients. That helped me with developing strong leadership and communication skills.",
    },
    {
      icon: "🌟",
      title: "Community Involvement",
      description:
        "I actively contribute to the 'Mehewara Program,' delivering mathematics seminars to 10th and 11th-grade students in rural schools, aiming to enhance their learning experience and foster academic growth.",
    },
  ];

  return (
    <div className="bg-black text-white px-6 md:px-32 py-16" id="extracurricular">
      <motion.h2
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-4xl md:text-6xl font-extrabold text-center mb-12 bg-gradient-to-r from-fuchsia-500 to-indigo-900 bg-clip-text text-transparent"
      >
        Extra Curricular Activities
      </motion.h2>

      <div className="md:flex md:space-x-12">
        {/* Left Section: Activity Cards */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="md:flex-1 space-y-6"
        >
          {activities.map((act, index) => (
            <div
              key={index}
              className="bg-gray-900 hover:bg-gray-800 rounded-xl p-6 shadow-lg transform transition duration-300 hover:scale-105"
            >
              <div className="flex items-center space-x-4 mb-3">
                <div className="text-4xl md:text-5xl">{act.icon}</div>
                <h3 className="text-2xl md:text-3xl font-semibold text-orange-400">
                  {act.title}
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed">{act.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Right Section: Large Icons (decorative) */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="hidden md:flex flex-col items-center justify-center space-y-12"
        >
          {activities.map((act, index) => (
            <div
              key={index}
              className="text-6xl md:text-8xl animate-bounce"
            >
              {act.icon}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ExtraCurricular;
