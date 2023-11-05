import React, { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { gsap } from 'gsap'
import './Actuel.css'
import ImgZoom from '../../FirstPart/ImgZoom'
import LoopAnim from '../../FirstPart/LoopAnim'

const Actuel = () => {
  
    

 

    return (
    <>
    <div className='container-1st-part w-full h-[200vh] bg-orange-500 flex justify-center'>
        
        <ImgZoom />

        
    </div>
    <div className='w-full h-[100vh] bg-orange-500' />
    </>
  )
}

export default Actuel