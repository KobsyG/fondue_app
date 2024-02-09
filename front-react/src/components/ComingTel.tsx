
import './Coming.css'
import contactRouge from "../images/Mono/contact-rouge.svg"

import logoChampion from '../images/FFP/logoFondueChampionne.svg'
import { useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { Dialog } from '@material-tailwind/react'
import { ToastContainer } from 'react-toastify'
import Contact from './Contact'
import FourniComponent, { fourniTel1, fourniTel2, fourniTel3, fourniTel4 } from './FourniComponent'

const box = require('../images/FFP/box.png')
// const pageCahier = require('../images/FFP/pageCahierCut.png')
const kraft = require('../images/FFP/kraftBg.png')
const facebook = require('../images/FFP/facebook.png')
const insta = require('../images/FFP/insta.png')
const ruban2 = require('../images/FFP/rubanCut.png')

const bouteille = require('../images/FFP/bouteille.png')
const bouteilleLong = require('../images/FFP/bouteilleLong.png')
const fleurs = require('../images/FFP/fleursGentiane.png')
const fleursLong = require('../images/FFP/fleursLong.png')
const fromages = require('../images/FFP/fromages.png')
const fromagesLong = require('../images/FFP/fromagesLong.png')
const lentilles = require('../images/FFP/lentilles.png')
const lentillesLong = require('../images/FFP/lentillesLong.png')
const pastille = require('../images/FFP/pastilleCouderc.png')
const pastilleLong = require('../images/FFP/pastilleLong.png')
const sneaky1 = require('../images/FFP/sneaky1.png')
const sneaky1Long = require('../images/FFP/sneaky1-long.png')
const sneaky2 = require('../images/FFP/sneaky2.png')
const sneaky2Long = require('../images/FFP/sneaky2-long.png')
const sneaky3 = require('../images/FFP/sneaky3.png')
const sneaky3Long = require('../images/FFP/sneaky3-long.png')


const phraseFromagesLong = require('../images/FFP/phraseFromage-long.png')
const phraseFleursLong = require('../images/FFP/phraseGentiane-long.png')
const phraseLentillesLong = require('../images/FFP/phraseLentille-long.png')

const phraseFromages = require('../images/FFP/phraseFromage-tel.png')
const phraseFleurs = require('../images/FFP/phraseGentiane-tel.png')
const phraseLentilles = require('../images/FFP/phraseLentille-tel.png')

const coeurs = require('../images/FFP/coeur-tel.png')

const ProgressAvanced = 100 / 20

const ComingTel = ({ loadingDisplay, setProgress }: { loadingDisplay: boolean, setProgress: React.Dispatch<React.SetStateAction<number>> }) => {

  const [openContact, setOpenContact] = useState(false);
  const comingTelContainer = useRef(null);

  const handleOpen = () => setOpenContact(!openContact);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to('.box', {
        x: -10,
        duration: 0,
      })
    }, comingTelContainer)
    return () => {
      ctx.revert();
    };
  }, []);




  function runSneanyslong() {

    const sneakylongTl = gsap.timeline({
      repeat: -1,
    })

    sneakylongTl.to('.sneaky1', { opacity: 1 })
      .fromTo('.sneaky1', {
        xPercent: -10,
        yPercent: -2,
      }, {
        xPercent: 0,
        yPercent: 0,
      })
      .to('.sneaky1', { zIndex: 10 })
      .to('.sneaky1', {
        zIndex: 0,
        opacity: 0,
        xPercent: -10,
      }, '+=4')

    sneakylongTl.to('.sneaky2', { opacity: 1 })
      .fromTo('.sneaky2',
        {
          yPercent: +10,
        }, {
        yPercent: 0,
      })
      .to('.sneaky2', { zIndex: 10 })
      .to('.sneaky2', {
        opacity: 0,
        yPercent: +10,
        zIndex: 0,
      }, '+=4')

    sneakylongTl.to('.sneaky3', { opacity: 1 })
      .fromTo('.sneaky3',
        {
          yPercent: +10,
        }, {
        yPercent: 0,
      })
      .to('.sneaky3', { zIndex: 10 })
      .to('.sneaky3', {
        opacity: 0,
        yPercent: +10,
        zIndex: 0,
      }, '+=4')
  }

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
      if (!loadingDisplay) {

        const frigoTl = gsap.timeline({
          onComplete: () => {
            if (window.matchMedia('(max-aspect-ratio: 0.5)').matches)
              runSneanyslong()
            else
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
          .fromTo('.coeursTelShort', {
            clipPath: 'polygon(100% 100%, 100% 100%, 100% 100%, 100% 100%)',
          }, {
            duration: 4,
            ease: 'power3.out',
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          }, '2.8')

      }
    }, comingTelContainer)
    return () => {
      ctx.revert();
    };
  }, [loadingDisplay]);

  return (
    <div ref={comingTelContainer} className='comingTelContainer relative w-[100vw] bg-[#1B133B] overflow-hidden'>

      <a className='w-[50px] macBeco:w-[60px]' href="https://www.morin-fromager.fr/produit/box-fondue-coeur/" target='_blank'>
        <button onClick={handleOpen} className='contact pastille-size-margin-tel fixed z-40 flex items-center justify-center'>
          <p style={{ fontFamily: 'AvocadoCake' }} className='absolute z-10 sm:text-[22px] text-white'>ON SE LANCE ?</p>
          <img className='pastille-contact absolute h-full w-full z-0' src={contactRouge} onLoad={() => setProgress(progress => progress + ProgressAvanced)} />
        </button>
      </a>

      <div className='part1 flex flex-col h-[100vh]'>

        <div className='topbar w-full h-[100px] sm:h-[200px] flex justify-between'>
          <div className='fonduecoeur w-[40%] pl-4 my-auto sm:ml-[3vw]'>
            <img className=' object-contain' src={require('../images/FFP/logo.png')} alt='logo fonduecoeur' onLoad={() => setProgress(progress => progress + ProgressAvanced)} />
          </div>

          <div className='championne h-[70%] pr-4 my-auto'>
            <img className='object-contain h-full' src={logoChampion} alt='logo fondue championne de France' onLoad={() => setProgress(progress => progress + ProgressAvanced)} />
          </div>
        </div>

        <div className='carreau block h-[20px] min-h-[20px] w-full bg-contain bg-repeat-x bg-dominos' />

        <div className='page1 w-full flex flex-col bg-[#30246C] grow'>

          <h2 style={{ fontFamily: 'OpenSansBold' }} className='text-white h-fit w-fit px-1 text-[3vh] bg-fondue-red ml-[4vw] mt-[4vw] sm:mt-[2vw]'>LE CONCEPT</h2>
          <p style={{ fontFamily: 'OpenSansBold' }} className='text-white text-[2.5vh] w-[90%] text-left ml-[4vw] mt-[4vw] leading-6 sm:leading-10 sm:mt-[2vw]'>UNE BOX QUI RASSEMBLE TOUS LES INGRÉDIENTS POUR RÉALISER <span className='text-fondue-red'>CHEZ VOUS</span> LA FONDUE CHAMPIONNE DE FRANCE ET 100% MADE IN AUVERGNE !</p>

          <div className='photos relative h-fit w-full mx-auto my-auto'>

            {/* LES 3 COEURS */}
            <img src={coeurs} className='coeursTelShort object-cover absolute z-0 top-0 left-0 opacity-0' alt=''onLoad={() => setProgress(progress => progress + ProgressAvanced)}/>

            {/* PHOTOS FRIGOS */}
            <picture>
              <source
                media='(min-aspect-ratio: 0.5)'
                srcSet={bouteille}
                className='bouteille object-cover absolute z-20 top-0 left-0 opacity-0'
              />
              <source
                media='(max-aspect-ratio: 0.5)'
                srcSet={bouteilleLong}
                className='bouteille long-ratio object-cover absolute z-20 top-0 left-0 opacity-0'
              />
              <img src={bouteille} className='bouteille object-cover absolute z-20 top-0 left-0 opacity-0' alt='bouteille de gentiane Couderc' onLoad={() => setProgress(progress => progress + ProgressAvanced)}/>
            </picture>
            <picture>
              <source
                media='(min-aspect-ratio: 0.5)'
                srcSet={fleurs}
                className='fleurs object-cover absolute top-0 left-0 opacity-0 z-10'
              />
              <source
                media='(max-aspect-ratio: 0.5)'
                srcSet={fleursLong}
                className='fleurs long-ratio object-cover absolute top-0 left-0 opacity-0 z-10'
              />
              <img src={fleurs} className='fleurs object-cover absolute top-0 left-0 opacity-0 z-10' alt='fleur de gentiane' onLoad={() => setProgress(progress => progress + ProgressAvanced)}/>
            </picture>
            <picture>
              <source
                media='(min-aspect-ratio: 0.5)'
                srcSet={fromages}
                className='fromages object-cover absolute top-0 left-0 opacity-0 z-10'
              />
              <source
                media='(max-aspect-ratio: 0.5)'
                srcSet={fromagesLong}
                className='fromages long-ratio object-cover absolute top-0 left-0 opacity-0 z-10'
              />
              <img src={fromages} className='fromages object-cover absolute top-0 left-0 opacity-0 z-10' alt="fromages AOP d'Auvergne" onLoad={() => setProgress(progress => progress + ProgressAvanced)}/>
            </picture>
            <picture>
              <source
                media='(min-aspect-ratio: 0.5)'
                srcSet={lentilles}
                className='lentilles object-cover absolute top-0 left-0 opacity-0 z-10'
              />
              <source
                media='(max-aspect-ratio: 0.5)'
                srcSet={lentillesLong}
                className='lentilles long-ratio object-cover absolute top-0 left-0 opacity-0 z-10'
              />
              <img src={lentilles} className='lentilles object-cover absolute top-0 left-0 opacity-0 z-10' alt='farine de lentilles blondes de Saint-Flour' onLoad={() => setProgress(progress => progress + ProgressAvanced)}/>
            </picture>
            <picture>
              <source
                media='(min-aspect-ratio: 0.5)'
                srcSet={pastille}
                className='pastille object-cover absolute top-0 left-0 opacity-0 z-10'
              />
              <source
                media='(max-aspect-ratio: 0.5)'
                srcSet={pastilleLong}
                className='pastille long-ratio object-cover absolute top-0 left-0 opacity-0 z-10'
              />
              <img src={pastille} className='pastille object-cover absolute top-0 left-0 opacity-0 z-10' alt='logo distillerie Couderc' onLoad={() => setProgress(progress => progress + ProgressAvanced)}/>
            </picture>

            {/* PHRASES */}
            <picture>
              <source
                media='(min-aspect-ratio: 0.5)'
                srcSet={phraseFromages}
                className='phraseFromages object-cover absolute top-0 left-0'
              />
              <source
                media='(max-aspect-ratio: 0.5)'
                srcSet={phraseFromagesLong}
                className='phraseFromages long-ratio object-cover absolute top-0 left-0'
              />
              <img src={phraseFromages} className='phraseFromages object-cover absolute top-0 left-0' alt="phrase les fromages AOP d'Auvergne" onLoad={() => setProgress(progress => progress + ProgressAvanced)}/>
            </picture>
            <picture>
              <source
                media='(min-aspect-ratio: 0.5)'
                srcSet={phraseLentilles}
                className='phraseLentilles object-cover absolute top-0 left-0'
              />
              <source
                media='(max-aspect-ratio: 0.5)'
                srcSet={phraseLentillesLong}
                className='phraseLentilles long-ratio object-cover absolute top-0 left-0'
              />
              <img src={phraseLentilles} className='phraseLentilles object-cover absolute top-0 left-0' alt='phrase la farine de lentilles blondes de la planèze' onLoad={() => setProgress(progress => progress + ProgressAvanced)}/>
            </picture>

            {/* {Sneaky Guys} */}

            <picture>
              <source
                media='(min-aspect-ratio: 0.5)'
                srcSet={sneaky1}
                className='sneaky1 object-cover absolute top-0 left-0 opacity-0'
              />
              <source
                media='(max-aspect-ratio: 0.5)'
                srcSet={sneaky1Long}
                className='sneaky1long long-ratio object-cover absolute top-5 left-5 opacity-0'
              />
              <img src={sneaky1} className='sneaky1 object-cover absolute top-0 left-0 opacity-0' alt='' onLoad={() => setProgress(progress => progress + ProgressAvanced)}/>
            </picture>

            <picture>
              <source
                media='(min-aspect-ratio: 0.5)'
                srcSet={sneaky2}
                className='sneaky2 object-cover absolute top-0 left-0 opacity-0'
              />
              <source
                media='(max-aspect-ratio: 0.5)'
                srcSet={sneaky2Long}
                className='sneaky2long long-ratio object-cover absolute top-0 left-0 opacity-0'
              />
              <img src={sneaky2} className='sneaky2 object-cover absolute top-0 left-0 opacity-0' alt='' onLoad={() => setProgress(progress => progress + ProgressAvanced)}/>
            </picture>

            <picture>
              <source
                media='(min-aspect-ratio: 0.5)'
                srcSet={sneaky3}
                className='sneaky3 object-cover absolute top-0 left-0 opacity-0'
              />
              <source
                media='(max-aspect-ratio: 0.5)'
                srcSet={sneaky3Long}
                className='sneaky3long long-ratio object-cover absolute top-0 left-0 opacity-0'
              />
              <img src={sneaky3} className='sneaky3 object-cover absolute top-0 left-0 opacity-0' alt='' onLoad={() => setProgress(progress => progress + ProgressAvanced)}/>
            </picture>

            {/* phraseFleurs is the only one without absolutness */}
            <picture>
              <source
                media='(min-aspect-ratio: 0.5)'
                srcSet={phraseFleurs}
                className='phraseFleurs object-cover'
              />
              <source
                media='(max-aspect-ratio: 0.5)'
                srcSet={phraseFleursLong}
                className='phraseFleurs long-ratio object-cover'
              />
              <img src={phraseFleurs} className='phraseFleurs object-cover' alt="phrase la gentiane couderc au thé d'Aubrac" onLoad={() => setProgress(progress => progress + ProgressAvanced)}/>
            </picture>
          </div>
        </div>
        <div className='carreau block h-[20px] min-h-[20px] w-full bg-contain bg-repeat-x bg-dominos' />
      </div>


      <div className='page3 relative h-[60vh] w-[full] flex flex-col-reverse bg-yellow-800'>
        <img src={kraft} className='h-full w-full object-cover absolute' alt=''onLoad={() => setProgress(progress => progress + ProgressAvanced)}/>
        <div style={{ pointerEvents: 'none' }} className='ruban absolute flex flex-row z-30 h-[50%] w-[50%] top-0 left-0'>
          <img src={ruban2} className='object-cover h-full' alt=''onLoad={() => setProgress(progress => progress + ProgressAvanced)}/>
          <div className='box h-32 mt-[40%] sm:mt-[20%] grow sm:grow-0 sm:w-[75%]'>
            <img src={box} className='object-cover w-full' alt='boite fonduecoeur' onLoad={() => setProgress(progress => progress + ProgressAvanced)}/>
          </div>
        </div>

        <div className='flex flex-col relative bottom-0 left-0 w-[45%] h-[50%] pb-3'>
          <div className='w-full h-[30%] flex items-center pl-3'>
            <button onClick={handleOpen} className='h-fit w-fit'>
              <h2 style={{ fontFamily: 'AvocadoCake' }} className='text-[20px] sm:text-[35px] sm:text-left sm:ml-6 text-fondue-red'>ON RESTE <br /> EN CONTACT ?</h2>
            </button>
          </div>
          <div className='w-full relative h-[60%] flex'>
            <div className='guyHP relative bottom-0 left-0 w-full h-full'>
              <img className='absolute w-full h-full object-contain' src={require('../images/FFP/guy-hp.png')} alt='' onLoad={() => setProgress(progress => progress + ProgressAvanced)}/>
            </div>
            <div className='reseaux absolute bottom-2 -right-2 flex flex-col justify-between'>
              <a className='facebook w-[9vw]' href="https://www.facebook.com/fonduecoeur" target='_blank' rel="noopener noreferrer">
                <img src={facebook} alt='logo Facebook' onLoad={() => setProgress(progress => progress + ProgressAvanced)}/>
              </a>
              <a className='instagram w-[9vw] mt-2' href="https://instagram.com/fondue_coeur?igshid=OGQ5ZDc2ODk2ZA==" target='_blank' rel="noopener noreferrer">
                <img src={insta} alt='logo Instagram' onLoad={() => setProgress(progress => progress + ProgressAvanced)}/>
              </a>
            </div>
          </div>
          <div className='w-full h-[10%] flex items-center pl-3'>
            <p style={{ fontFamily: 'OpenSansBold' }} className='text-left text-[3vw] text-white w-fit px-1 bg-fondue-blue'>CONTACT@FONDUECOEUR.FR</p>
          </div>
        </div>

        <div className='page-rotate absolute h-[110%] w-[65%] left-[45%] top-0 -rotate-[6deg]'>
          <FourniComponent fourniList={[fourniTel1, fourniTel2, fourniTel3, fourniTel4]} />
        </div>
      </div>

      <Dialog open={openContact} size='md' handler={handleOpen} className='flex items-center shadow-none justify-center bg-transparent'>
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
  )
}

export default ComingTel