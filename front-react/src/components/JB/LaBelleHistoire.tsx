import CloudCheese from "./CloudCheese";
import cntl from 'cntl';
import salers from '../../images/Salers.jpg'
import bread from '../../images/sourdough-bread-table.jpg'
import cheese from '../../images/cheese-fondue-600420.jpeg'
import postit1 from '../../images/postit1.png'
import postit2 from '../../images/postit2.png'
import postit3 from '../../images/postit3.png'

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const parentContainer = cntl`
  relative
  z-10
  w-[100vw]
  
  flex
  flex-col
  justify-center

  sm:grid
  sm:grid-cols-4
  
  lg:grid
  lg:grid-cols-10
`;

const albanContainer = cntl`
  hidden

  sm:flex
  sm:items-center
  sm:justify-center

  sm:col-start-1
  sm:col-end-2

  lg:col-start-1
  lg:col-end-4
`

const albanDiv = cntl`
  sm:w-[80%]
  sm:aspect-[4/5]
  sm:rounded-tl-[4rem]
  
  sm:bg-yellow-950
  sm:flex
  sm:flex-col
  sm:items-center
  sm:justify-center
`

const middleContainer = cntl`
  flex
  flex-col
  items-center

  sm:flex
  sm:items-center
  sm:justify-center

  sm:col-start-2
  sm:col-end-4

  lg:col-start-4
  lg:col-end-8
`

const middleDiv = cntl`
  w-[90%]
  aspect-[4/6]
  rounded-t-full
  overflow-hidden
  flex
  items-center
  justify-center
  
  lg:w-[100%]
`

const jjContainer = cntl`
  hidden

  sm:flex
  sm:items-center
  sm:justify-center

  sm:col-start-4
  sm:col-end-5

  lg:col-start-8
  lg:col-end-11
`

const jjDiv = cntl`
  sm:w-[80%]
  sm:aspect-[4/5]
  sm:rounded-tr-[4rem]

  sm:bg-yellow-950

  mt-auto
`

const title = cntl`
  text-center
  text-white

  text-[28px]
  mx-auto 
  mt-[10vh]
  mb-[5vh]
  w-[80vw]

  sm:text-[28px]
  sm:col-span-4
  sm:mx-auto

  lg:text-[36px]
  lg:col-span-10
  lg:mx-auto

  xl:text-[40px]
`

const championnat = cntl`
  text-center
  text-white
  text-[24px]
  w-[90%]
  mt-[4vh]

  md:w-[100%]
  lg:text-[30px]
  xl:text-[40px]

`

const paragraphe = cntl`
  w-[90%]
  text-justify
  text-white
  
  text-[20px]
  mt-[4vh]
  mb-[4vh]

  lg:w-[100%]
  lg:text-[26px]
`

function LaBelleHistoire() {

  const contextContainer = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.middleImg', {
        scale: 1,
      }, {
        scrollTrigger: {
          trigger: '.middleDiv',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
        scale: 1.5,
      })

      gsap.fromTo('.albanDiv', {
        yPercent: 0,
      }, {
        scrollTrigger: {
          trigger: '.parentContainer',
          start: 'center bottom',
          end: 'bottom top',
          scrub: true,
        },
        yPercent: -30,
      })


      gsap.fromTo('.jjDiv', {
        yPercent: 0,
      }, {
        scrollTrigger: {
          trigger: '.parentContainer',
          start: 'center bottom',
          end: 'bottom top',
          scrub: true,
        },
        yPercent: -100,
      })

    }, contextContainer)

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div ref={contextContainer} className='relative bg-white'>
      <div className='absolute z-0 top-0 left-0 w-full h-full bg-fondue-blue rounded-tr-[4rem]' />

      <div className={`${parentContainer} parentContainer`}>
        <CloudCheese classAdd="hidden sm:block" />
        <p
          style={{ fontFamily: 'AvocadoCake' }}
          className={title}>
          Il était une fois deux amis, partis bras dessus bras dessous, pour conquérir un titre aussi inattendu que réjouissant.
        </p>
        <div className={albanContainer}>
          <div className={`${albanDiv} albanDiv`}>
            <div className="w-[50%] mx-auto mt-[3%] h-[5%] bg-gray-500" />
            <img src={postit2} className='mx-auto w-full h-full' />
          </div>
        </div>
        <div className={middleContainer}>
          <div className={`${middleDiv} middleDiv`}>
            <img src={salers} className='middleImg object-cover w-full h-full' />
          </div>
          <p
            style={{ fontFamily: 'AvocadoCake' }}
            className={championnat}>
            Le Championnat de Frande de fondue
          </p>
          <p
            style={{ fontFamily: 'MinionPro' }}
            className={paragraphe}>
            C'est ainsi que le 13 mars 2022, à Montréjeau, Alban et Jean-Jacques remportent le premier titre de Champion de France de Fondue aux Fromages devant 20 autres équipes candidates au titre.
            Ils innovent en proposant une recette à base des 5 AOP du Cantal ! Et quelques ingrédients secrets qui vont vous être dévoilés...
            <br />
            <br />
            Si bonne humeur et convivialité sont au rendez-vous, la performance n'en est pas moins sérieuse, en témoigne le jury de professionnels composé de Meilleurs Ouvriers de France fromagers et restaurateurs, et de critiques gastronomiques, venus spécialement pour déguster et départager LA meilleure fondue.
          </p>

        </div>
        <div className={jjContainer}>
          <div className={`${jjDiv} jjDiv`}>
            <div className="w-[50%] mx-auto mt-[3%] h-[5%] bg-gray-500" />
            <img src={postit3} className='mx-auto w-full h-full' />
          </div>
        </div>

      </div>

    </div >
  )
}

export default LaBelleHistoire