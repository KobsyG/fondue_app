import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { gsap } from 'gsap'
import './Actuel.css'
const montagne = require("../../../images/montagne.png");
const montcoul = require("../../../images/mont-coul.png");
const compere = require("../../../images/comper.png")
const text = require("../../../images/text.png")
const coulee = require("../../../images/coulee.png")

const title = "Il était une fois deux amis, partis bras dessus bras dessous pour conquérir un titre aussi inattendu que réjouissant..."
const histoireFirst = "C'est ainsi que le 13 mars 2022, à Montréjeau, Alban et Jean-Jacques remportent le premier titre de Champion de France de Fondue aux Fromages devant 20 autres équipes candidates au titre. Ils innovent en proposant une recette à base des 5 AOP du Cantal ! Et quelques ingrédients secrets qui vont vous être dévoilés..."
const histoireSecond = "Si bonne humeur et convivialité sont au rendez-vous, la performance n’en est pas moins sérieuse, en témoigne le jury de professionnels composé de Meilleurs Ouvriers de France fromagers et restaurateurs, et de critiques gastronomiques, venus spécialement pour déguster et départager LA meilleure fondue."


const Actuel = () => {

  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {

    let ctx = gsap.context(() => {

      gsap.to(".histoire", {
        scrollTrigger: {
          trigger: ".histoire-container",
          start: 'top top',
          end: 'bottom bottom',
          pin: '.histoire',
        }
      })

      gsap.to(".hist1", {
        scrollTrigger: {
          trigger: ".histoire-container",
          start: '25% bottom',
          end: '25% center',
          scrub: true,
        },
        opacity: 0,
      })

      // gsap.to(".hist2",
      //   {
      //     opacity: 1,
      //     // autoAlpha: 1,
      //     scrollTrigger: {
      //       trigger: ".histoire-container",
      //       start: '25% center',
      //       end: '25% top',
      //       scrub: true,
      //     },
      //   })

      // gsap.to(".hist2",
      //   {
      //     opacity: 0,
      //     // autoAlpha: 0,
      //     scrollTrigger: {
      //       trigger: '.histoire-container',
      //       start: '50% center',
      //       end: '50% top',
      //       scrub: true,
      //       markers: true,
      //       onUpdate: (self) => {
      //         console.log("HIST 2 :", self.progress);
      //       },
      //     },
      //   });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".histoire-container",
          start: '25% center',
          end: '50% top',
          scrub: true,
        },
      });

      tl.to(".hist2", {
        opacity: 1,
        duration: 1,
      }).to(".hist2", {
        opacity: 1,
        duration: 1,
      }).to(".hist2", {
        opacity: 0,
        duration: 1,
      });

      gsap.to(".hist3", {
        scrollTrigger: {
          trigger: ".histoire-container",
          start: '75% bottom',
          end: '75% center',
          scrub: true,
        },
        opacity: 1,
      })
    })

    gsap.to(".cheese-contain", {
      y: '170vh',
      ease: 'none',
      scrollTrigger: {
        trigger: ".title",
        start: 'top top',
        endTrigger: '.histoire-container',
        end: 'top top',
        scrub: true,
      },
    })

    gsap.to(".main-container", {
      scrollTrigger: {
        trigger: ".histoire-container",
        start: 'top top',
        end: 'top top',
        scrub: true,
      },
      backgroundColor: '#FED88E',
      ease: "none",
    })

    return () => ctx.revert();

  }, [])

  useEffect(() => {
  }, [])


  return (
    <>
      <div className='landing-container w-full aspect-[1/8] bg-fondue-blue'>


        <div className='title w-[full] h-[100vh] flex justify-center items-center'>
          <img className='h-[40%] z-30' src={require("../../../images/logo-bleu.png")} />
        </div>

        <div className='main-container w-[80%] mx-auto bg-fondue-blue'>

          <div className='cheese-contain -top-[130vh] md:-top-[170vh] absolute z-10 w-[80%] right-[10%]'>
            <div className='carree-cheese w-full h-[200vh] bg-fondue-yellow' />
            <div className='coulee'>
              <img className='w-full' src={coulee} />
            </div>
          </div>

          <div className='histoire-container w-full h-[400vh] '>
            <div className='histoire z-20 w-full h-[100vh] flex'>
              <div className='compere h-full w-1/2 md:p-[10%]'>
                <img className='h-full w-full object-contain' src={compere} />
              </div>
              <div className='text relative h-full w-1/2 flex items-center'>
                <p className='hist1 absolute text-center md:text-justify text-[18px] md:text-[28px] lg:text-[32px] w-[80%]' style={{ fontFamily: 'AvocadoCake' }}>{title}</p>
                <p className='hist2 absolute text-center md:text-justify text-[18px] md:text-[28px] lg:text-[32px] w-[80%] opacity-0' style={{ fontFamily: 'AvocadoCake' }}>{histoireFirst}</p>
                <p className='hist3 absolute text-center md:text-justify text-[18px] md:text-[28px] lg:text-[32px] w-[80%] opacity-0' style={{ fontFamily: 'AvocadoCake' }}>{histoireSecond}</p>
              </div>
            </div>
          </div>



          {/* <div className='montagne w-[100vw] mt-[20vh]'>
            <img src={montagne} />
          </div> */}
          {/* </div> */}








          {/* <div className='suite w-full h-[50vh] bg-red-200' />
        <div className='suite w-full h-[50vh] bg-red-300' />
        <div className='suite w-full h-[50vh] bg-red-400' />
        <div className='suite w-full h-[50vh] bg-red-500' />
        <div className='suite w-full h-[50vh] bg-red-600' /> */}


        </div>
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