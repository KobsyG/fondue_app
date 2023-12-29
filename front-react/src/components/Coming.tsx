import { useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap';
import './Coming.css'

import contactRouge from "../images/Mono/contact-rouge.svg"
import logoChampion from '../images/FFP/logoFondueChampionne.svg'
import logoFondue from '../images/FFP/logo.png'
import { Carousel, Dialog } from '@material-tailwind/react'
import { ToastContainer } from 'react-toastify'
import Contact from './Contact'
import FourniComponent, { fourni1, fourni2, fourni3 } from './FourniComponent';

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
const coeurs = require('../images/FFP/coeur-tel.png')
const phraseFromage = require('../images/FFP/phraseFromage.png')
const phraseGentiane = require('../images/FFP/phraseGentiane.png')
const phraseLentille = require('../images/FFP/phraseLentille.png')
const sneakyMan = require('../images/FFP/SneakyMan.png')
const sneaky1 = require('../images/FFP/sneaky1.png')
const sneaky2 = require('../images/FFP/sneaky2.png')
const sneaky3 = require('../images/FFP/sneaky3.png')

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

  const [giant, setGiant] = useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      if (giant) {
        const sneakyManTl = gsap.timeline({
          onComplete: () => setGiant(false),
        });

        sneakyManTl
          .to('.sneakyGiant', {
            xPercent: -20,
            duration: 3,
            ease: 'none',
          }, '0')
          .to('.sneakyGiant', {
            xPercent: -20,
            duration: 0.5,
          }, '>')
          .to('.sneakyGiant', {
            xPercent: 0,
            ease: 'none',
            duration: 0.5,
          }, '>')
      }
    }, comingContainer);

    return () => ctx.revert();
  }, [giant]);

  const handleEaster = () => {
    setGiant(true);
  };

  function runSneanys() {

    const sneakyTl = gsap.timeline({
      repeat: -1,
    })

    sneakyTl.to('.sneaky3', { opacity: 1 })
      .fromTo('.sneaky3', {
        xPercent: -10,
        yPercent: -2,
      }, {
        xPercent: 0,
        yPercent: 0,
      })
      .to('.sneaky3', { zIndex: 10 })
      .to('.sneaky3', {
        zIndex: 0,
        opacity: 0,
        xPercent: -10,
      }, '+=4')

    sneakyTl.to('.sneaky1', { opacity: 1 })
      .fromTo('.sneaky1',
        {
          xPercent: +10,
        }, {
        xPercent: 0,
      })
      .to('.sneaky1', { zIndex: 10 })
      .to('.sneaky1', {
        opacity: 0,
        xPercent: +10,
        zIndex: 0,
      }, '+=4')

    // sneakyTl.to('.sneaky4', { opacity: 1 })
    //   .fromTo('.sneaky4',
    //     {
    //       xPercent: -20,
    //     }, {
    //     xPercent: 0,
    //   })
    //   // .to('.sneaky4', { zIndex: 10 })
    //   .to('.sneaky4', {
    //     opacity: 0,
    //     xPercent: -20,
    //     zIndex: 0,
    //   }, '+=4')

    sneakyTl.to('.sneaky2', { opacity: 1 })
      .fromTo('.sneaky2',
        {
          xPercent: -10,
        }, {
        xPercent: 0,
      })
      .to('.sneaky2', { zIndex: 10 })
      .to('.sneaky2', {
        opacity: 0,
        xPercent: -10,
        zIndex: 0,
      }, '+=4')
  }

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      if (!videoEnd) {
        const frigoTl = gsap.timeline({
          onComplete: () => {
            console.log("complete oui")
            runSneanys()
          }
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
          .fromTo('.bouteille', {
            opacity: 0,
          }, {
            opacity: 1,
            duration: 0.5,
          }, '1.5')
          .fromTo('.bouteille', {
            rotate: -180,
          }, {
            rotate: 360,
            duration: 3,
          }, '1.5')
          // .fromTo('.coeurs', {opacity: 0}, {opacity: 1})
          .fromTo('.coeurs', {
            opacity: 0, // sans ça + opacity-0 dans son classname: apparait furtivement apres la video 
            clipPath: 'polygon(100% 100%, 100% 100%, 100% 100%, 100% 100%)',
          }, {
            duration: 4,
            ease: 'power3.out',
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            opacity: 1, // sans ça + opacity-0 dans son classname: apparait furtivement apres la video 
          }, '3')
      }
    }, comingContainer)

    /*
    const contactTl = gsap.timeline({
      repeat: -1,
      repeatDelay: 5,
    })

    contactTl.to('.contact', {
      animationPlayState: 'running',
    })
    .to('.contact', {
      animationPlayState: 'paused',
    }, '+=2')
    */

    return () => {
      ctx.revert();
    };

  }, [videoEnd]);

  return (
    <div ref={comingContainer} className='coming absolute top-0 left-0 h-[100vh] w-[100vw] bg-[#1B133B] flex flex-col overflow-hidden'>

      <div className='sneakyGiant h-full w-full absolute z-[100] left-[100vw]'>
        <img src={sneakyMan} className='h-full absolute top-0 left-0 transform scale-x-[-1] object-cover' />
      </div>

      <div className='topbar w-full h-[20%] flex'>
        <div className='fonduecoeur h-[60%] min-w-[408px] ml-[60px] my-auto'>
          <img className='h-full object-contain' src={logoFondue} />
        </div>

        <div style={{ fontFamily: 'OpenSansBold' }} className='devenez h-full flex-col justify-center items-left hidden xl:flex ml-[30px] 1700:ml-[100px] text-[18px] 1600:text-[23px] 1800:text-[25px]'>
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

      <div className='carreau block h-[4vh] min-h-[2vh] w-full bg-contain bg-repeat-x bg-dominos' />

      <div className='main grow w-full flex items-end'>



        <div className='page1 h-full w-[33vw] min-w-[450px] flex flex-col mr-3 bg-[#30246C]'>

          <h2 style={{ fontFamily: 'OpenSansBold' }} className='text-white w-fit text-[1.2vw] px-2 ml-[1.5vw] mt-[1.5vw] fromMacBeco:ml-[2vw] fromMacBeco:mt-[2vw] bg-fondue-red'>LE CONCEPT</h2>
          <p style={{ fontFamily: 'OpenSansBold' }} className='text-white w-[90%] ml-[1.5vw] mt-[1.5vw] fromMacBeco:ml-[2vw] fromMacBeco:mt-[2vw] h-fit text-[1.1vw] text-left'>UNE BOX QUI RASSEMBLE TOUS LES INGRÉDIENTS POUR RÉALISER <span className='text-fondue-red'>CHEZ VOUS</span> LA FONDUE CHAMPIONNE DE FRANCE ET 100% MADE IN AUVERGNE !</p>

          <div className='relative w-full grow flex items-center overflow-hidden mb-[5vh]'>
            <div className='h-[80%] absolute z-20 left-0 top-0 flex'>
              <p style={{ letterSpacing: '2px', writingMode: 'vertical-lr', fontFamily: 'OccamsEraser' }} className='phare ml-[1vw] text-[3vw] pcJB:text-[2.5vw] whitespace-nowrap -rotate-180'>100% AUVERGNE</p>
            </div>
            <div className='photos relative w-[100%]'>
              <img src={bouteille} className='bouteille absolute z-40 top-0 left-0  h-full object-cover opacity-0' />
              <img src={fleurs} className='fleurs absolute top-0 left-0 h-full object-cover z-10 opacity-0' />
              <img src={fromages} className='fromages absolute top-0 left-0 h-full object-cover z-10 opacity-0' />
              <img src={lentilles} className='lentilles absolute top-0 left-0 h-full object-cover z-10 opacity-0' />
              <img src={pastille} className='pastille absolute top-0 left-0 h-full object-cover z-10 opacity-0' />
              <img src={coeurs} className='coeurs absolute top-0 left-0 h-full object-cover opacity-0' />
              {/* <img src={coeur1} className='absolute top-0 left-0 h-full object-cover' /> */}
              {/* <img src={coeur2} className='absolute top-0 left-0 h-full object-cover' /> */}
              {/* <img src={coeur3} className='absolute top-0 left-0 h-full object-cover' /> */}
              <img src={phraseFromage} className='absolute top-0 left-0 h-full object-cover' />
              {/* phraseGentiane is the only one without absolutness */}
              <img src={phraseGentiane} className='h-full object-cover' />
              <img src={phraseLentille} className='absolute top-0 left-0 h-full object-cover' />
              <img src={sneaky1} className='absolute sneaky1 top-0 left-0 opacity-0' />
              <img src={sneaky2} className='absolute sneaky2 top-0 left-0 opacity-0' />
              <img src={sneaky3} className='absolute sneaky3 top-0 left-0 opacity-0' />

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
              src={diapo6}
              alt="image 6"
              className="h-full object-cover object-[20%]"
            />
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
          </Carousel>
        </div>

        <div className='page3 relative h-full w-[35vw] macBeco:w-[40vw] min-w-[600px] macBeco:min-w-[750px] bg-yellow-800'>

          <img src={kraft} className='h-full w-full object-cover absolute' />

          <div className='ruban absolute top-0  h-[75%] w-[56px] 1366:w-[70px] -left-[28px] 1366:-left-[35px] 1536:w-[80px] 1536:-left-[40px] overflow-hidden flex flex-col-reverse z-10'>
            <img className='object-cover w-full' src={ruban2} />
            <div className='bg-fondue-red w-full h-[100vh]' />
          </div>


          <div className='absolute bottom-0 z-10 flex flex-col-reverse'>
            <div className='flex items-end'>
              <button onClick={handleEaster} className='guyHP relative h-[20vh] aspect-square mb-5 ml-2'>
                <img className='absolute bottom-0' src={require('../images/FFP/guy-hp.png')} />
              </button>
              <div className='reseaux h-[60px] w-[110px] macBeco:w-[125px] flex justify-between mb-5 macBeco:mb-10'>
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
            <p style={{ fontFamily: 'OpenSansBold' }} className='text-left text-[13px] macBeco:text-[15px] w-fit px-1 ml-16 mb-5 macBeco:mb-3 text-white bg-fondue-blue'>CONTACT@FONDUECOEUR.FR</p>
            <button onClick={handleOpen}>
              <h2 style={{ fontFamily: 'AvocadoCake' }} className='text-[25px] text-left macBeco:text-[27px] ml-16 mb-5 macBeco:mb-3 text-fondue-red'>ON RESTE <br /> EN CONTACT ?</h2>
            </button>

            <div className='h-[150px] relative overflow-hidden'>
              <img src={sneakyMan} className='sneaky4 object-cover absolute h-full left-[8px] 1366:left-[15px] 1536:left-[20px] opacity-0 z-0' />
            </div>

          </div>

          <div className='page-rotate absolute h-[105%] w-[400px] macBeco:w-[500px] -bottom-5 -right-16 -rotate-6 bg-gray-200'>
            <FourniComponent fourniList={[fourni1, fourni2, fourni3]} />
          </div>

          <button onClick={handleOpen} className='contact group absolute z-[101] h-[120px] w-[120px] bottom-5 right-5 flex items-center justify-center text-center'>
            <p style={{ fontFamily: 'AvocadoCake' }} className='absolute w-[80px] z-10 text-[20px] text-white'>ON SE LANCE ?</p>
            <img className='relative pastille-contact h-full lg:group-hover:rotate-45 lg:group-hover:scale-[1.25] transition-transform duration-500' src={contactRouge} />
          </button>

          <div className='smallbox hidden fromJB:block w-[15vw] mt-44 ml-20 -rotate-[17deg] '>
            <img src={box} />
          </div>

          <div className='box absolute w-[25vw] -top-[10vw] left-[3vw] 1281:left-0 1920:-left-[3vw] z-10'>
            <img className='object-cover' src={box} />
          </div>
        </div>


        <Dialog open={openContact} size='sm' handler={handleOpen} className='flex items-center justify-center shadow-none bg-transparent rounded-[20px]'>
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