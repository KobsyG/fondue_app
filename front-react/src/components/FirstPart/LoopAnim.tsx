import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import '../../styles/LoopAnim.css'

const LoopAnim = (props: {
                phrase: string,
                direction: number,
                speed: number,
}) => {
  
    const firstText1 = useRef(null)
    const secondText1 = useRef(null)
    const container = useRef(null)
    
    let xPercent = 0;
    let direction = props.direction;

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
        // requestAnimationFrame(animation);
    }, container)
        return ctx.revert();
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
        <div ref={container} className='slider relative w-[105vw] whitespace-nowrap flex overflow-hidden '>
            <p ref={firstText1} className='font-BigCaslon'>{props.phrase}<span>#FONDOUX -</span></p>
            <p ref={secondText1} className='font-BigCaslon'>{props.phrase}<span>#FONDOUX -</span></p>
        </div>
  )
}

export default LoopAnim