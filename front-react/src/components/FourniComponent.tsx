import gsap from 'gsap';
import { useLayoutEffect, useRef, useState } from 'react'

import leftArrow from '../images/FFP/leftArrow.svg'
import rightArrow from '../images/FFP/rightArrow.svg'

const pageCahier = require('../images/FFP/pageCahierCut.png')

function FourniComponent({ fourniList }: { fourniList: JSX.Element[] }) {
  const fourniContainer = useRef(null);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [oldFourni, setOldFourni] = useState(fourniList[0]);
  const [canSlide, setCanSlide] = useState(true);

  const handleLeftButtonClick = () => {
    if (canSlide) {
      setCanSlide(false)
      setCurrentSlide((prevSlide) => {
        if (prevSlide === 0) {
          return fourniList.length - 1;
        } else {
          return prevSlide - 1;
        }
      });
    }
  };

  const handleRightButtonClick = () => {
    if (canSlide) {
      setCanSlide(false)
      setCurrentSlide((prevSlide) => {
        if (prevSlide === fourniList.length - 1) {
          return 0;
        } else {
          return prevSlide + 1;
        }
      });
    }
  };

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {

      gsap.fromTo('.fourniNew', {
        xPercent: 100,
      }, {
        xPercent: 0,
        duration: 1,
        onComplete: () => {
          setOldFourni(fourniList[currentSlide]);
          setCanSlide(true);
        },
      })
    }, fourniContainer)

    return () => {
      ctx.revert();
    };

  }, [currentSlide]);

  return (
    <div ref={fourniContainer}>
      <img src={pageCahier} className='h-full w-full object-cover absolute' />
      <div className='absolute h-full w-full top-4 left-4 shadow-2xl'>

        <div className='fourniNew h-full w-full absolute z-20'>
          <img src={pageCahier} className='h-full w-full object-cover absolute' />
          <div className='absolute' >
            <h3 style={{ fontFamily: 'AvocadoCake' }} className='text-fondue-red text-[22px] macBeco:text-[25px] w-[50%] mt-10 ml-[80px] macBeco:ml-32'>ET ON LA TROUVE OÙ CETTE MERVEILLE ?</h3>
            {fourniList[currentSlide]}
          </div>
        </div>

        <div className='fourniOld h-full w-full'>
          <img src={pageCahier} className='h-full w-full object-cover absolute' />
          <div className='absolute'>
            <h3 style={{ fontFamily: 'AvocadoCake' }} className='text-fondue-red text-[22px] macBeco:text-[25px] w-[50%] mt-10 ml-[80px] macBeco:ml-32'>ET ON LA TROUVE OÙ CETTE MERVEILLE ?</h3>
            {oldFourni}
          </div>
        </div>
      </div>

      <div className='fourniButton w-32 h-16 p-3 absolute bottom-[10%] left-4 rotate-6 z-30 flex justify-between'>
        <button onClick={handleLeftButtonClick} className='left h-full'>
          <img src={leftArrow} className='h-full' />
        </button>
        <button onClick={handleRightButtonClick} className='right h-full'>
          <img src={rightArrow} className='h-full' />
        </button>
      </div>
    </div>
  )
}

export default FourniComponent

/* ########################## COMPUTER  ##########################*/

export const fourni1 = (
  <ul style={{ fontFamily: 'OpenSansBold' }} className='mt-5 ml-10 macBeco:ml-16 text-fondue-blue text-[12px] macBeco:text-[15px] w-[80%]'>
      <li className='' >
          <h1 className='font-bold text-[15px] fromBeco:text-[18px]'>DISTILLERIE LOUIS COUDERC</h1>
          <p className='text-left'>14 rue Victor Hugo à Aurillac</p>
          <p className='text-left'>04 71 48 01 50 - commercial@distillerie-couderc.com</p>
      </li>
      <br />
      <li className='max-w-[290px] macBeco:max-w-[350px]' >
          <h1 className='font-bold  text-[15px] fromBeco:text-[18px]'>FROMAGERIE MORIN</h1>
          <p className='text-left'>Marché aux Fromages</p>
          <p className='text-left'>7 rue du buis à Aurillac - 04 71 48 63 10</p>
          <p className='text-left'>Morin Fromager Center Commercial de Marmiers à Aurillac - 04 71 63 59 18</p>
          <p className='text-left'>Morin Fromager Garric</p>
          <p className='text-left'>13 avenue du Garric à Aurillac - 04 71 43 25 84</p>
          <br />
          <p className='text-left'>Marchés: Tulle, Ussel, Egleton, Bugeat, Le Rouget, Maurs Vic-sur-Cère, Ste Genevieve sur Argence</p>
      </li>
      <br />
      <li className='max-w-[290px] macBeco:max-w-[350px]' >
          <h1 className='font-bold  text-[15px] macBeco:text-[17px]'>LECLERC AURILLAC</h1>
          <p className='text-left'>26 Rue de la Jordanne</p>
          <p></p>
      </li>
  </ul>
);

export const fourni2 = (
  <ul style={{ fontFamily: 'OpenSansBold' }} className='mt-5 ml-10 macBeco:ml-16 text-fondue-blue text-[12px] macBeco:text-[15px] w-[80%]'>
      <li className='max-w-[290px] macBeco:max-w-[350px]' >
          <h1 className='font-bold  text-[15px] macBeco:text-[17px]'>LECLERC AURILLAC</h1>
          <p className='text-left'>26 Rue de la Jordanne</p>
          <p></p>

      </li>
  </ul>
);

export const fourni3 = (
  <ul style={{ fontFamily: 'OpenSansBold' }} className='mt-5 ml-10 macBeco:ml-16 text-fondue-blue text-[12px] macBeco:text-[15px] w-[80%]'>
      <li className='max-w-[290px] macBeco:max-w-[350px]' >
          <h1 className='font-bold  text-[15px] macBeco:text-[17px]'>33333333333333</h1>
          <p className='text-left'>333333333333 BLAALALALALALALALABLAALALALALALALALABLAALALALALALALALABLAALALALALALALALABLAALALALALALALALABLAALALALALALALALABLAALALALALALALALABLAALALALALALALALABLAALALALALALALALABLAALALALALALALALABLAALALALALALALALABLAALALALALALALALABLAALALALALALALALABLAALALALALALALALABLAALALALALALALALABLAALALALALALALALABLAALALALALALALALABLAALALALALALALALABLAALALALALALALALA</p>
          <p></p>

      </li>
  </ul>
);

/* ########################## SMARTPHONE  ##########################*/

