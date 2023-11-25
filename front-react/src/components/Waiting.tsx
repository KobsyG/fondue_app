import gsap from 'gsap'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import fleche from '../images/waiting/fleche.svg'

const texte = require("../images/waiting/Texte_pc.png")
const coulee = require("../images/waiting/Coulée_pc.png")
const bigWave = require("../images/waiting/Grosse_vague_pc_true.png")
const middleWave = require("../images/waiting/Moyenne_vague_pc.png")
const smallWave = require("../images/waiting/Petite_vague_pc.png")
const logo = require("../images/waiting/logo-bleu.png")
const bigWaveTel = require("../images/waiting/Grande_vague_tel.png")
const middleWaveTel = require("../images/waiting/Moyenne_vague_tel.png")
const smallWaveTel = require("../images/waiting/Petite_vague_tel.png")
const texteTel = require("../images/waiting/Texte_tel.png")
const kraftTel = require("../images/waiting/MobileCraft.png")
const instaLogo = require("../images/waiting/insta.webp")
const facebookLogo = require("../images/waiting/facebook.webp")

const goutte1 = require("../images/waiting/Goutte1.png")
const goutte2 = require("../images/waiting/Goutte2.png")
const goutte4 = require("../images/waiting/Goutte4.png")
const goutte5 = require("../images/waiting/Goutte5.png")

const Waiting = () => {

  const [loadCount, setLoadCount] = useState(0);
  const totalImages = 13

  function addLoadCount() {
    setLoadCount(loadCount => loadCount + 1)
  }

  useEffect(() => {

    const image1 = new Image();
    image1.onload = addLoadCount;
    image1.src = texte;

    const image2 = new Image();
    image2.onload = addLoadCount;
    image2.src = coulee;

    const image3 = new Image();
    image3.onload = addLoadCount;
    image3.src = bigWave;

    const image4 = new Image();
    image4.onload = addLoadCount;
    image4.src = middleWave;

    const image5 = new Image();
    image5.onload = addLoadCount;
    image5.src = smallWave;

    const image6 = new Image();
    image6.onload = addLoadCount;
    image6.src = logo;

    const image7 = new Image();
    image7.onload = addLoadCount;
    image7.src = bigWaveTel;

    const image8 = new Image();
    image8.onload = addLoadCount;
    image8.src = middleWaveTel;

    const image9 = new Image();
    image9.onload = addLoadCount;
    image9.src = smallWaveTel;

    const image10 = new Image();
    image10.onload = addLoadCount;
    image10.src = texteTel;

    const image11 = new Image();
    image11.onload = addLoadCount;
    image11.src = kraftTel;

    const image12 = new Image();
    image12.onload = addLoadCount;
    image12.src = instaLogo;

    const image13 = new Image();
    image13.onload = addLoadCount;
    image13.src = facebookLogo;

    return () => {
      image1.onload = null;
      image2.onload = null;
      image3.onload = null;
      image4.onload = null;
      image5.onload = null;
      image6.onload = null;
      image7.onload = null;
      image8.onload = null;
      image9.onload = null;
      image10.onload = null;
      image11.onload = null;
      image12.onload = null;
      image13.onload = null;
    };
  }, [])

  useLayoutEffect(() => {

    if (loadCount >= totalImages) {

      let ctx = gsap.context(() => {
        gsap.to(".goutte1", {
          yPercent: 1000,
          ease: 'power2.in',
          duration: 1.5,
          delay: 3,
          repeat: -1,
          repeatDelay: 3,
        })

        gsap.to(".goutte2", {
          yPercent: 1000,
          ease: 'power3.in',
          duration: 1.5,
          delay: 23,
          repeat: -1,
          repeatDelay: 23,
        })

        gsap.to(".goutte4", {
          yPercent: 1000,
          ease: 'power2.in',
          duration: 1.5,
          delay: 7,
          repeat: -1,
          repeatDelay: 7,
        })

        gsap.to(".goutte5", {
          yPercent: 1000,
          ease: 'power3.in',
          duration: 1.5,
          delay: 11,
          repeat: -1,
          repeatDelay: 11,
        })

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

        const fleche = gsap.timeline({
          repeat: -1,
        });

        fleche
          .to('.fleche', {
            duration: 0.5,
            opacity: 1,
          }, '>')
          .to('.fleche', {
            duration: 0,
            opacity: 0,
          }, '>')
          .to('.fleche', {
            duration: 0.5,
            opacity: 0,
          }, '>')
          .to('.fleche', {
            duration: 0.5,
            opacity: 1,
          }, '>')

      })
      return () => ctx.revert();
    }

  }, [loadCount])

  if (loadCount < totalImages)
    return (
      <div className='h-[100vh] w-[100vw] bg-fondue-yellow' />
    )

  return (
    <div className='waiting-container relative overflow-hidden w-[100vw] h-[100vh]'>
      <img src={kraftTel} className='lg:hidden w-[100vw] h-[100vh] object-cover absolute z-0' />
      <div className='hidden lg:block w-full h-full bg-fondue-blue' />

      <div className='bg-[#FFDA8F] absolute top-0 h-[30%] lg:h-[30%] w-full flex justify-center items-center'>
        <div className='h-[70%] lg:h-[80%] w-auto relative'>
          <div className='h-full w-full bg-black absolute rounded-full top-[1%] left-[1%] opacity-40' />
          <img src={logo} className='h-full relative object-cover' />
        </div>

      </div>

      <div className='topbar absolute top-0 h-[4.5%] w-full flex items-center ml-2'>
        <p style={{ fontFamily: 'AvocadoCake' }} className='text-fondue-blue text-[1.2vh] lg:text-[20px]'>contact@fonduecoeur.fr</p>
      </div>

      <div className='coulee absolute z-[60] w-full top-[30%]'>
        <img className='w-full' src={coulee} />
        <img src={goutte1} className='w-full goutte1 absolute z-[10] bottom-0' />
        <img src={goutte2} className='w-full goutte2 absolute z-[10] bottom-0' />
        <img src={goutte4} className='w-full goutte4 absolute z-[10] bottom-0' />
        <img src={goutte5} className='w-full goutte5 absolute z-[10] bottom-0' />
      </div>

      <div className='absolute z-[60] top-[70%] lg:top-[60%] w-full flex flex-col'>
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
        <div className='bg-[#FFDA8F] h-[100vh] w-full' />
      </div>

      <div className='top-[30%] h-[45%] lg:top-[37%] lg:h-[35%] w-full absolute z-[80] flex justify-center items-center'>
        <img src={texteTel} className='lg:hidden w-full max-h-[80%] object-contain' />
        <img src={texte} className='hidden lg:block w-full max-h-[70%] max-w-[80%] object-contain' />
      </div>

      <div className='reseau-container absolute top-0 right-0 flex' >
        <a className='insta-button h-10 w-10 mr-2 mt-2 lg:h-12 lg:w-12 lg:mr-3 lg:mt-3' href="https://instagram.com/fondue_coeur?igshid=OGQ5ZDc2ODk2ZA==" target='_blank'>
          <button>
            <img src={instaLogo} className='hover:scale-125 transform transition-transform duration-300'/>
          </button>
        </a>
        <a className='facebook-button h-10 w-10 mr-2 mt-2 lg:h-12 lg:w-12 lg:mr-3 lg:mt-3' href="https://www.facebook.com/fonduecoeur" target='_blank'>
          <button>
            <img src={facebookLogo} className='hover:scale-125 transform transition-transform duration-300'/>
          </button>
        </a>
      </div>

      <img src={fleche} className='fleche sm:hidden absolute top-[6%] left-[85%] -rotate-90 h-20' />

    </div >
  )
}

export default Waiting