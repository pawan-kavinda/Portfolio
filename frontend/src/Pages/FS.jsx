import React from "react";
import react from "../assets/react.png";
const FS = () => {
  return (
    <div className=" text-center sm:text:center md:text-start grid-cols-1  items-center gap-8 max-w-full md:h-full mx-auto py-8 bg-black  ">
      <div className="md:px-32 p-8 text-center">
        <p className="text-3xl sm:text-4xl mx-auto mb-3 md:mb-10 md:text-6xl font-bold text-white">
          FOOD STORE MOBILE APPLICATION
        </p>
        <div className="mt-[40px] bg-gray-800 p-4 md:mt-32 rounded-3xl  mx-auto overflow-hidden">
          
          <h1 className='text-gray-500 font-bold'>Technology Stack : Flutter , Firebase Database</h1>
          <img
            src={react}
            layout="fill"
            width={400}
            height={400}
            objectFit="cover"
            alt=""
          />
          <p className="text-white text-xl md:text-2xl pb-6 md:pb-12">
            Food application designed for a restaurant, Powered by the
            combination of Flutter with Firebase database. This app seamlessly
            integrates a user-friendly interface with robust functionality
            ensuring a delightful experience for both restaurant administrators
            and users alike. This helps for customers to see and get a clear
            idea about the food prices and they can be in updated about the
            price changes of the restaurant. Admin and user role based authentication system gives access to different areas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FS;