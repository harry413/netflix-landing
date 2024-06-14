import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";

const Banner = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center pb-20 md:py-20 w-full h-dvh px-10'>
        <div className='flex flex-col items-center justify-center pt-20  gap-4'>
          <h1 className='text-white text-xl md:text-3xl lg:text-5xl font-black py-2'>Unlimited movies, TV shows and more</h1>
          <h5 className='text-gray-200 text-xl'>Watch anywhere. Cancel anytime.</h5>
          <p className='text-gray-200 text-xl'>Ready to watch? Enter your email to create or restart your membership.</p>
        </div>
        <div className='flex flex-col md:flex md:flex-row items-center justify-center mt-4 gap-2 p--22 '>
            <input placeholder='email address' type='email'  className='py-2 pl-4 md:pr-20 border-2 border-lime-700 bg-inherit rounded backdrop-blur-sm backdrop-opacity-10 ' />
            <button
              className="flex rounded bg-[#E50914] py-2 px-6 md:px-6 md:py-2 text-center text-sm font-sans md:text-xl font-semibold  text-white  hover:shadow-lg hover:bg-red-600 "
              type="button">
              <span>Get Started</span><span className='text-2xl md:text-3xl items-center font-light'><MdKeyboardArrowRight/></span>
            </button>
        </div>
      </div>
    </>
  )
}

export default Banner