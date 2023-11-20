import React, { useContext, useEffect, useLayoutEffect, useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { AudioContext } from '../../JB/AudioComponent';

const hautmontagne = require("../../../images/haut-mont.png");
const basmontagne = require("../../../images/bas-mont.png");
const couleeTel = require("../../../images/coulee-telephone.png")
const couleePc = require("../../../images/coulee-ordi.png")
const gentiane1 = require("../../../images/gentiane1.png")
const gentiane2 = require("../../../images/gentiane2.png")
// const sound1 = require("../../../images/testSounce.mp3")

const TerroirWIP = () => {

  // const { audioGentRef, permissionGranted } = useContext(AudioContext);

  // useEffect(() => {
  //   console.log('permission: ' + permissionGranted);
  //   console.log('ref: ' + audioGentRef.current);
  // }, [permissionGranted]);

  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {

    let ctx = gsap.context(() => {

      //----------------------------------------------------------------------------
      //-------------------------------- GSAP --------------------------------------
      //----------------------------------------------------------------------------

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

      const gentTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.terroir-container',
          start: '20% top',
          end: '20% top',
        },
        // onStart() {
          // if (permissionGranted && audioGentRef.current) {
            // console.log('playing');
            // audioGentRef.current.play();
          // }
        // },
      });

      gentTl.from('.fleur', {
        yPercent: 100,
        duration: 0.3,
        ease: 'none',
      }).to('.fleur', {
        yPercent: 10,
        duration: 0.1,
        ease: 'none',
      }, '>').to('.fleur', {
        yPercent: -2,
        duration: 0.1,
        ease: 'none',
      }, '>').fromTo('.fleur', {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
      }, {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        duration: 0.3,
      }, 0);



      //----------------------------------------------------------------------------
      //-------------------------------- GSAP - TABLE ------------------------------
      //----------------------------------------------------------------------------

      gsap.from('.table', {
        xPercent: -150,
        scrollTrigger: {
          trigger: '.montagne',
          start: '20% top',
          end: '40% top',
          scrub: true,
        }
      })



    })
    return () => ctx.revert();
  }, [])

  return (
    <>
      <div className='terroir-container w-full h-[400vh] bg-fondue-blue'>
        <div className='camera1 w-full h-[100vh] sticky top-0 flex items-center'>
          <div className='coulee w-[80%] left-[10%] absolute top-0'>
                <picture>
                    <source
                        media='(max-width: 1024px)'
                        srcSet={couleeTel}
                    />
                    <source
                        media='(min-width: 1025px)'
                        srcSet={couleePc}
                    />
                    <img src={couleePc} />
                </picture>
            </div>


          <p style={{ fontFamily: 'AvocadoCake' }} className='relative text-[30px] text-white top-[20vh]'>
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

          {/* <p style={{ fontFamily: 'AvocadoCake' }} className='text-[30px] text-white'>
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
            </p> */
          }

          {/* <div className='fleur h-[20%] object-cover ml-[20%]'>
            <img src={gentiane1} className='w-full h-full' />
          </div> */}

        </div>

        <div className='montagne h-[400vh] w-[100vw]'>

          <div className='haut-montagne'>
            <picture>
              <source
                media='(max-width: 1024px)'
                srcSet={hautmontagne}
              />
              <source
                media='(min-width: 1025px)'
                srcSet={hautmontagne}
              />
              <img src={hautmontagne} />
            </picture>
          </div>

          <div className='sticky top-0 kraft-montagne h-[100vh] w-full'>
            <div className='table absolute h-96 w-96 top-52 left-40'>
              <img src={require("../../../images/table.jpeg")} />
            </div>

            <picture>
              <source
                media='(max-width: 1024px)'
                srcSet={basmontagne}
              />
              <source
                media='(min-width: 1025px)'
                srcSet={basmontagne}
              />
              <img className='h-full' src={basmontagne} />
            </picture>
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