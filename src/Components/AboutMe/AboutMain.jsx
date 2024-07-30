import React from 'react'
import About from './About'
import About2 from './About2'
import About3 from './About3'

const AboutMain = (props) => {
    return (
        <div className='mb-10'>
            <h1 className='text-gray-800  lg:text-[120px] text-[50px] border-b  text-center mb-10 border-gray-800'>About Me </h1>
            <div className='grid lg:grid-cols-3 gap-5 w-[100%]  
            lg:mx-auto 
            md:mx-auto 
            sm:mx-auto 
            lg:w-[95%]
            sm:w-[95%]
            md:w-[95%]'>

                
                    <About />
                    <About2 darkMode={props.darkMode} />
                    <About3 />
                

            </div>
        </div>
    )
}

export default AboutMain
