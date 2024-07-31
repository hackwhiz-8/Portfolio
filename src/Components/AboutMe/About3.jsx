import React from 'react'
import OpenSource from './OpenSource'
import Experience from './Experience'
import Carousel1 from './Carousel'
import myStuff from "../../assets/MyStuff";




const About3 = () => {
    return (


        <div className='text-gray-500  
                '>
            <OpenSource />
            <Experience />
            <h1 className='bg-transparent bg-opacity-50 backdrop-blur-lg p-2 px-4 border-2 rounded-2xl border-gray-800 text-2xl font-bold mb-5 mt-5 '>My gallery</h1>
            <Carousel1 value={myStuff} />


        </div>

    )
}

export default About3

