import React from "react";
import ml from "../assets/ml.png";
import Animation from "../Components/Animation";

const AI = () => {
  const keyPoints = [
    "Predicts mobile phone price based on features using machine learning.",
    "Implemented Linear Regression and Decision Tree algorithms.",
    "Achieved ~90% prediction accuracy.",
    "Dataset sourced from Kaggle; extensive preprocessing applied.",
    "Categorical data converted to numerical via one-hot encoding.",
    "Missing values filled using median imputation.",
    "Testing and deployment completed; live demo available online.",
  ];

  return (
    <Animation>
      <section className="bg-black py-20 px-6 flex justify-center">
        <div className="max-w-7xl w-full text-center md:text-left">
          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-bl from-fuchsia-500 to-indigo-900 bg-clip-text text-transparent mb-12">
            MACHINE LEARNING MOBILE PHONE PRICE PREDICTOR
          </h1>

          {/* Card */}
          <div className="bg-gray-900/80 backdrop-blur-md rounded-3xl shadow-2xl p-10 border border-gray-800">
            {/* Technology Stack */}
            <h2 className="text-orange-400 text-2xl font-bold mb-6">
              Technology Stack
            </h2>
            <p className="text-gray-200 text-lg mb-10">
              Python, NumPy, Decision Tree, Linear Regression
            </p>

            {/* Image & Description */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-10">
              <img
                src={ml}
                alt="Mobile Price Predictor"
                className="w-full rounded-2xl shadow-lg border border-gray-700 object-cover"
              />
              <div>
                <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-6">
                  Predicts the price of a mobile phone by entering its features.
                  Linear Regression and Decision Tree algorithms are used for
                  modeling, with preprocessing applied to a messy Kaggle dataset
                  to improve accuracy.
                </p>

                {/* Key Points */}
                <ul className="list-disc list-inside text-gray-200 space-y-2 text-lg md:text-xl mb-6">
                  {keyPoints.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Animation>
  );
};

export default AI;
