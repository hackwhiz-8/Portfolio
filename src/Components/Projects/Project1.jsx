import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";


const Project1 = (props) => {
  return (
    <div className='flex flex-col gap-2'>


      <div className={`bg-gray-900 bg-opacity-50  flex flex-col gap-5 justify-center items-center  backdrop-blur-lg p-5 border-2 rounded-2xl border-blue-950 shadow-2xl shadow-blue-500/20  `}>
        <div className='h-[250px] rounded-2xl overflow-hidden '>
          <img src={props.image} alt="" className='rounded-2xl ' />
        </div>
        <h1 className={`text-[25px] text-white font-bold  `}>{props.text}</h1>
        <Link to={props.link}><button className='bg-black flex  items-center gap-2 text-blue-300 mb-5  border-blue-950 border-2 text-[20px] px-20 p-[10px] rounded-md hover:scale-95 transition-all ease-in-out duration-200'>Visit <FaArrowRight className='mt-[2px]' /></button></Link>
      </div>
    </div>
  )
}

export default Project1
