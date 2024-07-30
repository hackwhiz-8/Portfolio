import React, { useState } from 'react'
import './DropCss.css'
import { IoReorderThreeOutline } from "react-icons/io5";

const DropDown = () => {
    const [toggle, settoggle] = useState(false)
    const handleclick = ()=>{
        settoggle(!toggle)
    }
    return (

        <div className='absolute lg:opacity-0 opcaity-100 right-[50px] bottom-[10px] text-[30px]'>

                <button onClick={handleclick} className='cursor-pointer'><IoReorderThreeOutline /></button>
                <ul class={`absolute  ${toggle  === true ? "opacity-0":"opacity-100 "} b-black  text-2xl`}>
                    <li><a href="/">Service 1</a></li>
                    <li><a href="/">Service 2</a></li>
                    <li><a href="/">Service 3</a></li>
                </ul>
            

        </div>


    )
}

export default DropDown
