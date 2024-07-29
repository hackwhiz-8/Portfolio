import React from 'react'
import ContactForm from './Contactme'
import ContactImg from './ContactImg'

const ContactMain = () => {
    return (
        <div className='mt-10 mb-20 '>
            <h1 className='text-gray-800  lg:text-[100px] border-b  text-center mb-10 border-gray-800'>Contact Me </h1>
            <div className='grid lg:grid-cols-2'>
                <ContactImg />
                <ContactForm />
            </div>
        </div>

    )
}

export default ContactMain
