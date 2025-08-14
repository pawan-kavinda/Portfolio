import React from "react";
import gc from "../assets/Projects/GroupChat/gc.png";
import Animation from "../Components/Animation";

const AI = () => {
  const keyPoints = [
    "Client-server group chat application using Java Socket programming.",
    "Supports multiple clients simultaneously using multi-threading.",
    "Includes Server.java, Client.java, ClientHandler.java, and ServerConnection.java files.",
    "Console-based application tested across multiple devices.",
    "Efficient client handling with separate threads for each connection.",
  ];

  return (
    <Animation>
      <section className="bg-black py-20 px-6 flex justify-center">
        <div className="max-w-7xl w-full text-center md:text-left">
          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-bl from-fuchsia-500 to-indigo-900 bg-clip-text text-transparent mb-12">
           Java Multi Threaded Group Chat Application
          </h1>

          {/* Card */}
          <div className="bg-gray-900/80 backdrop-blur-md rounded-3xl shadow-2xl p-10 border border-gray-800">
            {/* Technology Stack */}
            <h2 className="text-orange-400 text-2xl font-bold mb-6">
              Technology Stack
            </h2>
            <p className="text-gray-200 text-lg mb-10">
              Java, Socket Programming, Multi-threading
            </p>

            {/* Image & Description */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-10">
              <img
                src={gc}
                alt="Group Chat Application"
                className="w-full rounded-2xl shadow-lg border border-gray-700 object-cover"
              />
              <div>
                <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-6">
                  A client-server group chat application built with Java socket programming. Each client is handled in a separate thread, allowing multiple users to communicate simultaneously without delays. Designed as a console application and tested on several devices.
                </p>

                {/* Key Points */}
                <ul className="list-disc list-inside text-gray-200 space-y-2 text-lg md:text-xl mb-6">
                  {keyPoints.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>

                {/* GitHub Link */}
                <a
                  href="https://github.com/pawan-kavinda/Network_Programming_Group_Chat_Application.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition transform hover:scale-105"
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

export default AI;
