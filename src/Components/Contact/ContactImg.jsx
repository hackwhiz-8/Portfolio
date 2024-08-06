import React from 'react'
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
// import image from '../../assets/Contact/man.gif'
// // import image2 from '../../assets/Contact/handstand.gif'

const ContactImg = () => {
  return (
    <div className='mx-auto mt-20 text-green-100'>
      {/* <img src={image} alt="" className='bg-blue-500 rounded-[10%] w-[80%] items-center mx-10' /> */}
      <div className='mx-5 mt-2 text-[80px] text-green-500 font-bold'>D<span className='text-green-100 text-[50px]'>Developers</span></div>
      <a href="tel:8290381220" className='flex items-center gap-2 p-2 font-bold'><IoCallOutline /> <span>+91-8290381220</span></a>
      <a href="mailto:mohitkumarsian46@gmail.com" className='flex items-center gap-2 p-2 font-bold'><CiMail /> <span>mohitkumarsain46@gmail.com</span></a>
      <p className='flex items-center gap-2 p-2 font-bold'><CiLocationOn /> jaipur,Rajasthan</p>
    </div>
  )
}

export default ContactImg
