import React from 'react'



const Images2 = (props) => {
    const data = props.value;

    return (
        <div className=' bg-black bg-opacity-90 border-2 border-blue-950 mb-10 rounded-2xl 
                            p-5 transition-all ease-in-out shadow-2xl shadow-blue-500/20 ' >

            <h1 className='text-2xl font-bold font-san1 mb-5'>{props.head}</h1>

            <div className='flex flex-wrap gap-2 '>
                {
                    data.map((ele, index) => {

                        return (
                            <div className={` bg-white w-[46px] h-[46px] mr-[2px] flex justify-center items-center relative  backdrop-blur-md   border-2 p-[2px] rounded-2xl group border-gray-800 hover:scale-105`}>
                                <p className='text-sm transition-all ease-in-out border-gray-800 border-2 opacity-0 bg-black left-[-7px] top-[-30px] p-[5px] rounded-md top absolute text-white z-10 group-hover:opacity-100'>{ele.title}</p>
                                <a href={ele.url2}><img src={ele.url} alt="" width={'35px'} /></a>
                            </div>
                        )
                    })

                }
            </div>
        </div>
    )
}

export default Images2
