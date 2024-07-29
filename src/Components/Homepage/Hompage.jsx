import React from 'react'
import FrontPage from './FrontPage'

import AboutMain from '../AboutMe/AboutMain'
import ProjectMain from '../Projects/ProjectMain'
import ContactMain from '../Contact/ContactMain'
import Footer from '../Footer/Footer'

const Hompage = (props) => {
  const dark = props.darkMode
  return (
    <div>
      
      <FrontPage/>
      <ProjectMain/>
      <AboutMain darkMode={dark}/>
      <ContactMain/>
      <Footer/>
     
    </div>
  )
}

export default Hompage
