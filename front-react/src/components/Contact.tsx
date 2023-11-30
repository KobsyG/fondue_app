import React, { FormEvent, useState } from 'react'
import './contact.css'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

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
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    })
  };

  // const promiseNotify = () => {
  // toast.promise()
  // }

  // const from = 'vermeerschjb@orange.fr'
  // const subject = 'First try'
  // const message = "our first message using php mail method"

  const [from, setFrom] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('typing'); // success | submitting | typing
  const [error, setError] = useState<Error | null>(null);

  /*
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); // Prevent the default form submission behavior (ex: refresh page)
    console.log('SUBMITTING');
    setStatus('submitting');
    try {
      await submitForm(from, 'FONDUE COEUR:' + subject, message);
      setStatus('success');
    } catch (err: any) {
      setStatus('typing');
      setError(err instanceof Error ? err : new Error('An error occurred'));
    }
  }
  */

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('from', from);
    formData.append('subject', subject);
    formData.append('message', message);

    console.log('SUBMITTING');
    setStatus('submitting');

    try {
      const response = await fetch('http://localhost:8000/testmail.php', {
        method: 'POST',
        body: formData
      })

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.text();

      setStatus('typing');

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

    } catch (error) {
      console.error('Error from fetch:', error);
    }
  };


  if (status === 'success') {
    return <h1>Email envoyé. Merci du fondue coeur!</h1>
  }

  return (

    <div className='contact-container bg-[#202454] w-[500px] flex justify-center p-10'>
      <div className='w-full'>
        <p style={{ fontFamily: 'OccamsEraser' }} className='text-white text-[24px] mb-4 text-left'>Écrivez-nous un p'tit mot 👇</p>

        <form onSubmit={handleSubmit}>
          <label
            style={{ fontFamily: 'OccamsEraser' }}
            className='text-white text-[18px]'>
            Votre Nom
          </label>
          <input type="email" id="from" name="from"
            value={from}
            onChange={e => setFrom(e.target.value)}
            className='h-10'
          />

          <label
            style={{ fontFamily: 'OccamsEraser' }}
            className='text-white text-[18px]'>
            Votre Email
          </label>
          <input type="text" id="subject" name="subject"
            value={subject}
            onChange={e => setSubject(e.target.value)}
          />

          <label
            style={{ fontFamily: 'OccamsEraser' }}
            className='text-white text-[18px]'>
            Le Message
          </label>
          <textarea
            id="message"
            name="message"
            className='h-48'
            value={message}
            onChange={e => setMessage(e.target.value)}
          ></textarea>

          <button
            type="submit"
            style={{ fontFamily: 'AvocadoCake' }}
            disabled={from.length === 0 || subject.length === 0 || message.length === 0 || status === 'submitting'}
            className={`text-fondue-blue w-full rounded text-[20px] py-2 px-1 bg-fondue-yellow border-4 border-fondue-yellow
            ${from.length === 0 || subject.length === 0 || message.length === 0 ? 'hover:bg-fondue-red hover:border-fondue-red cursor-not-allowed' : 'hover:text-fondue-yellow hover:bg-fondue-blue'}
            ${status === 'submitting' ? 'hover:bg-green-500 hover:border-green-500 cursor-not-allowed' : 'hover:text-fondue-yellow hover:bg-fondue-blue'}
            `}
          >
            Envoyer
          </button>
        </form>
      </div>

      {/* {error !== null ?
        (<p className="text-red-600">{error.message}</p>)
        :
        (<p>&nbsp;</p>)
      } */}





    </div >
  )
}

function submitForm2(from: string, subject: string, message: string): Promise<void> {
  // Pretend it's hitting the network.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldError = from.toLowerCase() !== 'lima'
      if (shouldError) {
        reject(new Error('An error occured'));
      } else {
        resolve();
      }
    }, 1500);
  });
}


function submitForm(from: string, subject: string, message: string) {
  const formData = new FormData();
  formData.append('from', from);
  formData.append('subject', subject);
  formData.append('message', message);

  return new Promise((resolve, reject) => {
    fetch('http://localhost:8000/testmail.php', {
      method: 'POST',
      body: formData
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to send the email.'); // Reject with an error message
        }
        response.text()
      })
      .then(data => console.log(data)) // Resolve with the data (success message)
    // .catch(error => reject(error.message)); // Reject with the error message
  });
}

export default Contact
