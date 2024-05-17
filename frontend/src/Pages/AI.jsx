import React from 'react'
import react from "../assets/react.png";
const AI = () => {
    return (
        <div id='/AI' className=" text-center sm:text:center md:text-start grid-cols-1  items-center gap-8 max-w-full md:h-full mx-auto py-8 bg-black  ">
          <div className="md:px-32 p-8 text-center">
            <p className="text-3xl sm:text-4xl mx-auto mb-3 md:mb-10 md:text-6xl font-bold text-white">
              MACHINE LEARNING MOBILE PHONE PRICE PREDICTOR
            </p>
            <div className="mt-[40px] bg-gray-800 p-4 md:mt-32 rounded-3xl  mx-auto overflow-hidden">
            <h1 className='text-gray-500 font-bold'>Technology Stack : Python , Numpy, Decision Tree , Linear Regression</h1>
              <img
                src={react}
                layout="fill"
                 width={400}
                 height={400}
                objectFit="cover"
                alt=""
              />
              <p className="text-white text-xl md:text-2xl pb-6 md:pb-12">
             Mobile phone price predictor using machine learning is built to predict the price of a mobile phone by entering the features of it. I have use both linear regression and decision tree methods for build this. This gave around 90% accuracy of predicting. I have chosen the dataset from "Kaggle" website. Preprocessing part, Testing part and deployment parts have been finished.
             <a className='text-blue-400  font-bold' href='https://mobilepricepredictor2023uor-2f7df20961de.herokuapp.com/'>Visit here</a>

             </p>
    
              
            </div>
          </div>
        </div>
      );
}

export default AI