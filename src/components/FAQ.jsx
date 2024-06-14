import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";

const FAQ = () => {
  return (
    <div className='flex flex-col items-center justify-center m-10 p-5'>
      <div className='flex flex-col items-center justify-center gap-4'>
        <h1 className='text-4xl lg:text-5xl text-white font-black'>Frequently Asked Questions</h1>
        <div className='flex flex-col mx-10'>
          
        </div>
      </div>
      <div className='flex flex-col items-center justify-center mt-4 gap-2 w-full '>
                            <input placeholder='Email address' type='email'  className='py-2 pl-4 pr-20 md:pr-28 border-2 lg:w-1/2 border-slate-700 bg-inherit rounded backdrop-blur-sm backdrop-opacity-50 backdrop-invert bg-black/60 ' />
                            <button
                            className="flex rounded bg-[#E50914] py-2 px-6 md:px-6 md:py-2 text-center text-sm font-sans md:text-xl font-semibold  text-white  hover:shadow-lg hover:bg-red-600 "
                            type="button">
                            <span>Get Started</span><span className='text-2xl md:text-3xl items-center font-light'><MdKeyboardArrowRight/></span>
                            </button>
     </div>
    </div>
  )
}

export default FAQ