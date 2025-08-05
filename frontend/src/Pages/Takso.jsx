import React from "react";
import gc from "../assets/Projects/GroupChat/gc.png";
import Animation from "../Components/Animation";

const Takso = () => {
  return (
    <Animation>
      <div className="bg-black py-16 px-4">
        <div className="max-w-6xl mx-auto text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center bg-gradient-to-bl from-fuchsia-500 to-indigo-900 bg-clip-text text-transparent">
            Takso Application
          </h1>

          <p className="mt-4 text-center text-gray-300 text-lg max-w-3xl mx-auto">
            Takso is an Australian cultural activity planning web application used by government councils and organizations.
          </p>

          <div className="mt-12 bg-gray-900 rounded-3xl p-6 md:p-10">
            <h2 className="text-orange-400 text-xl font-semibold mb-6">
              Technology Stack: React.js, Express.js, MySQL
            </h2>

            <div className="flex justify-center mb-10">
              <img
                src={gc}
                alt="Takso Application Screenshot"
                className="w-full max-w-md rounded-lg shadow-lg object-cover"
              />
            </div>

            <div className="text-gray-200 text-base md:text-lg space-y-4">
              <p>✔️ Led client communication independently during meetings and sprint planning sessions.</p>
              <p>✔️ Implemented UI/UX improvements including dropdown, calendar, and input field fixes using React and Semantic UI.</p>
              <p>✔️ Migrated legacy AVForm components to Formik with integrated Yup validation for performance and maintainability.</p>
              <p>✔️ Investigated and resolved CSV upload and currency validation issues using regex and error handling techniques.</p>
              <p>✔️ Designed duplicate user handling by masking deleted user data while preserving activity history.</p>
              <p>✔️ Developed a modular audit log system showing previous and updated values.</p>
              <p>✔️ Managed releases through JIRA boards, Confluence notes, and Git PRs across environments.</p>
              <p>✔️ Estimated sprints using Fibonacci-based story points and conducted backlog grooming.</p>
              <p>✔️ Authored user stories, technical documentation, and flowcharts (e.g., evaluation logic, Pulse integration).</p>
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

export default Takso;
