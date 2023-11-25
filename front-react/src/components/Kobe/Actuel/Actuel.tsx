import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { gsap } from 'gsap'
import './Actuel.css'
const hautmontagne = require("../../../images/Kobe/haut-mont.png");
const basmontagne = require("../../../images/Kobe/bas-mont.png");
const montcoul = require("../../../images/Kobe/mont-coul.png");
const compere = require("../../../images/Kobe/comper.png")
const text = require("../../../images/Kobe/text.png")
const couleeTel = require("../../../images/Kobe/coulee-telephone.png")
const couleePc = require("../../../images/Kobe/coulee-ordi.png")
const logo = require("../../../images/logo-bleu.png")

const montagnePC = require("../../../images/Kobe/Montagne CP.png")
const montagne16 = require("../../../images/Kobe/Montagne 16 cm.png")

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

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".histoire-container",
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
        },
      });

      tl.to(".hist1", {
        opacity: 0,
        duration: 1,
      }).to(".hist2", {
        opacity: 1,
        duration: 1,
      }).to(".hist2", {
        duration: 1,
      }).to(".hist2", {
        opacity: 0,
        duration: 1,
      }).to(".hist3", {
        opacity: 1,
        duration: 1,
      });
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



    // --------------------------------------------------------------------------
    // ------------------------- TERROIR ANIMATION ------------------------------
    // --------------------------------------------------------------------------


    // gsap.to(".coulee", {
    //   opacity: 0,
    //   duration: 1,
    //   scrollTrigger: {
    //     trigger: ".montagne",
    //     start: 'top top',
    //     end: 'bottom top',
    //     scrub: true,
    //   },
    // })

    gsap.to(".fleur", {
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: ".montagne",
        start: 'top top',
        // endTrigger: '.montagne-container',
        // end: '20% top',
        scrub: true,
        // pin: ".montagne",
        // markers: true,
      },
    })

    // gsap.to(".fleur", {
    //   opacity: 1,
    //   // duration: 1,
    //   scrollTrigger: {
    //     trigger: ".montagne",
    //     start: 'top top',
    //     endTrigger: '.montagne-container',
    //     end: '20% top',
    //     scrub: true,
    //     pin: ".montagne",
    //     markers: true,
    //   },
    // })

    // gsap.to(".montagne", {
    //   scrollTrigger: {
    //     trigger:
    //     pin
    //   }
    // })

    return () => ctx.revert();

  }, [])

  useEffect(() => {
  }, [])


  return (
    <>
      <div className='landing-container w-full aspect-[1/8] bg-fondue-blue'>


        <div className='title w-[full] h-[100vh] flex justify-center items-center'>
          <img className='w-[60%] sm:h-[40%] z-30 object-contain' src={logo} />
        </div>

        <div className='main-container w-[80%] mx-auto bg-fondue-blue'>

          <div className='cheese-contain -top-[130vh] 2xl:-top-[170vh] absolute z-10 w-[80%] right-[10%]'>
            <div className='carree-cheese w-full h-[200vh] bg-fondue-yellow' />
            {/* <picture>
            <source
                media="(max-width: 600px)"
                srcSet={`${couleeTel}`}
              />
            <source
                media="(min-width: 600px)"
                srcSet={`${couleePc}`}
              />
              <img className='' src={couleePc}/>
            </picture> */}
            <picture className='coulee'>
              {/* <source
                  media="(max-width: 600px)"
                  srcSet={couleeTel}
                />
                <source
                  media="(min-width: 601px)"
                  srcSet={couleePc}
                /> */}
              <img src={couleePc} />
            </picture>
          </div>

          <div className='histoire-container w-full h-[400vh] '>
            <div className='histoire z-20 w-full h-[100vh] flex flex-col lg:flex-row'>
              <div className='compere w-full h-1/2 lg:h-full lg:w-1/2 p-[10%]'>
                <img className='h-full w-full object-contain' src={compere} />
              </div>
              <div className='text mb-[20%] lg:mb-[0%] lg:right-[5%] relative w-full h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center'>
                <p className='hist1 w-[80%] absolute text-center text-[18px] sm:text-[26px] 2xl:text-[36px] 3xl:text-[46px] 4xl:text-[56px]' style={{ fontFamily: 'AvocadoCake' }}>{title}</p>
                <p className='hist2 w-[80%] absolute text-center text-[18px] sm:text-[26px] 2xl:text-[36px] 3xl:text-[46px] 4xl:text-[56px] 2xl:text-justify opacity-0' style={{ fontFamily: 'AvocadoCake' }}>{histoireFirst}</p>
                <p className='hist3 w-[80%] absolute text-center text-[18px] sm:text-[26px] 2xl:text-[36px] 3xl:text-[46px] 4xl:text-[56px] 2xl:text-justify opacity-0' style={{ fontFamily: 'AvocadoCake' }}>{histoireSecond}</p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className='terroir-container w-full h-[400vh] bg-fondue-blue'>
          <div className='coulee w-[80%] z-10 mx-auto sticky top-0'>
            <img className='w-full' src={coulee} />
          </div>
          <div className='montagne z-0 sticky top-0 h-[200vh]'>
            <img className='w-full object-cover' src={montCP} />
            {/* <img className='fleur h-48 absolute top-40 left-80 opacity-0' src={require('../../../images/fleur.png')} />
            <img className='fleur h-48 absolute top-40 right-80 opacity-0' src={require('../../../images/fleur.png')} />
            <div className='h-[100vh]'>
              <img className='h-full' src={basmontagne} />
            </div> */}
      </div>

      <div className='bg-red-400 h-[100vh]' />

      {/* <div>
        <img className='coulee'
                // src={montagne16}
                // srcSet={`${couleePc} 1063w, ${montagne16} 4500w`}
                // sizes='(max-width: 1000px) 1063px, 4500px'
              />
        </div> */}



      {/* <div className='bg-montagne-container bg-red-500 h-[100vh]'/> */}

      {/* </div> */}





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