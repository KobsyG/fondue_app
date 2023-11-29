import React, { useState } from 'react'
import './contact.css'

const Contact = () => {
  // const from = 'vermeerschjb@orange.fr'
  // const subject = 'First try'
  // const message = "our first message using php mail method"

  const [from, setFrom] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('typing'); // success | submitting | typing
  const [error, setError] = useState(null);

  function handleClick() {
    setStatus('submitting');
    const formData = new FormData();
    formData.append('from', from);
    formData.append('subject', subject);
    formData.append('message', message);

    console.log('from : ', from, ' subject : ', subject, ' message : ', message);

    fetch('./testmail.php', {
      method: 'POST',
      body: formData
    })
      .then(response => {
        if (response.ok) // verifier le response.ok
          setStatus('success')
        response.text()
      })
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
  }

  return (
    <div className='contact-container w-full h-[100vh]'>

      <p>Contact Me</p>
      <div>
        <form>
          <label>Email</label>
          <input type="email" id="from" name="from" placeholder="Votre email"
            value={from}
            onChange={e => setFrom(e.target.value)}
          />

          <br />
          <br />

          <label>Subject</label>
          <input id="subject" name="subject" placeholder="Write something.."
            value={subject}
            onChange={e => setSubject(e.target.value)}
          />

          <br />
          <br />

          <label>Message</label>
          <textarea id="message" name="message" placeholder="Write something.."
            value={message}
            onChange={e => setMessage(e.target.value)}
          ></textarea>

          <button onClick={handleClick} className='w-48 h-48 bg-pink-200'>
            Click Here!
          </button>
          {/* <input type="submit" value="Submit" /> */}

        </form>
      </div>




    </div>
  )
}

export default Contact