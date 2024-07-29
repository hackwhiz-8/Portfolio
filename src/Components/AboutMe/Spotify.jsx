import React from 'react'
import image from '../../assets/techstack/react.png'

const Spotify = () => {
    return (
        <div className=' bg-transparent bg-opacity-50 backdrop-blur-lg overflow-hidden shadow-lg border-2 p-2 py-4 rounded-2xl border-gray-800'>
            <div className='flex gap-3 bg-slate-800 rounded-md p-2'>
                <img src={image} alt="" width={'40px'} height={'40px'} />
                <div>
                    <p className='text-[15px] font-bold text-gray-200'>Step Back</p>
                    <p>mohit sain</p>
                    <p>preview</p>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default Spotify
