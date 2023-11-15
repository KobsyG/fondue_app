import React, { useLayoutEffect } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const hautmontagne = require("../../../images/haut-mont.png");
const basmontagne = require("../../../images/bas-mont.png");
const couleeTel = require("../../../images/coulee-telephone.png")
const couleePc = require("../../../images/coulee-ordi.png")

const TerroirWIP = () => {

  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {

    let ctx = gsap.context(() => {

      //----------------------------------------------------------------------------
      //-------------------------------- GSAP --------------------------------------
      //----------------------------------------------------------------------------

      const tl = gsap.timeline({
        // repeat: -1,
      });

      // gsap.fromTo(".letter",
      //   {
      //     rotate: -25,
      //     ease: 'power1.inOut',
      //   },
      //   {
      //     rotate: 25,
      //     duration: 4,
      //     ease: 'power1.inOut',
      //     stagger: {
      //       each: 0.2,
      //       yoyo: true,
      //       repeat: -1,
      //     }
      //   }
      // )

      // gsap.from('p', {
      //   xPercent: +100,
      //   repeat: -1,
      //   duration: 8,
      // })

      // gsap.to(".letter",
      //   {
      //     yPercent: -200,
      //     duration: 2,
      //     ease: 'power1.inOut',
      //     stagger: {
      //       each: 0.2,
      //       yoyo: true,
      //       repeat: -1,
      //     }
      //   }
      // )

    })

    return () => ctx.revert();

  }, [])

  return (
    <>
      <div className='terroir-container w-full h-[400vh] bg-fondue-blue'>
        <div className='camera1 w-full h-[100vh] sticky top-0 flex justify-center items-center'>
          <div className='coulee w-[80%] absolute top-0'>
            <img src={couleeTel} className='lg:hidden' />
            <img src={couleePc} className='hidden lg:block' />
          </div>

          <p style={{ fontFamily: 'AvocadoCake' }} className='text-[30px] text-white'>
            <span className='letter inline-block'>E</span>
            <span className='letter inline-block'>n&nbsp;</span>
            <span className='letter inline-block'>A</span>
            <span className='letter inline-block'>u</span>
            <span className='letter inline-block'>v</span>
            <span className='letter inline-block'>e</span>
            <span className='letter inline-block'>r</span>
            <span className='letter inline-block'>g</span>
            <span className='letter inline-block'>n</span>
            <span className='letter inline-block'>e</span>
            <span className='letter inline-block'>,&nbsp;</span>
            <span className='letter inline-block'>f</span>
            <span className='letter inline-block'>r</span>
            <span className='letter inline-block'>o</span>
            <span className='letter inline-block'>m</span>
            <span className='letter inline-block'>a</span>
            <span className='letter inline-block'>g</span>
            <span className='letter inline-block'>e&nbsp;</span>
            <span className='letter inline-block'>e</span>
            <span className='letter inline-block'>t&nbsp;</span>
            <span className='letter inline-block'>t</span>
            <span className='letter inline-block'>e</span>
            <span className='letter inline-block'>r</span>
            <span className='letter inline-block'>r</span>
            <span className='letter inline-block'>o</span>
            <span className='letter inline-block'>i</span>
            <span className='letter inline-block'>r&nbsp;</span>
            <span className='letter inline-block'>s</span>
            <span className='letter inline-block'>o</span>
            <span className='letter inline-block'>n</span>
            <span className='letter inline-block'>t&nbsp;</span>
            <span className='letter inline-block'>i</span>
            <span className='letter inline-block'>n</span>
            <span className='letter inline-block'>t</span>
            <span className='letter inline-block'>i</span>
            <span className='letter inline-block'>m</span>
            <span className='letter inline-block'>e</span>
            <span className='letter inline-block'>m</span>
            <span className='letter inline-block'>e</span>
            <span className='letter inline-block'>n</span>
            <span className='letter inline-block'>t&nbsp;</span>
            <span className='letter inline-block'>l</span>
            <span className='letter inline-block'>i</span>
            <span className='letter inline-block'>é</span>
            <span className='letter inline-block'>s</span>
            <span className='letter inline-block'>,&nbsp;</span>
            <span className='letter inline-block'>c</span>
            <span className='letter inline-block'>h</span>
            <span className='letter inline-block'>a</span>
            <span className='letter inline-block'>c</span>
            <span className='letter inline-block'>u</span>
            <span className='letter inline-block'>n&nbsp;</span>
            <span className='letter inline-block'>m</span>
            <span className='letter inline-block'>a</span>
            <span className='letter inline-block'>r</span>
            <span className='letter inline-block'>q</span>
            <span className='letter inline-block'>u</span>
            <span className='letter inline-block'>a</span>
            <span className='letter inline-block'>n</span>
            <span className='letter inline-block'>t&nbsp;</span>
            <span className='letter inline-block'>l</span>
            <span className='letter inline-block'>'</span>
            <span className='letter inline-block'>a</span>
            <span className='letter inline-block'>u</span>
            <span className='letter inline-block'>t</span>
            <span className='letter inline-block'>r</span>
            <span className='letter inline-block'>e&nbsp;</span>
            <span className='letter inline-block'>d</span>
            <span className='letter inline-block'>e&nbsp;</span>
            <span className='letter inline-block'>s</span>
            <span className='letter inline-block'>o</span>
            <span className='letter inline-block'>n&nbsp;</span>
            <span className='letter inline-block'>e</span>
            <span className='letter inline-block'>m</span>
            <span className='letter inline-block'>p</span>
            <span className='letter inline-block'>r</span>
            <span className='letter inline-block'>e</span>
            <span className='letter inline-block'>i</span>
            <span className='letter inline-block'>n</span>
            <span className='letter inline-block'>t</span>
            <span className='letter inline-block'>e</span>
            <span className='letter inline-block'>.</span>
          </p>

          <p style={{ fontFamily: 'AvocadoCake' }} className='text-[30px] text-white'>
            <span className='letter inline-block'>L</span>
            <span className='letter inline-block'>e</span>
            <span className='letter inline-block'>C</span>
            <span className='letter inline-block'>a</span>
            <span className='letter inline-block'>n</span>
            <span className='letter inline-block'>t</span>
            <span className='letter inline-block'>a</span>
            <span className='letter inline-block'>l</span>
            <span className='letter inline-block'>e</span>
            <span className='letter inline-block'>s</span>
            <span className='letter inline-block'>t</span>
            <span className='letter inline-block'>l</span>
            <span className='letter inline-block'>e</span>
            <span className='letter inline-block'>s</span>
            <span className='letter inline-block'>e</span>
            <span className='letter inline-block'>u</span>
            <span className='letter inline-block'>l</span>
            <span className='letter inline-block'>d</span>
            <span className='letter inline-block'>é</span>
            <span className='letter inline-block'>p</span>
            <span className='letter inline-block'>a</span>
            <span className='letter inline-block'>r</span>
            <span className='letter inline-block'>t</span>
            <span className='letter inline-block'>e</span>
            <span className='letter inline-block'>m</span>
            <span className='letter inline-block'>e</span>
            <span className='letter inline-block'>n</span>
            <span className='letter inline-block'>t</span>
            <span className='letter inline-block'>à</span>
            <span className='letter inline-block'>p</span>
            <span className='letter inline-block'>o</span>
            <span className='letter inline-block'>r</span>
            <span className='letter inline-block'>t</span>
            <span className='letter inline-block'>e</span>
            <span className='letter inline-block'>r</span>
            <span className='letter inline-block'>l</span>
            <span className='letter inline-block'>e</span>
            <span className='letter inline-block'>n</span>
            <span className='letter inline-block'>o</span>
            <span className='letter inline-block'>m</span>
            <span className='letter inline-block'>d</span>
            <span className='letter inline-block'>'</span>
            <span className='letter inline-block'>u</span>
            <span className='letter inline-block'>n</span>
            <span className='letter inline-block'>f</span>
            <span className='letter inline-block'>r</span>
            <span className='letter inline-block'>o</span>
            <span className='letter inline-block'>m</span>
            <span className='letter inline-block'>a</span>
            <span className='letter inline-block'>g</span>
            <span className='letter inline-block'>e</span>
          </p>

        <div className='montagne h-[200vh]'>
          <div className='haut-montagne h-[100vh]'>
            {/* <img src={}/> */}
          </div>
          <div className='kraft-montagne h-[100vh]'>
            {/* <img src={}/> */}
          </div>
        </div>

        </div>



        {/* <div className='montagne z-0 sticky top-0 h-[200vh] bg-red-300'>
          <img className='w-full object-cover' src={hautmontagne} />
          <img className='fleur h-48 absolute top-40 left-80 opacity-0' src={require('../../../images/fleur.png')} />
          <img className='fleur h-48 absolute top-40 right-80 opacity-0' src={require('../../../images/fleur.png')} />
          <div className='h-[100vh]'>
            <img className='h-full' src={basmontagne} />
          </div>
        </div> */}

      </div>
      <div className='bg-black h-[100vh]' />
    </>
  )
}

export default TerroirWIP