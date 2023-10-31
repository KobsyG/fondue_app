import { useEffect, useRef, useState } from 'react'
import { Parallax } from 'react-scroll-parallax';

const Backg = () => {
    return (
        <div className="absolute w-full h-full z-0">
            <div className='w-full h-96 bg-gray-400' />
            <div className='w-full h-96 bg-gray-100' />
            <div className='w-full h-96 bg-gray-400' />
            <div className='w-full h-96 bg-gray-100' />
            <div className='w-full h-96 bg-gray-400' />
            <div className='w-full h-96 bg-gray-100' />
            <div className='w-full h-96 bg-gray-400' />
            <div className='w-full h-96 bg-gray-100' />
        </div>
    )
}

function FallingCheese() {
    const [targetElement, setTarget] = useState<HTMLDivElement | null>(null);
    const targetRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        setTarget(targetRef.current);
        console.log('la fritas')
    }, [targetRef]);
    return (
        <div>
            <Backg />
            <div ref={targetRef} className="absolute z-1 top-0 left-1/2 mt-[150vh] h-[200vh] w-10 bg-fondue-red" />
            {targetElement && (
                <Parallax
                    translateY={['100vh', '400vh']}
                    rotate={[0, 73]}
                    targetElement={targetElement}
                    className='mt-50 ml-12 h-48 w-48 bg-fondue-blue'
                    easing={[.99, 1, .4, .93]}
                />
            )}
        </div>
    )
}

export default FallingCheese