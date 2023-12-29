import gsap from 'gsap';
import { useLayoutEffect, useRef, useState } from 'react'

import leftArrow from '../images/FFP/leftArrow.svg'

const pageCahier = require('../images/FFP/pageCahierCut.png')

function FourniComponent({ fourniList}: { fourniList: JSX.Element[] }) {
  const fourniContainer = useRef(null);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [oldSlide, setOldSlide] = useState(0);
  const [oldFourni, setOldFourni] = useState(fourniList[0]);
  const [canSlide, setCanSlide] = useState(true);

  const handleSlideChange = () => {
    if (canSlide) {
      setCanSlide(false);
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
          setOldSlide(currentSlide);
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

        <div
          className='fourniNew h-full w-full absolute z-20'>
          <img src={pageCahier} className='h-full w-full object-cover absolute' />
          <div className='absolute fromBeco:mt-4' >
            <div className='flex items-center justify-start w-full mt-4 ml-[30px] 1536:ml-[50px] fromJB:mt-8'>
              <button
                className='h-8 1536:h-10 fromJB:h-12 mr-4'
                onClick={handleSlideChange}
              >
                <img src={leftArrow} className='object-cover h-full' />
              </button>
              <p className='text-fondue-red text-[2vw] mr-6'>{currentSlide + 1}</p>
              <h3 style={{ fontFamily: 'AvocadoCake' }} className='text-fondue-red text-[22px] w-[50%] 1536:text-[26px] fromJB:text-[30px] fromJB:w-[60%]'>ET ON LA TROUVE OÙ CETTE MERVEILLE ?</h3>
            </div>
            {fourniList[currentSlide]}
          </div>
        </div>

        <div className='fourniOld h-full w-full'>
          <img src={pageCahier} className='h-full w-full object-cover absolute' />
          <div className='absolute fromBeco:mt-4' >
            <div className='flex items-center justify-start w-full mt-4 ml-[30px] 1536:ml-[50px] fromJB:mt-8'>
              <img src={leftArrow} className='h-8 1536:h-10 fromJB:h-12 mr-4' />
              <p className='text-fondue-red text-[2vw] mr-6'>{oldSlide + 1}</p>
              <h3 style={{ fontFamily: 'AvocadoCake' }} className='text-fondue-red text-[22px] w-[50%] 1536:text-[26px] fromJB:text-[30px] fromJB:w-[60%]'>ET ON LA TROUVE OÙ CETTE MERVEILLE ?</h3>
            </div>
            {oldFourni}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FourniComponent

/* ########################## COMPUTER  ##########################*/

export const fourni1 = (
  <ul style={{ fontFamily: 'OpenSansBold' }} className='text-fondue-blue mt-5 ml-12 h-full w-full'>
    <li className='w-[70%] 1536:w-[74%]'>
      <h1 className='font-bold text-[1.2vw]'>DISTILLERIE LOUIS COUDERC</h1>
      <p className='text-left text-[1vw]'>14 rue Victor Hugo à Aurillac</p>
      <p className='text-left text-[1vw]'>commercial@distillerie-couderc.com</p>
      <p className='text-left text-[1vw]'>04 71 48 01 50</p>
    </li>
    <br />
    <li className='w-[64%] 1536:w-[72%]' >
      <div className='flex'>
        <h1 className='font-bold text-[1.2vw]'>FROMAGERIE MORIN</h1>
        <p className='text-left text-[1vw]'>&nbsp;à Aurillac</p>
      </div>
      <p className='text-left text-[1vw]'>- Boutique au 13 avenue du Garric</p>
      <p className='text-left text-[1vw]'>&nbsp;&nbsp;04 71 43 25 84</p>
      <p className='text-left text-[1vw]'>- Centre Commercial de Marmiers</p>
      <p className='text-left text-[1vw]'>&nbsp;&nbsp;04 71 63 59 18</p>
      <p className='text-left text-[1vw]'>- Marché aux Fromages, 7 rue du buis</p>
      <p className='text-left text-[1vw]'>&nbsp;&nbsp;04 71 48 63 10</p>
      <p className='text-left text-[1vw]'>- Les Marchés de: Tulle, Ussel, Egleton, Bugeat, Le Rouget, Maurs, Vic-sur-Cère et Sainte Genevieve sur Argence</p>
    </li>
    <br />
  </ul>
);

export const fourni2 = (
  <ul style={{ fontFamily: 'OpenSansBold' }} className='text-fondue-blue mt-5 ml-12 h-full w-full'>
    <li className='w-[70%] 1536:w-[74%]'>
      <div className='flex'>
        <h1 className='font-bold text-[1.2vw]'>E.LECLERC</h1>
        <p className='text-left text-[1.2vw]'>&nbsp;à Aurillac</p>
      </div>
      <p className='text-left text-[1vw]'>26 Rue de la Jordanne</p>
      <p className='text-left text-[1vw]'>04 71 64 25 05</p>
    </li>
    <br />
    <li className='w-[64%] 1536:w-[72%]' >
      <h1 className='font-bold text-[1.2vw]'>FROMAGERIE LAQUEUILLE</h1>
      <p className='text-left text-[1vw]'>Gare de Laqueuille, 63820 Saint-Julien Puy-Lavèze</p>
      <p className='text-left text-[1vw]'>www.fromages-laqueuille.fr</p>
      <p className='text-left text-[1vw]'>04 73 22 18 06</p>
    </li>
    <br />
    <li className='w-[64%] 1536:w-[72%]' >
      <h1 className='font-bold text-[1.2vw]'>FROMAGERIE DUROUX</h1>
      <p className='text-left text-[1vw]'>12 Route de Chaussenac, 19220 Rilhac-Xaintrie</p>
      <p className='text-left text-[1vw]'>www.fromagerie-duroux.fr</p>
      <p className='text-left text-[1vw]'>05 55 28 27 62</p>
    </li>
    <br />
  </ul>
);

export const fourni3 = (
  <ul style={{ fontFamily: 'OpenSansBold' }} className='text-fondue-blue mt-5 ml-12 h-full w-full'>
    <li className='w-[70%] 1536:w-[74%]'>
      <div className='flex'>
        <h1 className='font-bold text-[1.2vw]'>UTILE</h1>
        <p className='text-left text-[1.2vw]'>&nbsp;à Lafeuillade-en-Vézie</p>
      </div>
      <p className='text-left text-[1vw]'>8 Rue Germain Prat, 15130 Lafeuillade-en-Vézie </p>
      <p className='text-left text-[1vw]'>04 63 41 94 71</p>
    </li>
    <br />
    <li className='w-[70%] 1536:w-[74%]'>
      <div className='flex'>
        <h1 className='font-bold text-[1.2vw]'>SPAR</h1>
        <p className='text-left text-[1.2vw]'>&nbsp;Le Lioran</p>
      </div>
      <p className='text-left text-[1vw]'>Galerie Marchande Sumene, 15300 Laveissière</p>
      <p className='text-left text-[1vw]'>04 71 49 58 81</p>
    </li>
    <br />
    <li className='w-[70%] 1536:w-[74%]'>
      <div className='flex'>
        <h1 className='font-bold text-[1.2vw]'>Clémentine et Cie</h1>
        <p className='text-left text-[1.2vw]'>&nbsp;à Ussel</p>
      </div>
      <p className='text-left text-[1vw]'>Parc d'activité du bois Saint Michel, 19200 Saint-Angel </p>
      <p className='text-left text-[1vw]'>www.clementine-et-cie.fr</p>
      <p className='text-left text-[1vw]'>05 55 95 82 76</p>
    </li>
    <br />
  </ul>
);

/* ########################## SMARTPHONE  ##########################*/

