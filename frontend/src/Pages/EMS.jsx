import React from "react";
import ems from "../assets/Projects/ems.jpg";
const EMS = () => {
  return (
    <div className="flex justify-center bg-black  max-w-full">
      <div className="text-center sm:text:center md:text-start grid-cols-1  items-center gap-8 md:h-full mx-auto py-8 ">
        <div className="max-w-[1200px] p-2 pt-12 text-center ">
          <p className="text-3xl sm:text-4xl mx-auto mb-3 md:mb-10 md:text-6xl font-bold bg-gradient-to-bl from-fuchsia-500 to-indigo-900 bg-clip-text text-transparent">
            EMPLOYEE MANAGEMENT SYSTEM
          </p>
          <div className="mt-[40px] bg-gray-800 p-4 md:mt-32 rounded-3xl  mx-auto overflow-hidden">
            <h1 className="text-orange-400 font-bold pb-8">
              Technology Stack : ASP.Net, Entity Framework, SQLite Database
            </h1>
            <div className=" m-4 justify-center grid grid-cols-1 md:grid-cols-2 place-items-center md:flex md:items-center gap-2 mx-auto ">
              <img
                src={ems}
                layout="fill"
                width={600}
                height={600}
                objectFit="cover"
                alt=""
              />
            </div>
            <p className="text-white text-xl md:text-2xl pb-6 md:pb-12">
              Web Application for managing employees built using ASP.Net MVC
              architecture with Microsoft Entity Framework core and SQLite
              database is used as the main database. This provide admin side
              management operations with authentication. After logged as an
              admin, it can do all the CRUD operations for employees. Consist
              with eye-catching user interfaces and provides smooth navigation
              between pages. Admins can do their operations through admin
              dashboard. Consist with Home page, about page , login and sign up
              page, admin dashboard, admin profile page.
            </p>
            <a className="text-blue-600 p-3" href="https://github.com/pawan-kavinda/Employee-Management-System-Project.git">https://github.com/pawan-kavinda/Employee-Management-System-Project.git</a> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default EMS;
