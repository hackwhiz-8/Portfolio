import React from 'react'
import images from '../../assets/Data'
import Images from './Images'
import { RxDownload } from "react-icons/rx";
import resume from '../../assets/resume.pdf'


const About = () => {
    return (


        <div className='text-gray-500  
               '>
            <div className=' hover:text-gray-400 mb-10  bg-transparent bg-opacity-50 backdrop-blur-lg p-5 border-2 rounded-2xl border-gray-800 text-2xl 
               '>
                <p>Web Developer with 3 years of experience,
                    focused on creating functional and user-centered digital products with visually stunning designs.</p>
                <a href={resume} download={resume}><button className='border-2 text-right flex items-center gap-2 border-gray-800 rounded-xl hover:scale-105 hover:border-green-600 transition-all ease-in-out duration-300 text-[18px] px-2 mt-5'>Resume <RxDownload /></button></a>
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

