import React from 'react'

const Watch = () => {
  return (
    <div className='flex flex-col md:flex md:flex-row justify-center'>
      <div className='flex flex-col  justify-center md:w-1/2 h-dvh gap-2 py-10  mx-10'>
        <h1 className='text-white text-3xl md:text-5xl font-black p-2'>Watch everywhere </h1>
        <h6 className='text-gray-300 text-xl md:text-2xl  p-4'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h6>
      </div>
      <div className='flex items-center justify-center'>
        <img src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png' alt='enjoy tv' className=''/>
      </div>
    </div>
  )
}

export default Watch