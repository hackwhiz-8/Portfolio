import React from 'react'

const OpenSource = () => {
    return (
        <div className='  bg-transparent bg-opacity-50 backdrop-blur-lg p-5 border-2 rounded-2xl border-gray-800 mb-5 '>
            <h1 className='text-2xl font-bold mb-4'>Open Source </h1>
            <div className='flex items-center gap-5'>
                <div className='bg-red-500 w-[5px] h-[40px] rounded-2xl'></div>
                <div>
                    <h1 className='text-[18px] '>CircuitVerse</h1>
                    <p className='text-gray-400'>Fix: update project name in navbar #333 <br />
                        <a href="https://github.com/CircuitVerse/cv-frontend-vue/pull/333">#333 https://github.com/CircuitVerse/cv-frontend-vue/pull/333</a>
                    </p>
                </div>
            </div>
            <div className='flex items-center gap-5 mt-2'>
                <div className='bg-yellow-500 w-[5px] h-[40px] rounded-2xl'></div>
                <div>
                    <h1 className='text-[18px] '>Open Bioinformatics Foundation</h1>
                    <p className='text-gray-400'>fixed layout icons of BOSC footer <br />
                    <a href="https://github.com/OBF/homepage/pull/88">#88 https://github.com/OBF/homepage/pull/88</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default OpenSource
