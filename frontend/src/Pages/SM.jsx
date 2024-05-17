import React from "react";
import react from "../assets/react.png";
const SM = () => {
  return (
    <div className=" text-center sm:text:center md:text-start grid-cols-1  items-center gap-8 max-w-full md:h-full mx-auto py-8 bg-black  ">
      <div className="md:px-32 p-8 text-center">
        <p className="text-3xl sm:text-4xl mx-auto mb-3 md:mb-10 md:text-6xl font-bold text-white">
          LUXEMART SUPER MARKET APPLICATION
        </p>
        <div className="mt-[40px] bg-gray-800 p-4 md:mt-32 rounded-3xl  mx-auto overflow-hidden">
          <p className="text-2xl md:text-3xl text-white font-bold pb-4">Mobile App</p>
          <h1 className='text-gray-500 font-bold'>Technology Stack : Flutter , Firebase Database , Google Maps , Firestore Cloud Messaging</h1>
          <img
            src={react}
            layout="fill"
             width={400}
             height={400}
            objectFit="cover"
            alt=""
          />
          <p className="text-white text-xl md:text-2xl pb-6 md:pb-12">
          Provides Google authentication and Firebase firestore email and
          password authentication. Special feature is the text alert function.
          Users can get update about ongoing sales through the app when they are
          within 200m of the store. Once a user is registered and logged in user
          can navigate through the products. Cart and favourite function ,
          search function, update profile function is there. Google map is
          integrated inside the application and users can check the store
          locations all over the country.</p>

          <p className="text-2xl md:text-3xl text-white font-bold pb-4">Web Application</p>
          <h1 className='text-gray-500 font-bold'>Technology Stack : React.Js , Node.Js , Express , Firebase</h1>
          <img
            src={react}
            layout="fill"
             width={400}
             height={400}
            objectFit="cover"
            alt=""
          />
          <p className="text-white text-xl md:text-2xl">
          Provides Google authentication and Firebase firestore email and
          password authentication. Special feature is the text alert function.
          Users can get update about ongoing sales through the app when they are
          within 200m of the store. Once a user is registered and logged in user
          can navigate through the products. Cart and favourite function ,
          search function, update profile function is there. Google map is
          integrated inside the application and users can check the store
          locations all over the country.</p>
          
        </div>
      </div>
    </div>
  );
};

export default SM;
