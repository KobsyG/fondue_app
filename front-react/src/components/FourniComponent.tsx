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

  }, [currentSlide]);

  return (
    <div ref={fourniContainer}>
      <img src={pageCahier} className='h-full w-full object-cover absolute' alt='' />
      <div className='absolute h-full w-full top-4 left-4 shadow-2xl'>

        <div
          className='fourniNew h-full w-full absolute z-20'>
          <img src={pageCahier} className='h-full w-full object-cover absolute' alt=''/>
          <div className='absolute mt-2 ml-2 sm:mt-4 sm:ml-4 lg:mt-0 lg:ml-0 fromBeco:mt-4' >

            <div className='flex items-center justify-start lg:w-full lg:mt-4 lg:ml-[30px] 1536:ml-[50px] fromJB:mt-8'>
              <button
                className='w-fit h-fit flex items-center'
                onClick={handleSlideChange}
              >
                <img src={leftArrow} className='leftArrow h-6 mr-2 sm:h-10 sm:mr-6 lg:h-8 1536:h-10 fromJB:h-12' alt=''/>
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
      <p className='text-left text-[1vw]'>- 41 Av. Charles de Gaulle</p>
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
    <li className='w-[70%] 1536:w-[65%] fromJB:w-[74%]'>
      <h1 className='font-bold text-[1.2vw]'>E.LECLERC</h1>
      <p className='text-left text-[1vw]'>- 26 Zac de la Jordanne, à AURILLAC</p>
      <p className='text-left text-[1vw]'>&nbsp;&nbsp;04 71 64 25 05</p>
      <p className='text-left text-[1vw]'>- 175 Bd Gustave Flaubert, LA PARDIEU, Clermont-Ferrand</p>
      <p className='text-left text-[1vw]'>&nbsp;&nbsp;04 73 44 29 09</p>
      <p className='text-left text-[1vw]'>- Zac Du Crozatier, Saint-Flour</p>
      <p className='text-left text-[1vw]'>&nbsp;&nbsp;04 71 20 10 00</p>
    </li>
    <br />
    <li className='w-[70%] 1536:w-[65%] fromJB:w-[74%]'>
      <div className='flex'>
        <h1 className='font-bold text-[1.2vw]'>INTERMARCHÉ</h1>
        <p className='text-left text-[1.2vw]'>&nbsp;à Murat</p>
      </div>
      <p className='text-left text-[1vw]'>Chem. de la Croix Jolie</p>
      <p className='text-left text-[1vw]'>04 71 20 15 90</p>
    </li>
  </ul>
);

export const fourni3 = (
  <ul style={{ fontFamily: 'OpenSansBold' }} className='text-fondue-blue mt-5 ml-12 h-full w-full'>
    <li className='w-[70%] 1536:w-[65%] fromJB:w-[74%]'>
      <div className='flex'>
        <h1 className='font-bold text-[1.2vw]'>GAMM VERT</h1>
        <p className='text-left text-[1.2vw]'>&nbsp;à Aurillac</p>
      </div>
      <p className='text-left text-[1vw]'>1 boulevard du Vialenc</p>
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
      <h1 className='font-bold text-[1.2vw]'>UTILE</h1>
      <p className='text-left text-[1vw]'>12 Avenue de Brommat, 12600 Mur de Barrez</p>
      <p className='text-left text-[1vw]'>05 65 44 59 44</p>
    </li>
  </ul>
);

/* ########################## SMARTPHONE  ##########################*/

export const fourniTel1 = (
  <ul style={{ fontFamily: 'OpenSansBold' }} className='text-fondue-blue h-full w-full ml-4 sm:mt-4 sm:ml-8'>
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
      <p className='text-left text-[2.5vw] sm:text-[2.4vw]'>- 41 Av. Charles de Gaulle</p>
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
  <ul style={{ fontFamily: 'OpenSansBold' }} className='text-fondue-blue h-full w-full ml-4 sm:mt-4 sm:ml-8'>
    <li className='w-[75%] margin-top-fourni-tel'>
      <h1 className='font-bold text-[3.2vw]'>E.LECLERC</h1>
      <p className='text-left text-[2.8vw] sm:text-[2.4vw]'>- 26 Zac de la Jordanne, à AURILLAC</p>
      <p className='text-left text-[2.8vw] sm:text-[2.4vw]'>&nbsp;&nbsp;04 71 64 25 05</p>
      <p className='text-left text-[2.8vw] sm:text-[2.4vw]'>- 175 Bd Gustave Flaubert, LA PARDIEU, Clermont-Ferrand</p>
      <p className='text-left text-[2.8vw] sm:text-[2.4vw]'>&nbsp;&nbsp;04 73 44 29 09</p>
      <p className='text-left text-[2.8vw] sm:text-[2.4vw]'>- Zac Du Crozatier, Saint-Flour</p>
      <p className='text-left text-[2.8vw] sm:text-[2.4vw]'>&nbsp;&nbsp;04 71 20 10 00</p>
    </li>
    <li className='w-[72%] mt-[0.5rem]'>
      <div className='flex'>
        <h1 className='font-bold text-[3.2vw]'>INTERMARCHÉ</h1>
        <p className='text-left text-[3.2vw]'>&nbsp;à Murat</p>
      </div>
      <p className='text-left text-[2.8vw] sm:text-[2.4vw]'>Chem. de la Croix Jolie</p>
      <p className='text-left text-[2.8vw] sm:text-[2.4vw]'>04 71 20 15 90</p>
    </li>
  </ul>
);

export const fourniTel3 = (
  <ul style={{ fontFamily: 'OpenSansBold' }} className='text-fondue-blue h-full w-full ml-4 sm:mt-4 sm:ml-8'>
    <li className='w-[75%] margin-top-fourni-tel'>
      <div className='flex'>
        <h1 className='font-bold text-[3.2vw]'>GAMM VERT</h1>
        <p className='text-left text-[3.2vw]'>&nbsp;à Aurillac</p>
      </div>
      <p className='text-left text-[2.8vw] sm:text-[2.4vw]'>1 boulevard du Vialenc</p>
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
      <h1 className='font-bold text-[3.2vw]'>UTILE</h1>
      <p className='text-left text-[2.8vw] sm:text-[2.4vw]'>12 Avenue de Brommat, 12600 Mur de Barrez</p>
      <p className='text-left text-[2.8vw] sm:text-[2.4vw]'>05 65 44 59 44</p>
    </li>
  </ul>
);

/* ########################## OLD COMPUTER  ##########################*/

export const old_fourni2 = (
  <ul style={{ fontFamily: 'OpenSansBold' }} className='text-fondue-blue mt-5 ml-12 h-full w-full'>
    <li className='w-[70%] 1536:w-[65%] fromJB:w-[74%] mt-3'>
      <div className='flex'>
        <h1 className='font-bold text-[1.2vw]'>E.LECLERC</h1>
        <p className='text-left text-[1.2vw]'>&nbsp;à Aurillac</p>
      </div>
      <p className='text-left text-[1vw]'>26 Rue de la Jordanne</p>
      <p className='text-left text-[1vw]'>04 71 64 25 05</p>
    </li>
    <li className='w-[70%] 1536:w-[65%] fromJB:w-[74%] mt-3'>
      <div className='flex'>
        <h1 className='font-bold text-[1.2vw]'>Gamm Vert</h1>
        <p className='text-left text-[1.2vw]'>&nbsp;à Aurillac</p>
      </div>
      <p className='text-left text-[1vw]'>1 boulevard du Vialenc</p>
    </li>
    <li className='w-[70%] 1536:w-[65%] fromJB:w-[74%] mt-3'>
      <h1 className='font-bold text-[1.2vw]'>Boucherie Serge Tardif</h1>
      <p className='text-left text-[1vw]'>6 rue Simone Veil, 15130 Arpajon sur Cère</p>
    </li>
    <li className='w-[65%] fromBeco:w-[70%] 1536:w-[65%] fromJB:w-[74%] mt-3'>
      <h1 className='font-bold text-[1.2vw]'>Intermarché</h1>
      <p className='text-left text-[1vw]'>8 Avenue d'Aurillac, 15600 St Etienne de Maurs</p>
    </li>
    <li className='w-[70%] fromBeco:w-[70%] 1536:w-[65%] fromJB:w-[74%] mt-3'>
      <h1 className='font-bold text-[1.2vw]'>Les domaines qui montent</h1>
      <p className='text-left text-[1vw]'>48 rue Blatin, 63000</p>
      <p className='text-left text-[1vw]'>Clermont-Ferrand</p>
    </li>
  </ul>
);

export const old_fourni3 = (
  <ul style={{ fontFamily: 'OpenSansBold' }} className='text-fondue-blue mt-5 ml-12 h-full w-full'>
    <li className='w-[70%] 1536:w-[65%] fromJB:w-[74%]'>
      <div className='flex'>
        <h1 className='font-bold text-[1.2vw]'>UTILE</h1>
        <p className='text-left text-[1.2vw]'>&nbsp;à Lafeuillade-en-Vézie</p>
      </div>
      <p className='text-left text-[1vw]'>8 Rue Germain Prat, 15130 Lafeuillade-en-Vézie </p>
      <p className='text-left text-[1vw]'>04 63 41 94 71</p>
    </li>
    <br />
    <li className='w-[70%] 1536:w-[65%] fromJB:w-[74%]'>
      <div className='flex'>
        <h1 className='font-bold text-[1.2vw]'>SPAR</h1>
        <p className='text-left text-[1.2vw]'>&nbsp;Le Lioran</p>
      </div>
      <p className='text-left text-[1vw]'>Galerie Marchande Sumene, 15300 Laveissière</p>
      <p className='text-left text-[1vw]'>04 71 49 58 81</p>
    </li>
    <br />
    <li className='w-[70%] 1536:w-[65%] fromJB:w-[74%]'>
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

export const old_fourni4 = (
  <ul style={{ fontFamily: 'OpenSansBold' }} className='text-fondue-blue mt-5 ml-12 h-full w-full'>

    <li className='w-[64%] 1536:w-[65%] fromJB:w-[72%]' >
      <h1 className='font-bold text-[1.2vw]'>Les Fromages du Mont Royal</h1>
      <p className='text-left text-[1vw]'>Chemin de Baraillan, 31210 Montrejeau</p>
    </li>
    <br />
    <li className='w-[64%] 1536:w-[65%] fromJB:w-[72%]' >
      <h1 className='font-bold text-[1.2vw]'>FROMAGERIE LAQUEUILLE</h1>
      <p className='text-left text-[1vw]'>Gare de Laqueuille, 63820 Saint-Julien Puy-Lavèze</p>
      <p className='text-left text-[1vw]'>www.fromages-laqueuille.fr</p>
      <p className='text-left text-[1vw]'>04 73 22 18 06</p>
    </li>
    <br />
    <li className='w-[64%] 1536:w-[65%] fromJB:w-[72%]' >
      <h1 className='font-bold text-[1.2vw]'>FROMAGERIE DUROUX</h1>
      <p className='text-left text-[1vw]'>12 Route de Chaussenac, 19220 Rilhac-Xaintrie</p>
      <p className='text-left text-[1vw]'>www.fromagerie-duroux.fr</p>
      <p className='text-left text-[1vw]'>05 55 28 27 62</p>
    </li>
    <br />
  </ul >
);

/* ########################## OLD SMARTPHONE  ##########################*/


export const old_fourniTel2 = (
  <ul style={{ fontFamily: 'OpenSansBold' }} className='text-fondue-blue h-full w-full ml-2 sm:mt-4 sm:ml-8'>
    <li className='w-[75%] margin-top-fourni-tel'>
      <div className='flex'>
        <h1 className='font-bold text-[3.2vw]'>E.LECLERC</h1>
        <p className='text-left text-[3.2vw]'>&nbsp;à Aurillac</p>
      </div>
      <p className='text-left text-[2.8vw] sm:text-[2.4vw]'>26 Rue de la Jordanne</p>
      <p className='text-left text-[2.8vw] sm:text-[2.4vw]'>04 71 64 25 05</p>
    </li>
    <li className='w-[72%] mt-[0.5rem]' >
      <div className='flex'>
        <h1 className='font-bold text-[3.2vw]'>Gamm Vert</h1>
        <p className='text-left text-[3.2vw]'>&nbsp;à Aurillac</p>
      </div>
      <p className='text-left text-[2.8vw] sm:text-[2.4vw]'>1 boulevard du Vialenc</p>
    </li>
    <li className='w-[72%] mt-[0.5rem]' >
      <h1 className='font-bold text-[3.2vw]'>Boucherie Serge Tardif</h1>
      <p className='text-left text-[2.8vw] sm:text-[2.4vw]'>6 rue Simone Veil, 15130 Arpajon sur Cère</p>
    </li>
    <li className='w-[72%] mt-[0.5rem]' >
      <h1 className='font-bold text-[3.2vw]'>Intermarché</h1>
      <p className='text-left text-[2.8vw] sm:text-[2.4vw]'>8 Avenue d'Aurillac, 15600 St Etienne de Maurs</p>
    </li>
    <li className='w-[72%] mt-[0.5rem]' >
      <h1 className='font-bold text-[3.2vw]'>Les domaines qui montent</h1>
      <p className='text-left text-[2.8vw] sm:text-[2.4vw]'>48 rue Blatin, 63000</p>
      <p className='text-left text-[2.8vw] sm:text-[2.4vw]'>Clermont-Ferrand</p>
    </li>
  </ul>
);

export const old_fourniTel3 = (
  <ul style={{ fontFamily: 'OpenSansBold' }} className='text-fondue-blue h-full w-full ml-2 sm:mt-4 sm:ml-8'>
    <li className='w-[75%] margin-top-fourni-tel'>
      <div className='flex'>
        <h1 className='font-bold text-[3.2vw]'>UTILE</h1>
        <p className='text-left text-[3.2vw] sm:text-[3.2vw]'>&nbsp;à Lafeuillade-en-Vézie</p>
      </div>
      <p className='text-left text-[2.8vw] sm:text-[2.4vw]'>8 Rue Germain Prat, 15130 Lafeuillade-en-Vézie</p>
      <p className='text-left text-[2.8vw] sm:text-[2.4vw]'>04 63 41 94 71</p>
    </li>
    <li className='w-[75%] margin-top-fourni-tel'>
      <div className='flex'>
        <h1 className='font-bold text-[3.2vw]'>SPAR</h1>
        <p className='text-left text-[3.2vw] sm:text-[3.2vw]'>&nbsp;Le Lioran</p>
      </div>
      <p className='text-left text-[2.8vw] sm:text-[2.4vw]'>Galerie Marchande Sumene, 15300 Laveissière</p>
      <p className='text-left text-[2.8vw] sm:text-[2.4vw]'>04 71 49 58 81</p>
    </li>
    <li className='w-[75%] margin-top-fourni-tel'>
      <div className='flex'>
        <h1 className='font-bold text-[3.2vw]'>Clémentine et Cie</h1>
        <p className='text-left text-[3.2vw] sm:text-[3.2vw]'>&nbsp;à Ussel</p>
      </div>
      <p className='text-left text-[2.8vw] sm:text-[2.4vw]'>Parc d'activité du bois Saint Michel, 19200 Saint-Angel</p>
      <p className='text-left text-[2.8vw] sm:text-[2.4vw]'>www.clementine-et-cie.fr</p>
      <p className='text-left text-[2.8vw] sm:text-[2.4vw]'>05 55 95 82 76</p>
    </li>
  </ul>
);

export const old_fourniTel4 = (
  <ul style={{ fontFamily: 'OpenSansBold' }} className='text-fondue-blue h-full w-full ml-2 sm:mt-4 sm:ml-8'>
    <li className='w-[80%] margin-top-fourni-tel'>
      <h1 className='font-bold text-[3.2vw]'>Les Fromages du Mont Royal</h1>
      <p className='text-left text-[2.8vw] sm:text-[2.4vw]'>Chemin de Baraillan, 31210 Montrejeau</p>
    </li>
    <li className='w-[72%] margin-top-fourni-tel' >
      <h1 className='font-bold text-[3.2vw]'>FROMAGERIE LAQUEUILLE</h1>
      <p className='text-left text-[2.8vw] sm:text-[2.4vw]'>Gare de Laqueuille, 63820 Saint-Julien Puy-Lavèze</p>
      <p className='text-left text-[2.8vw] sm:text-[2.4vw]'>www.fromages-laqueuille.fr</p>
      <p className='text-left text-[2.8vw] sm:text-[2.4vw]'>04 73 22 18 06</p>
    </li>
    <li className='w-[72%] margin-top-fourni-tel' >
      <h1 className='font-bold text-[3.2vw]'>FROMAGERIE DUROUX</h1>
      <p className='text-left text-[2.8vw] sm:text-[2.4vw]'>12 Route de Chaussenac, 19220 Rilhac-Xaintrie</p>
      <p className='text-left text-[2.8vw] sm:text-[2.4vw]'>www.fromagerie-duroux.fr</p>
      <p className='text-left text-[2.8vw] sm:text-[2.4vw]'>05 55 28 27 62</p>
    </li>
  </ul>
);
