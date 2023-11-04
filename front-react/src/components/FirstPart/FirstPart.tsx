import React from 'react'
import LoopAnim from './LoopAnim/LoopAnim'
import ImgZoom from './ImgZoom/ImgZoom'
import StaticText from './StaticText/StaticText'

const phrase1 = "OMG LA FIRST LINE -"
const phrase2 = "OMG LA SECOND LINE -"
const phrase3 = "OMG LA THIRD LINE -"

const FirstPart = () => {
  return (
    <div className='container-1st-part w-full h-[200vh] bg-orange-500 flex justify-center'>
        <div className='slider-container absolute w-full'>
          <LoopAnim phrase={phrase1} direction={1} speed={0.2}/>
          <LoopAnim phrase={phrase2} direction={-1} speed={0.1}/>
          <LoopAnim phrase={phrase3} direction={1} speed={0.2}/>
        </div>
        <ImgZoom />
        <StaticText />
    </div>
  )
}

export default FirstPart