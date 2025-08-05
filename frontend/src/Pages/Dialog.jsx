import React from "react";
import gc from "../assets/Projects/GroupChat/gc.png";
import Animation from "../Components/Animation";

const Dialog = () => {
  return (
    <Animation>
      <div className="bg-black py-16 px-4">
        <div className="max-w-6xl mx-auto text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center bg-gradient-to-bl from-fuchsia-500 to-indigo-900 bg-clip-text text-transparent">
            Dialog Genie Loan Application
          </h1>

          <p className="mt-4 text-center text-gray-300 text-lg max-w-3xl mx-auto">
            Dialog Genie Application is a digital platform designed to streamline the process of applying for and managing loans
          </p>

          <div className="mt-12 bg-gray-900 rounded-3xl p-6 md:p-10">
            <h2 className="text-orange-400 text-xl font-semibold mb-6">
              Technologies Used : React.js, NestJs, MongoDB, React Queries
            </h2>

            <div className="flex justify-center mb-10">
              <img
                src={gc}
                alt="Takso Application Screenshot"
                className="w-full max-w-md rounded-lg shadow-lg object-cover"
              />
            </div>

            <div className="text-gray-200 text-base md:text-lg space-y-4">
              <p>✔️ Handled bug fixing, new feature development, enhancements and all the development tasks 100% by myself after 2 weeks of project onboarding</p>
              <p>✔️ Implemented custom migration system for mongodb</p>
              <p>✔️ Manualized the loan approval process</p>
              <p>✔️ Changed file server from s3 bucket into FTP private file server</p>
              <p>✔️ Integrated sms functionality by investigating given documentation and curl requests by dialog</p>
              <p>✔️ Handled Base64 images for optimized and efficient file receive process</p>
              <p>✔️ Addressed key security vulnerabilities such as xss attacks, brute-force attacks and injection flaws by implementing robust input sanitization, API rate limiting, and request validation mechanisms to safeguard endpoints and application integrity.</p>
              <p>✔️ Managed releases through JIRA boards, Confluence notes, and Git PRs across environments.</p>
              <p>✔️ Fixed UI/UX issues to enhance user experience and accessibility.</p>
              <p>✔️ Analyze the best Docker base images for minimum security vulnerabilities and package supportability</p>
              <p>✔️ Authored user stories, technical documentation, and flowcharts</p>
            </div>

            <div className="mt-8 text-center">
              <a
                href="https://github.com/pawan-kavinda/Network_Programming_Group_Chat_Application.git"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 font-semibold underline hover:text-blue-300 transition"
              >
                View GitHub Repository
              </a>
            </div>
          </div>
        </div>
      </div>
    </Animation>
  );
};

export default Dialog;
