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
    toast.error(`Une erreur interne est survenue, veuillez nous contacter directement via contact@fonduecoeur.fr`, {
      position: "top-center",
      autoClose: 10000,
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


    const form = e.target as HTMLFormElement;

    if (form.checkValidity()) {
      // Form is valid, proceed with submission or other actions
      console.log('Form submitted');
    } else {
      // Form is not valid, handle errors or display a message
      console.log('Form validation failed');
    }

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

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFrom(e.target.value);
  };

  return (
      <div className='contact-container rounded-[20px] bg-[#202454] h-fit flex justify-center p-5 lg:w-[500px] lg:p-10'>
        <div className='w-full relative z-10'>
          <button className='close-cross absolute top-1 right-1 h-[25px] w-[25px] lg:top-0 lg:right-0 lg:h-[30px] lg:w-[30px] hover:scale-[1.15] transition-transform duration-200'>
            <img className='object-cover' src={croix} onClick={() => setOpen(false)} />
          </button>

          <p style={{ fontFamily: 'OccamsEraser' }} className='text-white text-[24px] mb-4 text-left'>Écrivez-nous un p'tit mot 👇</p>

          <form onSubmit={handleSubmit}>
            <label
              style={{ fontFamily: 'OccamsEraser' }}
              className='text-white text-[18px]'>
              Votre p'tit Nom
            </label>
            <input type="text" id="nom" name="nom"
              required minLength={1} maxLength={60}
              value={nom}
              onChange={e => setNom(e.target.value)}
              className='h-8 sm:h-12'
              onInvalid={(event) => {
                if (event.target instanceof HTMLInputElement) {
                  event.target.setCustomValidity(`Très bien "Personne"..`);
                }
              }}
              onInput={(event) => {
                if (event.target instanceof HTMLInputElement) {
                  event.target.setCustomValidity("");
                }
              }}
            />
            <label
              style={{ fontFamily: 'OccamsEraser' }}
              className='text-white text-[18px]'>
              L'adresse Email
            </label>
            <input type="email" id="from" name="from"
              required minLength={1} maxLength={60}
              onInvalid={(event) => {
                if (event.target instanceof HTMLInputElement) {
                  event.target.setCustomValidity(`Vous savez, pour vous recontacter..`);
                }
              }}
              onInput={(event) => {
                if (event.target instanceof HTMLInputElement) {
                  event.target.setCustomValidity("");
                }
              }}
              value={from}
              onChange={handleEmailChange}
              className='h-8 sm:h-12'
            />

            <label
              style={{ fontFamily: 'OccamsEraser' }}
              className='text-white text-[18px]'>
              Et le P'tit mot
              <span className='absolute right-0'>
                {message.length}/1000
              </span>
            </label>

            <textarea
              id="message"
              name="message"
              required minLength={1} maxLength={1000}
              className='h-28 sm:h-48'
              value={message}
              onChange={e => setMessage(e.target.value)}
              onInvalid={(event) => {
                if (event.target instanceof HTMLTextAreaElement) {
                  event.target.setCustomValidity(`Allez ! Un dernier effort !`);
                }
              }}
              onInput={(event) => {
                if (event.target instanceof HTMLTextAreaElement) {
                  event.target.setCustomValidity("");
                }
              }}
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
