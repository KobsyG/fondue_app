import React from 'react'

const croix = require("../images/Mono/croix.png")
// const enveloppe = require("../images/FFP/enveloppe.webp")
const enveloppe = require("../images/FFP/enveloppe2.png")

const Command = ({ setOpenCommand, setOpenContact }: { setOpenCommand: React.Dispatch<React.SetStateAction<boolean>>, setOpenContact: React.Dispatch<React.SetStateAction<boolean>> }) => {
  return (
    <div style={{ fontFamily: 'OccamsEraser' }} className='contact-container relative h-[220px] w-[400px] rounded-[20px] flex items-center justify-center flex-col gap-5 bg-[#202454]'>
      <button className='close-cross absolute top-3 right-3 h-[25px] w-[25px] lg:hover:scale-[1.15] transition-transform duration-200'>
        <img className='object-cover' src={croix} onClick={() => setOpenCommand(false)} alt='' />
      </button>

      <h1 className='text-[30px] text-fondue-yellow'>Commandez en ligne</h1>
      <a className='text-white border-2 p-2 text-[20px] lg:hover:scale-[1.10] lg:hover:bg-[#302450] transition-transform duration-200' href='https://www.morin-fromager.fr/produit/box-fondue-coeur' target='_blank' rel="noopener noreferrer">
        <h2>Morin Fromager</h2>
      </a>
      <button onClick={() => setOpenContact(true)} className='flex items-center text-[17px] text-gray-400 lg:hover:scale-[1.05] transition-transform duration-200'>
        <img className='h-10 mr-0' src={enveloppe} alt='enveloppe' />
        <h2>Nous contacter</h2>
      </button>
    </div>
  )
}

export default Command