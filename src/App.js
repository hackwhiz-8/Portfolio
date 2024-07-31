import { useState } from 'react';
import './App.css';
import { GiUbisoftSun } from "react-icons/gi";
import { FaMoon } from "react-icons/fa";
import Hompage from './Components/Homepage/Hompage';
import Navbar from './Components/Navbar/Navbar';

function App() {
  const [darkMode, setdarkMode] = useState(false);
  const handleDarkMode = () => {
    setdarkMode(!darkMode)
  }
  return (

    <div className={`${darkMode === true ? 'bg-white' : 'bg-black'}  lg:mx-auto  w-[500px]
            md:mx-auto 
            sm:mx-auto 
            lg:w-[100%]
            sm:w-[100%]
            md:w-[100%]  `}>
      <div className='text-gray-800 absolute  z-10 lg:right-[330px] lg:top-5  md:right-[90px] md:top-4 sm:right-[90px] sm:top-4 right-[1px] top-6 border-2 border-gray-800 rounded-md p-[5px]' onClick={handleDarkMode}> {darkMode === true ? <GiUbisoftSun /> : <FaMoon />} </div>
      <Navbar />
      <Hompage  darkMode={darkMode} />


    </div>
  );
}

export default App;
