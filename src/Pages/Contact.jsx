import React, { useRef } from 'react';
import './Contact.css'
import emailjs from '@emailjs/browser';
import background from '../Components/Assets/ContactPic.jpg'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_9290mio', 'template_tdtz7ut', form.current, {
        publicKey: 'KUSSQuBeowM1XZDEy',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div style={{ backgroundImage: `url(${background})`, backgroundSize:'cover' }}>
    <div className='contact'>
      <h1 className='text-field'>GET IN TOUCH <hr/></h1>
      <div className="contact-container">
        
      <form ref={form} onSubmit={sendEmail}>
        <div className='contact-field'>
      <label>Name</label>
      <input type="text" name="from_name" placeholder='Your Name' />
      </div>
      <div className='contact-field'>
      <label>Email</label>
      <input type="email" name="from_email" placeholder='Your Email' />
      </div>
      <div className='contact-field'>
      <label>Message</label>
      <textarea name="message" cols={22} rows={3} placeholder='          Your Message    '/>
      <input type="submit" 
      value="Send  " className='contact-button'/>
      </div>
    </form>
      </div>
    </div>
    </div>
  )
}
export default Contact;
 