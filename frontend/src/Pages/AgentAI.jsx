import React from "react";
import agent from "../assets/agent.png";
import Animation from "../Components/Animation";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const AgentAI = () => {
  const highlights = [
    "Web-based platform for business owners to create AI agents for their businesses",
    "Condition-based chat responses for faster and easier agent creation",
    "More secure prompt validations through lakera guard",
    "Provides separate AI agents for business owner usage and for customer usage",
    "Federated learning for enhanced privacy and data security",
    "Easy LLM updates about the business through the business owner agent",
  ];

  return (
    <Animation>
      <section className="bg-black py-24 px-6">
        <div className="max-w-7xl mx-auto text-white">
          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-900 bg-clip-text text-transparent animate-fadeIn">
                AI Agent Creation Platform for Small & Medium Businesses
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed animate-fadeIn delay-200">
                A modern digital platform designed to streamline AI agent
                creation for businesses with secure, scalable, and efficient
                features.
              </p>
              <div className="space-y-4">
                <button
                  disabled
                  className="inline-block bg-gray-700/50 cursor-not-allowed px-10 py-4 rounded-full font-semibold shadow-lg text-gray-300"
                >
                  View Application
                </button>
                <p className="text-yellow-400 font-semibold text-sm">
                  Application is currently in development
                </p>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="absolute -inset-6 bg-gradient-to-tr from-fuchsia-500/20 via-purple-500/20 to-indigo-900/20 rounded-3xl blur-3xl animate-pulseSlow"></div>
              <img
                src={agent}
                alt="Agent AI Platform"
                className="relative w-full max-w-lg rounded-3xl shadow-2xl border border-gray-800 transform transition-transform hover:scale-105"
              />
            </div>
          </div>

          {/* Details Section */}

          <div className="backdrop-blur-lg bg-gray-900/50 rounded-3xl p-12 shadow-2xl border border-gray-800 mb-12">
            <h2 className="text-orange-400 text-2xl font-bold mb-8">
              Technologies Worked With
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Web Technologies */}
              <div className="p-6 rounded-2xl bg-gradient-to-tr from-blue-800/40 to-purple-800/40 border border-gray-700 hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Web Application
                </h3>
                <ul className="text-gray-200 space-y-2 list-disc list-inside">
                  <li>React.js</li>
                  <li>NestJS</li>
                  <li>Django</li>
                  <li>MongoDB</li>
                </ul>
              </div>

              {/* AI Technologies */}
              <div className="p-6 rounded-2xl bg-gradient-to-tr from-green-800/40 to-teal-800/40 border border-gray-700 hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-semibold text-white mb-4">
                  AI Integrations
                </h3>
                <ul className="text-gray-200 space-y-2 list-disc list-inside">
                  <li>Django</li>
                  <li>Weaviate Vector Database</li>
                  <li>GPT-3.5 LLM</li>
                  <li>Lakera Guard</li>
                  <li>ANN</li>
                  <li>Data pre-processing</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-orange-400 text-2xl font-bold mb-6">
            Key Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-5 bg-gray-800/70 rounded-xl border border-gray-700 hover:border-fuchsia-500 hover:shadow-lg transition duration-300 transform hover:scale-105"
              >
                <CheckCircleIcon className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <span className="text-gray-200 text-base">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Animation>
  );
};

export default AgentAI;
