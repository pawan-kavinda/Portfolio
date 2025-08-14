import React from "react";
import ems from "../assets/Projects/ems.jpg";
import Animation from "../Components/Animation";

const EMS = () => {
  return (
    <Animation>
      <section className="bg-black py-20 px-6 flex justify-center">
        <div className="max-w-7xl w-full text-center md:text-left">
          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-bl from-fuchsia-500 to-indigo-900 bg-clip-text text-transparent mb-12">
            EMPLOYEE MANAGEMENT SYSTEM
          </h1>

          {/* Card */}
          <div className="bg-gray-900/80 backdrop-blur-md rounded-3xl shadow-2xl p-10 border border-gray-800">
            {/* Technology Stack */}
            <h2 className="text-orange-400 text-2xl font-bold mb-6">
              Technology Stack
            </h2>
            <p className="text-gray-200 text-lg mb-10">
              ASP.Net MVC, Entity Framework Core, SQLite Database
            </p>

            {/* Image & Description */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-10">
              <img
                src={ems}
                alt="Employee Management System"
                className="w-full rounded-2xl shadow-lg border border-gray-700 object-cover"
              />
              {/* Key Points Section */}
              <div className="mt-10 bg-gray-800/70 p-6 rounded-2xl border border-gray-700 shadow-lg">
                <h2 className="text-orange-400 text-2xl font-bold mb-4">
                  Key Points
                </h2>
                <ul className="list-disc list-inside text-gray-200 space-y-2 text-lg md:text-xl">
                  <li>Web application built using ASP.Net MVC architecture.</li>
                  <li>Employee management with full CRUD operations.</li>
                  <li>Admin authentication and secure dashboard access.</li>
                  <li>
                    SQLite database integrated with Entity Framework Core.
                  </li>
                  <li>
                    Responsive and user-friendly interface with smooth
                    navigation.
                  </li>
                  <li>
                    Includes Home, About, Login, Signup, Admin Dashboard, and
                    Profile pages.
                  </li>
                  <li>
                    Clean and modern UI with shadowed cards and gradient
                    headings.
                  </li>
                  <li>Hosted on GitHub for easy access and collaboration.</li>
                </ul>
              </div>
            </div>

            {/* GitHub Link */}
            <a
              href="https://github.com/pawan-kavinda/Employee-Management-System-Project.git"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition transform hover:scale-105"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>
    </Animation>
  );
};

export default EMS;
