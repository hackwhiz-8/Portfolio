import React from 'react'
import ContactForm from './Contactme'
import ContactImg from './ContactImg'

const ContactLink = () => {
  return (
    <div className='py-20 h-[700px] text-black bg-black  '>
   
    <div className='grid lg:grid-cols-2 gap-5 mx-auto w-auto   '>
        <ContactImg />
        <ContactForm />
    </div>
</div>
  )
}

export default ContactLink
