import React from 'react'
import SocialData from '../../assets/SocialData'

const SocialHandle = () => {
  return (
    <div>
      {
        SocialData.map((ele,index)=>{
                return(
                    <div>
                        <img src={ele.url} alt="" />
                    </div>
                )
        })
      }
    </div>
  )
}

export default SocialHandle;
