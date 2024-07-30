import React, { useState } from 'react'
import { FaHeart } from "react-icons/fa";


const Footer = () => {
    const [BG, setBG] = useState(false)
    const [likes, setlikes] = useState(0);
    const handleclick = () => {
        if (!BG) {
            setlikes(likes + 1);
        }
        setBG(!BG);

    }
    return (
       <div className='bg-black'>
         <div className='flex flex-col justify-center items-center border-t border-gray-800 pt-10 text-gray-500'>
            <div className='text-gray-500'>
                <p className='p-2 text-[18px] border-red-500 border-b'>I Hope You Liked this,If You Like This Hit the like button  </p>
                
                <div className='flex gap-2 mt-2 items-center justify-center'>
                    <p>{likes}</p>
                    <button className={` text-2xl text-${BG === true ? 'red' : 'white'}-500`} onClick={handleclick}><FaHeart /></button>
                </div>
            </div>
            <p className='text-[50px] mt-10'>Thank You </p>
            

        </div>
        <div className='flex items-center gap-2 text-[18px] text-gray-500 text-center'>Made with <FaHeart className='text-red-500'/> in India </div>
       </div>
    )
}

export default Footer
