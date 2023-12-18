import React from 'react'
import cheese from '../images/jb/cheese1.svg'

const Coming = () => {
    return (
        <div className='coming h-[100vh] w-[100vw] bg-[#202454] flex flex-col'>
            <div className='topbar w-full h-[200px] bg-red-300 flex'>
                <div className='fonduecoeur h-full w-[400px] mr-5 bg-yellow-100'>

                </div>

                <div className='devenez h-full flex flex-col justify-center items-left bg-yellow-300'>
                    <h2 className='bg-red-600 w-fit mb-2 text-white'>
                        DEVENEZ À VOTRE TOUR
                    </h2>
                    <h2 className='bg-red-600 text-white'>
                        UN(E) CHAMPION(NE) DE FRANCE !
                    </h2>
                </div>

                <div className='championne h-full w-[300px] ml-auto bg-yellow-500'>

                </div>
            </div>
            <div className='carreau block h-[40px] w-full bg-contain bg-repeat-x bg-dominos'>
            </div>
            <div className='main grow w-full bg-red-400 flex items-end'>
                <div className='page1 h-full w-[400px] flex flex-col bg-yellow-100'>
                    <h2>LE CONCEPT</h2>
                    <p>UNE BOX QUI RASSEMBLE TOUS LES INGRÉDIENTS POUR RÉALISER <span>CHEZ VOUS</span> LA FONDUE CHAMPIONNE DE FRANCE ET 100% MADE IN AUVERGNE !</p>
                    <div className='textImg flex pt-40'>
                        <p className='-rotate-90'>100% AUVERGNE</p>
                    </div>
                </div>

                <div className='page2 h-full w-[400px] ml-auto bg-yellow-300'>

                </div>
                <div className='page3 h-full w-[600px] flex flex-col-reverse bg-yellow-500'>
                    <div className='guyHP h-[200px] w-[200px] bg-gray-300'>

                    </div>
                    <div className='reseaux h-[40px] w-[100px] bg-gray-500'>

                    </div>
                    <p className='text-white bg-fondue-blue'>CONTACT@FONDUECOEUR.FR</p>
                    <h2 className='text-red-300'>ON RESTE EN CONTACT ?</h2>

                    <div className='page-rotate absolute h-[600px] w-[400px] -bottom-5 -right-7 -rotate-6 bg-gray-200'>
                        <h3 className='text-red-300'>ET ON LA TROUVE OÙ CETTE MERVEILLE ?</h3>
                        <ul>
                            <li>
                                <h1> <img className='h-5 w-5' src={cheese} /> DISTILLERIE LOUIS COUDERC</h1>
                                <p>14 rue Victor Hugo à Aurillac</p>
                                <p>04 71 48 01 50 - commercial@distillerie-couderc.com</p>
                            </li>
                            <li>
                                <h1>FROMAGERIE MORIN</h1>
                                <p>Marché aux Fromages</p>
                                <p>7 rue du buis à Aurillac - 04 71 48 63 10</p>
                                <p>Morin Fromager Center Commercial de Marmiers à Aurillac - 04 71 63 59 18</p>
                                <p>Morin Fromager Garric</p>
                                <p>13 avenue du Garric à Aurillac - 04 71 43 25 84</p>
                                <p>Marchés: Tulle, Ussel, Egleton, Bugeat, Le Rouget, Maurs Vic-sur-Cère, Ste Genevieve sur Argence</p>
                            </li>
                            <li>
                                <h1>LECLERC AURILLAC</h1>
                                <p>26 Rue de la Jordanne</p>
                                <p></p>

                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Coming