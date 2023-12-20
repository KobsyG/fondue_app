import React from 'react'

const ComingTel = () => {
    return (
        <div className='comingTel w-full bg-[#1B133B]'>
            <div className='part1 h-[100vh]'>
                <div className='topbar w-full h-[100px] flex justify-between'>
                    <div className='fonduecoeur w-[40%] pl-4 my-auto'>
                        <img className=' object-contain' src={require('../images/FFP/logo.png')} />
                    </div>

                    <div className='championne w-[40%] pr-4 my-auto'>
                        <img className=' object-contain' src={require('../images/FFP/logo.png')} />
                    </div>
                </div>

                <div className='carreau block h-[20px] w-full bg-contain bg-repeat-x bg-dominos' />

                <div className='page1 w-full flex flex-col items-center mr-3 bg-[#30246C]'>
                    <h2 className='text-white h-fit text-[20px] bg-fondue-red'>LE CONCEPT</h2>
                    <p style={{ fontFamily: 'OpenSansBold' }} className='text-white text-[18px] leadi'>UNE BOX QUI RASSEMBLE TOUS LES INGRÉDIENTS POUR RÉALISER <span className='text-fondue-red'>CHEZ VOUS</span> LA FONDUE CHAMPIONNE DE FRANCE ET 100% MADE IN AUVERGNE !</p>

                    {/* <div className='textImg flex pt-40'>
                        <p className='-rotate-90'>100% AUVERGNE</p>
                    </div> */}
                    <div className='h-[50vh] w-full my-auto bg-green-500'>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default ComingTel