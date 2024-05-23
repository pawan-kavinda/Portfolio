import React from "react";
import fs1 from "../assets/Projects/FS/fs1.jpg";
import fs2 from "../assets/Projects/FS/fs2.jpg";
import fs3 from "../assets/Projects/FS/fs3.jpg";
import fs4 from "../assets/Projects/FS/fs4.jpg";
import Animation from "../Components/Animation";
const FS = () => {
  return (
    <Animation>
    <div className="flex justify-center bg-black  max-w-full">
      <div className="text-center sm:text:center md:text-start grid-cols-1  items-center gap-8 md:h-full mx-auto py-8 ">
        <div className="max-w-[1200px] p-2 pt-12 text-center ">
          <p className="text-3xl sm:text-4xl mx-auto mb-3 md:mb-10 md:text-6xl font-bold bg-gradient-to-bl from-fuchsia-500 to-indigo-900 bg-clip-text text-transparent">
            FOOD STORE MOBILE APPLICATION
          </p>
          <div className="mt-[40px] bg-gray-800 p-4 md:mt-32 rounded-3xl  mx-auto overflow-hidden">
            <h1 className="text-orange-400 font-bold pb-8">
              Technology Stack : Flutter , Firebase Database
            </h1>
            <div className=" m-4 justify-center grid grid-cols-2 md:grid-cols-2 place-items-center md:flex md:items-center gap-2 md:gap-6 mx-auto "> 
              <img
                src={fs4}
                layout="fill"
                width={200}
                height={200}
                objectFit="cover"
                alt=""
              />
               <img
                src={fs1}
                layout="fill"
                width={200}
                height={200}
                objectFit="cover"
                alt=""
              />
               <img
                src={fs3}
                layout="fill"
                width={200}
                height={200}
                objectFit="cover"
                alt=""
              />
               <img
                src={fs2}
                layout="fill"
                width={200}
                height={200}
                objectFit="cover"
                alt=""
              />
            </div>
           
             
            <p className="text-white text-xl md:text-2xl pb-6 md:pb-12">
              Food application designed for a restaurant, Powered by the
              combination of Flutter with Firebase database. This app seamlessly
              integrates a user-friendly interface with robust functionality
              ensuring a delightful experience for both restaurant
              administrators and users alike. This helps for customers to see
              and get a clear idea about the food prices and they can be in
              updated about the price changes of the restaurant. Admin and user
              role based authentication system gives access to different areas.
            </p>
            <a className="text-blue-600 p-3" href=" https://github.com/pawan-kavinda/Flutter-Food-Application.git">https://github.com/pawan-kavinda/Flutter-Food-Application.git</a> 
          </div>
        </div>
      </div>
    </div>
    </Animation>
  );
};

export default FS;
