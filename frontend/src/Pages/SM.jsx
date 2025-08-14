import React from "react";
import mob from "../assets/Projects/sm/smmobile.jpg";
import mob2 from "../assets/Projects/sm/smmobile2.jpg";
import mob3 from "../assets/Projects/sm/sm1.jpg";
import mob4 from "../assets/Projects/sm/sm2.jpg";
import react from "../assets/react.png";
import Animation from "../Components/Animation";

const SM = () => {
  const mobileFeatures = [
    "Google authentication",
    "Firebase Firestore email/password login",
    "Text alerts for ongoing sales within 200m",
    "Continuous Google Maps location tracking",
    "Online payment integration",
    "Cart and favorites functionality",
    "Search functionality",
    "Profile management",
    "Store location mapping across the country",
  ];

  return (
    <Animation>
      <section className="bg-black py-20 px-6">
        <div className="max-w-7xl mx-auto text-white">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-br from-fuchsia-500 via-purple-500 to-indigo-900 bg-clip-text text-transparent">
              LUXEMART SUPER MARKET APPLICATION
            </h1>
          </div>

          {/* Mobile App Section */}
          <div className="backdrop-blur-lg bg-gray-900/60 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-800 mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Mobile App
            </h2>
            <p className="text-orange-400 font-semibold mb-6">
              Technology Stack: Flutter, Firebase Database, Google Maps,
              Firestore Cloud Messaging
            </p>

            {/* Mobile Images */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[mob, mob2, mob3, mob4].map((img, idx) => (
                <div
                  key={idx}
                  className="overflow-hidden rounded-2xl shadow-lg"
                >
                  <img
                    src={img}
                    alt={`Mobile Screenshot ${idx + 1}`}
                    className="w-full h-full object-cover"
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
            href="https://github.com/pawan-kavinda/SuperMarket_project.git"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transform transition duration-300 text-white"
          >
            View GitHub Repository
          </a>
        </div>
      </section>
    </Animation>
  );
};

export default SM;
