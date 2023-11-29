import React from 'react'

import './Forms.css'

const Forms = () => {
    return (
        <div className="App">
            <p>Contact Me</p>
            <div>
                <form action="/action_page.php">
                    <label>Email</label>
                    <input type="from" id="from" name="from" placeholder="Your email" />


                    <label>Subject</label>
                    <textarea id="subject" name="subject" placeholder="Write something.."></textarea>

                    <label>Message</label>
                    <textarea id="message" name="message" placeholder="Write something.."></textarea>

                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )
}

export default Forms