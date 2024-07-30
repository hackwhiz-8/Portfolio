import React from 'react'
import About from './About'
import About2 from './About2'
import About3 from './About3'

const AboutMain = (props) => {
    return (
        <div className='mb-10'>
            <h1 className='text-gray-800  lg:text-[100px] border-b  text-center mb-10 border-gray-800'>About Me </h1>
            <div className='grid lg:grid-cols-3 gap-5 w-[90%]  mx-5 
            lg:mx-auto 
            md:mx-auto 
            lg:w-[95%]
            md:w-[95%]'>

                
                    <About />
                    <About2 darkMode={props.darkMode} />
                    <About3 />
                

            </div>
        </div>
    )
}

export default AboutMain
