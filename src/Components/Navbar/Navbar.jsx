import React from 'react'
import DropDown from './DropDown'

const Navbar = () => {
  return (
    <div className='text-gray-500 flex justify-between items-center  bg-transparent bg-opacity-50 backdrop-blur-lg p-2 border-b-2 rounded-md border-gray-800 w-[100%]'>
      <div className='mx-5 mt-2 text-[25px] text-blue-800 font-bold'>D<span className='text-gray-500'>Developers</span></div>
      <div className=' mt-2'>


        <DropDown/>
        <ul className='flex gap-2 lg:opacity-100 opacity-0 '>

          <li className='hover:text-gray-300'>Home</li>
          <li className='hover:text-gray-300'>Work</li>
          <li className='hover:text-gray-300'>About Me</li>
          <li className='hover:text-gray-300'>Contact Me</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
