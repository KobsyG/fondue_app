import React from 'react'
const couleeTel = require("../images/coulee-telephone.png")
const couleePc = require("../images/coulee-ordi.png")

const Waiting = () => {
    return (
        <div className='waiting-container w-full h-[100vh] bg-fondue-blue'>
            
            <div className='coulee'>
                <picture>
                    <source
                        media='(max-width: 1024px)'
                        srcSet={couleeTel}
                    />
                    <source
                        media='(min-width: 1025px)'
                        srcSet={couleePc}
                    />
                    <img src={couleePc} />
                </picture>
                <img src={require('../../../')} />
                
            </div>




        </div>
    )
}

export default Waiting