import React from 'react'
import ContactForm from './Contactme'
import ContactImg from './ContactImg'

const ContactLink = () => {
  return (
    <div className='py-20 h-auto text-black bg-black  '>
   
    <div className='grid lg:grid-cols-2 gap-5 mx-auto w-auto pb-10  '>
        <ContactImg />
        <ContactForm />
    </div>
</div>
  )
}

export default ContactLink
