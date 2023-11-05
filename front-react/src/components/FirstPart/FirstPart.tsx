import React, { useEffect } from 'react'
import LoopAnim from './LoopAnim'
import ImgZoom from './ImgZoom'
import StaticText from './StaticText'

const phrase1 = "OMG LA FIRST LINE aaaaaaaaaaaaaaaaaaaa -"
const phrase2 = "OMG LA SECOND LINE -"
const phrase3 = "OMG LA THIRD LINE -"

const FirstPart = () => {
    
  return (
    <div className='container-1st-part w-full h-[200vh] bg-orange-500 flex justify-center'>
        <div className='slider-container h-[100vh] top-[100vh] absolute w-[100vw] grid content-center overflow-hidden rotate-3'>
          <LoopAnim phrase={phrase1} direction={1} speed={0.3}/>
          <LoopAnim phrase={phrase2} direction={-1} speed={0.1}/>
          <LoopAnim phrase={phrase3} direction={1} speed={0.3}/>
        </div>
        <ImgZoom />
        <StaticText />
    </div>
  )
}

export default FirstPart