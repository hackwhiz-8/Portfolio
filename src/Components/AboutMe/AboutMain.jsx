import React from 'react'
import About from './About'
import About2 from './About2'
import About3 from './About3'

const AboutMain = (props) => {
    return (
       
            <div className='mb-44  '>
                <h1 className='text-gray-700  lg:text-[60px] text-[50px] border-b  text-center mb-20 border-blue-950'>About Me </h1>
                <div className='grid lg:grid-cols-3 gap-5 w-[480px] px-5 
            lg:mx-auto 
            md:mx-auto 
            sm:mx-auto 
            lg:w-[100%]
            sm:w-[100%]
            md:w-[100%]'>


                    <About />
                    <About2 darkMode={props.darkMode} />
                    <About3 />


                </div>
            </div>
        
    )
}

export default AboutMain
