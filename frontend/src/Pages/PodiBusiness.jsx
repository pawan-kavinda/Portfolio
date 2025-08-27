import React from "react";
import podi from "../assets/podi.png";
import Animation from "../Components/Animation";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const PodiBusiness = () => {
  const webHighlights = [
    "Started working with the team from the planning phase of the project.",
    "Collaboratively worked with the team members.",
    "Integrated the file upload feature using AWS S3 bucket.",
    "Implemented forgot password functionality.",
    "Integrated backend functionality for invoice related operations such as invoice creation, retrieval, and management.",
    "Integrated backend for user profile section.",
    "Front end and backend bug fixes."
  ];

  const mobileHighlights = [
    "Implemented user authentication flow (Login, Register, Forgot Password, Reset Password, OTP Submission) with session management.",
    "Developed 'View All Invoices' and 'Invoice Detail' screens."
  ];

  return (
    <Animation>
      <section className="bg-black py-20 px-6">
        <div className="max-w-7xl mx-auto text-white">
          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-900 bg-clip-text text-transparent">
                Podi Business Tax Management Application
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                A cross-platform solution designed to help small businesses manage taxes efficiently
                by analyzing expenses through both mobile and web portals.
              </p>
              <a
                href="https://www.podibusiness.com/"
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
                src={podi}
                alt="Podi Business Tax Management Application"
                className="relative w-full rounded-2xl shadow-2xl border border-gray-800"
              />
            </div>
          </div>

          {/* Details Section */}
          <div className="backdrop-blur-lg bg-gray-900/60 rounded-3xl p-10 shadow-xl border border-gray-800 space-y-12">
            <div>
              <h2 className="text-orange-400 text-2xl font-semibold mb-4">
                Technologies Worked With
              </h2>
              <p className="text-lg text-gray-300">
                React (TypeScript), NestJS, PostgreSQL, React Native, AWS S3 Bucket
              </p>
            </div>

            {/* Web Highlights */}
            <div>
              <h2 className="text-orange-400 text-xl font-semibold mb-6">
                Web Application Highlights
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {webHighlights.map((item, index) => (
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

            {/* Mobile Highlights */}
            <div>
              <h2 className="text-orange-400 text-xl font-semibold mb-6">
                Mobile Application Highlights
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {mobileHighlights.map((item, index) => (
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
        </div>
      </section>
    </Animation>
  );
};

export default PodiBusiness;