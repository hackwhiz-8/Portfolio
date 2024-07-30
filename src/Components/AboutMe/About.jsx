import React from 'react'
import images from '../../assets/Data'
import Images from './Images'
// import react from './techstack/react.gif'
// import nodejs from './techstack/nodejs.png'
// import express from './techstack/express.png'
// import mongodb from './techstack/mongodb.png'
// import js from './techstack/javascript.gif'
// import html from './techstack/html.gif'
// import css from './techstack/css3.png'
// import wind from './techstack/wind.png'
// import git from './techstack/git.png'
// // import postman from './techstack/postman.png'
// import chatgpt from './techstack/chat-gpt.png'
// import spotify from './techstack/spotify.gif'
// import SocialHandle from '../utils/socialHandle'



const About = () => {
    return (
      
           
            <div className='text-gray-500  '>
                <div className=' hover:text-gray-400 mb-10  bg-transparent bg-opacity-50 backdrop-blur-lg p-5 border-2 rounded-2xl border-gray-800 text-2xl'>
                    <p>Web Developer with 3 years of experience,
                        focused on creating functional and user-centered digital products with visually stunning designs.</p>
                    {/* <SocialHandle /> */}
                </div>
                <div className='hover:text-gray-400  mb-10 bg-transparent bg-opacity-50 backdrop-blur-lg p-5 px-5 border-2 rounded-2xl border-gray-800 text-[18px] '>
                    <p>Growing up in Rajasthan,India, my home was a fusion of creativity and analytical thinking, influenced by my father's career as a photographer and my mother's profession as a lawyer. This unique blend has deeply shaped my perspective.
                        My fascination with technology began at age four, sparked by our trusty beige computer. Although I pursued a degree in Computer Science, my true passion lies in the transformative power of great
                        design craft, mainly inspired by the design craftsmanship behind Apple products.
                        My curiosity led me to wonder: could I also create something that can evoke this effect on people?
                        Today, I apply my multidisciplinary design skills, aiming to create solutions
                        that make people feel and remember, elevating everyday experiences into inspiring solutions.</p>
                </div>
                <Images value={images} head={"Tech Stack"}/>

            </div>
        
    )
}

export default About

