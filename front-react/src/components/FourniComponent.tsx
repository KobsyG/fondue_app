import gsap from 'gsap';
import { useLayoutEffect, useRef, useState } from 'react'

import leftArrow from '../images/FFP/leftArrow.svg'
import './Coming.css'

const pageCahier = require('../images/FFP/pageCahierCut.png')

function FourniComponent({ fourniList }: { fourniList: JSX.Element[] }) {
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

  }, [currentSlide, fourniList]);

  return (
    <div ref={fourniContainer}>
      <img src={pageCahier} className='h-full w-full object-cover absolute' alt='' />
      <div className='absolute h-full w-full top-4 left-4 shadow-2xl'>

        <div
          className='fourniNew h-full w-full absolute z-20'>
          <img src={pageCahier} className='h-full w-full object-cover absolute' alt='' />
          <div className='absolute mt-2 ml-2 sm:mt-4 sm:ml-4 lg:mt-0 lg:ml-0 fromBeco:mt-4' >

            <div className='flex items-center justify-start lg:w-full lg:mt-4 lg:ml-[30px] 1536:ml-[50px] fromJB:mt-8'>
              <button
                className='w-fit h-fit flex items-center'
                onClick={handleSlideChange}
              >
                <img src={leftArrow} className='leftArrow h-6 mr-2 sm:h-10 sm:mr-6 lg:h-8 1536:h-10 fromJB:h-12' alt='' />
                <p className='text-fondue-red text-[6vw] mr-2 sm:mr-6 lg:text-[2vw] lg:mr-6'>{currentSlide + 1}/{fourniList.length}</p>
              </button>
              <h3 style={{ fontFamily: 'AvocadoCake' }} className='text-fondue-red w-[64%] text-[2vh] sm:text-[2.5vh]                              lg:text-[22px] lg:w-[50%] 1536:text-[26px] fromJB:text-[30px] fromJB:w-[60%]'>ET ON LA TROUVE OÙ CETTE MERVEILLE ?</h3>
            </div>



            {fourniList[currentSlide]}
          </div>
        </div>

        <div className='fourniOld h-full w-full'>
          <img src={pageCahier} className='h-full w-full object-cover absolute' alt='' />
          <div className='absolute mt-2 ml-2 sm:mt-4 sm:ml-4 lg:mt-0 lg:ml-0 fromBeco:mt-4' >

            <div className='flex items-center justify-start lg:w-full lg:mt-4 lg:ml-[30px] 1536:ml-[50px] fromJB:mt-8'>
              <img src={leftArrow} className='h-6 mr-2 sm:h-10 sm:mr-6 lg:h-8 1536:h-10 fromJB:h-12' alt='' />
              <p className='text-fondue-red text-[6vw] mr-2 sm:mr-6 lg:text-[2vw] lg:mr-6'>{oldSlide + 1}/{fourniList.length}</p>
              <h3 style={{ fontFamily: 'AvocadoCake' }} className='text-fondue-red w-[64%] text-[2vh] sm:text-[2.5vh]                              lg:text-[22px] lg:w-[50%] 1536:text-[26px] fromJB:text-[30px] fromJB:w-[60%]'>ET ON LA TROUVE OÙ CETTE MERVEILLE ?</h3>
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
    <li className='w-[70%] 1536:w-[65%] fromJB:w-[74%]'>
      <h1 className='font-bold text-[1.2vw]'>DISTILLERIE LOUIS COUDERC</h1>
      <p className='text-left text-[1vw]'>14 rue Victor Hugo à Aurillac</p>
      <p className='text-left text-[1vw]'>commercial@distillerie-couderc.com</p>
      <p className='text-left text-[1vw]'>04 71 48 01 50</p>
    </li>
    <br />
    <li className='w-[64%] 1536:w-[65%] fromJB:w-[72%]' >
      <div className='flex'>
        <h1 className='font-bold text-[1.2vw]'>FROMAGERIE MORIN</h1>
        <p className='text-left text-[1.2vw]'>&nbsp;à Aurillac</p>
      </div>
      <p className='text-left text-[1vw]'>- Boutique au 13 avenue du Garric</p>
      <p className='text-left text-[1vw]'>&nbsp;&nbsp;04 71 43 25 84</p>
      <p className='text-left text-[1vw]'>- Centre Commercial de Marmiers</p>
      <p className='text-left text-[1vw]'>&nbsp;&nbsp;04 71 63 59 18</p>
      <p className='text-left text-[1vw]'>- Marché aux Fromages, 7 rue du buis</p>
      <p className='text-left text-[1vw]'>&nbsp;&nbsp;04 71 48 63 10</p>
      <p className='text-left text-[1vw]'>- Enclos Milhaud, Arpajon-sur-Cère</p>
      <p className='text-left text-[1vw]'>&nbsp;&nbsp;04 71 49 30 96</p>
    </li>
    <br />
  </ul>
);

export const fourni2 = (
  <ul style={{ fontFamily: 'OpenSansBold' }} className='text-fondue-blue mt-5 ml-12 h-full w-full'>
    <li className='w-[64%] 1536:w-[65%] fromJB:w-[72%]'>
      <h1 className='font-bold text-[1.2vw]'>Les Domaines Qui Montent</h1>
      <p className='text-left text-[1vw]'>- 48 Rue Blatin, Clermont-Ferrand</p>
      <p className='text-left text-[1vw]'>&nbsp;&nbsp;04 73 44 80 09</p>
      <p className='text-left text-[1vw]'>- 1 Avenue du Maréchal Leclerc,</p>
      <p className='text-left text-[1vw]'>&nbsp;&nbsp;63800 Cournon d'Auvergne</p>
      <p className='text-left text-[1vw]'>&nbsp;&nbsp;09 74 97 05 29</p>
    </li>
    <br />
    <li className='w-[70%] 1536:w-[65%] fromJB:w-[74%]'>
      <h1 className='font-bold text-[1.2vw]'>Fromagerie Baugeoise</h1>
      <p className='text-left text-[1vw]'>13 Rue Georges Clémenceau</p>
      <p className='text-left text-[1vw]'>49150 Baugé en Anjou</p>
      <p className='text-left text-[1vw]'>02 41 89 27 39</p>
    </li>
    <br />
    <li className='w-[70%] 1536:w-[65%] fromJB:w-[74%]'>
      <div className='flex'>
        <h1 className='font-bold text-[1.2vw]'>GammVert</h1>
        <p className='text-left text-[1.2vw]'>&nbsp;à Aurillac</p>
      </div>
      <p className='text-left text-[1vw]'>1 boulevard du Vialenc</p>
    </li>
  </ul>
);

export const fourni3 = (
  <ul style={{ fontFamily: 'OpenSansBold' }} className='text-fondue-blue mt-5 ml-12 h-full w-full'>
    <li className='w-[64%] 1536:w-[65%] fromJB:w-[72%]'>
      <h1 className='font-bold text-[1.2vw]'>UTILE</h1>
      <p className='text-left text-[1vw]'>- 2 Rue de l'Aubrac, 15230 Pierrefort</p>
      <p className='text-left text-[1vw]'>&nbsp;&nbsp;04 71 23 34 51</p>
      <p className='text-left text-[1vw]'>- 12 Avenue de Brommat, 12600 Mur de Barrez</p>
      <p className='text-left text-[1vw]'>&nbsp;&nbsp;05 65 44 59 44</p>
    </li>
    <br />
    <li className='w-[70%] 1536:w-[65%] fromJB:w-[74%]'>
      <div className='flex'>
        <h1 className='font-bold text-[1.2vw]'>SPAR</h1>
        <p className='text-left text-[1.2vw]'>&nbsp;Le Lioran</p>
      </div>
      <p className='text-left text-[1vw]'>Galerie Marchande Sumene</p>
      <p className='text-left text-[1vw]'>15300 Laveissière</p>
      <p className='text-left text-[1vw]'>04 71 49 58 81</p>
    </li>
    <br />
    <li className='w-[70%] 1536:w-[65%] fromJB:w-[74%]'>
      <div className='flex'>
        <h1 className='font-bold text-[1.2vw]'>AUCHAN</h1>
        <p className='text-left text-[1.2vw]'>&nbsp;à Aurillac</p>
      </div>
      <p className='text-left text-[1vw]'>Rue de la Montade</p>
    </li>
  </ul>
);

export const fourni4 = (
  <ul style={{ fontFamily: 'OpenSansBold' }} className='text-fondue-blue mt-5 ml-12 h-full w-full'>
    <li className='w-[64%] 1536:w-[65%] fromJB:w-[72%]'>
      <h1 className='font-bold text-[1.2vw]'>Les P'tits Lég'Huumm</h1>
      <p className='text-left text-[1vw]'>Les Morgues, 63310 St-Clément-de-Régnat</p>
      <p className='text-left text-[1vw]'>06 82 37 99 77</p>
    </li>
    <br />
    <li className='w-[70%] 1536:w-[65%] fromJB:w-[74%]'>
      <h1 className='font-bold text-[1.2vw]'>Farandole d'Auvergne</h1>
      <p className='text-left text-[1vw]'>Le Regard, 63680 La Tour-d'Auvergne</p>
      <p className='text-left text-[1vw]'>06 50 16 35 82</p>
    </li>
    <br />
    <li className='w-[70%] 1536:w-[65%] fromJB:w-[74%]'>
      <h1 className='font-bold text-[1.2vw]'>Douceurs et Vitamines</h1>
      <p className='text-left text-[1vw]'>14 Rue Notre Dame, 63610 Besse-et-Saint-Anastaise</p>
      <p className='text-left text-[1vw]'>06 62 65 15 95</p>
    </li>
    <br />
  </ul>
);

/* ########################## SMARTPHONE  ##########################*/

export const fourniTel1 = (
  <ul style={{ fontFamily: 'OpenSansBold' }} className='text-fondue-blue h-full w-full ml-2 sm:mt-4 sm:ml-8 ml-[20px]'>
    <li className='w-[75%] margin-top-fourni-tel'>
      <h1 className='font-bold text-[3vw]'>DISTILLERIE LOUIS COUDERC</h1>
      <p className='text-left text-[2.5vw] sm:text-[2.4vw]'>14 rue Victor Hugo à Aurillac</p>
      <p className='text-left text-[2.5vw] sm:text-[2.4vw]'>commercial@distillerie-couderc.com</p>
      <p className='text-left text-[2.5vw] sm:text-[2.4vw]'>04 71 48 01 50</p>
    </li>
    <li className='w-[72%] margin-top-fourni-tel' >
      <div className='flex'>
        <h1 className='font-bold text-[3vw]'>FROMAGERIE MORIN</h1>
        <p className='text-left text-[2.5vw] sm:text-[2.4vw]'>&nbsp;à Aurillac</p>
      </div>
      <p className='text-left text-[2.5vw] sm:text-[2.4vw]'>- Boutique au 13 avenue du Garric</p>
      <p className='text-left text-[2.5vw] sm:text-[2.4vw]'>&nbsp;&nbsp;04 71 43 25 84</p>
      <p className='text-left text-[2.5vw] sm:text-[2.4vw]'>- Centre Commercial de Marmiers</p>
      <p className='text-left text-[2.5vw] sm:text-[2.4vw]'>&nbsp;&nbsp;04 71 63 59 18</p>
      <p className='text-left text-[2.5vw] sm:text-[2.4vw]'>- Marché aux Fromages, 7 rue du buis</p>
      <p className='text-left text-[2.5vw] sm:text-[2.4vw]'>&nbsp;&nbsp;04 71 48 63 10</p>
      <p className='text-left text-[2.5vw] sm:text-[2.4vw]'>- Enclos Milhaud, Arpajon-sur-Cère</p>
      <p className='text-left text-[2.5vw] sm:text-[2.4vw]'>&nbsp;&nbsp;04 71 49 30 96</p>
    </li>
    <br />
  </ul>
);

export const fourniTel2 = (
  <ul style={{ fontFamily: 'OpenSansBold' }} className='text-fondue-blue h-full w-full ml-2 sm:mt-4 sm:ml-8 ml-[20px]'>
    <li className='w-[75%] margin-top-fourni-tel'>
      <h1 className='font-bold text-[3.2vw]'>Les Domaines Qui Montent</h1>
      <p className='text-left text-[2.8vw] sm:text-[2.4vw]'>- 48 Rue Blatin, 63000 Clermont-Ferrand</p>
      <p className='text-left text-[2.8vw] sm:text-[2.4vw]'>&nbsp;&nbsp;04 73 44 80 09</p>
      <p className='text-left text-[2.8vw] sm:text-[2.4vw]'>- 1 Avenue du Maréchal Leclerc, 63800 Cournon d'Auvergne</p>
      <p className='text-left text-[2.8vw] sm:text-[2.4vw]'>&nbsp;&nbsp;09 74 97 05 29</p>
    </li>
    <li className='w-[72%] mt-[0.5rem]'>
      <h1 className='font-bold text-[3.2vw]'>Fromagerie Baugeoise</h1>
      <p className='text-left text-[2.8vw] sm:text-[2.4vw]'>13 Rue Georges Clémenceau</p>
      <p className='text-left text-[2.8vw] sm:text-[2.4vw]'>49150 Baugé en Anjou</p>
      <p className='text-left text-[2.8vw] sm:text-[2.4vw]'>02 41 89 27 39</p>
    </li>
    <li className='w-[72%] mt-[0.5rem]'>
      <div className='flex'>
        <h1 className='font-bold text-[3.2vw]'>GammVert</h1>
        <p className='text-left text-[3.2vw]'>&nbsp;à Aurillac</p>
      </div>
      <p className='text-left text-[2.8vw] sm:text-[2.4vw]'>1 boulevard du Vialenc</p>
    </li>
  </ul>
);

export const fourniTel3 = (
  <ul style={{ fontFamily: 'OpenSansBold' }} className='text-fondue-blue h-full w-full ml-2 sm:mt-4 sm:ml-8 ml-[20px]'>
    <li className='w-[75%] margin-top-fourni-tel'>
      <h1 className='font-bold text-[3.2vw]'>UTILE</h1>
      <p className='text-left text-[2.8vw] sm:text-[2.4vw]'>- 2 Rue de l'Aubrac, 15230 Pierrefort</p>
      <p className='text-left text-[2.8vw] sm:text-[2.4vw]'>&nbsp;&nbsp;04 71 23 34 51</p>
      <p className='text-left text-[2.8vw] sm:text-[2.4vw]'>- 12 Avenue de Brommat, 12600 Mur de Barrez</p>
      <p className='text-left text-[2.8vw] sm:text-[2.4vw]'>&nbsp;&nbsp;05 65 44 59 44</p>
    </li>
    <li className='w-[75%] margin-top-fourni-tel'>
      <div className='flex'>
        <h1 className='font-bold text-[3.2vw]'>SPAR</h1>
        <p className='text-left text-[3.2vw]'>&nbsp;Le Lioran</p>
      </div>
      <p className='text-left text-[2.8vw] sm:text-[2.4vw]'>Galerie Marchande Sumene</p>
      <p className='text-left text-[2.8vw] sm:text-[2.4vw]'>15300 Laveissière</p>
      <p className='text-left text-[2.8vw] sm:text-[2.4vw]'>04 71 49 58 81</p>
    </li>
    <li className='w-[75%] margin-top-fourni-tel'>
      <div className='flex'>
        <h1 className='font-bold text-[3.2vw]'>AUCHAN</h1>
        <p className='text-left text-[3.2vw]'>&nbsp;à Aurillac</p>
      </div>
      <p className='text-left text-[2.8vw] sm:text-[2.4vw]'>Rue de la Montade</p>
    </li>
  </ul>
);

export const fourniTel4 = (
  <ul style={{ fontFamily: 'OpenSansBold' }} className='text-fondue-blue h-full w-full ml-2 sm:mt-4 sm:ml-8 ml-[20px]'>
    <li className='w-[75%] margin-top-fourni-tel'>
      <h1 className='font-bold text-[3.2vw]'>Les P'tits Lég'Huumm</h1>
      <p className='text-left text-[2.8vw] sm:text-[2.4vw]'>Les Morgues, 63310 St-Clément-de-Régnat</p>
      <p className='text-left text-[2.8vw] sm:text-[2.4vw]'>06 82 37 99 77</p>
    </li>
    <li className='w-[75%] margin-top-fourni-tel'>
      <h1 className='font-bold text-[3.2vw]'>Farandole d'Auvergne</h1>
      <p className='text-left text-[2.8vw] sm:text-[2.4vw]'>Le Regard, 63680 La Tour-d'Auvergne</p>
      <p className='text-left text-[2.8vw] sm:text-[2.4vw]'>06 50 16 35 82</p>
    </li>
    <li className='w-[75%] margin-top-fourni-tel'>
      <h1 className='font-bold text-[3.2vw]'>Douceurs et Vitamines</h1>
      <p className='text-left text-[2.8vw] sm:text-[2.4vw]'>14 Rue Notre Dame, 63610</p>
      <p className='text-left text-[2.8vw] sm:text-[2.4vw]'>Besse-et-Saint-Anastaise</p>
      <p className='text-left text-[2.8vw] sm:text-[2.4vw]'>06 62 65 15 95</p>
    </li>
  </ul>
);
