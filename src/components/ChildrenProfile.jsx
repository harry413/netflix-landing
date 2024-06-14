import React from 'react'

const ChildrenProfile = () => {
  return (
    <div className='flex flex-col md:flex md:flex-row justify-center'>
    <div className='flex items-center justify-center'>
      <img src='https://occ-0-3194-3647.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d' alt='enjoy tv' className=' '/>
    </div>
    <div className='flex flex-col  justify-center md:w-1/2 h-dvh gap-2 py-10  mx-10'>
      <h1 className='text-white text-3xl md:text-5xl font-black p-2'>Create profiles for kids</h1>
      <h6 className='text-gray-300 text-xl md:text-2xl  p-4'>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</h6>
    </div>
  </div>
  )
}

export default ChildrenProfile