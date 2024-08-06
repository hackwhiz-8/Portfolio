import React from 'react'
import ServiceCard from './ServiceCard'
import image1 from '../../assets/Services/website.gif'
import image2 from '../../assets/Services/mobile.gif'
import image3 from '../../assets/Services/webdesign.gif'

const ServiceMain = () => {
    return (
        <div className='mb-20'>
            <h1 className='text-gray-800  lg:text-[120px] text-[30px]  border-b  text-center mb-10 border-gray-800  py-2'>Services </h1>
            <div className='grid lg:grid-cols-3 gap-5 mx-10 w-auto'>


                <ServiceCard image={image1} head={"Web Development"} color={"bg-gradient-to-r from-red-500 to-orange-500"} />
                <ServiceCard image={image2} head={"App Development"} color={"bg-gradient-to-r from-violet-400 to-pink-300"} />
                <ServiceCard image={image3} head={"Web Design"}  color={"bg-gradient-to-r from-teal-400 to-emerald-600"}/>



            </div>
        </div>
    )
}

export default ServiceMain
