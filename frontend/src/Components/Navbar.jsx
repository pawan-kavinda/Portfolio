// import React, { useState } from "react";
// import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
// import { FaLinkedin } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { motion } from "framer-motion";

// const motionIcons = (duration) => ({
//   initial: { y: -10 },
//   animate: {
//     y: [5, -5],
//     transition: {
//       duration: duration,
//       ease: "linear",
//       repeat: Infinity,
//       repeatType: "reverse",
//     },
//   },
// });

// const Navbar = () => {
//   const [nav, setNav] = useState(false);

//   const handleNav = () => {
//     setNav(!nav);
//   };

//   return (
//     <div className="bg-black h-[100px] text-xl text-white max-w-[1550px] mx-auto flex justify-between items-center md:px-20 px-12 fixed top-0 left-0 right-0 z-50">
//       <h1 className="text-xl md:px-8 md:text-2xl font-bold bg-gradient-to-r from-slate-200 to-orange-600 bg-clip-text text-transparent">
//         PAWAN <span className="hidden sm:hidden md:inline">KAVINDA</span>
//       </h1>
//       <ul className="hidden md:flex">
//         <a href="https://github.com/pawan-kavinda">
//           <motion.li
//             variants={motionIcons(1)}
//             initial="initial"
//             animate="animate"
//             className="p-5"
//           >
//             <FaGithub className="bg-gray-500 transform w-7 h-7 transition-transform duration-300 hover:scale-125 overflow-hidden shadow-lg shadow-yellow-100"></FaGithub>
//           </motion.li>
//         </a>

//         <a href="https://www.instagram.com/pawan_kd_9/?hl=en">
//           <motion.li
//             variants={motionIcons(5)}
//             initial="initial"
//             animate="animate"
//             className="p-5"
//           >
//             {/* <a href="#work">Work</a> */}
//             <FaInstagram className="bg-red-800 w-7 h-7 transform transition-transform duration-300 hover:scale-125 overflow-hidden shadow-lg shadow-yellow-100"></FaInstagram>
//           </motion.li>
//         </a>
//         <a href="https://www.linkedin.com/in/pawan-kavinda-6a3a37228/">
//           <motion.li
//             variants={motionIcons(10)}
//             initial="initial"
//             animate="animate"
//             className="p-5"
//           >
//             {/* <a href="#contact">Contact</a> */}
//             <FaLinkedin className="bg-blue-400 w-7 h-7 transform transition-transform duration-300 hover:scale-125 overflow-hidden shadow-lg shadow-yellow-100"></FaLinkedin>
//           </motion.li>
//         </a>
//       </ul>
//       <ul className="hidden font-bold md:text-2xl text-xl md:flex bg-gradient-to-r from-slate-200 to-orange-600 bg-clip-text text-transparent ">
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
//       <div className="block md:hidden mx-5  " onClick={handleNav}>
//         {nav ? <AiOutlineClose  size={20} /> : <AiOutlineMenu />}
//       </div>
//       <div
//         className={
//           nav
//             ? " z-10 fixed h-full left-0 top-0 w-[60%] bg-gray-800 ease-in-out duration-500"
//             : "fixed left-[-100%]"
//         }
//       >
//         <h1 className="text-3xl font-bold  bg-gradient-to-r from-slate-200 to-orange-600 bg-clip-text text-transparent m-4">Pawan Kavinda</h1>
//         <ul className="p-8 text-2xl">
//           <li className="p-5">
//             <a href="#hero">Home</a>
//           </li>
//           <li className="p-5">
//             <a href="#work">Work</a>
//           </li>
//           <li className="p-5">
//             <a href="#contact">Contact</a>
//           </li>
//           <li className="p-5">
//             <a href="#about">About</a>
//           </li>
//           <div className="flex">
//             <li className="p-5">
//             <a href="https://github.com/pawan-kavinda">
//               <FaGithub className="bg-green-300"></FaGithub></a>
//             </li>
//             <li className="p-5">
//               {/* <a href="#work">Work</a> */}
//               <a href="https://www.instagram.com/pawan_kd_9/?hl=en">
//               <FaInstagram className="bg-red-800"></FaInstagram></a>
//             </li>
//             <li className="p-5">
//               {/* <a href="#contact">Contact</a> */}
//               <a href="https://www.linkedin.com/in/pawan-kavinda-6a3a37228/">
//               <FaLinkedin className="bg-blue-400"></FaLinkedin></a>
//             </li>
//           </div>
//         </ul>
//       </div>
//     </div>
//   );
// };
// export default Navbar;

import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const motionIcons = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [5, -5],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const smoothScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="bg-black h-[100px] text-xl text-white max-w-[1550px] mx-auto flex justify-between items-center md:px-20 px-12 fixed top-0 left-0 right-0 z-50">
      <h1 className="text-xl md:px-8 md:text-2xl font-bold bg-gradient-to-r from-slate-200 to-orange-600 bg-clip-text text-transparent">
        PAWAN <span className="hidden sm:hidden md:inline">KAVINDA</span>
      </h1>
      <ul className="hidden md:flex">
        <a href="https://github.com/pawan-kavinda">
          <motion.li
            variants={motionIcons(1)}
            initial="initial"
            animate="animate"
            className="p-5"
          >
            <FaGithub className="bg-gray-500 transform w-7 h-7 transition-transform duration-300 hover:scale-125 overflow-hidden shadow-lg shadow-yellow-100"></FaGithub>
          </motion.li>
        </a>

        <a href="https://www.instagram.com/pawan_kd_9/?hl=en">
          <motion.li
            variants={motionIcons(5)}
            initial="initial"
            animate="animate"
            className="p-5"
          >
            <FaInstagram className="bg-red-800 w-7 h-7 transform transition-transform duration-300 hover:scale-125 overflow-hidden shadow-lg shadow-yellow-100"></FaInstagram>
          </motion.li>
        </a>
        <a href="https://www.linkedin.com/in/pawan-kavinda-6a3a37228/">
          <motion.li
            variants={motionIcons(10)}
            initial="initial"
            animate="animate"
            className="p-5"
          >
            <FaLinkedin className="bg-blue-400 w-7 h-7 transform transition-transform duration-300 hover:scale-125 overflow-hidden shadow-lg shadow-yellow-100"></FaLinkedin>
          </motion.li>
        </a>
      </ul>
      <ul className="hidden font-bold md:text-2xl text-xl md:flex bg-gradient-to-r from-slate-200 to-orange-600 bg-clip-text text-transparent ">
      <li className="p-5">
          <a href="#hero" onClick={(e) => smoothScroll(e, "hero")}>Home</a>
        </li>
        <li className="p-5">
          <a href="#about" onClick={(e) => smoothScroll(e, "about")}>About</a>
        </li>
        <li className="p-5">
          <a href="#work" onClick={(e) => smoothScroll(e, "work")}>Work</a>
        </li>
        <li className="p-5">
          <a href="#contact" onClick={(e) => smoothScroll(e, "contact")}>Contact</a>
        </li>
       
      </ul>
      <div className="block md:hidden mx-5" onClick={handleNav}>
        {nav ? <AiOutlineClose  size={20} /> : <AiOutlineMenu />}
      </div>
      <div
        className={
          nav
            ? " z-10 fixed h-full left-0 top-0 w-[60%] bg-gray-800 ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="text-3xl font-bold  bg-gradient-to-r from-slate-200 to-orange-600 bg-clip-text text-transparent m-4">Pawan Kavinda</h1>
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
              <a href="https://github.com/pawan-kavinda">
                <FaGithub className="bg-green-300"></FaGithub>
              </a>
            </li>
            <li className="p-5">
              <a href="https://www.instagram.com/pawan_kd_9/?hl=en">
                <FaInstagram className="bg-red-800"></FaInstagram>
              </a>
            </li>
            <li className="p-5">
              <a href="https://www.linkedin.com/in/pawan-kavinda-6a3a37228/">
                <FaLinkedin className="bg-blue-400"></FaLinkedin>
              </a>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
