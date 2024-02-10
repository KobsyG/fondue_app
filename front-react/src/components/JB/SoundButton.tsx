// import { useEffect, useState } from 'react';
import '../../styles/soundButton.css';
import useMousePosition from './useMousePosition';
import { motion } from 'framer-motion';

function SoundButton({ audioswitch, handleAudio }: { audioswitch: boolean, handleAudio: any }) {

  const { x, y } = useMousePosition();

  // const variants = {
  //   default: {
  //     x: x - 20,
  //     y: y - 20,
  //   }
  // }

  return (
    <motion.div
      onClick={handleAudio}
      className='custom-cursor absolute z-[1080] h-[170px] w-[170px] top-0 left-0 flex items-center justify-center'
      animate={{
        x: x - 85,
        y: y - 85
      }}
      transition={{
        type: 'tween',
        duration: 0,
        ease: 'backOut',
      }}
    >

      <div className="absolute-center">
        <svg className="h-[250px] w-[250px]" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <path d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250" id="textcircle_top">
              <animateTransform attributeName="transform" begin="0s" dur="20s" type="rotate" from="0 250 250" to="360 250 250" repeatCount="indefinite" />
            </path>
          </defs>
          <text className="circle-text" dy="70" textLength="1220">
            <textPath href="#textcircle_top">
              Activer le son - Activer le son - Activer le son -
            </textPath>
          </text>
        </svg>
      </div>
      <div className="absolute-center">
        <div className="h-[150px] w-[150px] rounded-full">
          {audioswitch &&
            <svg
              className="h-[30%] w-[30%] absolute-center"
              width="800px" height="800px" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <g id="icon" fill="#FFFFFF" transform="translate(42.666667, 85.333333)">
                <path d="M361.299413,341.610667 L328.014293,314.98176 C402.206933,233.906133 402.206933,109.96608 328.013013,28.8906667 L361.298133,2.26304 C447.910187,98.97536 447.908907,244.898347 361.299413,341.610667 Z M276.912853,69.77216 L243.588693,96.4309333 C283.38432,138.998613 283.38304,204.87488 243.589973,247.44256 L276.914133,274.101333 C329.118507,215.880107 329.118507,127.992107 276.912853,69.77216 Z M191.749973,0 L80.8957867,87.2292267 L0,87.2292267 L0,257.895893 L81.0208,257.895893 L191.749973,343.35424 L191.749973,0 L191.749973,0 Z" id="Shape"></path>
              </g>
            </svg>
          }
          {!audioswitch &&
            <svg
              className="h-[20%] w-[20%] absolute-center"
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
              preserveAspectRatio="xMidYMid meet">

              <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                fill="#FFFFFF" stroke="none">
                <path d="M2912 4957 c-17 -7 -418 -288 -891 -624 l-858 -612 -460 -3 -460 -3 -49 -30 c-30 -19 -60 -49 -79 -79 l-30 -49 0 -997 0 -997 30 -49 c19 -30 49 -60 79 -79 l49 -30 460 -3 460 -3 846 -603 c465 -331 859 -611 876 -622 23 -15 47 -19 111 -19 75 0 86 3 125 30 59 42 97 99 109 165 7 37 9 796 8 2245 -3 1997 -4 2193 -19 2226 -24 52 -78 110 -124 130 -46 21 -133 24 -183 6z"/>
                <path d="M3772 3234 c-84 -42 -132 -121 -132 -216 1 -88 26 -126 197 -299 l156 -159 -160 -162 c-181 -185 -199 -214 -191 -317 11 -152 155 -252 306 -211 41 12 69 35 217 181 l170 168 160 -158 c88 -87 176 -167 195 -177 46 -25 171 -26 216 -2 76 42 134 134 134 216 0 85 -16 109 -194 290 l-170 173 161 162 c171 171 202 216 203 293 0 87 -55 179 -134 222 -45 24 -170 23 -216 -2 -19 -10 -107 -90 -195 -177 l-160 -158 -170 168 c-136 133 -178 170 -211 179 -66 19 -125 15 -182 -14z"/>
              </g>
            </svg>
          }

        </div>
      </div>
    </motion.div>

  )
}

export default SoundButton