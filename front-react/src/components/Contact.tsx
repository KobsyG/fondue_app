import React, { FormEvent, useState } from 'react'
import './contact.css'

const Contact = () => {
  // const from = 'vermeerschjb@orange.fr'
  // const subject = 'First try'
  // const message = "our first message using php mail method"

  const [from, setFrom] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('typing'); // success | submitting | typing
  const [error, setError] = useState<Error | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); // Prevent the default form submission behavior (ex: refresh page)
    console.log('SUB');



    setStatus('submitting');
    try {
      await submitForm(from, 'FONDUE COEUR:' + subject, message);
      setStatus('success');
    } catch (err: any) {
      setStatus('typing');
      setError(err instanceof Error ? err : new Error('An error occurred'));
    }
  }


  if (status === 'success') {
    return <h1>Email envoyé. Merci du fondue coeur!</h1>
  }

  return (
    <div className='contact-container w-[500px] bg-slate-100'>

      <p>Contact</p>
      <div>
        <form onSubmit={handleSubmit}>
          <label>Adresse email</label>
          <input type="email" id="from" name="from" placeholder="Votre email"
            value={from}
            onChange={e => setFrom(e.target.value)}
          />

          <label>Sujet</label>
          <input type="text" id="subject" name="subject" placeholder="Sujet de l'email"
            value={subject}
            onChange={e => setSubject(e.target.value)}
          />

          <label>Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Veuillez écrire votre message"
            className='h-48'
            value={message}
            onChange={e => setMessage(e.target.value)}
          ></textarea>

          <button
            type="submit"
            disabled={from.length === 0 || subject.length === 0 || message.length === 0 || status === 'submitting'}
            className={`text-white w-full rounded text-[20px] py-2 px-1 bg-fondue-yellow hover:bg-fondue-blue
            ${from.length === 0 || subject.length === 0 || message.length === 0 || status === 'submitting' ? 'opacity-80 cursor-not-allowed' : 'opacity-100'}
            `}
          >
            Envoyer
          </button>

          {error !== null ?
            (<p className="text-red-600">{error.message}</p>)
            :
            (<p>&nbsp;</p>)
          }

        </form>
      </div>




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

  // console.log('from : ', from, ' subject : ', subject, ' message : ', message);

  return new Promise((resolve, reject) => {
    fetch('./testmail.php', {
      method: 'POST',
      body: formData
    })
      .then(response => {
        if (response.ok) {
          return response.text(); // Resolve with the response text
        } else {
          throw new Error('Failed to send the email.'); // Reject with an error message
        }
      })
      .then(data => resolve(data)) // Resolve with the data (success message)
      .catch(error => reject(error.message)); // Reject with the error message
  });
}

export default Contact
