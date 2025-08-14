import React from "react";
import genie from "../assets/genie.png";
import Animation from "../Components/Animation";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const Dialog = () => {
const highlights = [
    "Application consist with mobile application, web based admin portal and a common backend.",
    "I have worked with web application development and the backend development relavent to both mobile and web portals",
    "Handled bug fixing, new feature development, enhancements and all the development tasks 100% by myself after 2 weeks of project onboarding",
    "Collaborated closely with the mobile development team to deliver backend functionalities aligned with application requirements.",
    "Implemented custom migration system for MongoDB",
    "Addressed key security vulnerabilities (XSS, brute-force, injection) with robust sanitization, rate limiting, and validation",
    "Loan approval process manualization feature implementation",
    "FTP file server integration ",
    "Integrated SMS functionality according to dialog documentation",
    "Handled Base64 images for optimized and efficient file receive process",    
    "Managed releases through JIRA boards, Confluence notes, and Git PRs across environments",
    "Fixed UI/UX issues to enhance user experience and accessibility",
    "Analyzed the best Docker base images for minimum vulnerabilities and package supportability",
    "Authored user stories, technical documentation, and flowcharts"
  ];

  return (
    <Animation>
      <section className="bg-black py-20 px-6">
        <div className="max-w-7xl mx-auto text-white">
          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-900 bg-clip-text text-transparent">
                Dialog Genie Loan Application
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                A modern digital platform designed to streamline loan application and management
                with secure, scalable, and efficient features.
              </p>
              <a
                href="https://www.genie.lk/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-purple-500/50 hover:scale-105 transform transition duration-300"
              >
                View Application
              </a>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-fuchsia-500/30 to-indigo-900/30 rounded-3xl blur-3xl"></div>
              <img
                src={genie}
                alt="Dialog Genie Loan Application"
                className="relative w-full rounded-2xl shadow-2xl border border-gray-800"
              />
            </div>
          </div>

          {/* Details Section */}
          <div className="backdrop-blur-lg bg-gray-900/60 rounded-3xl p-10 shadow-xl border border-gray-800">
            <h2 className="text-orange-400 text-2xl font-semibold mb-6">
              Technologies Worked With
            </h2>
            <p className="text-lg text-gray-300 mb-10">
              React.js, NestJS, MongoDB, React Query, Docker, SMTP, FTP
            </p>

            <h2 className="text-orange-400 text-2xl font-semibold mb-6">
              Key Highlights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-4 bg-gray-800/60 rounded-xl border border-gray-700 hover:border-fuchsia-500 transition duration-200"
                >
                  <CheckCircleIcon className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-200">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Animation>
  );
};

export default Dialog;
