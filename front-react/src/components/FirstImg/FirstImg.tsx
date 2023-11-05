import React, { useEffect, useRef } from 'react'
import vague from './vague.png'
import {gsap, Power2} from 'gsap'

const FirstImg = () => {
  
  let container = useRef(null)
  let image = useRef(null)
  let rideau = useRef(null)
  var tl = gsap.timeline();

  useEffect(() => {
    tl.to(
    container.current , {visibility: "visible" }
    ).to(
    rideau.current, {x: '100vh', ease: Power2.easeInOut},
    ).from(
      image.current, {scale: 1.6, ease: Power2.easeInOut, delay: -1.4},
    );

    // gsap.to(
    //   container, {
    //   ScrollTrigger: {
    //     trigger: 
    //     scrub: true,
    //   }

      
    

  });
  
  return (
    <div className='container'>
      <div
        ref={container}
        className='img-container'>
        <img
        ref={image}
        src={require("./photo-test.webp")} alt="firstimg"/>
        <div ref={rideau} className='rideau'></div>
      </div>
    </div>
  )
}

export default FirstImg