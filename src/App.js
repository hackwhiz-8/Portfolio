import { useState } from 'react';
import './App.css';
import Hompage from './Components/Homepage/Hompage';
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import AnimatedCursor from "react-animated-cursor"
import ContactLink from './Components/Contact/ContactLink';
import AboutMain from './Components/AboutMe/AboutMain';


function App() {
  const [darkMode, setdarkMode] = useState(false);
  const handleDarkMode = () => {
    setdarkMode(!darkMode)
  }
  return (

    <div className={`${darkMode === true ? 'bg-gradient-to-r from-stone-200 to-sky-200' : 'bg-black'}  font-serif lg:mx-auto   w-[480px]
            md:mx-auto 
            sm:mx-auto 
            lg:w-[100%]
            sm:w-[100%]
            md:w-[100%]  `}>
      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color='10, 10, 111'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link'
        ]}
      />
      <Navbar handleDarkMode={handleDarkMode} darkMode={darkMode} />


      <Routes>
        <Route path='/' element={<Hompage darkMode={darkMode} handleDarkMode={handleDarkMode} />} />
        <Route path='/contact' element={<ContactLink />} />
        <Route path='/about' element={<AboutMain />} />

      </Routes>


    </div>
  );
}

export default App;
