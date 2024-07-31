import React, { useState } from 'react'
import { IoReorderThreeOutline } from "react-icons/io5";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='text-gray-500 flex justify-between items-center  bg-transparent bg-opacity-50 backdrop-blur-lg p-2 border-b-2 rounded-md border-gray-800 w-[100%]'>
      <div className='mx-5 mt-2 text-[25px] text-blue-800 font-bold'>D<span className='text-gray-500'>Developers</span></div>
      <div className='relative mt-2'>


        <div className='absolute lg:opacity-0 opacity-100 md:right-[10px] md:top-[-16px]  right-[30px] top-[-5px]  z-10    text-[40px]'>

          <button onClick={handleToggle} className='cursor-pointer'><IoReorderThreeOutline /></button>
          {
            isOpen && (
              <div>
                <ul class={`absolute right-[10px] flex flex-col gap-2 border-2 border-gray-800 rounded-lg p-2 px-10 bg-black text-gray-500  text-2xl`}>
                  <li><a href="/">Home</a></li>
                  <li><a href="/">Projects</a></li>
                  <li><a href="/">About me</a></li>
                  <li><a href="/">Contact</a></li>
                </ul>

              </div>
            )
          }

        </div>
    
        <ul className='flex gap-2 lg:opacity-100 opacity-0 mx-6 '>

          <li className='hover:text-gray-300'><a href="/">Home</a></li>
          <li className='hover:text-gray-300'><a href="/">Projects</a></li>
          <li className='hover:text-gray-300'><a href="/">About me</a></li>
          <li className='hover:text-gray-300'><a href="/">Contact</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
