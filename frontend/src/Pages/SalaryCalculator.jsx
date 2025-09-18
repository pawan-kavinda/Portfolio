import React from "react";
import salaryImg from "../assets/salary.png"; // rename uploaded image to salary.png
import Animation from "../Components/Animation";

const SalaryCalculator = () => {
  const features = [
    "Developed with ReactJS and styled using Tailwind CSS",
    "Allows adding multiple earnings (allowances, bonuses, etc.)",
    "Supports multiple deductions (loans, advances, etc.)",
    "Automatic calculation of Gross Earnings, Deductions, and Net Salary",
    "EPF/ETF contributions for both Employee (8%) and Employer (12% + 3%)",
    "APIT tax deduction included",
    "Displays Cost to Company (CTC)",
    "Responsive UI with dynamic salary breakdown",
  ];

  return (
    <Animation>
      <section className="bg-black py-20 px-6">
        <div className="max-w-7xl mx-auto text-white">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-br from-green-400 via-emerald-500 to-teal-700 bg-clip-text text-transparent">
              Salary Calculator Application
            </h1>
          </div>

          {/* Project Section */}
          <div className="backdrop-blur-lg bg-gray-900/60 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-800 mb-16">
            <p className="text-green-400 font-semibold mb-6">
              Technology Stack: ReactJS, Tailwind CSS
            </p>

            {/* Single Image */}
            <div className="overflow-hidden rounded-2xl shadow-lg mb-6">
              <img
                src={salaryImg}
                alt="Salary Calculator Screenshot"
                className="w-full h-[500px] object-contain"
              />
            </div>

            {/* Features */}
            <ul className="text-gray-200 text-lg leading-relaxed list-disc list-inside space-y-2 mb-6">
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          {/* Buttons */}
          <a
            href="https://salary-calculator-2024.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-green-500 to-teal-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transform transition duration-300 text-white"
          >
            View Project
          </a>
          <a
            href="https://github.com/pawan-kavinda/Salary-calculator"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-8 inline-block bg-gradient-to-r from-green-500 to-teal-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transform transition duration-300 text-white"
          >
            View Repository
          </a>
        </div>
      </section>
    </Animation>
  );
};

export default SalaryCalculator;
