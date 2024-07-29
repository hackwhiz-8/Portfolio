import React from 'react'
import Carousel1 from '../AboutMe/Carousel'
import Project1Img from '../../assets/Project1'

const Project1 = () => {
  return (
    <div className='flex flex-col gap-1'>
      <h1 className='bg-transparent text-gray-500 py-5 bg-opacity-50 backdrop-blur-lg p-2 px-4 border-2 rounded-2xl border-gray-800 text-2xl font-bold '>Study Notion</h1>
      <Carousel1 value={Project1Img}/>
    </div>
  )
}

export default Project1
