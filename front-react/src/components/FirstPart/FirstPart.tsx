import React, { useEffect } from 'react'
import LoopAnim from './LoopAnim'
import ImgZoom from './ImgZoom'
import StaticText from './StaticText'

const phrase1 = "GÉNÉREUSE - VRAIE - IRRÉSISTIBLE - FIÈRE DE SON TERROIR - AUTHENTIQUE - ADDICTIVE - "
const phrase2 = "AUTHENTIQUE - ADDICTIVE - GÉNÉREUSE - VRAIE - IRRÉSISTIBLE - FIÈRE DE SON TERROIR - "
const phrase3 = "VRAIE - IRRÉSISTIBLE - FIÈRE DE SON TERROIR - AUTHENTIQUE - ADDICTIVE - GÉNÉREUSE - "

const FirstPart = () => {
    
  return (
    <div className='container-1st-part w-[100vw] h-[200vh] bg-[#FFE4CC] flex justify-center'>
        <div className='slider-container h-[100vh] top-[100vh] absolute w-[100vw] grid content-center overflow-hidden -rotate-3'>
          <LoopAnim phrase={phrase1} direction={1} speed={0.05}/>
          <LoopAnim phrase={phrase2} direction={-1} speed={0.05}/>
          <LoopAnim phrase={phrase3} direction={1} speed={0.05}/>
        </div>
        <ImgZoom />
        <StaticText />
    </div>
  )
}

export default FirstPart