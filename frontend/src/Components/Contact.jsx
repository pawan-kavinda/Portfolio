import React from 'react'
import {motion} from 'framer-motion'
const Contact = () => {
  return (
    <div className='max-w-full md:h-screen mx-auto bg-black s:py-20 p-5' id='contact'>
        <div className='text-center'>
        <motion.h2 initial={{x:-100,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:0.5,delay:2}} className="text-4xl  p-6 md:px-64 mb-3 md:text-6xl font-bold text-white">Contact<span className='text-red-500'> Me</span></motion.h2>
        </div>
        <div className='max-w-[800px] mx-auto'>
            <div className='mt-6 bg-[#161616] rounded-xl'>
                <div className='p-10'>
                    <form action='https://getform.io/f/qbloxvja' method='post'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4'>
                            <div className='mt-2.5 relative'>
                                <input type='text' name='name' id='' placeholder='Your Name' className='bg-[#161616] w-full px-4 py-4 text-gray-400
                                 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-green-900'>

                                </input>
                            </div>
                            <div className='mt-2.5 relative'>
                                <input type='Email' name='email' id='' placeholder='Email' className='bg-[#161616] w-full px-4 py-4 text-gray-400
                                 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-green-900'>
                                </input>
                            </div>
                            <div className='sm:col-span-2'>
                                <div className='mt-2.5 relative'>
                                    <textarea name='message' id='' placeholder='Your Message' className='bg-[#161616] w-full px-4 py-4 text-gray-400
                                 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-green-900' rows={5}></textarea>
                                </div>
                            </div>
                            <div className='sm:col-span-2'>
                                <button type='submit' className='text-xl w-full p-4 mt-2 font-semibold text-white bg-gradient-to-br from-red-950  to bg-yellow-600  rounded-md'>
                                    Send
                                </button>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact