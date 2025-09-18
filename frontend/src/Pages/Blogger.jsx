import React from "react";
import mob from "../assets/blogger.png";
import mob2 from "../assets/mob2.png";
import mob3 from "../assets/mob3.png";
import mob4 from "../assets/mob4.png";
import react from "../assets/react.png";
import Animation from "../Components/Animation";

const Blogger = () => {
  const mobileFeatures = [
    "Created and Deployed using Microservice architecture",
    "Authentication service built with NestJS, integrated with a MongoDB database",
    "Blog service developed with ExpressJS, connected to a PostgreSQL database",
    "Client application built with ReactJS, styled using Tailwind CSS",
    "Complete CICD pipeline with Jenkins, AWS EC2 , Docker, GitHub webhooks",
    "Full CRUD operations: users can create, read, update, and delete blog posts",
  ];

  return (
    <Animation>
      <section className="bg-black py-20 px-6">
        <div className="max-w-7xl mx-auto text-white">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-br from-fuchsia-500 via-purple-500 to-indigo-900 bg-clip-text text-transparent">
              Vite Blogger Application
            </h1>
          </div>

          {/* Mobile App Section */}
          <div className="backdrop-blur-lg bg-gray-900/60 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-800 mb-16">
            <p className="text-orange-400 font-semibold mb-6">
              Technology Stack: ReactJs, MongoDB, Postgre SQL, AWS , Docker,
              Jenkins
            </p>

            {/* Mobile Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[mob, mob2, mob3, mob4].map((img, idx) => (
                <div
                  key={idx}
                  className="overflow-hidden rounded-2xl shadow-lg"
                >
                  <img
                    src={img}
                    alt={`Mobile Screenshot ${idx + 1}`}
                    className="w-full h-80 object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Mobile Features */}
            <ul className="text-gray-200 text-lg leading-relaxed list-disc list-inside space-y-2 mb-6">
              {mobileFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <a
            href="http://13.217.143.170/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transform transition duration-300 text-white"
          >
            View Project
          </a>
           <a
            href="https://github.com/EC7205-Cloud-Computing/infra"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-8 inline-block bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transform transition duration-300 text-white"
          >
            View Repository
          </a>
        </div>
      </section>
    </Animation>
  );
};

export default Blogger;
