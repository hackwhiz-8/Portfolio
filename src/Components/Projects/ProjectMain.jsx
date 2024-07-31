import React from 'react'
import Project1 from './Project1'
import Project1Img from '../../assets/Project1'
import Project2Img from '../../assets/Project2'


const ProjectMain = () => {
  return (
    <div className='mb-20'>
      <h1 className='text-gray-800  lg:text-[120px] text-[50px]  border-b  text-center mb-10 border-gray-800  py-2'>Projects </h1>
      <div className='grid lg:grid-cols-3 gap-5 mx-10 w-auto'>


        <Project1 text={"studyNotion"} data={Project1Img} />
        <Project1 text={"FinexUs India"} data={Project2Img} />
        <Project1 text={"newsWave"} data={Project2Img} />


      </div>
    </div>
  )
}

export default ProjectMain
