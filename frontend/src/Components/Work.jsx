import React from "react";
import react from "../assets/react.png";
import flutter from "../assets/flutter.jpg";
import asp from "../assets/asp.png";
import sql from "../assets/sql.png";
import tailwind from "../assets/tailwind.jpg";
import node from "../assets/node.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
const Work = () => {
  return (
    <div className=" max-w-full mx-auto bg-black x-auto p-5" id="work">
      <div className="pb-8  text-center">
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
          className="text-4xl  p-6 md:px-64 mb-3 md:text-6xl font-bold text-white"
        >
          Projects
        </motion.p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-5 p-8 ">
       
          <div
            className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-blue-700
          group-container rounded-d flex justify-center items-center mx-auto h-[200px] bg-cover relative"
          >
             <Link to="/supermarket">

             <img
              src={react}
              layout="fill"
              width={200}
              height={200}
              objectFit="cover"
              alt=""
            />
             </Link>
           
          </div>
        
        <div
          className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-blue-700
         group-container rounded-d flex justify-center items-center mx-auto h-[200px] bg-cover relative"
        >
          <div></div>
          <Link to="/ems"><img
            src={asp}
            layout="fill"
            width={200}
            height={200}
            objectFit="cover"
            alt=""
          /></Link>
          
        </div>
        <div
          className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-blue-700
         group-container rounded-d flex justify-center items-center mx-auto h-[200px] bg-cover relative"
        >
          <Link to="/foodstore">  <img
            src={tailwind}
            layout="fill"
            width={200}
            height={200}
            objectFit="cover"
            alt=""
          /></Link>
        
        </div>
        <div
          className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-blue-700
         group-container rounded-d flex justify-center items-center mx-auto h-[200px] bg-cover relative"
        >
          <Link to="/ai">
          <img
            src={sql}
            layout="fill"
            width={200}
            height={200}
            objectFit="cover"
            alt=""
          />
          </Link>
         
        </div>
        <div
          className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-blue-700
         group-container rounded-d flex justify-center items-center mx-auto h-[200px] bg-cover relative"
        >
          <Link to="/groupchat"> <img
            src={flutter}
            layout="fill"
            width={200}
            height={200}
            objectFit="cover"
            alt=""
          /></Link>
         
        </div>
        <div
          className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-blue-700
         group-container rounded-d flex justify-center items-center mx-auto h-[200px] bg-cover relative"
        >
          <img
            src={node}
            layout="fill"
            width={200}
            height={200}
            objectFit="cover"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Work;
