import React from 'react'
import ServicesLinks from './FooterLinks'
import socialData from '../../assets/SocialData'



const Footer = () => {

    return (
        <div className='bg-gray-900 border-t-2 border-gray-800 p-2 py-20 text-white'>
            <div className='flex flex-wrap justify-evenly gap-10 w-[100%]'>
                <div>
                    <div className=' mt-2 text-[80px]  text-green-500 font-bold'>D<span className='text-green-100 text-[50px]'>Developers</span></div>
                </div>
                <div className='mx-20 flex gap-10'>
                    <div className=''>
                        <h1 className='text-[25px] py-2'>Services</h1>
                        {
                            ServicesLinks.map((ele, index) => {
                                return (
                                    <div className='text-gray-700 hover:text-gray-500'>
                                        <p>{ele.link}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div>
                        <h1 className='text-[25px] py-2'>About Us</h1>
                        <div className='flex gap-2'>
                            {
                                socialData.map((ele, index) => {
                                    return (
                                        <div className='text-gray-700 hover:text-gray-500'>
                                            <img src={ele.url} alt="" width={'30px'} className='rounded-2xl' />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer
