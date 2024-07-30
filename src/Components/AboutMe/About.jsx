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


        <div className='text-gray-500  mx-7
                w-[350px]
                lg:mx-auto 
                md:mx-auto 
                sm:mx-auto 
                lg:w-[95%]
                sm:w-[95%]
                md:w-[95%]'>
            <div className=' hover:text-gray-400 mb-10  bg-transparent bg-opacity-50 backdrop-blur-lg p-5 border-2 rounded-2xl border-gray-800 text-2xl 
               '>
                <p>Web Developer with 3 years of experience,
                    focused on creating functional and user-centered digital products with visually stunning designs.</p>
                {/* <SocialHandle /> */}
            </div>
            <div className='hover:text-gray-400  mb-10 bg-transparent bg-opacity-50 backdrop-blur-lg p-5 px-5 border-2 rounded-2xl border-gray-800 text-[18px] '>
                <p>Growing up with a passion for both technology and the arts, I found my calling as a web developer,
                    where I blend creativity with technical skill. My journey is fueled by a love for dancing, traveling,
                    and connecting with people from all walks of life. Each new interaction and experience sharpens my keen
                    observational skills, which I channel into crafting engaging and intuitive digital experiences. Whether
                    I'm on the dance floor, exploring a new city, or diving into a coding project,
                    I strive to infuse every aspect of my work with the same enthusiasm and curiosity that drive me personally.</p>
            </div>
            <Images value={images} head={"Tech Stack"} />

        </div>

    )
}

export default About

