import { useState } from 'react';
import './App.css';
import Hompage from './Components/Homepage/Hompage';
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import ContactLink from './Components/Contact/ContactLink';

function App() {
  const [darkMode, setdarkMode] = useState(false);
  const handleDarkMode = () => {
    setdarkMode(!darkMode)
  }
  return (

    <div className={`${darkMode === true ? 'bg-gradient-to-r from-stone-200 to-sky-200' : 'bg-black'}  lg:mx-auto   w-[480px]
            md:mx-auto 
            sm:mx-auto 
            lg:w-[100%]
            sm:w-[100%]
            md:w-[100%]  `}>

      <Navbar handleDarkMode={handleDarkMode} darkMode={darkMode} />
      
      <Routes>
        <Route path='/' element={<Hompage darkMode={darkMode} handleDarkMode={handleDarkMode}/>}/>
        <Route path='/contact' element={<ContactLink/>}/>
        
      </Routes>
      <Footer/>

    </div>
  );
}

export default App;
