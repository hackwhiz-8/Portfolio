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

    <div className={`${darkMode === true ? 'bg-white' : 'bg-black'} `}>
      <div className='text-gray-800 absolute  z-10 right-[330px] top-5 border-2 border-gray-800 rounded-md p-[5px]' onClick={handleDarkMode}> {darkMode === true ? <GiUbisoftSun /> : <FaMoon />} </div>
      <Navbar />
      <Hompage  darkMode={darkMode} />


    </div>
  );
}

export default App;
