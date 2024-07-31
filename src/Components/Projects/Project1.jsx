import React from 'react'
import Carousel1 from '../AboutMe/Carousel'


const Project1 = (props) => {
  return (
    <div className='flex flex-col gap-1'>
      <h1 className='bg-transparent text-gray-500 py-5 bg-opacity-50 backdrop-blur-lg p-2 px-4 border-2 rounded-2xl border-gray-800 text-2xl font-bold '>{props.text}</h1>
      <Carousel1 value={props.data}/>
    </div>
  )
}

export default Project1
