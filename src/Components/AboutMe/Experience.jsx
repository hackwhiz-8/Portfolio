import React from 'react'

const Experience = () => {
    return (
        <div className='  bg-black bg-opacity-90 backdrop-blur-lg p-5 border-2 rounded-2xl border-blue-950 shadow-2xl shadow-blue-500/20  '>
            <h1 className='text-2xl font-bold mb-4'>Education </h1>
            <div className='flex items-center gap-5'>
                <div className='bg-green-500 w-[5px] h-[30px] rounded-2xl'></div>
                <div>
                    <h1 className='text-[17px] font-bold '>B.Tech 2022-26</h1>
                    <p className='text-gray-500 text-[15px]'>Rajasthan Technical University
                    </p>
                </div>
            </div>
            <div className='flex items-center gap-5 mt-2'>
                <div className='bg-purple-500 w-[5px] h-[30px] rounded-2xl'></div>
                <div>
                <h1 className='text-[17px] font-bold '>Secondry Education 2019-21</h1>
                    <p className='text-gray-500 text-[15px]'>The Castle Convent School</p>
                </div>
            </div>
        </div>
    )
}

export default Experience
