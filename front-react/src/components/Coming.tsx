import React from 'react'
import cheese from '../images/jb/cheese1.svg'
import contactRouge from "../images/Mono/contact-rouge.svg"

const Coming = () => {
    return (
        <div className='coming h-[100vh] w-[100vw] bg-[#1B133B] flex flex-col overflow-hidden'>
            <div className='topbar w-full h-[20%] min-h-[180px] flex'>
                <div className='fonduecoeur h-[60%] min-w-[408px] ml-[60px] my-auto'>
                    <img className='h-full object-contain' src={require('../images/FFP/logo.png')} />
                </div>

                <div className='devenez h-full flex-col justify-center items-left hidden xl:flex ml-[30px] macBeco:ml-[90px] text-[20px] macBeco:text-[25px]'>
                    <h2 className='bg-fondue-red whitespace-nowrap px-2 w-fit mb-2 text-white'>
                        DEVENEZ À VOTRE TOUR
                    </h2>
                    <h2 className='bg-fondue-red whitespace-nowrap px-2 text-white'>
                        UN(E) CHAMPION(NE) DE FRANCE !
                    </h2>
                </div>

                <div className='championne h-full w-[384px] min-w-[384px] ml-auto bg-yellow-500'>

                </div>
            </div>

            <div className='carreau block h-[40px] min-h-[40px] w-full bg-contain bg-repeat-x bg-dominos' />

            <div className='main grow w-full flex items-end'>
                {/* <div className='page1 h-full w-[700px] min-w-[700px] flex flex-col bg-yellow-100'> */}
                <div className='page1 h-full w-[33vw] flex flex-col mr-3 bg-[#30246C]'>
                    <h2 className='text-white w-fit bg-fondue-red mt-10 ml-20'>LE CONCEPT</h2>
                    <p className='text-white w-[300px] mt-8 ml-20'>UNE BOX QUI RASSEMBLE TOUS LES INGRÉDIENTS POUR RÉALISER <span>CHEZ VOUS</span> LA FONDUE CHAMPIONNE DE FRANCE ET 100% MADE IN AUVERGNE !</p>

                    <div className='textImg flex pt-40'>
                        <p className='-rotate-90'>100% AUVERGNE</p>
                    </div>
                </div>

                <div className='pageDiapo h-full w-[27vw] bg-yellow-300'>
                    <img className='object-cover h-full object-[83%]' src={require('../images/FFP/diapo/cheese-fondue.jpeg')} />
                </div>
                {/* <div className='page3 relative h-full w-[700px] min-w-[700px] flex flex-col-reverse bg-yellow-800'> */}
                <div className='page3 relative h-full w-[40vw] flex flex-col-reverse bg-yellow-800'>
                    <div className='ruban absolute h-[70%] w-[100px] top-0 -left-[50px] bg-fondue-red'>
                        <img className='absolute object-cover w-full bottom-0' src={require('../images/cheese/gentiane-button.png')} />
                    </div>
                    <div className='flex items-end'>
                        <div className='guyHP relative h-[150px] w-[150px] mb-5'>
                            <img className='absolute bottom-0' src={require('../images/FFP/guy-hp.png')} />
                        </div>
                        <div className='reseaux h-[60px] w-[140px] flex justify-between mb-10'>
                            <button className='facebook h-[60px] w-[60px]'>
                                <img src={require('../images/waiting/facebook.webp')} />
                            </button>

                            <button className='instagram h-[60px] w-[60px]'>
                                <img src={require('../images/waiting/insta.webp')} />
                            </button>
                        </div>
                    </div>

                    <p style={{ fontFamily: 'OpenSansBold' }} className='text-left text-[15px] w-fit ml-16 mb-16 text-white bg-fondue-blue'>CONTACT@FONDUECOEUR.FR</p>
                    <h2 style={{ fontFamily: 'AvocadoCake' }} className='text-[25px] w-[150px] ml-16 mb-5 text-fondue-red'>ON RESTE EN CONTACT ?</h2>

                    <div className='page-rotate absolute h-[105%] w-[500px] -bottom-5 -right-7 -rotate-6 bg-gray-200'>
                        <h3 style={{ fontFamily: 'AvocadoCake' }} className='text-fondue-red text-[25px] w-[50%] mt-10 ml-20'>ET ON LA TROUVE OÙ CETTE MERVEILLE ?</h3>
                        <ul style={{ fontFamily: 'OpenSansBold' }} className='mt-5 ml-10 text-fondue-blue text-[15px] w-[80%]'>
                            <li>
                                <h1 className='font-bold text-[17px]'>DISTILLERIE LOUIS COUDERC</h1>
                                <p className='text-left'>14 rue Victor Hugo à Aurillac</p>
                                <p className='text-left'>04 71 48 01 50 - commercial@distillerie-couderc.com</p>
                            </li>
                            <br />
                            <li>
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
                            <li>
                                <h1 className='font-bold text-[17px]'>LECLERC AURILLAC</h1>
                                <p className='text-left'>26 Rue de la Jordanne</p>
                                <p></p>

                            </li>
                        </ul>

                        <button className='contact group absolute h-[120px] w-[120px] bottom-20 right-20 rotate-12 flex items-center justify-center text-center'>
                            <p style={{ fontFamily: 'AvocadoCake' }} className='absolute w-[80px] z-10 text-[20px] text-white'>ON SE LANCE ?</p>
                            <img className='relative pastille h-full z-0 lg:group-hover:rotate-45 lg:group-hover:scale-[1.25] transition-transform duration-500' src={contactRouge} />
                        </button>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Coming