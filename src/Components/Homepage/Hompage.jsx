import React from 'react'
import FrontPage from './FrontPage'

import AboutMain from '../AboutMe/AboutMain'
import ProjectMain from '../Projects/ProjectMain'
import ContactMain from '../Contact/ContactMain'

import ServiceMain from '../Services/ServiceMain'


const Hompage = (props) => {
  const dark = props.darkMode
  return (
    <div>
      {/* <Navbar handleDarkMode={props.handleDarkMode} darkMode={dark} /> */}
      <FrontPage darkMode={dark} handleDarkMode={props.handleDarkMode}/>
      <ServiceMain/>
      <ProjectMain/>
      <AboutMain darkMode={dark}/>
      <ContactMain/>
      
     
    </div>
  )
}

export default Hompage
