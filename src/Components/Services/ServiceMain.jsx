import React from 'react'
import ServiceCard from './ServiceCard'
import image1 from '../../assets/Services/website.gif'
import image2 from '../../assets/Services/mobile.gif'
import image3 from '../../assets/Services/webdesign.gif'
import ScrollAnimation from 'react-animate-on-scroll'


const ServiceMain = () => {
    return (
        <ScrollAnimation animateIn='fadeIn'
            animateOut='fadeOut'>
            <div className='mb-20'>
                <h1 className='text-gray-500  lg:text-[60px] text-[30px]  border-b   text-center mb-20 border-blue-900  py-2'>Services </h1>
                <div className='grid  gap-5 mx-10 w-auto'>

                    <ServiceCard image={image1} head={"Web Development"} color={"bg-gradient-to-r from-red-500 to-orange-500"} text={"Web development refer to a great term for building websites & deploying on the web. Website development needs scripting languages both at server side as well as client side. Website development ranges from simple static web page to the complex web based internet application , social networking services. The most important tasks of web development is web design, web engineering, web content development, client side / server side scripting languages, web servers & network security configuration, ecommerce development etc.."} />
                    <ServiceCard image={image2} head={"App Development"} color={"bg-gradient-to-r from-violet-400 to-pink-300"} text={"App development for sales focuses on creating and optimizing mobile apps to increase revenue. This includes designing intuitive interfaces, integrating in-app purchases, and using analytics to track user behavior and refine strategies to boost sales and engagement."} />
                    <ServiceCard image={image3} head={"Web Design"} color={"bg-gradient-to-r from-teal-400 to-emerald-600"} text={"Web design is commonly understood as the ‘look and feel’ of a desired product. However web design has more in common with creating a captivating user experience while ensuring smooth access and navigation.Web design thrives on engineering a stimulating user interface rather than merely focusing on a website’s appearance. The natural progression for any technology including web design is to closely mimic its end users in order to become more interactive and provide seamless visual and/or auditory transference."} />

                </div>
            </div>
        </ScrollAnimation>
    )
}

export default ServiceMain
