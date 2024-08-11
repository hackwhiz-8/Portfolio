import React from 'react'
import ContactForm from './Contactme'
import ContactImg from './ContactImg'
import { FaArrowUpLong } from "react-icons/fa6";
import ScrollAnimation from 'react-animate-on-scroll'


const ContactMain = () => {
    
        const handleClick = () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };

        return (
            <ScrollAnimation animateIn='fadeIn'
                animateOut='fadeOut'>
                <div className='mt-10 pb-20 relative bg-black '>
                    <h1 className='text-gray-400  lg:text-[60px] border-b text-[30px]  text-center mb-10 border-blue-950'>Let's Build Something Together </h1>
                    <button onClick={handleClick} className='absolute z-50 right-[50%] border-2 rounded-full p-5 text-gray-500 border-gray-500 hover:text-white hover:border-white hover:scale-105 transition-all duration-300'><FaArrowUpLong /></button>
                    <div className='grid lg:grid-cols-2 gap-5 mx-auto w-auto   '>
                        <ContactImg />
                        <ContactForm />
                    </div>
                </div>
            </ScrollAnimation>

        )
    }

    export default ContactMain
