import React, { useState } from 'react'
import { Dialog } from "@material-tailwind/react";
import { ToastContainer } from 'react-toastify';

import contactRouge from "../images/Mono/contact-rouge.svg"
import Contact from './Contact';
import CheeseWindow from './CheeseWindow';

const instaLogo = require("../images/waiting/insta.webp")
const facebookLogo = require("../images/waiting/facebook.webp")
const box = require("../images/Mono/box.png")
const basbox = require("../images/Mono/bas-box.png")
const logopng = require("../images/Mono/mainLogo.png")
const fondueChampionne = require("../images/Mono/fondue-championne.png")
const drapal = require("../images/Mono/drapal.png")
// const test = require("../images/Mono/Capture d’écran 2023-11-28 à 16.51.42.png")

const boxTest = require("../images/Mono/boxTest.jpg")


const texte = "La box fondue coeur, c’est un coffret, qui renferme tous les ingrédients et secrets pour réaliser chez vous la première fondue championne de France."
const texte1 = "La box fondue coeur, c’est un coffret, qui renferme tous les ingrédients et secrets pour réaliser chez vous:"
const texte2 = "La première fondue championne de France !"
const texte3 = `À l'honneur les 5 fromages AOP d'auvergne, l'or jaune de nos montagnes "la gentiane" et les lentilles blondes de la planèze...`
// bg-[url("./images/jb/portrait_of_black_man.jpg")]

//---------------------------------------------------------------------------
//--------------------------CheeseWindow-------------------------------------
//---------------------------------------------------------------------------
const titreStNectaire = "LE SAINT NECTAIRE"
const textStNectaire = "Appellation d’Origine depuis 1955, il est produit en Auvergne sur une petite zone de montagne de 69 communes, situées sur le Massif du Sancy, le plateau du Cézallier et les monts d'Artense."
const photoStNectaire = require('../images/cheese/stNectaire.jpg')

const titreCantal = "LE CANTAL"
const textCantal = "Avec sa pâte de couleur ivoire et sa croûte délicatement teintée de brun, le Cantal est le seul fromage de France à porter le nom de son département de naissance. C’est aussi l’un des plus anciens fromages dont l’origine remonte à des millénaires, qui a acquis ses lettres de noblesse dès 1956 obtenant l’AOC."
const photoCantal = require('../images/cheese/Cantal.jpg')

const titreSalers = "LE SALERS"
const textSalers = "L’histoire du Salers a commencé autour du bourg médiéval de Salers situé à 930 mètres d’altitude. Au printemps, les fermiers avaient l’habitude d’emmener leurs vaches en estive, c’est-à-dire en haute altitude où l’air et la qualité de l’herbe sont meilleurs. Toute la vie s’organisait autour du troupeau et de la fabrication du fromage. Les paysans s’installaient dans des burons, constructions en pierre aux toits de lauzes, qui représentaient la ferme d’été."
const photoSalers = require('../images/cheese/Salers.jpg')

const titreFourme = "LA FOURME D'AMBERT"
const textFourme = "Produite avec du lait de vache recueilli entre 600 et 1 600 m d’altitude, la Fourme d’Ambert est sans doute le plus doux des fromages bleus. C’est l’un des rares fromages au féminin : elle présente des formes généreuses, tout en rondeur. Sous sa croûte sèche, sa pâte douce et onctueuse de couleur blanche à crème est régulièrement persillée de moisissures bleu-vert."
const photoFourme = require('../images/cheese/Fourme.jpg')

const titreBleu = "LE BLEU D'AUVERGNE"
const textBleu = "Né au milieu du 19e siècle de la passion d’un fermier qui imagina ensemencer le lait avec la moisissure bleue qui se formait sur le pain de seigle..."
const photoBleu = require('../images/cheese/Bleu.jpg')

const titreGentiane = "LA GENTIANE"
const textGentiane = "Fondée en 1908 par Louis Couderc et Joseph Bony à Aurillac, la distillerie poursuit aujourd'hui son développement grâce à Jean-Jacques Vermeersch. La gentiane reste son produit emblématique mais la collection compte aujourd’hui un éventail de liqueurs et de crèmes, toujours élaborées dans le respect de la tradition familiale."
const photoGentiane = require('../images/cheese/gentiane.png')


//--------------------------------------------------------------------------
//--------------------------------------------------------------------------

const Mono = () => {

  const [openContact, setOpenContact] = useState(false);
  const handleOpen = () => setOpenContact(!openContact);

  const [openCheese, setOpenCheese] = useState(false);
  const handleOpenCheese = () => setOpenCheese(!openCheese);

  const [titre, setTitre] = useState('');
  const [text, setText] = useState('');
  const [photo, setPhoto] = useState(null);

  return (
    <div className='mono-contain h-[100vh] w-[100vw] flex flex-col bg-[#202454] '>

      <div className='top-bar relative h-[100px] sm:min-h-[230px] w-full bg-[#202454]'>

        <button onClick={handleOpen} className='contact group absolute h-[50px] sm:h-[100px] lg:h-[153px] w-[50[px] sm:w-[100px] lg:w-[153px] top-5 left-5 sm:top-10 sm:left-10 flex items-center text-center'>
          <p style={{ fontFamily: 'OccamsEraser' }} className='absolute w-full mt-2 z-10 text-[10px] sm:text-[20px] lg:text-[30px] text-white'>Contactez nous</p>
          <img className='relative pastille h-full z-0 group-hover:rotate-45 group-hover:scale-[1.25] transition-transform duration-500' src={contactRouge} />
        </button>

        <div className='logo-container w-[200px] sm:w-[400px] lg:w-[550px] sm:h-[190px] lg:h-full flex flex-col items-center mx-auto'>
          <img className='object-contain w-full logo mt-2' src={logopng} />
          <img className='object-contain w-full drapeau my-auto border-2 border-white' src={drapal} />
          <img className='object-cover w-full fondueChampionne' src={fondueChampionne} />
        </div>
        <div className='reseau absolute right-4 top-4 h-1/3 flex'>
          <a className='insta-button h-[30px] sm:h-[50px] w-[30px] sm:w-[50px] mr-2 lg:h-12 lg:w-12' href="https://instagram.com/fondue_coeur?igshid=OGQ5ZDc2ODk2ZA==" target='_blank'>
            <button>
              <img src={instaLogo} className='hover:scale-125 transform transition-transform duration-300' />
            </button>
          </a>
          <a className='facebook-button h-[30px] sm:h-[50px] w-[30px] sm:w-[50px] lg:h-12 lg:w-12' href="https://www.facebook.com/fonduecoeur" target='_blank'>
            <button>
              <img src={facebookLogo} className='hover:scale-125 transform transition-transform duration-300' />
            </button>
          </a>
        </div>
      </div>

      <div className='middle-container grow w-full flex flex-col lg:flex-row bottom-0 bg-[#202454]'>
        <div className='h-1/2 lg:h-full w-full lg:w-1/2 flex justify-center items-center'>

          <div className='text-and-image w-[80%] sm:w-[600px] flex flex-col justify-center items-center'>
            <p style={{ fontFamily: 'AvocadoCake' }} className='w-full text-[15px] sm:text-[25px] text-white text-justify'>
              {texte1}
            </p>

            <p style={{ fontFamily: 'AvocadoCake' }} className='w-full text-[15px] sm:text-[25px] text-fondue-red text-center'>
              <br />
              {texte2}
              <br />
              <br />
            </p>

            <p style={{ fontFamily: 'AvocadoCake' }} className='w-full text-[15px] sm:text-[25px] text-white text-justify'>
              {texte3}
            </p>

          </div>

        </div>

        <div className='h-1/2 lg:h-full w-full lg:w-1/2 relative flex items-center justify-center'>
          <img src={box} className='object-contain absolute h-full w-full z-0' />
          <img src={basbox} className='object-contain absolute w-full h-full z-20' />

          {/* --------------------------------------------------------------------------------------------- */}
          {/* -----------------------------------Button Test CheeseWindow---------------------------------- */}
          {/* --------------------------------------------------------------------------------------------- */}




          <div className='absolute flex'>

            <div className='group mr-3 mt-10'>
              <button onClick={() => {
                setTitre(titreStNectaire)
                setText(textStNectaire)
                setPhoto(photoStNectaire)
                setOpenCheese(true)
              }}
                className='absolute h-20 w-10 bg-transparent z-30' />
              <button className='relative h-20 w-10 group-hover:translate-y-[-10px] transform duration-200 bg-fondue-yellow z-10' />
            </div>

            <div className='group mr-3 mt-10'>
              <button onClick={() => {
                setTitre(titreCantal)
                setText(textCantal)
                setPhoto(photoCantal)
                setOpenCheese(true)
              }}
                className='absolute h-20 w-10 bg-transparent z-30' />
              <button className='relative h-20 w-10 group-hover:translate-y-[-10px] transform duration-200 bg-fondue-yellow z-10' />
            </div>
            
            <div className='group mr-3 mt-10'>
              <button onClick={() => {
                setTitre(titreSalers)
                setText(textSalers)
                setPhoto(photoSalers)
                setOpenCheese(true)
              }}
                className='absolute h-20 w-10 bg-transparent z-30' />
              <button className='relative h-20 w-10 group-hover:translate-y-[-10px] transform duration-200 bg-fondue-yellow z-10' />
            </div>

            <div className='group mr-3 mt-10'>
              <button onClick={() => {
                setTitre(titreFourme)
                setText(textFourme)
                setPhoto(photoFourme)
                setOpenCheese(true)
              }}
                className='absolute h-20 w-10 bg-transparent z-30' />
              <button className='relative h-20 w-10 group-hover:translate-y-[-10px] transform duration-200 bg-fondue-yellow z-10' />
            </div>

            <div className='group mr-3 mt-10'>
              <button onClick={() => {
                setTitre(titreBleu)
                setText(textBleu)
                setPhoto(photoBleu)
                setOpenCheese(true)
              }}
                className='absolute h-20 w-10 bg-transparent z-30' />
              <button className='relative h-20 w-10 group-hover:translate-y-[-10px] transform duration-200 bg-fondue-yellow z-10' />
            </div>

            <div className='group mr-3 mt-10'>
              <button onClick={() => {
                setTitre(titreGentiane)
                setText(textGentiane)
                setPhoto(photoGentiane)
                setOpenCheese(true)
              }}
                className='absolute h-20 w-10 bg-transparent z-30' />
              <button className='relative h-20 w-10 group-hover:translate-y-[-10px] transform duration-200 bg-fondue-yellow z-10' />
            </div>
            
          </div>
          {/* --------------------------------------------------------------------------------------------- */}
          {/* --------------------------------------------------------------------------------------------- */}

        </div>


      </div>

      <div className='bottom-bar w-full h-[40px] flex items-center bg-[#20245]'>
        <p style={{ fontFamily: 'OccamsEraser' }} className='text-[20px] text-fondue-red ml-5'>contact@fonduecoeur.fr</p>
        <p style={{ fontFamily: 'OccamsEraser' }} className='text-[20px] ml-auto text-fondue-red mr-5'>#LESFONDOUX</p>
      </div>

      <Dialog open={openContact} size='sm' handler={handleOpen} className='flex items-center justify-center bg-transparent'>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          limit={3}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
          theme="light"
        />
        <Contact setOpen={setOpenContact} />
      </Dialog>

      <Dialog open={openCheese} size='lg' handler={handleOpenCheese} className='flex items-center justify-center bg-transparent'>
        < CheeseWindow titre={titre} text={text} photo={photo} setOpenCheese={setOpenCheese} />
      </Dialog>

    </div>
  )
}

export default Mono