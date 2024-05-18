import React from "react";
import react from "../assets/react.png";
const EMS = () => {
  return (
    <div className=" text-center sm:text:center md:text-start grid-cols-1  items-center gap-8 max-w-full md:h-full mx-auto py-8 bg-black  ">
      <div className="md:px-64 sm:px-32 p-16 pt-24 text-center">
        <p className="text-3xl sm:text-4xl mx-auto mb-3 md:mb-10 md:text-6xl font-bold text-white">
          EMPLOYEE MANAGEMENT SYSTEM
        </p>
        <div className="mt-[40px] bg-gray-800 p-4 md:mt-32 rounded-3xl  mx-auto overflow-hidden">
          <h1 className="text-gray-500 font-bold pb-8">
            Technology Stack : ASP.Net, Entity Framework, SQLite Database
          </h1>
          <div className=" m-4 justify-center grid grid-cols-1 md:grid-cols-2 place-items-center md:flex md:items-center gap-2 mx-auto ">
            <img
              src={react}
              layout="fill"
              width={600}
              height={600}
              objectFit="cover"
              alt=""
            />
          </div>
          <p className="text-white text-xl md:text-2xl pb-6 md:pb-12">
            Web Application for managing employees. This provide admin side
            management operations with authentication. After logged as an admin,
            it can do all the CRUD operations for employees. Consist with
            eye-catching user interfaces and provides smooth navigation between
            pages. Admins can do their operations through admin dashboard.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EMS;
