import React from "react";
import fs1 from "../assets/Projects/FS/fs1.jpg";
import fs2 from "../assets/Projects/FS/fs2.jpg";
import fs3 from "../assets/Projects/FS/fs3.jpg";
import fs4 from "../assets/Projects/FS/fs4.jpg";
import Animation from "../Components/Animation";

const FS = () => {
  const keyPoints = [
    "User-friendly mobile app for restaurant food management.",
    "Built with Flutter and Firebase for smooth performance and real-time updates.",
    "Cart, Wishlist functionality for easy item management.",
    "Displays clear pricing and updates for menu items.",
    "Responsive and visually appealing UI for both customers and admins.",
    "Helps users track price changes and restaurant offerings easily.",
  ];

  const images = [fs4, fs1, fs3, fs2];

  return (
    <Animation>
      <section className="bg-black py-20 px-6 flex justify-center">
        <div className="max-w-7xl w-full text-center md:text-left">
          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-bl from-fuchsia-500 to-indigo-900 bg-clip-text text-transparent mb-12">
            FOOD STORE MOBILE APPLICATION
          </h1>

          {/* Card */}
          <div className="bg-gray-900/80 backdrop-blur-md rounded-3xl shadow-2xl p-10 border border-gray-800">
            {/* Technology Stack */}
            <h2 className="text-orange-400 text-2xl font-bold mb-6">
              Technology Stack
            </h2>
            <p className="text-gray-200 text-lg mb-10">
              Flutter, Firebase Database
            </p>

            {/* Image Gallery */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Food Store ${index + 1}`}
                  className="w-full object-cover rounded-2xl shadow-lg border border-gray-700 hover:scale-105 transition transform duration-300"
                />
              ))}
            </div>

            {/* Description */}
            <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-6">
              Food application designed for a restaurant, powered by Flutter and
              Firebase. Provides a seamless interface for both customers and
              administrators. Customers can view menu items, prices, and updates
              easily, while admin users manage menu items and prices
              efficiently.
            </p>

            {/* Key Points */}
            <ul className="list-disc list-inside text-gray-200 space-y-2 text-lg md:text-xl mb-6">
              {keyPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>

            {/* GitHub Link */}
            <a
              href="https://github.com/pawan-kavinda/Flutter-Food-Application.git"
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

export default FS;
