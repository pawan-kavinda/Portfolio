import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import takso from "../assets/takso.png";
import Animation from "../Components/Animation";

const bulletPoints = [
  "Handled around 80%-100% of sprint tasks",  
  "Worked with SQL queries for extracting and manipulating activity data related to users & organizations",
  "Actively engaged with client to gather requirements and provide updates",
  "Implemented system data export for client side",
  "Implemented Grant CSV upload feature",
  "Developed duplicate user handling feature",
  "Designed and implemented activity evaluation feature flow",
  "Revamped forgot password and email verification process",
  "Performed complete UI revamp across the application",
  "Migrated legacy AVForm components to Formik with Yup validation",
  "Resolved CSV upload and currency validation issues with regex and error handling",
  "Designed modular audit log system showing previous and updated values",
  "Managed releases via JIRA, Confluence, and Git PRs",
  "Estimated sprints with Fibonacci story points and conducted backlog grooming",
  "Authored user stories, technical documentation, and flowcharts",
];

const Takso = () => {
  return (
    <Animation>
      <div className="bg-black py-16 px-4">
        <div className="max-w-6xl mx-auto text-white space-y-12">
          {/* Title */}
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center bg-gradient-to-bl from-fuchsia-500 to-indigo-900 bg-clip-text text-transparent"
          >
            Takso Application
          </motion.h1>

          {/* Description & Link */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <p className="text-left text-gray-300 text-lg leading-relaxed max-w-3xl">
              Takso is an Australian cultural activity planning web application
              used by government councils and organizations.
            </p>
            <Link
              to="https://takso-app.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 text-lg font-semibold 
                text-white bg-gradient-to-r from-fuchsia-500 to-indigo-900 
                rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300"
            >
              View Application
            </Link>
          </motion.div>

          {/* Technology Stack */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gray-900 rounded-3xl p-6 md:p-10 shadow-xl"
          >
            <h2 className="text-orange-400 text-xl font-semibold mb-6">
              Technology Stack
            </h2>
            <p className="text-gray-300">
              React.js (Class + Functional Components), Express.js, MySQL
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex justify-center"
          >
            <img
              src={takso}
              alt="Takso Application Screenshot"
              className="w-full max-w-md rounded-xl shadow-2xl transform hover:scale-105 transition duration-300"
            />
          </motion.div>

          {/* Bullet Points */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gray-900 rounded-3xl p-6 md:p-10 shadow-xl"
          >
            <h3 className="text-xl font-semibold text-fuchsia-400 mb-6">
              Key Contributions
            </h3>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
              {bulletPoints.map((point, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <CheckCircleIcon className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <p className="text-gray-200">{point}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Animation>
  );
};

export default Takso;
