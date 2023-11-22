import React, { useLayoutEffect } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const gentiane2 = require("../../../images/gentiane2.png")
const craftPc = require('../../../images/PcCraft.png')
const craftMob = require('../../../images/MobileCraft.png')

function Product() {

  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {

    let ctx = gsap.context(() => {

      //----------------------------------------------------------------------------
      //-------------------------------- GSAP PRODUCT ------------------------------
      //----------------------------------------------------------------------------

      const gentTl3 = gsap.timeline({
        scrollTrigger: {
          trigger: '.product-camera',
          start: 'top 80%',
        },
      });

      gentTl3.from('.fleur3', {
        yPercent: 100,
        duration: 0.3,
        ease: 'none',
      }).to('.fleur3', {
        yPercent: 10,
        duration: 0.1,
        ease: 'none',
      }, '>').to('.fleur3', {
        yPercent: -2,
        duration: 0.1,
        ease: 'none',
      }, '>').fromTo('.fleur3', {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
      }, {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        duration: 0.3,
      }, 0);

      const gentTl4 = gsap.timeline({
        scrollTrigger: {
          trigger: '.product-camera',
          start: 'top 50%',
        },
      });

      gentTl4.from('.fleur4', {
        yPercent: 100,
        duration: 0.3,
        ease: 'none',
      }).to('.fleur4', {
        yPercent: 10,
        duration: 0.1,
        ease: 'none',
      }, '>').to('.fleur4', {
        yPercent: -2,
        duration: 0.1,
        ease: 'none',
      }, '>').fromTo('.fleur4', {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
      }, {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        duration: 0.3,
      }, 0);

      gsap.to(".product-camera", {
        scrollTrigger: {
          trigger: ".product-container",
          start: 'top top',
          end: 'bottom bottom',
          pin: '.product-camera',
        }
      })

    })
    return () => ctx.revert();
  }, [])

  return (
    <>
      <div className='product-container relative bg-fondue-red h-[400vh] w-[100vw]'>

        <div className='fleur3 w-[10%] aspect-[9/12] absolute z-10 -top-[16vw] left-[50%]'>
          <img src={gentiane2} className='object-contain w-full h-full' />
        </div>

        <div className='fleur4 w-[10%] aspect-[9/12] absolute z-10 -top-[8vw] left-[60%]'>
          <img src={gentiane2} className='object-contain w-full h-full' />
        </div>

        <div className='product-camera absolute z-0 bg-black h-[100vh] w-[100vw]'>
          <picture>
            <source
              media='(max-width: 1024px)'
              srcSet={craftMob}
              className='absolute z-0 object-cover h-full w-full'
            />
            <source
              media='(min-width: 1025px)'
              srcSet={craftPc}
              className='absolute z-0 object-cover h-full w-full'
            />
            <img src={craftPc} className='absolute z-0 object-cover h-full w-full' />
          </picture>

        </div>
      </div>
    </>
  )
}

export default Product