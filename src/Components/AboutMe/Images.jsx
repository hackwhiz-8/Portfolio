import React from 'react'

const Images = (props) => {
    const data = props.value;
    return (
        <div className=' flex flex-col border-2 border-gray-800 rounded-2xl gap-5 p-5 transition-all ease-in-out ' >
            <h1 className='text-2xl font-bold font-san1'>{props.head}</h1>
            <div className='flex flex-wrap gap-2 '>
                {
                    data.map((ele, index) => {

                        return (
                            <div className={`${ele.color}  w-[46px] h-[46px] mr-[2px] flex justify-center items-center relative  backdrop-blur-md   border-2 p-[2px] rounded-2xl group border-gray-800 hover:scale-105`}>
                                <p className='text-sm transition-all ease-in-out border-gray-800 border-2 opacity-0 bg-black left-[-7px] top-[-30px] p-[5px] rounded-md top absolute text-white z-10 group-hover:opacity-100'>{ele.title}</p>
                                <img src={ele.url} alt="" width={'35px'} />
                            </div>
                        )
                    })

                }
            </div>
        </div>
    )
}

export default Images
