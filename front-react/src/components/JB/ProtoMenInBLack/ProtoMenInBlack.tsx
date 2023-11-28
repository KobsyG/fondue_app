import { useEffect, useRef, useState } from "react";
import Portrait from '../../../images/jb/portrait_of_black_man.jpg'

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
                
            </div>
        </div >
    )
}

export default ProtoMenInBlack