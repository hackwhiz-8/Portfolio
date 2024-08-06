import React from 'react'
import {Link} from 'react-router-dom'

import { FaArrowRight } from "react-icons/fa";
const ServiceCard = (props) => {
    return (
        <div className='flex flex-col gap-1 text-black'>
           
            <div className={`${props.color} flex-col bg-opacity-90 h-[500px] flex justify-center items-center backdrop-blur-lg p-5 border-2 rounded-2xl border-gray-500 '`}>
                <img src={props.image} alt="" width={'250px'} />
                 <h1 className='text-[25px] mb-2 font-bold '>{props.head}</h1>
                <p className='text-[18px] text-center mb-10'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate facere, labore perferendis cum sunt voluptates quam corporis provident unde quia!</p>
                <Link to='/contact'><button className='bg-black flex  items-center gap-2 text-white mb-10 text-[20px] px-20 p-[10px] rounded-md hover:scale-95 transition-all ease-in-out duration-200'>Enquire Now <FaArrowRight  className='mt-[2px]'/></button></Link>
            </div>
        </div>
    )
}

export default ServiceCard
