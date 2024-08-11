import React from 'react'
import { GiIndianPalace } from "react-icons/gi";
import "animate.css/animate.compat.css"


// import image from '../../assets/dynamic-virtual-office-setup-with-laptop-and-web-applications-2.png'


const FrontPage = (props) => {
  const darkMode = props.darkMode;
  return (
  
      <div className='relative h-[750px] flex flex-col justify-center mb-10 items-center  '>
        <div className='group text-white font-exco-sans flex flex-col justify-center items-center text-[40px] lg:text-[60px] h-[90%] duration-500 transition-all ease-in-out  hover:text-black'>


          <h1 className=' p-2  transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_0_10px_rgba(0,_98,290,_0.4),5px_5px_rgba(0,_98,290,_0.4),_10px_10px_rgba(0,_98,290,_0.3),_15px_15px_rgba(0,_98,290,_0.2),_20px_20px_rgba(0,_98,290,_0.1)] mb-5'>
            <span className={`hover:text-gray-500 text-white  bg-${darkMode === true ? "blue-100" : "black"}`} >D</span>
            <span className={`hover:text-gray-500 text-white  bg-${darkMode === true ? "blue-100" : "black"}`}>I</span>
            <span className={`hover:text-gray-500 text-white  bg-${darkMode === true ? "blue-100" : "black"}`}>V </span>
            <span className={`hover:text-gray-500 text-white  bg-${darkMode === true ? "blue-100" : "black"}`}>D</span>
            <span className={`hover:text-gray-500 text-white bg-${darkMode === true ? "blue-100" : "black"}`}>E</span>
            <span className={`hover:text-gray-500 text-white  bg-${darkMode === true ? "blue-100" : "black"}`}>V</span>
            <span className={`hover:text-gray-500 text-white  bg-${darkMode === true ? "blue-100" : "black"}`}>E</span>
            <span className={`hover:text-gray-500 text-white bg-${darkMode === true ? "blue-100" : "black"}`}>L</span>
            <span className={`hover:text-gray-500 text-white  bg-${darkMode === true ? "blue-100" : "black"}`}>O</span>
            <span className={`hover:text-gray-500 text-white  bg-${darkMode === true ? "blue-100" : "black"}`}>P</span>
            <span className={`hover:text-gray-500 text-white  bg-${darkMode === true ? "blue-100" : "black"}`}>E</span>
            <span className={`hover:text-gray-500 text-white  bg-${darkMode === true ? "blue-100" : "black"}`}>R</span>
            <span className={`hover:text-gray-500 text-white  bg-${darkMode === true ? "blue-100" : "black"}`}>S</span>
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
