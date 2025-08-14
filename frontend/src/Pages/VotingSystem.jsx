import React from "react";
import voting from "../assets/voting.png"; 
import Animation from "../Components/Animation";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const VotingSystem = () => {
  const highlights = [
    "End-to-end encrypted voting to ensure confidentiality and security",
    "RSA + AES hybrid encryption for secure vote transmission",
    "Voter authentication system with anonymity preservation",
    "Digital signatures to guarantee vote integrity",
    "End-to-end verifiability without revealing voter choice",
  ];

  return (
    <Animation>
      <section className="bg-black py-20 px-6 flex justify-center">
        <div className="max-w-7xl w-full text-center md:text-left">
          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-bl from-fuchsia-500 to-indigo-900 bg-clip-text text-transparent mb-12">
            Secure End-to-end Encrypted Voting System
          </h1>

          {/* Card */}
          <div className="bg-gray-900/80 backdrop-blur-md rounded-3xl shadow-2xl p-10 border border-gray-800">
            {/* Technology Stack */}
            <h2 className="text-orange-400 text-2xl font-bold mb-6">
              Technology Stack
            </h2>
            <p className="text-gray-200 text-lg mb-10">
              Java, RSA & AES Encryption, Java Cryptography Architecture (JCA)
            </p>

            {/* Image & Description */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-10">
              <img
                src={voting}
                alt="Secure Voting System"
                className="w-full rounded-2xl shadow-lg border border-gray-700 object-cover"
              />
              <div>
                <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-6">
                  A secure online voting system implementing hybrid encryption (RSA + AES)
                  for confidential and verifiable elections. Ensures voter anonymity, vote
                  integrity, and end-to-end verifiability without revealing voter choices.
                </p>

                {/* Key Highlights */}
                <ul className="space-y-3">
                  {highlights.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start space-x-3 p-2 bg-gray-800/60 rounded-xl border border-gray-700 hover:border-fuchsia-500 transition duration-200"
                    >
                      <CheckCircleIcon className="w-6 h-6 text-green-400 flex-shrink-0" />
                      <span className="text-gray-200">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* GitHub Link */}
                <a
                  href="https://github.com/pawan-kavinda/Secure-End-to-End-Encrypted-Voting-System"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition transform hover:scale-105"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Animation>
  );
};

export default VotingSystem;
