import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { gsap } from 'gsap'
import './Actuel.css'
const montagne = require("../../../images/montagne.png");
const montcoul = require("../../../images/mont-coul.png");
const compere = require("../../../images/comper.png")
const text = require("../../../images/text.png")
const title = "Il était une fois deux amis, partis bras dessus bras dessous pour conquérir un titre aussi inattendu que réjouissant..."
const coulee = require("../../../images/coulee.png")

const Actuel = () => {

  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {

    let ctx = gsap.context(() => {

      // gsap.to('.cheese-contain', {
      //   opacity: 0,
      //   scrollTrigger: {
      //     trigger: '.title',
      //     start: 'bottom top',
      //     end: '+=200px',
      //     scrub: true,
      //   }
      // })

      // gsap.to('.compere', {
      //   opacity: 0,
      //   scrollTrigger: {
      //     trigger: '.title',
      //     start: 'bottom top',
      //     end: '+=200px',
      //     scrub: true,
      //   }
      // })

      gsap.from(".cheese-contain", {

        // y: '-74vh',
        y: '-160vh',


        scrollTrigger: {
          trigger: ".title",
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        }
      },
      )

      gsap.to(".histoire", {
        scrollTrigger: {
          trigger: ".histoire",
          pin: true,
          start: 'center center',
          end: '+=500',
        }
      })

    })

    return () => ctx.revert();

  }, [])

  useEffect(() => {
  }, [])


  return (
    <>
      <div className='landing-container w-full h-[400vh] bg-fondue-blue'>
        {/* <div className='w-[80vw] h-full relative'> */}
          <div className='title relative h-[20vh] w-[full] bg-fondue-blue flex justify-center'>
            <img className='h-full z-30' src={require("../../../images/logo-bleu.png")} />
          </div>


          <div className='cheese-contain z-10 absolute w-[80%] h-[200vh] right-[10%]'>
            <div className='carree-cheese w-full h-[130vh] bg-fondue-yellow' />
            <div className='coulee'>
              <img className='w-full' src={coulee} />
            </div>
          </div>


          <div className='histoire sticky z-20 w-[80%] aspect-[16/9] flex mx-auto mt-[20vh]'>
            <div className='compere h-full w-1/2'>
              <img className='h-full w-full object-contain' src={compere} />
            </div>
            <div className='text h-full w-1/2 flex items-center'>
              <p className='text-justify text-[22px] md:text-[28px] lg:text-[32px] w-[80%]' style={{ fontFamily: 'AvocadoCake' }}>{title}</p>
            </div>
          </div>





          <div className='montagne w-[100vw] mt-[20vh]'>
            <img src={montagne} />
          </div>
        {/* </div> */}








        {/* <div className='suite w-full h-[50vh] bg-red-200' />
        <div className='suite w-full h-[50vh] bg-red-300' />
        <div className='suite w-full h-[50vh] bg-red-400' />
        <div className='suite w-full h-[50vh] bg-red-500' />
        <div className='suite w-full h-[50vh] bg-red-600' /> */}


      </div>
    </>
  )
}

{/* <div className='coulant relative w-full'>
          <div className='top-cheese absolute z-[1] w-full h-[100vh] -top-[100vh] bg-fondue-yellow' />
          <div className='coulee-wrap absolute z-[1] h-[40vh] -top-[10vh] w-full bg-transparent'>
            <img className='object-contain h-full' src={require("../../../images/oui.png")} />
          </div>
        </div>

        <div className='histoire relative h-[60vh] w-full bg-fondue-blue'>
          <h1 className='absolute z-[3] h-[30vh] w-[30vw] top-[20vh] left-[20vw]'>Bonjour</h1>
          <p className='absolute z-[3] h-[30vh] w-[30vw] top-[20vh] left-[60vw]'>blablabla <br /> bliblibli <br /> blublublu</p>
        </div>

        <div className='montagne-wrap w-full h-[40vh] bg-fondue-blue'>
          <img className='montagne object-cover w-full h-full' src={mont} />
        </div> */}

export default Actuel