import React, { useState } from 'react'
import { IoReorderThreeOutline } from "react-icons/io5";

const DropDown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };


    return (

        <div className='  opacity-100 right-[50px] bottom-[10px] text-[30px]'>

            <button onClick={handleToggle} className='cursor-pointer'><IoReorderThreeOutline /></button>
            {
                isOpen && (
                    <div>
                        <ul class={`absolute } b-black  text-2xl`}>
                            <li><a href="/">Service 1</a></li>
                            <li><a href="/">Service 2</a></li>
                            <li><a href="/">Service 3</a></li>
                        </ul>

                    </div>
                )
            }

        </div>


    );
}

export default DropDown
