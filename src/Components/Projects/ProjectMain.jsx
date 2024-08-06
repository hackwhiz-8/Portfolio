import React from 'react'
import Project1 from './Project1'
// import Project1Img from '../../assets/Project1'
// import Project2Img from '../../assets/Project2'
import image1 from '../../assets/ProjectImage/Zodiac.png'
import image2 from '../../assets/ProjectImage/cottons.png'
import image3 from '../../assets/ProjectImage/flat.png'
import image4 from '../../assets/ProjectImage/flat2.png'



const ProjectMain = () => {
  return (
    <div className='mb-20 '>
      <h1 className='text-gray-800  lg:text-[60px] text-[30px]  border-b  text-center mb-10 border-gray-800  py-2'>Projects </h1>
      <div className='grid lg:grid-cols-3 gap-5 mx-10  w-auto'>


        <Project1 text={"Zodiac,Delhi"} image={image1} color={"bg-gradient-to-r from-indigo-500 to-blue-500"} link={"https://www.zodiaconline.com/"}/>
        <Project1 text={"FS garments"} image={image2}  color={"bg-gradient-to-r from-rose-400 to-red-500"} link={"https://www.onlinegarments.in/"}/>
        <Project1 text={"Shubham Properties"} image={image3}  color={"bg-gradient-to-r from-amber-200 to-yellow-500"} link={"https://www.shubham-group.in/"}/>
        <Project1 text={"sthapatyaleasing"} image={image4}  color={"bg-gradient-to-r from-amber-200 to-yellow-500"} link={"https://www.sthapatyaleasing.com/"}/>

        
      </div>
    </div>
  )
}

export default ProjectMain
