import React from 'react'
import Project1 from './Project1'

const ProjectMain = () => {
  return (
    <div className='mb-20'>
      <h1 className='text-gray-800  lg:text-[100px] border-b  text-center mb-10 border-gray-800  py-2'>Projects </h1>
      <div className='grid lg:grid-cols-3 gap-5 mx-10'>


        <Project1 />
        <Project1 />
        <Project1 />


      </div>
    </div>
  )
}

export default ProjectMain
