import React from 'react'
import cheese from '../images/jb/cheese1.svg'

import './Coming.css'

import contactRouge from "../images/Mono/contact-rouge.svg"
import logoChampion from '../images/FFP/logoFondueChampionne.svg'
import ruban from '../images/FFP/ruban.svg'

const box = require('../images/FFP/box.png')
const facebook = require('../images/FFP/facebook.png')
const insta = require('../images/FFP/insta.png')
const ruban2 = require('../images/FFP/rubanCut.png')
const pageCahier = require('../images/FFP/pageCahierCut.png')
const kraft = require('../images/FFP/kraftBg.png')

const Coming = () => {
  return (
    <div className='coming absolute top-0 left-0 h-[100vh] w-[100vw] bg-[#1B133B] flex flex-col overflow-hidden'>
      <div className='topbar w-full h-[20%] flex'>
        <div className='fonduecoeur h-[60%] min-w-[408px] ml-[60px] my-auto'>
          <img className='h-full object-contain' src={require('../images/FFP/logo.png')} />
        </div>

        <div className='devenez h-full flex-col justify-center items-left hidden xl:flex ml-[30px] 1700:ml-[100px] text-[18px] 1600:text-[23px] 1800:text-[25px]'>
          <h2 className='bg-fondue-red whitespace-nowrap px-2 w-fit mb-2 text-white'>
            DEVENEZ À VOTRE TOUR
          </h2>
          <h2 className='bg-fondue-red whitespace-nowrap px-2 text-white'>
            UN(E) CHAMPION(NE) DE FRANCE !
          </h2>
        </div>

        <div className='fonduecoeur h-[60%] ml-auto my-auto  mr-[60px]'>
          <img className='h-full object-contain' src={logoChampion} />
        </div>
      </div>

      <div className='carreau block h-[35px] min-h-[35px] w-full bg-contain bg-repeat-x bg-dominos' />

      <div className='main grow w-full flex items-end'>
        <div className='page1 h-full w-[33vw] flex flex-col mr-3 bg-[#30246C]'>
          <h2 className='text-white w-fit text-[25px] px-2 bg-fondue-red mt-10 ml-20'>LE CONCEPT</h2>
          <p style={{ fontFamily: 'OpenSansBold' }} className='text-white w-[350px] mt-8 ml-20 text-[25px] leading-8 text-left'>UNE BOX QUI RASSEMBLE TOUS LES INGRÉDIENTS POUR RÉALISER <span className='text-fondue-red'>CHEZ VOUS</span> LA FONDUE CHAMPIONNE DE FRANCE ET 100% MADE IN AUVERGNE !</p>

          <div className='textImg flex pt-40'>
            <p className='-rotate-90'>100% AUVERGNE</p>
          </div>
        </div>

        <div className='pageDiapo h-full w-[27vw] bg-yellow-300'>
          <img className='object-cover h-full object-[83%]' src={require('../images/FFP/diapo/cheese-fondue.jpeg')} />
        </div>

        {/* <div className='page3 relative h-full w-[700px] min-w-[700px] flex flex-col-reverse bg-yellow-800'> */}
        <div className='page3 relative h-full w-[35vw] macBeco:w-[40vw] min-w-[600px] macBeco:min-w-[750px] bg-yellow-800'>

          <img src={kraft} className='h-full w-full object-cover absolute' />

          <div className='ruban absolute top-0  h-[75%] w-[56px] resp2:w-[70px] -left-[28px] resp2:-left-[35px] resp3:w-[80px] resp3:-left-[40px] overflow-hidden flex flex-col-reverse'>
            <img className='object-cover w-full' src={ruban2} />
            <div className='bg-fondue-red w-full h-[100vh]' />
          </div>


          <div className='absolute bottom-0 z-10 flex flex-col-reverse'>
            <div className='flex items-end'>
              <div className='guyHP relative h-[150px] w-[150px] mb-5 ml-4'>
                <img className='absolute bottom-0' src={require('../images/FFP/guy-hp.png')} />
              </div>
              <div className='reseaux h-[60px] w-[115px] macBeco:w-[120px] flex justify-between mb-5 macBeco:mb-10'>
                <button className='facebook w-[50px] macBeco:w-[60px]'>
                  <img src={facebook} />
                </button>

                <button className='instagram w-[50px] macBeco:w-[60px]'>
                  <img src={insta} />
                </button>
              </div>
            </div>
            <p style={{ fontFamily: 'OpenSansBold' }} className='text-left text-[13px] macBeco:text-[15px] w-fit ml-16 mb-5 macBeco:mb-3 text-white bg-fondue-blue'>CONTACT@FONDUECOEUR.FR</p>
            <h2 style={{ fontFamily: 'AvocadoCake' }} className='text-[25px] macBeco:text-[27px] ml-16 mb-5 macBeco:mb-3 text-fondue-red'>ON RESTE <br /> EN CONTACT ?</h2>
          </div>

          <div className='page-rotate absolute h-[105%] w-[400px] macBeco:w-[500px] -bottom-5 -right-16 -rotate-6 bg-gray-200'>

            <img src={pageCahier} className='h-full w-full object-cover absolute' />
            <div className='fournisseurs absolute' >
              <h3 style={{ fontFamily: 'AvocadoCake' }} className='text-fondue-red text-[22px] macBeco:text-[25px] w-[50%] mt-10 ml-[80px] macBeco:ml-32'>ET ON LA TROUVE OÙ CETTE MERVEILLE ?</h3>
              <ul style={{ fontFamily: 'OpenSansBold', listStyle: 'square' }} className='mt-5 ml-10 macBeco:ml-16 text-fondue-blue text-[12px] macBeco:text-[15px] w-[80%]'>
                <li className='' >
                  <h1 className='font-bold text-[17px]'>DISTILLERIE LOUIS COUDERC</h1>
                  <p className='text-left'>14 rue Victor Hugo à Aurillac</p>
                  <p className='text-left'>04 71 48 01 50 - commercial@distillerie-couderc.com</p>
                </li>
                <br />
                <li className='max-w-[290px] macBeco:max-w-[350px]' >
                  <h1 className='font-bold text-[17px]'>FROMAGERIE MORIN</h1>
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
                  <h1 className='font-bold text-[17px]'>LECLERC AURILLAC</h1>
                  <p className='text-left'>26 Rue de la Jordanne</p>
                  <p></p>

                </li>
              </ul>
            </div>
          </div>

          <button className='contact group absolute h-[120px] w-[120px] bottom-5 right-5 rotate-12 flex items-center justify-center text-center'>
            <p style={{ fontFamily: 'AvocadoCake' }} className='absolute w-[80px] z-10 text-[20px] text-white'>ON SE LANCE ?</p>
            <img className='relative pastille h-full z-0 lg:group-hover:rotate-45 lg:group-hover:scale-[1.25] transition-transform duration-500' src={contactRouge} />
          </button>

          {/* <div className='smallbox absolute w-[200px] macBeco:w-[300px] -rotate-[15deg] ml-16 mb-5 macBeco:mb-10'> */}
          {/* <div className='smallbox absolute w-[13vw] macBeco:w-[15vw] top-[8vw] macBeco:top-[10vw] left-[5vw] macBeco:left-[3vw] -rotate-[15deg] '>
                        <img src={box} />
                    </div> */}
          {/* <div className='smallbox w-[15vw] mb-5 macBeco:mb-10 ml-10 -rotate-[17deg] '>
                        <img src={box} />
                    </div> */}

          <div className='box absolute w-[25vw] -top-[10vw] -left-[5vw]'>
            <img className='object-cover' src={box} />
          </div>
        </div>


      </div>
    </div>
  )
}

export default Coming