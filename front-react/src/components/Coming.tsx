import React from 'react'
import cheese from '../images/jb/cheese1.svg'

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
                    <h2>LE CONCEPT</h2>
                    <p className='text-white'>UNE BOX QUI RASSEMBLE TOUS LES INGRÉDIENTS POUR RÉALISER <span>CHEZ VOUS</span> LA FONDUE CHAMPIONNE DE FRANCE ET 100% MADE IN AUVERGNE !</p>
                    
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
                        <div className='guyHP h-[200px] w-[150px] bg-gray-300'>

                        </div>
                        <div className='reseaux h-[40px] w-[100px] bg-gray-500'>

                        </div>
                    </div>

                    <p className='text-left text-white bg-fondue-blue'>CONTACT@FONDUECOEUR.FR</p>
                    <h2 className='text-red-300'>ON RESTE EN CONTACT ?</h2>

                    <div className='page-rotate absolute h-[105%] w-[500px] -bottom-5 -right-7 -rotate-6 bg-gray-200'>
                        <h3 className='text-red-300'>ET ON LA TROUVE OÙ CETTE MERVEILLE ?</h3>
                        <ul>
                            <li>
                                <h1>❤️ DISTILLERIE LOUIS COUDERC</h1>
                                <p>14 rue Victor Hugo à Aurillac</p>
                                <p>04 71 48 01 50 - commercial@distillerie-couderc.com</p>
                            </li>

                            <li>
                                <h1>❤️ FROMAGERIE MORIN</h1>
                                <p>Marché aux Fromages</p>
                                <p>7 rue du buis à Aurillac - 04 71 48 63 10</p>
                                <p>Morin Fromager Center Commercial de Marmiers à Aurillac - 04 71 63 59 18</p>
                                <p>Morin Fromager Garric</p>
                                <p>13 avenue du Garric à Aurillac - 04 71 43 25 84</p>
                                <p>Marchés: Tulle, Ussel, Egleton, Bugeat, Le Rouget, Maurs Vic-sur-Cère, Ste Genevieve sur Argence</p>
                            </li>

                            <li>
                                <h1>❤️ LECLERC AURILLAC</h1>
                                <p>26 Rue de la Jordanne</p>
                                <p></p>

                            </li>
                        </ul>

                        <button className='contact absolute h-[50px] w-[50px] bottom-20 right-20 bg-red-300'>

                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Coming