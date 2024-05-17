import React from "react";
import react from "../assets/react.png";
const GC = () => {
  return (
    <div className=" text-center sm:text:center md:text-start grid-cols-1  items-center gap-8 max-w-full md:h-full mx-auto py-8 bg-black  ">
      <div className="md:px-32 p-8 text-center">
        <p className="text-3xl sm:text-4xl mx-auto mb-3 md:mb-10 md:text-6xl font-bold text-white">
          GROUP CHAT APPLICATION USING JAVA
        </p>
        <div className="mt-[40px] bg-gray-800 p-4 md:mt-32 rounded-3xl  mx-auto overflow-hidden">
        <h1 className='text-gray-500 font-bold'>Technology Stack : Java , Socket programming , Multi threading</h1>
          <img
            src={react}
            layout="fill"
            width={400}
            height={400}
            objectFit="cover"
            alt=""
          />
          <p className="text-white text-xl md:text-2xl pb-6 md:pb-12">
            Client Server group chat application made using Java socket
            programming. Threads provide functionality to engage multiple users
            at the same time without waiting. This is a console application and
            tried using several devices at the same time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GC;