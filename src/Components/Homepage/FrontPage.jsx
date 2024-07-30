import React from 'react'
import { GiIndianPalace } from "react-icons/gi";
import "animate.css/animate.compat.css"

// import image from '../../assets/dynamic-virtual-office-setup-with-laptop-and-web-applications-2.png'


const FrontPage = (props) => {
    const darkMode = props.darkMode;
  return (

    <div className='relative h-[700px] flex flex-col justify-center mb-10 items-center w-[100%]'>
      <div className='text-white font-exco-sans flex flex-col justify-center items-center text-[40px] lg:text-[110px] h-[90%] duration-500 transition-all ease-in-out  hover:text-black'>


        <h1 className='bg-blue-800'>
          <span className={`hover:text-gray-500 text-gray-800 bg-${darkMode===true?"white":"black"}`} >D</span>
          <span className={`hover:text-gray-500 text-gray-800 bg-${darkMode===true?"white":"black"}`}>I</span>
          <span className={`hover:text-gray-500 text-gray-800 bg-${darkMode===true?"white":"black"}`}>V </span>
          <span className={`hover:text-gray-500 text-gray-800 bg-${darkMode===true?"white":"black"}`}>D</span>
          <span className={`hover:text-gray-500 text-gray-800 bg-${darkMode===true?"white":"black"}`}>E</span>
          <span className={`hover:text-gray-500 text-gray-800 bg-${darkMode===true?"white":"black"}`}>V</span>
          <span className={`hover:text-gray-500 text-gray-800 bg-${darkMode===true?"white":"black"}`}>E</span>
          <span className={`hover:text-gray-500 text-gray-800 bg-${darkMode===true?"white":"black"}`}>L</span>
          <span className={`hover:text-gray-500 text-gray-800 bg-${darkMode===true?"white":"black"}`}>O</span>
          <span className={`hover:text-gray-500 text-gray-800 bg-${darkMode===true?"white":"black"}`}>P</span>
          <span className={`hover:text-gray-500 text-gray-800 bg-${darkMode===true?"white":"black"}`}>E</span>
          <span className={`hover:text-gray-500 text-gray-800 bg-${darkMode===true?"white":"black"}`}>R</span>
          <span className={`hover:text-gray-500 text-gray-800 bg-${darkMode===true?"white":"black"}`}>S</span>
        </h1>


        <h1 className='text-[18px] text-gray-700 mt-5 hover:text-gray-500'>Hi THERE I AM MOHIT SAIN</h1>
        <p className='text-[18px] text-gray-700 hover:text-gray-500 '>WEB DEVELOPER</p>


      </div>

      <div className='group text-gray-700 flex justify-evenly items-center w-full mx-auto transition-all ease-in-out duration-300   '>

        <div className='flex items-center px-5 ml-2 gap-2 hover:text-gray-500'>
          <h1 className='lg:text-[18px] text-[15px] font-exco-sans group-hover:text-gray-500'>INDIA</h1>  <GiIndianPalace className='text-[18px]' />
        </div>

        <div className='border-b-2 w-[100%]  border-gray-800 group-hover:border-gray-500'></div>

        <div className='flex items-center  ml-8 '>
          <h1 className='lg:text-[18px] text-[15px] font-exco-sans group-hover:text-gray-500'>FREELANCE AVAILABILITY</h1>
        </div>

      </div>

    </div>

  )
}

export default FrontPage
