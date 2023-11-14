import React from 'react'
import '../../styles/StaticText.css'
import '../../styles/font.css'

const StaticText = () => {
  return (
    <div className='absolute flex h-[100vh] w-[50vw] left-[20vw] items-center'>
            <h1 className='main-title'>FONDUE<br/>COEUR</h1>
            <img className='h-48 w-48' src={require("../../images/logo-bleu.png")} />
    </div>
  )
}

export default StaticText