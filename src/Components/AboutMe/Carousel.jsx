import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';


function ReactSimplyCarouselExample(props) {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    return (
        <div className='bg-black bg-opacity-90 h-[450px] flex justify-center items-center backdrop-blur-lg p-5 border-2 rounded-2xl border-gray-800 '>
            <ReactSimplyCarousel
                activeSlideIndex={activeSlideIndex}
                onRequestChange={setActiveSlideIndex}
                
                speed={400}
                easing="linear"
                autoplay={true}
                delay={500}
                centerMode={true}
                preventScrollOnSwipe={false}
            >
               
               {
                props.value.map((ele,index)=>{
                    return (
                        <div className='bg-transparent w-80 flex items-center justify-center px-5 hover:scale-105 '>
                               <img src={ele.url} alt="" />
                        </div>
                    )
                })
               }
                   
               
            </ReactSimplyCarousel>
        </div>
    );
}

export default ReactSimplyCarouselExample;