import React from 'react'
import ContactForm from './Contactme'
import ContactImg from './ContactImg'

const ContactMain = () => {
    return (
        <div className='mt-10 pb-20  bg-black '>
            <h1 className='text-gray-300  lg:text-[60px] border-b text-[30px]  text-center mb-10 border-gray-800'>Contact Me </h1>
            <div className='grid lg:grid-cols-2 gap-5 mx-auto w-auto   '>
                <ContactImg />
                <ContactForm />
            </div>
        </div>

    )
}

export default ContactMain
