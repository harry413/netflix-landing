import React from 'react'
import Enjoy from '../components/Enjoy'
import Watch from '../components/Watch'
import ChildrenProfile from '../components/ChildrenProfile'
import Download from "../components/Download"
import Footer from '../components/Footer'
import FAQ from '../components/FAQ'
import Header from "../components/Header"

const Home = () => {
  return (
    <>  
        <Header/>
        <div className='bg-gray-500 w-full h-2 bg-gradient-to-r from-gray-200 to-gray-500'></div>
        <Enjoy/>
        <div className='bg-gray-500 w-full h-2 bg-gradient-to-r from-gray-200 to-gray-500'></div>
        <Download/>
        <div className='bg-gray-500 w-full h-2 bg-gradient-to-r from-gray-200 to-gray-500'></div>
        <Watch/>
        <div className='bg-gray-500 w-full h-2 bg-gradient-to-r from-gray-200 to-gray-500'></div>
        <ChildrenProfile/>
        <div className='bg-gray-500 w-full h-2 bg-gradient-to-r from-gray-200 to-gray-500'></div>
        <FAQ/>
        <div className='bg-gray-500 w-full h-2 bg-gradient-to-r from-gray-200 to-gray-500'></div>
        <Footer/>
    </>
  )
}

export default Home