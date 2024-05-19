import React from "react";
import gc from "../assets/Projects/GroupChat/gc.png";
const GC = () => {
  return (
    <div className="flex justify-center bg-black  max-w-full">
      <div className="text-center sm:text:center md:text-start grid-cols-1  items-center gap-8 md:h-full mx-auto py-8 ">
        <div className="max-w-[1200px] p-2 pt-12 text-center ">
          <p className="text-3xl sm:text-4xl mx-auto mb-3 md:mb-10 md:text-6xl font-bold bg-gradient-to-bl from-fuchsia-500 to-indigo-900 bg-clip-text text-transparent">
            GROUP CHAT APPLICATION USING JAVA
          </p>
          <div className="mt-[40px] bg-gray-800 p-4 md:mt-32 rounded-3xl  mx-auto overflow-hidden">
            <h1 className="text-orange-400 font-bold pb-8">
              Technology Stack : Java , Socket programming , Multi threading
            </h1>
            <div className=" m-4 justify-center grid grid-cols-1 md:grid-cols-2 place-items-center md:flex md:items-center gap-2 mx-auto ">
              <img
                src={gc}
                layout="fill"
                width={600}
                height={600}
                objectFit="cover"
                alt=""
              />
            </div>
            <p className="text-white text-xl md:text-2xl pb-6 md:pb-12">
              Client Server group chat application made using Java socket
              programming. Consist with Server.java , Client.java ,
              ClientHandler.java and Server Connection.java files. Client
              handler is used to handle the clients seperately in seperate
              threads. Threads provide functionality to engage multiple users at
              the same time without waiting. This is a console application and
              tried using several devices at the same time.
            </p>
            <a className="text-blue-600 p-3" href=" https://github.com/pawan-kavinda/Network_Programming_Group_Chat_Application.git">https://github.com/pawan-kavinda/Network_Programming_Group_Chat_Application.git</a> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default GC;
