import { useEffect, useRef, useState } from "react";
// import { Parallax } from "react-scroll-parallax";
import Portrait from './portrait_of_black_man.jpg'

function ProtoMenInBlack() {
    const [targetElement, setTarget] = useState<HTMLDivElement | null>(null);
    const targetRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        setTarget(targetRef.current);
        console.log('la fritas')
    }, [targetRef]);
``
    return (
        <div className='w-full h-large-page bg-fondue-blue justify-center items-center'>
            <div className='w-full h-[200vh] bg-fondue-yellow absolute'>
                <div ref={targetRef} className="top-0 left-1/4 h-[100vh] w-10 bg-fondue-red" />
            </div>
            <div className=''>
                {/* 
                {targetElement && (
                    <Parallax
                        scale={[1, 0.30]}
                        translateY={['0vh', '12vh']}
                        shouldAlwaysCompleteAnimation={true}
                        targetElement={targetElement}
                        className='object-cover w-full'
                    >
                        <img className='object-cover w-full' src={Portrait} />
                    </Parallax>
                )}
                */}
            </div>
        </div >
    )
}

export default ProtoMenInBlack