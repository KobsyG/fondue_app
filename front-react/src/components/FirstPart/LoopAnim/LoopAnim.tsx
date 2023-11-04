import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import './LoopAnim.css'

const LoopAnim = (props: {
                phrase: string,
                direction: number,
                speed: number,
}) => {
  
    const firstText1 = useRef(null);
    const secondText1 = useRef(null);
    let xPercent = 0;
    let direction = props.direction;

    useEffect(() => {
        requestAnimationFrame(animation);
    })

    const animation = () => {
        if (xPercent <= -100){
            xPercent = 0;
        }
        if (xPercent > 0){
            xPercent = -100;
        }

        gsap.set(firstText1.current, {xPercent: xPercent})
        gsap.set(secondText1.current, {xPercent: xPercent})
        xPercent += props.speed * direction;
        requestAnimationFrame(animation);
    }
  
    return (
        <div className='slider relative whitespace-nowrap flex top-[100vh]'>
            <p ref={firstText1}>{props.phrase}</p>
            <p ref={secondText1} className='left-[100%]'>{props.phrase}</p>
        </div>
  )
}

export default LoopAnim