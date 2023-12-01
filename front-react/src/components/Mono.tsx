import React, { useState } from 'react'
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

import { ToastContainer } from 'react-toastify';

import contactRouge from "../images/Mono/contact-rouge.svg"
import cent from "../images/Mono/100.svg"
import Contact from './Contact';

const instaLogo = require("../images/waiting/insta.webp")
const facebookLogo = require("../images/waiting/facebook.webp")
const box = require("../images/Mono/box.png")
const logopng = require("../images/Mono/mainLogo.png")
const fondueChampionne = require("../images/Mono/fondue-championne.png")
const drapal = require("../images/Mono/drapal.png")
const test = require("../images/Mono/Capture d’écran 2023-11-28 à 16.51.42.png")

const texte = "La box fondue coeur, c’est un coffret, qui renferme tous les ingrédients et secrets pour réaliser chez vous la première fondue championne de France."
const texte1 = "La box fondue coeur, c’est un coffret, qui renferme tous les ingrédients et secrets pour réaliser chez vous:"
const texte2 = "La première fondue championne de France."
// bg-[url("./images/jb/portrait_of_black_man.jpg")]

const Mono = () => {

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <div className='mono-contain h-[100vh] w-[100vw] flex flex-col bg-[#202454] '>

      <div className='top-bar relative  min-h-[230px] w-full bg-[#202454]'>

        <button onClick={handleOpen} className='contact group absolute h-[153px] w-[153px] top-10 left-10 flex items-center text-center'>
          <p style={{ fontFamily: 'OccamsEraser' }} className='absolute w-full mt-2 z-10 text-[30px] text-white'>Contactez nous</p>
          <img className='relative pastille h-full z-0 group-hover:rotate-45 group-hover:scale-[1.25] transition-transform duration-500' src={contactRouge} />
        </button>

        <div className='logo-container w-[550px] h-full flex flex-col items-center mx-auto'>
          <img className='object-contain w-full logo mt-2' src={logopng} />
          <img className='object-contain w-full drapeau my-auto border-2 border-white' src={drapal} />
          <img className='object-cover w-full fondueChampionne' src={fondueChampionne} />
        </div>
        <div className='reseau absolute right-4 top-4 h-1/3 flex'>
          <a className='insta-button h-10 w-10 mr-2 lg:h-12 lg:w-12' href="https://instagram.com/fondue_coeur?igshid=OGQ5ZDc2ODk2ZA==" target='_blank'>
            <button>
              <img src={instaLogo} className='hover:scale-125 transform transition-transform duration-300' />
            </button>
          </a>
          <a className='facebook-button h-10 w-10 lg:h-12 lg:w-12' href="https://www.facebook.com/fonduecoeur" target='_blank'>
            <button>
              <img src={facebookLogo} className='hover:scale-125 transform transition-transform duration-300' />
            </button>
          </a>
        </div>
      </div>

      <div className='middle-container grow w-full flex bottom-0 bg-[#202454]'>
        <div className='h-full w-1/2 flex justify-center items-center'>

          <div className='text-and-image w-[800px] mb-12 h-[450px] flex flex-col justify-center items-center'>
            <p style={{ fontFamily: 'AvocadoCake' }} className='w-full text-[25px] text-white text-center'>
              {texte1}
            </p>
            <p style={{ fontFamily: 'AvocadoCake' }} className='w-full text-[25px] text-white text-center'>
              {texte2}
            </p>
            {/* <div className='inline-flex ml-30'> */}
            {/* <img className='100% w-1/4 mt-8' src={test} /> */}
            <img className='100% w-1/2 mt-8 ' src={cent} />
            {/* </div> */}
          </div>

        </div>

        <div className='h-full w-1/2 flex items-center justify-center'>
          <img src={box} className='object-contain w-full h-full' />
        </div>
      </div>

      <div className='bottom-bar w-full h-[40px] flex items-center bg-[#20245]'>
        <p style={{ fontFamily: 'OccamsEraser' }} className='text-[20px] text-fondue-red ml-5'>contact@fonduecoeur.fr</p>
        <p style={{ fontFamily: 'OccamsEraser' }} className='text-[20px] ml-auto text-fondue-red mr-5'>@LESFONDOUX</p>
      </div>

      <Dialog open={open} size='xs' handler={handleOpen} className='flex items-center justify-center bg-yellow-300'>
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
        <Contact />
      </Dialog>

    </div>
  )
}

export default Mono