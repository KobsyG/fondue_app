import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


const ImgZoom = () => {
  
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        
        gsap.to(".photo-wrap", {
        scrollTrigger: {
            trigger: ".fen",
            start: 'top top',
            end: 'bottom bottom',
            scrub: true,
        },
        css: {
            // scaleX: 0.7,
            // scaleY: 0.9,
            maxWidth: '400px',
            width: "50vw",
            height: "70vh",
            top: '15vh',
            // bottom: '15vh',
        }
    })

    })
  
    return (
        <div className='photo-wrap sticky top-0 h-[100vh] w-[100vw] bg-red-500 max-w-full'>
            <img className='object-cover w-full h-full' src={require("./photo-test.webp")}/>
        </div>
  )
}

export default ImgZoom