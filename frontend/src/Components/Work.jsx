import React from "react";
import ai from "../assets/Projects/ai.jpg";
import gc from "../assets/Projects/gc.jpg";
import ems from "../assets/Projects/ems.jpg";
import sm from "../assets/Projects/sm.jpg";
import fs from "../assets/Projects/fs.jpg";
import node from "../assets/node.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

const Work = () => {

  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(true);
  };

  const onLeave = () => {
    setHover(false);
  };
  return (
    <div className=" max-w-full mx-auto bg-black x-auto p-5" id="work">
      <div className="pb-8  text-center">
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
          className="text-4xl  p-6 md:px-64 mb-3 md:text-6xl font-bold bg-gradient-to-bl from-fuchsia-500 to-indigo-900 bg-clip-text text-transparent"
        >
          Projects
        </motion.p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5 p-8 ">
        <div onMouseEnter={onHover} onMouseLeave={onLeave}
          className="transform transition-transform duration-300 hover:scale-105 hover:bg-yellow-900 overflow-hidden shadow-lg shadow-blue-700
          group-container rounded-d flex justify-center items-center mx-auto h-[200px] w-[200px] md:w-[400px] md:bg-gray-700 bg-cover relative"
        >
          <Link to="/supermarket">
            <img
              src={sm}
              layout="fill"
              width={390}
              height={200}
              objectFit="cover"
              alt=""
            />
          </Link>
          
        </div>

        <div
          className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-blue-700
         group-container rounded-d flex justify-center items-center mx-auto h-[200px] w-[200px] md:w-[400px] bg-cover md:bg-gray-700 relative"
        >
          
          <Link to="/ems">
            <img
              src={ems}
              layout="fill"
              width={390}
              height={200}
              objectFit="cover"
              alt=""
            />
          </Link>
        </div>
        <div
          className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-blue-700
         group-container rounded-d flex justify-center items-center mx-auto h-[200px] w-[200px] md:w-[400px] md:bg-gray-700 bg-cover relative"
        >
          <Link to="/ai">
            {" "}
            <img
              src={ai}
              layout="fill"
              width={390}
              height={200}
              objectFit="cover"
              alt=""
            />
          </Link>
        </div>
        <div
          className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-blue-700
         group-container rounded-d flex justify-center items-center mx-auto h-[200px] w-[200px] md:w-[400px] md:bg-gray-700 bg-cover relative"
        >
          <Link to="/foodstore">
            <img
              src={fs}
              layout="fill"
              width={390}
              height={200}
              objectFit="cover"
              alt=""
            />
          </Link>
        </div>
        <div
          className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-blue-700
         group-container rounded-d flex justify-center items-center mx-auto h-[200px]  w-[200px] md:w-[400px] md:bg-gray-700 bg-cover relative"
        >
          <Link to="/groupchat">
            {" "}
            <img
              src={gc}
              layout="fill"
              width={390}
              height={200}
              objectFit="cover"
              alt=""
            />
          </Link>
        </div>
        <div
          className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-blue-700
         group-container rounded-d flex justify-center items-center mx-auto h-[200px] w-[200px] md:w-[400px] md:bg-gray-700 bg-cover relative"
        >
          <img
            src={node}
            layout="fill"
            width={390}
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
