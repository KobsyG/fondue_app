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

const montMobile = require('../../../images/MobileMontagneCraft.png')
const montPc = require('../../../images/PcMontagneCraft.png')
const echelle = require('../../../images/echelle-seul-blanc.png')


const Terroir = () => {

  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {

    let ctx = gsap.context(() => {


      const gentTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.paturage',
          start: 'bottom center',
        },
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

      const gentTl2 = gsap.timeline({
        scrollTrigger: {
          trigger: '.montagne',
          start: 'bottom bottom',
        },
      });

      gentTl2.from('.fleur2', {
        yPercent: 100,
        duration: 0.3,
        ease: 'none',
      }).to('.fleur2', {
        yPercent: 10,
        duration: 0.1,
        ease: 'none',
      }, '>').to('.fleur2', {
        yPercent: -2,
        duration: 0.1,
        ease: 'none',
      }, '>').fromTo('.fleur2', {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
      }, {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        duration: 0.3,
      }, 0);

      //----------------------------------------------------------------------------
      //-------------------------------- GSAP --------------------------------------
      //----------------------------------------------------------------------------


    })
    return () => ctx.revert();
  }, [])

  return (
    <>
      <div className='terroir-container relative w-[100vw] aspect-[9/12] bg-fondue-blue'>

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

        <p style={{ fontFamily: 'AvocadoCake' }} className='w-full absolute top-[15%] text-white text-center text-[2vw]'>
          En Auvergne, fromage et terroir sont intimement liés, chacun marquant l'autre de son empreinte.
          <br />
          <br />
          Le Cantal est le seul département à porter le nom d'un fromage.
        </p>

        <div className='paturage w-full h-[35%] absolute top-[30%] flex items-center justify-center' >
          <div className='h-full w-1/2 flex justify-center items-center'>
          </div>
          <div className='h-full w-1/2 flex justify-center items-center' >
            <p style={{ fontFamily: 'AvocadoCake' }} className='w-[50%] text-center text-[3vw] text-white'>
              La flore variée de nos pâturages d'estive qui régale les troupeaux n'est pas étrangère au saveurs de nos fromages...
            </p>
          </div>
        </div>

        <div className='fleur h-[15%] w-[10%] absolute z-10 bottom-[22%] right-[15%]'>
          <img src={gentiane1} className='object-contain w-full h-full' />
        </div>
        <div className='fleur2 h-[10%] w-[10%] absolute z-10 bottom-[8%] right-[30%]'>
          <img src={gentiane2} className='object-contain w-full h-full' />
        </div>

        <div className='montagne absolute z-10 bottom-[15%] left-[15%] h-[50%] w-[35%]'>
          <img src={echelle} className='w-full object-contain' />
        </div>

        <div className='montagne absolute z-0 w-full bottom-0'>
          <img src={montPc} className='w-full object-contain' />
          {/* 
          <picture className='w-full object-contain'>
            <source
              media='(max-width: 1024px)'
              srcSet={montMobile}
            />
            <source
              media='(min-width: 1025px)'
              srcSet={montPc}
            />
            <img src={montPc}/>
          </picture>
           */}
        </div>

      </div >
      <div className='bg-black h-[100vh]' />
    </>
  )
}

export default Terroir;