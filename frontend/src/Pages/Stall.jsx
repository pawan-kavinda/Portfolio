import React from "react";
import sr1 from "../assets/sr1.jpeg";
import sr2 from "../assets/sr2.jpeg";
import sr3 from "../assets/sr3.jpeg";
import Animation from "../Components/Animation";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const StallReservation = () => {
  const highlights = [
    "Developed the Admin Portal for the Colombo International Bookfair Stall Reservation System to streamline stall and reservation management.",
    "Implemented secure authentication and role-based access control using JWT tokens.",
    "Designed a responsive and user-friendly admin dashboard using React.js and Tailwind CSS.",
    "Built features for organizers to monitor stall availability, manage user reservations, and update stall information in real time.",
    "Integrated backend APIs with ASP.NET Core to handle CRUD operations for stalls, reservations, and user data.",
    "Developed email notification integration using Nodemailer to confirm and track successful reservations.",
    "Implemented data visualization and search filters for quick stall lookup and efficient reservation tracking.",
    "Enhanced system reliability with modular backend services and optimized database queries."
  ];

  const screenshots = [sr1, sr2, sr3];

  return (
    <Animation>
      <section className="bg-black py-20 px-6">
        <div className="max-w-7xl mx-auto text-white">
          <div className="grid grid-cols-1 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-yellow-500 via-orange-500 to-red-600 bg-clip-text text-transparent">
                Colombo International Bookfair – Stall Reservation System
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                A complete stall reservation management platform developed for the Colombo International Bookfair. 
                This system enables book publishers and vendors to register, view available stalls, reserve up to 
                three stalls, and receive instant confirmation via email with a unique QR code for entry. The solution 
                includes an employee portal for organizers to efficiently manage reservations and track stall availability.
              </p>
           
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {screenshots.map((src, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-3xl border border-gray-800 shadow-xl hover:scale-105 transform transition duration-300"
              >
                <img
                  src={src}
                  alt={`Stall Reservation Screenshot ${index + 1}`}
                  className="w-full h-[350px] object-cover rounded-3xl"
                />
              </div>
            ))}
          </div>

          <div className="backdrop-blur-lg bg-gray-900/60 rounded-3xl p-10 shadow-xl border border-gray-800">
            <h2 className="text-orange-400 text-2xl font-semibold mb-6">Technologies Used</h2>
            <p className="text-lg text-gray-300 mb-10">
              ASP.NET Core, React.js, JWT Authentication, Docker
            </p>

            <h2 className="text-orange-400 text-2xl font-semibold mb-6">Key Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-4 bg-gray-800/60 rounded-xl border border-gray-700 hover:border-orange-500 transition duration-200"
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

export default StallReservation;
