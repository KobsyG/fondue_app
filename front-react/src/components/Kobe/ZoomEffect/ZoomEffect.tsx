import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'



const ZoomEffect = () => {
  
  gsap.registerPlugin(ScrollTrigger);
  
  useEffect(() => {
    
    gsap.to(".wrap", {
      scaleX: 0.7,
      scaleY: 0.8,
      // x: 100,
      scrollTrigger: {
        trigger:".wrap",
        start: 'top top',
        end: 'bottom top',
        // markers: true,
        scrub: true,
        pin: true,
      }
  })

  
  // gsap.to(".wrap", {
  //   x: 100,
  //   scrollTrigger: {
  //     trigger: ".wrap",
  //     start: "bottom 80%",
  //     end: "bottom 50%",
  //     pin: true,
  //     markers: true,
  //   }
  // })

  // gsap.to('.overflow-wrap', {
  //   width: '100vw',
  //   height: '100vh',
  //   ease: 'none',
  //   scrollTrigger: {
  //     trigger:'.img-wrap',
  //     start: 'center center',
  //     end: '+=100%',
  //     pin: true,
  //     scrub: true
  //   }
  // })

})
  
  return (
    <div>
        <div className='contain relative h-[200vh] w-full'>
          <div className='absolute z-1000  h-48 w-48 bg-black'/>
          <div className='wrap w-[100vw] h-[100vh] border-2 border-black bg-red-800'>
            <div className='h-[100%] w-[100%] bg-yellow-400' />
            <img className='im' src={require("../FirstImg/photo-test.webp")} />
          </div>
          <div className='h-[100vh] bg-blue-300'></div>
        </div>
    </div>
  )

//   return (
//     <div className="h-[75vh]"></div>


//       <div className="img-wrap">
//         <div className="overflow-wrap">
//           <img src={require("./components/FirstImg/montagne.jpeg")}/>
//         </div>
//       </div>
    
//       <div className="h-[75vh]"></div>
//   )
}

export default ZoomEffect