import React from 'react'
import { Link } from 'react-router-dom'

import { FaArrowRight } from "react-icons/fa";
const ServiceCard = (props) => {
    return (
        <div className='flex flex-col gap-1 text-black'>

            <div className={`${props.color} bg-opacity-90   gap-10 flex flex-col lg:flex-row justify-between lg:px-20 items-center backdrop-blur-lg p-5 py-10 border-2 rounded-2xl border-gray-500 '`}>
                <div className='mx-auto lg:w-[30%]'> <img src={props.image} alt="" width={'300px'} /></div>
                <div className='flex flex-col mx-10  justify-center lg:w-[70%]  '>
                    <h1 className='text-[30px] mb-5 font-bold '>{props.head}</h1>
                    <p className='mb-5 text-gray-800  '> {props.text}</p>
                    <Link to='/contact'><button className='bg-black flex  items-center gap-2 text-white mb-10 text-[15px] 
                    px-20 p-[13px] lg:mt-10 rounded-md hover:scale-95 transition-all ease-in-out duration-200'>Enquire Now <FaArrowRight className='mt-[2px]' /></button></Link>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard
