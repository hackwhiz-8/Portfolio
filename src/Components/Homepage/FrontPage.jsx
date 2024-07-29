import React from 'react'
import { GiIndianPalace } from "react-icons/gi";
import "animate.css/animate.compat.css"

// import image from '../../assets/dynamic-virtual-office-setup-with-laptop-and-web-applications-2.png'


const FrontPage = () => {
  return (

    <div className='relative h-[700px] flex flex-col justify-center nb-10 items-center'>
      <div className='text-white font-exco-sans flex flex-col justify-center items-center text-[40px] lg:text-[110px] h-[90%] transition-all ease-in-out  hover:text-black'>


        <h1 className='bg-blue-800'>
          <span className='hover:text-gray-500 text-gray-800 bg-black '>D</span>
          <span className='hover:text-gray-500 text-gray-800 bg-black '>I</span>
          <span className='hover:text-gray-500 text-gray-800 bg-black '>V </span>
          <span className='hover:text-gray-500 text-gray-800 bg-black '>D</span>
          <span className='hover:text-gray-500 text-gray-800 bg-black '>E</span>
          <span className='hover:text-gray-500 text-gray-800 bg-black '>V</span>
          <span className='hover:text-gray-500 text-gray-800 bg-black '>E</span>
          <span className='hover:text-gray-500 text-gray-800 bg-black '>L</span>
          <span className='hover:text-gray-500 text-gray-800 bg-black '>O</span>
          <span className='hover:text-gray-500 text-gray-800 bg-black '>P</span>
          <span className='hover:text-gray-500 text-gray-800 bg-black '>E</span>
          <span className='hover:text-gray-500 text-gray-800 bg-black '>R</span>
          <span className='hover:text-gray-500 text-gray-800 bg-black '>S</span>
        </h1>


        <h1 className='text-[18px] text-gray-700 mt-5 hover:text-gray-500'>Hi THERE I AM MOHIT SAIN</h1>
        <p className='text-[18px] text-gray-700 hover:text-gray-500 '>WEB DEVELOPER</p>


      </div>

      <div className='text-gray-700 flex justify-center items-center w-full mx-auto   '>

        <div className='flex items-center px-5 ml-10 gap-2 hover:text-gray-500'>
          <h1 className='text-[18px] font-exco-sans hover:text-gray-500'>INDIA</h1>  <GiIndianPalace className='text-[18px]' />
        </div>

        <div className='border-b-2 w-[80%] ml-10 border-gray-800 '></div>

        <div className='flex items-center px-5 ml-5 '>
          <h1 className='text-[18px] font-exco-sans hover:text-gray-500'>FREELANCE AVAILABILITY</h1>
        </div>

      </div>

    </div>

  )
}

export default FrontPage
