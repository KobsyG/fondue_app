import React, { FormEvent, useState } from 'react'
import './contact.css'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const croix = require("../images/Mono/croix.png")

const Contact = ({ setOpen }: { setOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {

  const successNotify = () => {
    toast.success(`Message envoyé!`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    })
  };

  const errorNotify = () => {
    toast.error(`Une erreur interne est survenue, contactez-nous directement via l'email: contact@fonduecoeur.fr`, {
      position: "top-center",
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "light",
    })
  };

  const [from, setFrom] = useState('');
  const [nom, setNom] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('typing'); // error | submitting | typing

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('from', from);
    formData.append('subject', 'FONDUE COEUR : de ' + nom);
    formData.append('message', message);

    console.log('SUBMITTING');
    setStatus('submitting');

    try {
      const response = await fetch('./testmail.php', {
        method: 'POST',
        body: formData
      })

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.text();


      if (data.includes('200')) {
        console.log('Email sent successfully.');
        successNotify();
      } else if (data.includes('500')) {
        console.error('Failed to send the email.');
        errorNotify();
      } else {
        console.log('Error from  php:', data);
        errorNotify();
      }
      setStatus('typing');

    } catch (error) {
      errorNotify();
      setStatus('error')
      console.error('Error from fetch:', error);
    }
  };

  return (

    <div className='contact-container rounded-[20px] bg-[#202454] w-[500px] flex justify-center p-10'>
      <div className='w-full relative'>

        <button className='close-cross absolute -top-7 left-[410px] h-[40px] w-[40px]'>
          <img className='object-cover' src={croix} onClick={() => setOpen(false)} />
        </button>

        <p style={{ fontFamily: 'OccamsEraser' }} className='text-white text-[24px] mb-4 text-left'>Écrivez-nous un p'tit mot 👇</p>

        <form onSubmit={handleSubmit}>
          <label
            style={{ fontFamily: 'OccamsEraser' }}
            className='text-white text-[18px]'>
            Votre Nom
          </label>
          <input type="text" id="nom" name="nom"
            required minLength={1} maxLength={60}
            value={nom}
            onChange={e => setNom(e.target.value)}
            className='h-10'
          />

          <label
            style={{ fontFamily: 'OccamsEraser' }}
            className='text-white text-[18px]'>
            Votre Email
          </label>
          <input type="email" id="from" name="from"
            required minLength={1} maxLength={60}
            value={from}
            onChange={e => setFrom(e.target.value)}
          />

          <label
            style={{ fontFamily: 'OccamsEraser' }}
            className='text-white text-[18px]'>
            Le Message
            <span className='relative left-[310px]'>
              {message.length}/1000
            </span>
          </label>

          <textarea
            id="message"
            name="message"
            required minLength={1} maxLength={1000}
            className='h-48'
            value={message}
            onChange={e => setMessage(e.target.value)}
          ></textarea>


          <button
            type="submit"
            style={{ fontFamily: 'AvocadoCake' }}
            disabled={status === 'submitting'}
            className={`text-fondue-blue w-full rounded text-[20px] py-2 px-1 bg-fondue-yellow border-4 border-fondue-yellow
            ${status === 'submitting' ? 'hover:bg-green-300 hover:border-green-300' : 'hover:text-fondue-yellow hover:bg-fondue-blue'}
            ${from.length === 0 || nom.length === 0 || message.length === 0 || status === 'error' ? 'hover:bg-fondue-red hover:border-fondue-red' : 'hover:text-fondue-yellow hover:bg-fondue-blue'}
            `}
          >
            Envoyer
          </button>
        </form>
      </div>

    </div >
  )
}

export default Contact
