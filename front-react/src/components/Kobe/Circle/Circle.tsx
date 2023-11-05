import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Circle.css'

const Circle = () => {

    gsap.registerPlugin(ScrollTrigger);

    
    let circleRef = useRef(null);
    let circleBlueRef = useRef(null);
    let circleYellowRef = useRef(null);

    
    const[clicked, setClicked] = useState(false);
    const[mouseOver, setMouseOver] = useState(false);
  
    const changeClicked = () => {
      setClicked(!clicked)
    }
  
    const changeMouseOver = () => {
      setMouseOver(!mouseOver);
    }
  
    useEffect(() => {

        gsap.to(".test", {
            // scale: 2,
            x: 300,
            duration: 3,
            scrollTrigger: ".test1"
                // trigger: ".test",
                // start: 'top bottom',
                // end: 'center center',
                // scrub: true,
            // }
          })

      clicked ?
      gsap.to(circleRef.current, {
        scale: 2,
      })
      :
      gsap.to(circleRef.current, {
        scale: 1,
      })
    })
  
      mouseOver ?
      gsap.to(circleYellowRef.current, {
        scale: 2,
      })
      :
      gsap.to(circleYellowRef.current, {
        scale: 1,
      })
        
  
    return (
        <div className='circle-container'>
         
          <div 
          ref={circleRef}
          onClick={changeClicked}
          className='circle'></div>
          
          <div
          ref={circleYellowRef}
          onMouseOver={changeMouseOver}
          onMouseLeave={changeMouseOver}
          className='circle yellow'></div>
          
        <div
        ref={circleBlueRef}
        className='test circle blue'></div>

        </div>

  )}

export default Circle