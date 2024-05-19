import React from "react";
import mob from "../assets/Projects/sm/smmobile.jpg";
import mob2 from "../assets/Projects/sm/smmobile2.jpg";
import mob3 from "../assets/Projects/sm/sm1.jpg";
import mob4 from "../assets/Projects/sm/sm2.jpg";
import react from "../assets/react.png";
const SM = () => {
  return (
    <div className="flex justify-center bg-black  max-w-full">
      <div className="text-center sm:text:center md:text-start grid-cols-1  items-center gap-8 md:h-full mx-auto py-8 ">
        <div className="max-w-[1200px] p-2 pt-12 text-center ">
          <p className="text-3xl sm:text-4xl mx-auto mb-3 md:mb-5 md:text-6xl font-bold bg-gradient-to-bl from-fuchsia-500 to-indigo-900 bg-clip-text text-transparent">
            LUXEMART SUPER MARKET APPLICATION
          </p>
          <div className="mt-[40px] bg-gray-700 px-4 py-8 md:mt-20 rounded-3xl mx-auto overflow-hidden">
            <p className="text-2xl md:text-3xl text-white font-bold pb-4">
              Mobile App
            </p>
            <h1 className="text-orange-400 font-bold pb-8">
              Technology Stack : Flutter , Firebase Database , Google Maps ,
              Firestore Cloud Messaging
            </h1>

            <div className=" m-4 justify-center grid grid-cols-2 md:grid-cols-2 place-items-center md:flex md:items-center gap-2 md:gap-6 mx-auto ">
              <img
                src={mob}
                layout="fill"
                width={200}
                height={200}
                objectFit="cover"
                alt=""
              />
              <img
                src={mob2}
                layout="fill"
                width={200}
                height={200}
                objectFit="cover"
                alt=""
              />
               <img
                src={mob3}
                layout="fill"
                width={200}
                height={200}
                objectFit="cover"
                alt=""
              />
              <img
                src={mob4}
                layout="fill"
                width={200}
                height={200}
                objectFit="cover"
                alt=""
              />
            </div>
            <p className="text-white text-md md:text-lg pb-6 md:pb-12">
              Provides Google authentication and Firebase firestore email and
              password authentication. Special feature is the text alert
              function. Users can get update about ongoing sales through the app
              when they are within 200m of the store. Google map is included inside the map and it continously track user's location. Hence users can easily identify the supermarkets near the area. Once a user is registered
              and logged in user can navigate through the products. Cart and
              favourite function , search function, update profile function is
              there. Google map is integrated inside the application and users
              can check the store locations all over the country.
            </p>

            <p className="text-2xl md:text-3xl text-white font-bold pb-4">
              Web Application
            </p>
            <h1 className="text-orange-400 font-bold pb-8">
              Technology Stack : React.Js , Node.Js , Express , Firebase
            </h1>
            <div className=" m-4 flex justify-center">
              <img
                src={react}
                layout="fill"
                width={400}
                height={400}
                objectFit="cover"
                alt=""
              />
            </div>
            <p className="text-white text-md md:text-lg">
              Provides Google authentication and Firebase firestore email and
              password authentication. Special feature is the text alert
              function. Users can get update about ongoing sales through the app
              when they are within 200m of the store. Once a user is registered
              and logged in user can navigate through the products. Cart and
              favourite function , search function, update profile function is
              there. Google map is integrated inside the application and users
              can check the store locations all over the country.
            </p>
            <a
              className="text-blue-600 p-3"
              href=" https://github.com/pawan-kavinda/SuperMarket_project.git"
            >
              https://github.com/pawan-kavinda/SuperMarket_project.git
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SM;

{
  /* <div className=" m-4 flex justify-center "> 
<img
  
  src={react}
  layout="fill"
   width={300}
   height={300}
  objectFit="cover"
  alt=""
/>
      <img
 
 src={react}
 layout="fill"
  width={300}
  height={300}
 objectFit="cover"
 alt=""
/>
</div> */
}
