import React from 'react'
import image from '../../assets/techstack/personalnew.jpeg'
import image2 from '../../assets/techstack/personal.jpeg'
import socialData from '../../assets/SocialData'
import Images2 from './Images2'
// import Spotify from './Spotify'





const About2 = (props) => {
    const dark = props.darkMode;

    return (


        <div className='text-gray-500  w-[450px] '>
            <div className='mb-10  bg-black bg-opacity-70 backdrop-blur-lg  overflow-hidden  border-2
             rounded-2xl border-blue-950 text-2xl shadow-2xl shadow-blue-500/20 '>
                <img src={`${dark === true ? image2 : image}`} alt="" />
            </div>

            <div className='bg-black bg-opacity-90 backdrop-blur-lg mb-10 overflow-hidden shadow-2xl shadow-blue-500/20 
                              border-2 rounded-2xl border-blue-950 p-5 '>
                <h1 className='text-2xl font-bold font-san1'>Awards </h1>
                <div className='flex items-center gap-5'>
                    <div className='bg-blue-500 w-[7px] h-[40px] rounded-2xl'></div>
                    <div>
                        <h1 className='text-[17px] font-bold '>Aquaregia-Hackathon</h1>
                        <p className='text-gray-500 text-[15px]'>Secured third position
                            Developed a web application to connect and consult with the local shops.
                        </p>
                    </div>
                </div>
            </div>
            <Images2 value={socialData} head={"Profile"} />
            {/* <Spotify/> */}
        </div>

    )
}

export default About2

