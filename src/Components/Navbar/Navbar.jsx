import React from 'react'
// import { IoReorderThreeOutline } from "react-icons/io5";
import { GiUbisoftSun } from "react-icons/gi";
import { FaMoon } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = (props) => {

  // const [isOpen, setIsOpen] = useState(false);

  // const handleToggle = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <div className=' relative text-gray-500 flex justify-between items-center  bg-black bg-opacity-20 backdrop-blur-lg p-2 border-b-2 rounded-b-md border-blue-950 w-[100%]'>
      <Link to="/"><div className='mx-5 mt-2 text-[30px] text-blue-500 font-bold'>D<span className='text-white text-[20px]'>Developers</span></div></Link>
      <div className=' mt-2'>

        <div className='text-blue-800 absolute  z-10 
            lg:right-[330px] 
            lg:top-5  
            md:right-[90px] 
            md:top-5 
            sm:right-[90px] 
            sm:top-5 
            right-[60px]
            top-[20px] 
            border-2 border-blue-950 rounded-md p-[5px]' onClick={props.handleDarkMode}>
          {props.darkMode === true ? <GiUbisoftSun /> : <FaMoon />}
        </div>


        {/* <div className='absolute lg:opacity-0 opacity-100 
            md:right-[10px] 
            md:top-[3px]  
            sm:right-[20px]
            sm:top-[2px]
            right-[2px]
            top-[5px]
            z-100 text-[50px]'>

          <button onClick={handleToggle} className='cursor-pointer'><IoReorderThreeOutline /></button>
          {
            isOpen && (
              <div>
                <ul class={`absolute right-[10px] flex flex-col gap-2 border-2 border-gray-800 rounded-lg p-2 px-10 bg-black text-gray-500  text-2xl`}>
                  <Link to={'/'}><p className='hover:text-gray-300'>Home</p></Link>
                  <Link to={'/project'}><p className='hover:text-gray-300'>Services</p></Link>
                  <Link to={'/about'}><p className='hover:text-gray-300'>About Us</p></Link>
                  <Link to={'/contact'}><p className='hover:text-gray-300'>Contact</p></Link>
                </ul>

              </div>
            )
          }

        </div> */}

        <ul className='flex gap-5 lg:opacity-100 opacity-0 mx-6 '>
          <Link to={'/'}><p className='hover:text-gray-300'>Home</p></Link>
          {/* <Link to={'/project'}><p className='hover:text-gray-300'>Services</p></Link> */}
          <Link to={'/about'}><p className='hover:text-gray-300'>About Us</p></Link>
          <Link to={'/contact'}><p className='hover:text-gray-300'>Contact</p></Link>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
