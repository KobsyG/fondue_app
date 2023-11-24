import gsap from 'gsap'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

const couleeTel = require("../images/new/Coulée_pc.png")
const couleePc = require("../images/new/Coulée_pc.png")
const bigWave = require("../images/new/Grosse_vague_pc_true.png")
const middleWave = require("../images/new/Moyenne_vague_pc.png")
const smallWave = require("../images/new/Petite_vague_pc.png")
const bigWaveTel = require("../images/oui/Grande_vague_tel.png")
const middleWaveTel = require("../images/oui/Moyenne_vague_tel.png")
const smallWaveTel = require("../images/oui/Petite_vague_tel.png")
const texte = require("../images/new/Texte_pc.png")
const texteTel = require("../images/oui/Texte_tel.png")
const goutte1 = require("../images/new/Goutte1pc.png")
const goutte2 = require("../images/new/Goutte2pc.png")
const goutte3 = require("../images/new/Goutte3pc.png")
const goutte4 = require("../images/new/Goutte4pc.png")
const goutte5 = require("../images/new/Goutte5pc.png")
const logo = require("../images/logo-bleu.png")

const Waiting = () => {

  const [isClickedMenu, setIsClickedMenu] = useState(false);

  function handleMenuCLick() {
    setIsClickedMenu(!isClickedMenu);
  }

  useLayoutEffect(() => {

    let ctx = gsap.context(() => {

      // gsap.to(".goutte1", {
      //     yPercent: 100,
      //     ease: 'power3.in',
      //     duration: 4,
      //     delay: 40,
      //     repeat: -1,
      //     repeatDelay: 40,
      // })

      // gsap.to(".goutte2", {
      //     yPercent: 100,
      //     ease: 'power3.in',
      //     duration: 2,
      //     delay: 12,
      //     repeat: -1,
      //     repeatDelay: 12,
      // })

      // gsap.to(".goutte3", {
      //     yPercent: 100,
      //     ease: 'power3.in',
      //     duration: 3,
      //     delay: 18,
      //     repeat: -1,
      //     repeatDelay: 18,
      // })

      // gsap.to(".goutte4", {
      //     yPercent: 100,
      //     ease: 'power3.in',
      //     duration: 2,
      //     delay: 4,
      //     repeat: -1,
      //     repeatDelay: 4,
      // })

      // gsap.to(".goutte5", {
      //     yPercent: 100,
      //     ease: 'power3.in',
      //     duration: 1,
      //     delay: 7,
      //     repeat: -1,
      //     repeatDelay: 7,
      // })

      const waveTl = gsap.timeline();

      waveTl.fromTo('.big-wave',
        {
          x: '8vw',
        },
        {
          x: '-8vw',
          yoyo: true,
          repeat: -1,
          duration: 3.5,
          ease: 'power1.inOut',
        }, '0'
      )

      waveTl.fromTo('.middle-wave',
        {
          x: '5vw',
        },
        {
          x: '-5vw',
          yoyo: true,
          repeat: -1,
          duration: 3.5,
          ease: 'power1.inOut',
        }, '0'
      )

      waveTl.fromTo('.small-wave',
        {
          x: '-10vw',
        },
        {
          x: '10vw',
          yoyo: true,
          repeat: -1,
          duration: 6,
          ease: 'power1.inOut',
        }, '0'
      )

    })

    return () => ctx.revert();
  }, [])

  // useEffect(() => {
  //     menuRef.current
  // }, [isClickedMenu])

  return (
    <div className='waiting-container relative overflow-hidden w-[100vw] h-[100vh]'>
      <div className='w-full h-full bg-kraftPc block lg:hidden' />
      <div className='w-full h-full bg-fondue-blue hidden lg:block' />

      {/* <div className='goutte-container absolute top-0 h-[100vh] w-[100vw]'>
                <div className='goutte1 absolute top-0'>
                    <img src={goutte1} className='w-full h-full object-cover' />
                </div>
                <div className='goutte2 absolute top-0'>
                    <img src={goutte2} className='w-full h-full object-cover' />
                </div>
                <div className='goutte3 absolute top-0'>
                    <img src={goutte3} className='w-full h-full object-cover' />
                </div>
                <div className='goutte4 absolute top-0'>
                    <img src={goutte4} className='w-full h-full object-cover' />
                </div>
                <div className='goutte5 absolute top-0'>
                    <img src={goutte5} className='w-full h-full object-cover' />
                </div>

            </div> */}


      <div className='bg-[#FFDA8F] absolute top-0 h-[35%] lg:h-[30%] w-full p-6 flex justify-center items-center'>
        {/* <div className='h-full aspect-[1/1] rounded-full bg-fondue-red p-1'> */}
        <img src={logo} className='h-[80%] lg:h-full' />
        {/* </div> */}
      </div>

      <div className='coulee absolute w-full top-[35%] lg:top-[30%]'>
        <picture>
          <source
            media='(max-width: 1024px)'
            srcSet={couleeTel}
            className='w-full'
          />
          <source
            media='(min-width: 1025px)'
            srcSet={couleePc}
            className='w-full'
          />
          <img className='w-full' src={couleePc} />
        </picture>
      </div>


      <div className='absolute bottom-0 lg:top-[60%] w-full flex flex-col'>
        <div className='waves-container relative w-[200vw] -left-[50vw]' >
          <picture>
            <source
              media='(max-width: 1024px)'
              srcSet={bigWaveTel}
              className='w-full'
            />
            <source
              media='(min-width: 1025px)'
              srcSet={bigWave}
              className='w-full'
            />
            <img src={bigWave} className='big-wave w-[200vw]' />
          </picture>

          <picture>
            <source
              media='(max-width: 1024px)'
              srcSet={middleWaveTel}
              className='w-full'
            />
            <source
              media='(min-width: 1025px)'
              srcSet={middleWave}
              className='w-full'
            />
            <img src={middleWave} className='middle-wave absolute w-[200vw] bottom-0' />
          </picture>

          <picture>
            <source
              media='(max-width: 1024px)'
              srcSet={smallWaveTel}
              className='w-full'
            />
            <source
              media='(min-width: 1025px)'
              srcSet={smallWave}
              className='w-full'
            />
            <img src={smallWave} className='small-wave absolute w-[200vw] bottom-0' />
          </picture>
        </div>
        <div className='bg-[#FFDA8F] hidden lg:block h-[100vh] w-full' />
      </div>


      <div style={{ top: '60%', transform: 'translateY(-50%)' }} className='text absolute  w-full lg:w-[90%] lg:left-[5%] flex justify-center' >
        <picture>
          <source
            media='(max-width: 1024px)'
            srcSet={texteTel}
            className='w-full'
          />
          <source
            media='(min-width: 1025px)'
            srcSet={texte}
            className='w-full'
          />
          <img src={texte} className='object-cover w-full' />
        </picture>
      </div>

      <div className='email absolute top-5 left-4'>
        <p style={{ fontFamily: 'AvocadoCake' }} className='text-fondue-blue'>contact@fonduecoeur.fr</p>
      </div>

      <div className='reseau-container' >

        <a href="https://instagram.com/fondue_coeur?igshid=OGQ5ZDc2ODk2ZA==">
          <button className='buy-button absolute top-2 right-20 h-10 w-10'>
            <img src={require('../images/insta.webp')} />
          </button>
        </a>

        <a href="https://www.facebook.com/fonduecoeur">
          <button className='menu-button absolute top-2 right-3 h-10 w-10' >
            <img src={require('../images/facebook.webp')} />
          </button>
        </a>

      </div>

      <div style={{
        clipPath: isClickedMenu ? 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' : 'polygon(100% 0%, 100% 0%, 100% 0%, 100% 0%)',
        transition: '2s'
      }}
        className='menu absolute w-40 top-12 right-0 overflow-hidden bg-red-500'>
        <ul>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Contact</li>
        </ul>
      </div>

    </div >
  )
}

export default Waiting