import React from 'react'

const Contact = () => {
  const from = 'vermeerschjb@orange.fr'
  const subject = 'First try'
  const message = "our first message using php mail method"

  function handleClick() {
    const formData = new FormData();
    formData.append('from', from);
    formData.append('subject', subject);
    formData.append('message', message);

    fetch('./testmail.php', {
      method: 'POST',
      body: formData
    })
      .then(response => response.text())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
  }

  return (
    <div className='contact-container w-full h-[100vh] bg-fondue-blue'>
      <button onClick={handleClick} className='w-96 h-96 bg-pink-200'>
        Click Here!
      </button>
    </div>
  )
}

export default Contact