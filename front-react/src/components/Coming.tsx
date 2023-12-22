import { useLayoutEffect, useRef, useState } from 'react'
import gsap from "gsap";
import './Coming.css'

import contactRouge from "../images/Mono/contact-rouge.svg"
import logoChampion from '../images/FFP/logoFondueChampionne.svg'
import ruban from '../images/FFP/ruban.svg'
import { Carousel, Dialog } from '@material-tailwind/react'
import { ToastContainer } from 'react-toastify'
import Contact from './Contact'

const box = require('../images/FFP/box.png')
const facebook = require('../images/FFP/facebook.png')
const insta = require('../images/FFP/insta.png')
const ruban2 = require('../images/FFP/rubanCut.png')
const pageCahier = require('../images/FFP/pageCahierCut.png')
const kraft = require('../images/FFP/kraftBg.png')

const bouteille = require('../images/FFP/bouteille.png')
const fleurs = require('../images/FFP/fleursGentiane.png')
const fromages = require('../images/FFP/fromages.png')
const lentilles = require('../images/FFP/lentilles.png')
const pastille = require('../images/FFP/pastilleCouderc.png')
const coeur1 = require('../images/FFP/coeur1.png')
const coeur2 = require('../images/FFP/coeur2.png')
const coeur3 = require('../images/FFP/coeur3.png')
const phraseFromage = require('../images/FFP/phraseFromage.png')
const phraseGentiane = require('../images/FFP/phraseGentiane.png')
const phraseLentille = require('../images/FFP/phraseLentille.png')

const diapo1 = require('../images/FFP/diapo/cheese-fondue.jpeg')
const diapo2 = require('../images/FFP/diapo/Cantal.jpg')
const diapo3 = require('../images/FFP/diapo/Fourme.jpg')
const diapo4 = require('../images/FFP/diapo/bread.jpg')
const diapo5 = require('../images/FFP/diapo/cheese-kitchen.jpg')
const diapo6 = require('../images/FFP/diapo/gentiane.jpg')


const Coming = ({ videoEnd, videoDisplay }: { videoEnd: boolean, videoDisplay: boolean }) => {

  const [openContact, setOpenContact] = useState(false);
  const handleOpen = () => setOpenContact(!openContact);
  const comingContainer = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const phareTl = gsap.timeline({
        repeat: -1,
      })

      phareTl.fromTo('.phare', {
        color: '#7d6a45',
        scale: 1,
      }, {
        color: '#FED88E',
        duration: 1,
        ease: 'none',
        scale: 1.02,
      }, 0);

      phareTl.fromTo('.phare', {
        color: '#FED88E',
        scale: 1.02,
      }, {
        duration: 1,
        color: '#7d6a45',
        ease: 'none',
        scale: 1,
      }, '>');

    }, comingContainer)

    return () => {
      ctx.revert();
    };

  }, []);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      if (!videoEnd) {
        const frigoTl = gsap.timeline({
        })

        frigoTl
          .fromTo('.fleurs', {
            opacity: 0,
            scale: 3.5,
            duration: 1,
          }, {
            opacity: 1,
            scale: 1,
          }, '0.5')
          .fromTo('.pastille', {
            opacity: 0,
            scale: 3.5,
            duration: 1,
          }, {
            scale: 1,
            opacity: 1,
          }, '0.8')
          .fromTo('.fromages', {
            opacity: 0,
            scale: 3.5,
            duration: 1,
          }, {
            scale: 1,
            opacity: 1,
          }, '1.2')
          .fromTo('.lentilles', {
            opacity: 0,
            scale: 3.5,
            duration: 1,
          }, {
            scale: 1,
            opacity: 1,
          }, '1.5')
      }
    }, comingContainer)

    return () => {
      ctx.revert();
    };

  }, [videoEnd]);

  return (
    <div ref={comingContainer} className='coming absolute top-0 left-0 h-[100vh] w-[100vw] bg-[#1B133B] flex flex-col overflow-hidden'>
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

      <div className='carreau block h-[4vh] min-h-[4vh] w-full bg-contain bg-repeat-x bg-dominos' />

      <div className='main grow w-full flex items-end'>



        <div className='page1 h-full w-[33vw] min-w-[450px] flex flex-col mr-3 bg-[#30246C]'>

          <h2 style={{ fontFamily: 'OpenSansBold' }} className='text-white w-fit text-[1.2vw] px-2 ml-[1.5vw] mt-[1.5vw] fromMacBeco:ml-[2vw] fromMacBeco:mt-[2vw] bg-fondue-red'>LE CONCEPT</h2>
          <p style={{ fontFamily: 'OpenSansBold' }} className='text-white w-[90%] ml-[1.5vw] mt-[1.5vw] fromMacBeco:ml-[2vw] fromMacBeco:mt-[2vw] h-fit text-[1.1vw] text-left'>UNE BOX QUI RASSEMBLE TOUS LES INGRÉDIENTS POUR RÉALISER <span className='text-fondue-red'>CHEZ VOUS</span> LA FONDUE CHAMPIONNE DE FRANCE ET 100% MADE IN AUVERGNE !</p>

          <div className='relative w-full grow flex items-center overflow-hidden'>
            <div className='h-[80%] absolute z-20 left-0 top-0 flex'>
              <p style={{ letterSpacing: '2px', writingMode: 'vertical-lr', fontFamily: 'OccamsEraser' }} className='phare ml-[1vw] text-[3vw] pcJB:text-[2.5vw] whitespace-nowrap -rotate-180'>100% AUVERGNE</p>
            </div>
            <div className='photos relative w-[100%] mx-auto'>
              <img src={bouteille} className='bouteille h-full object-cover' />
              <img src={fleurs} className='fleurs absolute top-0 left-0 h-full object-cover opacity-0' />
              <img src={fromages} className='fromages absolute top-0 left-0 h-full object-cover opacity-0' />
              <img src={lentilles} className='lentilles absolute top-0 left-0 h-full object-cover opacity-0' />
              <img src={pastille} className='pastille absolute top-0 left-0 h-full object-cover opacity-0' />
              <img src={coeur1} className='absolute top-0 left-0 h-full object-cover' />
              <img src={coeur2} className='absolute top-0 left-0 h-full object-cover' />
              <img src={coeur3} className='absolute top-0 left-0 h-full object-cover' />
              <img src={phraseFromage} className='absolute top-0 left-0 h-full object-cover' />
              <img src={phraseGentiane} className='absolute top-0 left-0 h-full object-cover' />
              <img src={phraseLentille} className='absolute top-0 left-0 h-full object-cover' />
            </div>
          </div>

        </div>



        <div className='pageDiapo h-full w-[27vw]'>
          <Carousel className=""
            prevArrow={() => { }}
            nextArrow={() => { }}
            autoplay={!videoDisplay}
            transition={{ duration: 1 }}
            loop={true}
          >
            <img
              src={diapo1}
              alt="image 1"
              className="h-full object-cover object-[80%]"
            />
            <img
              src={diapo2}
              alt="image 2"
              className="h-full object-cover"
            />
            <img
              src={diapo3}
              alt="image 3"
              className="h-full object-cover"
            />
            <img
              src={diapo4}
              alt="image 4"
              className="h-full object-cover"
            />
            <img
              src={diapo5}
              alt="image 5"
              className="h-full object-cover"
            />
            <img
              src={diapo6}
              alt="image 6"
              className="h-full object-cover"
            />
          </Carousel>


          {/* <img className='object-cover h-full object-[83%]' src={require('../images/FFP/diapo/cheese-fondue.jpeg')} /> */}
        </div>

        {/* <div className='page3 relative h-full w-[700px] min-w-[700px] flex flex-col-reverse bg-yellow-800'> */}
        <div className='page3 relative h-full w-[35vw] macBeco:w-[40vw] min-w-[600px] macBeco:min-w-[750px] bg-yellow-800'>

          <img src={kraft} className='h-full w-full object-cover absolute' />

          <div className='ruban absolute top-0  h-[75%] w-[56px] 1366:w-[70px] -left-[28px] 1366:-left-[35px] 1536:w-[80px] 1536:-left-[40px] overflow-hidden flex flex-col-reverse'>
            <img className='object-cover w-full' src={ruban2} />
            <div className='bg-fondue-red w-full h-[100vh]' />
          </div>


          <div className='absolute bottom-0 z-10 flex flex-col-reverse'>
            <div className='flex items-end'>
              <div className='guyHP relative h-[150px] w-[150px] mb-5 ml-4'>
                <img className='absolute bottom-0' src={require('../images/FFP/guy-hp.png')} />
              </div>
              <div className='reseaux h-[60px] w-[115px] macBeco:w-[120px] flex justify-between mb-5 macBeco:mb-10'>
                <a className='facebook w-[50px] macBeco:w-[60px]' href="https://www.facebook.com/fonduecoeur" target='_blank'>
                  <button>
                    <img src={facebook} className='hover:scale-125 transform transition-transform duration-300' />
                  </button>
                </a>

                <a className='instagram w-[50px] macBeco:w-[60px]' href="https://instagram.com/fondue_coeur?igshid=OGQ5ZDc2ODk2ZA==" target='_blank'>
                  <button>
                    <img src={insta} className='hover:scale-125 transform transition-transform duration-300' />
                  </button>
                </a>
              </div>
            </div>
            <p style={{ fontFamily: 'OpenSansBold' }} className='text-left text-[13px] macBeco:text-[15px] w-fit ml-16 mb-5 macBeco:mb-3 text-white bg-fondue-blue'>CONTACT@FONDUECOEUR.FR</p>
            <h2 style={{ fontFamily: 'AvocadoCake' }} className='text-[25px] macBeco:text-[27px] ml-16 mb-5 macBeco:mb-3 text-fondue-red'>ON RESTE <br /> EN CONTACT ?</h2>
          </div>

          <div className='page-rotate absolute h-[105%] w-[400px] macBeco:w-[500px] -bottom-5 -right-16 -rotate-6 bg-gray-200'>

            <img src={pageCahier} className='h-full w-full object-cover absolute' />
            <div className='fournisseurs absolute' >
              <h3 style={{ fontFamily: 'AvocadoCake' }} className='text-fondue-red text-[22px] macBeco:text-[25px] w-[50%] mt-10 ml-[80px] macBeco:ml-32'>ET ON LA TROUVE OÙ CETTE MERVEILLE ?</h3>
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
            </div>
          </div>

          <button onClick={handleOpen} className='contact group absolute h-[120px] w-[120px] bottom-5 right-5 rotate-12 flex items-center justify-center text-center'>
            <p style={{ fontFamily: 'AvocadoCake' }} className='absolute w-[80px] z-10 text-[20px] text-white'>ON SE LANCE ?</p>
            <img className='relative pastille-contact h-full lg:group-hover:rotate-45 lg:group-hover:scale-[1.25] group-hover:transition-transform duration-500' src={contactRouge} />
          </button>

          {/*
          <div className='smallbox absolute w-[200px] macBeco:w-[300px] -rotate-[15deg] ml-16 mb-5 macBeco:mb-10'>
          <div className='smallbox absolute w-[13vw] macBeco:w-[15vw] top-[8vw] macBeco:top-[10vw] left-[5vw] macBeco:left-[3vw] -rotate-[15deg] '>
          <img src={box} />
          </div>
          <div className='smallbox w-[15vw] mb-5 macBeco:mb-10 ml-10 -rotate-[17deg] '>
          <img src={box} />
          </div>
          */}
          <div className='smallbox hidden fromJB:block w-[15vw] mt-44 ml-20 -rotate-[17deg] '>
            <img src={box} />
          </div>

          {/* <div className='box absolute w-[25vw] -top-[10vw] left-[3vw] 1280:-left-[3vw] 1536:-left-[5vw]'> */}
          <div className='box absolute w-[25vw] -top-[10vw] left-[3vw] 1281:left-0 1920:-left-[3vw] '>
            <img className='object-cover' src={box} />
          </div>
        </div>


        <Dialog open={openContact} size='sm' handler={handleOpen} className='flex items-center justify-center bg-transparent'>
          <ToastContainer
            position="top-center"
            autoClose={2000}
            limit={3}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover={false}
            theme="light"
          />
          <Contact setOpen={setOpenContact} />
        </Dialog>

      </div>
    </div>
  )
}

export default Coming