import React from 'react'

const hautmontagne = require("../../../images/haut-mont.png");
const basmontagne = require("../../../images/bas-mont.png");
const couleeTel = require("../../../images/coulee-telephone.png")


const TerroirWIP = () => {
  return (
    <>
    <div className='terroir-container w-full h-[400vh] bg-fondue-blue'>
          <div className='coulee w-[80%] z-10 mx-auto sticky top-0'>
            <img className='w-full' src={couleeTel} />
          </div>
          <div className='montagne z-0 sticky top-0 h-[200vh]'>
            <img className='w-full object-cover' src={hautmontagne} />
            <img className='fleur h-48 absolute top-40 left-80 opacity-0' src={require('../../../images/fleur.png')} />
            <img className='fleur h-48 absolute top-40 right-80 opacity-0' src={require('../../../images/fleur.png')} />
            <div className='h-[100vh]'>
              <img className='h-full' src={basmontagne} />
            </div>
          </div>

          <div className='bg-red-400 h-[100vh]' />
        </div>
    </>
  )
}

export default TerroirWIP