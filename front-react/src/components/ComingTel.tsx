
import './Coming.css'
import contactRouge from "../images/Mono/contact-rouge.svg"

const box = require('../images/FFP/box.png')

const ComingTel = () => {
    return (
        <div className='comingTel relative w-[100vw] bg-[#1B133B] overflow-hidden'>

            <button className='contact h-[100px] w-[100px] fixed bottom-5 right-5 z-40 rotate-12 flex items-center justify-center'>
                <p style={{ fontFamily: 'AvocadoCake' }} className='absolute z-10 text-[18px] text-white'>ON SE LANCE ?</p>
                <img className='pastille absolute h-full w-full z-0' src={contactRouge} />
            </button>

            <div className='part1 flex flex-col h-[100vh]'>

                <div className='topbar w-full h-[100px] flex justify-between'>
                    <div className='fonduecoeur w-[40%] pl-4 my-auto'>
                        <img className=' object-contain' src={require('../images/FFP/logo.png')} />
                    </div>

                    <div className='championne w-[40%] pr-4 my-auto'>
                        <img className=' object-contain' src={require('../images/FFP/logo.png')} />
                    </div>
                </div>

                <div className='carreau block h-[20px] min-h-[20px] w-full bg-contain bg-repeat-x bg-dominos' />

                <div className='page1 p-3 w-full flex flex-col bg-[#30246C] justify-between grow'>

                    <h2 className='text-white h-fit w-fit px-1 text-[18px] bg-fondue-red my-auto'>LE CONCEPT</h2>
                    <p style={{ fontFamily: 'OpenSansBold' }} className='text-white text-[18px] text-left lead my-auto'>UNE BOX QUI RASSEMBLE TOUS LES INGRÉDIENTS POUR RÉALISER <span className='text-fondue-red'>CHEZ VOUS</span> LA FONDUE CHAMPIONNE DE FRANCE ET 100% MADE IN AUVERGNE !</p>

                    {/* <div className='textImg flex pt-40'>
                        <p className='-rotate-90'>100% AUVERGNE</p>
                    </div> */}
                    <div className='h-[60vh] w-full my-auto bg-green-500'>

                    </div>
                </div>

                <div className='carreau block h-[20px] min-h-[20px] w-full bg-contain bg-repeat-x bg-dominos' />
            </div>


            <div className='page3 relative h-[60vh] w-[full] flex flex-col-reverse bg-yellow-800'>

                <div className='ruban absolute h-[50%] w-[15vw] top-0 left-0 bg-fondue-red'>
                    <img className='absolute object-cover w-full bottom-0' src={require('../images/cheese/gentiane-button.png')} />
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
                                <img src={require('../images/waiting/facebook.webp')} />
                            </button>

                            <button className='instagram w-[9vw] mt-2'>
                                <img src={require('../images/waiting/insta.webp')} />
                            </button>
                        </div>

                    </div>

                    <div className='w-full h-[10%] flex items-center pl-3'>
                        <p style={{ fontFamily: 'OpenSansBold' }} className='text-left text-[3vw] text-white w-fit px-1 bg-fondue-blue'>CONTACT@FONDUECOEUR.FR</p>
                    </div>


                </div>





                <div className='page-rotate absolute h-[110%] w-[65%] left-[45%] top-0 -rotate-[6deg] bg-gray-200' />
                <div className='page-rotate absolute top-[5%] h-[90%] w-[55%] left-[45%] -rotate-[6deg] bg-blue-100'>

                    {/* 
                    
                    
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
                */}

                </div>

                {/* <div className='box absolute w-[25vw] -top-[10vw] -left-[5vw]'>
                    <img className='object-cover' src={box} />
                </div> */}

            </div>
        </div>
    )
}

export default ComingTel