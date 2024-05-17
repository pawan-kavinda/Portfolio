import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-black h-[100px] text-xl text-white max-w-[1550px] mx-auto flex justify-between items-center px-20 fixed top-0 left-0 right-0 z-50">
      <h1 className="text-3xl font-bold text-white ml-4">PAWAN <span className="hidden sm:hidden md:inline">KAVINDA</span></h1>
      <ul className="hidden md:flex">
        <li className="p-5">
          <FaGithub className="bg-gray-500 transform w-7 h-7 transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-yellow-100"></FaGithub>
        </li>
        <li className="p-5">
          {/* <a href="#work">Work</a> */}
          <FaInstagram className="bg-red-800 w-7 h-7 transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-yellow-100"></FaInstagram>
        </li>
        <li className="p-5">
          {/* <a href="#contact">Contact</a> */}
          <FaLinkedin className="bg-blue-400 w-7 h-7 transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-yellow-100"></FaLinkedin>
        </li>
      </ul>
      <ul className="hidden md:flex">
        <li className="p-5">
          <a href="#about">About</a>
        </li>
        <li className="p-5">
          <a href="#work">Work</a>
        </li>
        <li className="p-5">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="block md:hidden mx-5" onClick={handleNav}>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu />}
      </div>
      <div
        className={
          nav
            ? " z-10 fixed h-full left-0 top-0 w-[60%] bg-black ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="text-3xl primary-color m-4">Pawan Kavinda</h1>
        <ul className="p-8 text-2xl">
          <li className="p-5">
            <a href="#hero">Home</a>
          </li>
          <li className="p-5">
            <a href="#work">Work</a>
          </li>
          <li className="p-5">
            <a href="#contact">Contact</a>
          </li>
          <li className="p-5">
            <a href="#about">About</a>
          </li>
          <div className="flex">
          <li className="p-5">
          <FaGithub className="bg-green-300"></FaGithub>
        </li>
        <li className="p-5">
          {/* <a href="#work">Work</a> */}
          <FaInstagram className="bg-red-800"></FaInstagram>
        </li>
        <li className="p-5">
          {/* <a href="#contact">Contact</a> */}
          <FaLinkedin className="bg-blue-400"></FaLinkedin>
        </li>
          </div>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;









// import React, { useState } from "react";
// import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
// import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

// const Navbar = () => {
//   const [nav, setNav] = useState(false);

//   const handleNav = () => {
//     setNav(!nav);
//   };

//   return (
//     <nav className="bg-black text-white text-xl fixed top-0 left-0 right-0 z-50 px-20 md:flex md:justify-between md:items-center md:h-[100px]">
//       <h1 className="text-3xl font-bold ml-4">PAWAN <span className="hidden md:inline">KAVINDA</span></h1>
//       <ul className="md:flex">
//         <li className="p-5">
//           <FaGithub className="bg-gray-500 transform w-7 h-7 transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-yellow-100"></FaGithub>
//         </li>
//         <li className="p-5">
//           <FaInstagram className="bg-red-800 w-7 h-7 transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-yellow-100"></FaInstagram>
//         </li>
//         <li className="p-5">
//           <FaLinkedin className="bg-blue-400 w-7 h-7 transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-yellow-100"></FaLinkedin>
//         </li>
//       </ul>
//       <ul className="md:flex">
//         <li className="p-5">
//           <a href="#about">About</a>
//         </li>
//         <li className="p-5">
//           <a href="#work">Work</a>
//         </li>
//         <li className="p-5">
//           <a href="#contact">Contact</a>
//         </li>
//       </ul>
//       <div className="block md:hidden mx-5" onClick={handleNav}>
//         {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu />}
//       </div>
//       <div
//         className={
//           nav
//             ? "z-40 fixed top-[100px] left-0 right-0 bg-black text-white text-xl md:hidden ease-in-out duration-500"
//             : "hidden"
//         }
//       >
//         <ul className="p-8 text-2xl">
//           <li className="p-5">
//             <a href="#about">About</a>
//           </li>
//           <li className="p-5">
//             <a href="#work">Work</a>
//           </li>
//           <li className="p-5">
//             <a href="#contact">Contact</a>
//           </li>
//         </ul>
//         <div className="flex">
//           <li className="p-5">
//             <FaGithub className="bg-green-300"></FaGithub>
//           </li>
//           <li className="p-5">
//             <FaInstagram className="bg-red-800"></FaInstagram>
//           </li>
//           <li className="p-5">
//             <FaLinkedin className="bg-blue-400"></FaLinkedin>
//           </li>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
