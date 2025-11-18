import React from "react";
import yp1 from "../assets/Projects/yp1.png";
import yp2 from "../assets/Projects/yp2.png";
import yp3 from "../assets/Projects/yp3.png";
import Animation from "../Components/Animation";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const YourPortfolio = () => {
  const highlights = [
    "Developed a full-stack portfolio builder that enables users to instantly create their portfolio and get the deployed URL by just filling out a form.",
    "Designed a responsive, modern UI with AngularJS and Styled components for an intuitive building experience.",
    "Implemented backend services in Node.js and Express.js for deployment automation and email notifications.",
    "Integrated Vercel API for one-click instant deployment from the app interface.",
    "Used MongoDB for managing user data, projects, and portfolio templates efficiently.",    
    "Integrated Nodemailer for email confirmations and portfolio sharing.",
    "Added real-time data handling and autosave features with React Query and Multer for image uploads.",    
    "Improved UI/UX accessibility and SEO for deployed portfolio websites."
  ];

  const screenshots = [yp1, yp2, yp3];

  return (
    <Animation>
      <section className="bg-black py-20 px-6">
        <div className="max-w-7xl mx-auto text-white">
          {/* Hero Section */}
          <div className="grid grid-cols-1 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-900 bg-clip-text text-transparent">
                YourPortfolio – Instant Portfolio Builder
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                Fully automated web platform that gives users instantly their deployed vercel portfolio URL. Users have to just add their details to the web application. The app handles the rest.
                
              </p>
              <a
                href="https://your-portfolio-webpkd.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-purple-500/50 hover:scale-105 transform transition duration-300"
              >
                View Live Application
              </a>
            </div>

          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {screenshots.map((src, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-3xl border border-gray-800 shadow-xl hover:scale-105 transform transition duration-300"
              >
                <img
                  src={src}
                  alt={`YourPortfolio Screenshot ${index + 1}`}
                  className="w-full h-[350px] object-cover rounded-3xl"
                />
              </div>
            ))}
          </div>

          {/* Details Section */}
          <div className="backdrop-blur-lg bg-gray-900/60 rounded-3xl p-10 shadow-xl border border-gray-800">
            <h2 className="text-orange-400 text-2xl font-semibold mb-6">Technologies Used</h2>
            <p className="text-lg text-gray-300 mb-10">
              NextJS, Node.js, Express.js, MongoDB, Vercel API, React Query, Tailwind CSS, JWT, Nodemailer, Docker
            </p>

            <h2 className="text-orange-400 text-2xl font-semibold mb-6">Key Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-4 bg-gray-800/60 rounded-xl border border-gray-700 hover:border-pink-500 transition duration-200"
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

export default YourPortfolio;
