import React from 'react'
import ContactForm from './Contactme'
import ContactImg from './ContactImg'

const ContactMain = () => {
    return (
        <div className='mt-10 mb-20 '>
            <h1 className='text-gray-800  lg:text-[120px] border-b text-[40px]  text-center mb-10 border-gray-800'>Contact Me </h1>
            <div className='grid lg:grid-cols-2 gap-5 mx-auto w-auto   '>
                <ContactImg />
                <ContactForm />
            </div>
        </div>

    )
}

export default ContactMain
