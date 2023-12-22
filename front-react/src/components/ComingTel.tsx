
import './Coming.css'
import contactRouge from "../images/Mono/contact-rouge.svg"

import logoChampion from '../images/FFP/logoFondueChampionne.svg'
import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'

const box = require('../images/FFP/box.png')
const pageCahier = require('../images/FFP/pageCahierCut.png')
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

const phraseFromagesLong = require('../images/FFP/phraseFromage-long.png')
const phraseFleursLong = require('../images/FFP/phraseGentiane-long.png')
const phraseLentillesLong = require('../images/FFP/phraseLentille-long.png')

const phraseFromages = require('../images/FFP/phraseFromage-tel.png')
const phraseFleurs = require('../images/FFP/phraseGentiane-tel.png')
const phraseLentilles = require('../images/FFP/phraseLentille-tel.png')

const coeurs = require('../images/FFP/coeur-tel.png')

const ComingTel = ({ loadingDisplay }: { loadingDisplay: boolean }) => {

    const comingTelContainer = useRef(null);

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

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            if (!loadingDisplay) {

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

            <button className='contact h-[100px] w-[100px] fixed bottom-5 right-5 z-40 rotate-12 flex items-center justify-center'>
                <p style={{ fontFamily: 'AvocadoCake' }} className='absolute z-10 text-[18px] text-white'>ON SE LANCE ?</p>
                <img className='pastille-contact absolute h-full w-full z-0' src={contactRouge} />
            </button>

            <div className='part1 flex flex-col h-[100vh]'>

                <div className='topbar w-full h-[100px] flex justify-between'>
                    <div className='fonduecoeur w-[40%] pl-4 my-auto'>
                        <img className=' object-contain' src={require('../images/FFP/logo.png')} />
                    </div>

                    <div className='championne w-[40%] pr-4 my-auto'>
                        <img className=' object-contain' src={logoChampion} />
                    </div>
                </div>

                <div className='carreau block h-[20px] min-h-[20px] w-full bg-contain bg-repeat-x bg-dominos' />

                <div className='page1 w-full flex flex-col bg-[#30246C] grow'>

                    <h2 style={{ fontFamily: 'OpenSansBold' }} className='text-white h-fit w-fit px-1 text-[3vh] bg-fondue-red ml-[4vw] mt-[4vw]'>LE CONCEPT</h2>
                    <p style={{ fontFamily: 'OpenSansBold' }} className='text-white text-[2.5vh] w-[90%] text-left ml-[4vw] mt-[4vw] leading-6'>UNE BOX QUI RASSEMBLE TOUS LES INGRÉDIENTS POUR RÉALISER <span className='text-fondue-red'>CHEZ VOUS</span> LA FONDUE CHAMPIONNE DE FRANCE ET 100% MADE IN AUVERGNE !</p>

                    {/* <div className='textImg flex pt-40'>
                        <p className='-rotate-90'>100% AUVERGNE</p>
                    </div> */}
                    <div className='photos relative h-fit w-full mx-auto my-auto'>

                        {/* LES 3 COEURS */}
                        <img src={coeurs} className='coeursTelShort object-cover absolute z-20 top-0 left-0 opacity-0' />

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
                            <img src={bouteille} className='bouteille object-cover absolute z-20 top-0 left-0 opacity-0' />
                        </picture>
                        <picture>
                            <source
                                media='(min-aspect-ratio: 0.5)'
                                srcSet={fleurs}
                                className='fleurs object-cover absolute top-0 left-0 opacity-0'
                            />
                            <source
                                media='(max-aspect-ratio: 0.5)'
                                srcSet={fleursLong}
                                className='fleurs long-ratio object-cover absolute top-0 left-0 opacity-0'
                            />
                            <img src={fleurs} className='fleurs object-cover absolute top-0 left-0 opacity-0' />
                        </picture>
                        <picture>
                            <source
                                media='(min-aspect-ratio: 0.5)'
                                srcSet={fromages}
                                className='fromages object-cover absolute top-0 left-0 opacity-0'
                            />
                            <source
                                media='(max-aspect-ratio: 0.5)'
                                srcSet={fromagesLong}
                                className='fromages long-ratio object-cover absolute top-0 left-0 opacity-0'
                            />
                            <img src={fromages} className='fromages object-cover absolute top-0 left-0 opacity-0' />
                        </picture>
                        <picture>
                            <source
                                media='(min-aspect-ratio: 0.5)'
                                srcSet={lentilles}
                                className='lentilles object-cover absolute top-0 left-0 opacity-0'
                            />
                            <source
                                media='(max-aspect-ratio: 0.5)'
                                srcSet={lentillesLong}
                                className='lentilles long-ratio object-cover absolute top-0 left-0 opacity-0'
                            />
                            <img src={lentilles} className='lentilles object-cover absolute top-0 left-0 opacity-0' />
                        </picture>
                        <picture>
                            <source
                                media='(min-aspect-ratio: 0.5)'
                                srcSet={pastille}
                                className='pastille object-cover absolute top-0 left-0 opacity-0'
                            />
                            <source
                                media='(max-aspect-ratio: 0.5)'
                                srcSet={pastilleLong}
                                className='pastille long-ratio object-cover absolute top-0 left-0 opacity-0'
                            />
                            <img src={pastille} className='pastille object-cover absolute top-0 left-0 opacity-0' />
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
                            <img src={phraseFromages} className='phraseFromages object-cover absolute top-0 left-0' />
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
                            <img src={phraseLentilles} className='phraseLentilles object-cover absolute top-0 left-0' />
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
                            <img src={phraseFleurs} className='phraseFleurs object-cover' />
                        </picture>
                    </div>
                </div>

                <div className='carreau block h-[20px] min-h-[20px] w-full bg-contain bg-repeat-x bg-dominos' />
            </div>


            <div className='page3 relative h-[60vh] w-[full] flex flex-col-reverse bg-yellow-800'>

                <img src={kraft} className='h-full w-full object-cover absolute' />

                <div className='ruban absolute flex flex-row z-30 h-[50%] w-[50%] top-0 left-0'>
                    <img src={ruban2} className='object-cover h-full' />
                    <div className='box h-32 mt-[35%] grow'>
                        <img src={box} className='object-cover w-full' />
                    </div>
                </div>


                <div className='flex flex-col relative bottom-0 left-0 w-[45%] h-[50%] pb-3'>

                    <div className='w-full h-[30%] flex items-center pl-3'>
                        <h2 style={{ fontFamily: 'AvocadoCake' }} className='text-[20px] text-fondue-red'>ON RESTE <br /> EN CONTACT ?</h2>
                    </div>

                    <div className='w-full relative h-[60%] flex'>
                        <div className='guyHP relative bottom-0 left-0 w-full h-full'>
                            <img className='absolute w-full h-full object-contain' src={require('../images/FFP/guy-hp.png')} />

                        </div>
                        <div className='reseaux absolute bottom-2 -right-2 flex flex-col justify-between'>
                            <button className='facebook w-[9vw]'>
                                <img src={facebook} />
                            </button>

                            <button className='instagram w-[9vw] mt-2'>
                                <img src={insta} />
                            </button>
                        </div>

                    </div>

                    <div className='w-full h-[10%] flex items-center pl-3'>
                        <p style={{ fontFamily: 'OpenSansBold' }} className='text-left text-[3vw] text-white w-fit px-1 bg-fondue-blue'>CONTACT@FONDUECOEUR.FR</p>
                    </div>


                </div>





                <div className='page-rotate absolute h-[110%] w-[65%] left-[45%] top-0 -rotate-[6deg]'>
                    <img src={pageCahier} className='absolute h-full w-full object-cover' />
                </div>
                <div className='page-rotate absolute top-[5%] h-[90%] w-[55%] left-[45%] -rotate-[6deg]'>


                    <div className='fournisseurs absolute'>
                        <h3 style={{ fontFamily: 'AvocadoCake' }} className='text-fondue-red text-[20px] w-[80%] mt-10 ml-[40px]'>ET ON LA TROUVE OÙ <br /> CETTE MERVEILLE ?</h3>
                        <ul style={{ fontFamily: 'OpenSansBold', listStyle: 'square' }} className='mt-5 ml-10 text-fondue-blue text-[8px] w-[80%]'>
                            <li className='' >
                                <h1 className='font-bold text-[12px]'>DISTILLERIE LOUIS COUDERC</h1>
                                <p className='text-left'>14 rue Victor Hugo à Aurillac</p>
                                <p className='text-left'>04 71 48 01 50 - commercial@distillerie-couderc.com</p>
                            </li>
                            <br />
                            <li className='' >
                                <h1 className='font-bold text-[12px]'>FROMAGERIE MORIN</h1>
                                <p className='text-left'>Marché aux Fromages</p>
                                <p className='text-left'>7 rue du buis à Aurillac - 04 71 48 63 10</p>
                                <p className='text-left'>Morin Fromager Center Commercial de Marmiers à Aurillac - 04 71 63 59 18</p>
                                <p className='text-left'>Morin Fromager Garric</p>
                                <p className='text-left'>13 avenue du Garric à Aurillac - 04 71 43 25 84</p>
                                <br />
                                <p className='text-left'>Marchés: Tulle, Ussel, Egleton, Bugeat, Le Rouget, Maurs Vic-sur-Cère, Ste Genevieve sur Argence</p>
                            </li>
                            <br />
                            <li className='' >
                                <h1 className='font-bold text-[12px]'>LECLERC AURILLAC</h1>
                                <p className='text-left'>26 Rue de la Jordanne</p>
                                <p></p>

                            </li>
                        </ul>
                    </div>


                </div>

                {/* <div className='box absolute w-[25vw] -top-[10vw] -left-[5vw]'>
                    <img className='object-cover' src={box} />
                </div> */}

            </div>
        </div>
    )
}

export default ComingTel