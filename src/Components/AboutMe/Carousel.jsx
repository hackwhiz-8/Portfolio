import React, { useState } from 'react'

import { HiChevronLeft } from "react-icons/hi";
import { HiChevronRight } from "react-icons/hi";


const Carousel1 = (props) => {



    const [index, setIndex] = useState(0);
    const [data, setData] = useState(props.value[0].url);

    const handleNext = () => {

        if (index >= props.value.length) {
            setData(props.value[0].url);
            setIndex(0);
        } else {
            setIndex(index + 1);
            setData(props.value[index].url);
        }



    }
    const handleprev = () => {
        if (index < 0) {
            setData(props.value[props.value.length - 1].url);
            setIndex(props.value.length - 1)
        } else {
            setIndex(index - 1);
            setData(props.value[index].url);
        }

    }

    return (
        <div className="group bg-transparent  bg-opacity-50 backdrop-blur-lg relative flex flex-col justify-center grayscale hover:grayscale-0  items-center h-[430px] border-2 rounded-2xl border-gray-800 overflow-hidden">

            <button className="absolute left-[1px] text-[40px] text-gray-500 z-10" onClick={handleprev}><HiChevronLeft /></button>
            <div className='overflow-hidden rounded-md group-hover:scale-125 transition-all duration-500 ease-in-out '>
                <img src={data} alt="" width={'400px'} />
            </div>
            <button onClick={handleNext} className="absolute right-[1px] text-[40px] text-gray-500"><HiChevronRight /></button>

        </div>
    )
}

export default Carousel1