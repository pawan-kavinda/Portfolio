import React from 'react'
import {motion} from 'framer-motion'
const Education = () => {
  return (
    <div className="text-white bg-black mx-auto max-w-full " id="about">
        <div className="p-2 text-center">
        <motion.p initial={{x:-100,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:0.5,delay:0.5}} className="text-4xl  p-6 md:px-64 mb-3 md:text-6xl font-bold text-white">Education</motion.p>
        <motion.div initial={{x:100,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:0.5,delay:1}} className='mb-[20px] bg-gray-800 p-4 rounded-3xl max-w-[600px] mx-auto transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-green-700'>
            <p className='text-lg md:text-3xl'>Higher Studies</p>
            <p className='text-gray-500'>Faculty of Engineering University of Ruhuna(2020-Present)</p>
            <p className='text-gray-300'>Computer engineering</p>
        </motion.div>
        <div className='h-[50px] w-[2px] bg-slate-400 my-1 mx-auto '></div>
        <motion.div initial={{x:-100,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:0.5,delay:1.5}}  className='mb-[20px] bg-gray-800 p-4 rounded-3xl max-w-[600px] mx-auto transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-yellow-700'>
            <p className='text-xl md:text-3xl'>G.C.E Advanced Level</p>
            <p className='text-gray-500'>Central College Anuradhapura(2019)</p>
            <p className='text-gray-300'>Science Stream</p>
            <p className='text-gray-300'>District Rank -16</p>
            <p className='text-gray-300'>Chemistry-A Combined Maths - B Physics - B</p>
        </motion.div>
        <div className='h-[50px] w-[2px] bg-slate-400 my-1 mx-auto'></div>
        <motion.div initial={{x:100,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:0.5,delay:2}}  className='mb-[20px] bg-gray-800 p-4 rounded-3xl max-w-[600px] mx-auto transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-green-700'>
            <p className='text-xl md:text-3xl'>G.C.E Ordinary Level</p>
            <p className='text-gray-600'>Central College Anuradhapura(2015)</p>
            <p className='text-gray-300'>9A's and 1B</p>
        </motion.div>
       
      </div>
    </div>
  )
}

export default Education