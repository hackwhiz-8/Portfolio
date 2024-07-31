import { useState } from 'react';
import './App.css';
import Hompage from './Components/Homepage/Hompage';
import Navbar from './Components/Navbar/Navbar';

function App() {
  const [darkMode, setdarkMode] = useState(false);
  const handleDarkMode = () => {
    setdarkMode(!darkMode)
  }
  return (

    <div className={`${darkMode === true ? 'bg-white' : 'bg-black'}  lg:mx-auto   w-[480px]
            md:mx-auto 
            sm:mx-auto 
            lg:w-[100%]
            sm:w-[100%]
            md:w-[100%]  `}>

      <Navbar handleDarkMode={handleDarkMode} darkMode={darkMode} />
      <Hompage darkMode={darkMode} />


    </div>
  );
}

export default App;
