import React from 'react'
import image from '../../assets/Contact/man.gif'
// import image2 from '../../assets/Contact/handstand.gif'

const ContactImg = () => {
  return (
    <div className='mx-auto mt-20 '>
      <img src={image} alt="" className='bg-blue-500 rounded-[10%] w-[80%] items-center mx-10' />
    </div>
  )
}

export default ContactImg
