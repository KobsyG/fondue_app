import React from 'react'

const Footer = () => {
  return (
    <footer>
            <div className='contact_bloc'>
                <h3>Contact</h3>
                <ul>
                    <li>Adresse: 3 rue du berger</li>
                    <li>Telephone: 0661696704</li>
                    <li>Mail: mail@mail.fr</li>
                </ul>
            </div>

            <div className='information_bloc'>
              <h3>Qui sommes-nous</h3>
              <ul>
                <li>Expediation</li> {/* add link */}
                <li>Information</li>
                <li>Information</li>
              </ul>
            </div>
    </footer>
  )
}

export default Footer