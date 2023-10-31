import React from 'react'
import { ParallaxBanner } from 'react-scroll-parallax'
import vague from './vague.png'

const FirstImg = () => {
  return (
    // <div>
        // <img src={require("./image.png")} alt="firstimg" />
        <ParallaxBanner
          layers={[
          // {image: vague, speed: -10},
          {image: vague, translateY: [-20, 50]},
        ]}
        className='aspect-[2/1]'
        >
          {/* <h1>Hello</h1> */}
          </ParallaxBanner>
    //{/* </div> */}
  )
}

export default FirstImg