import React, { useRef,useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import './contact.css';
import emailjs from '@emailjs/browser';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  // Create state variables for fields in form
  const form = useRef();
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'username') {
      setName(inputValue);
    } 
    if (inputType === 'email') {
      setEmail(inputValue);
    } 
    if (inputType === 'message') {
      setMessage(inputValue);
    }
  };
  const sendEmail = () => {
    // e.preventDefault();

    emailjs.sendForm('service_58eeuha', 'template_eaoiirp', form.current, '7moyyXkvrDcFvYmwA')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  const handleFormSubmit = (e) => {
    // Prevent refresh
    e.preventDefault();

    // Check if email is valid
    if (!username || !validateEmail(email) || !message) {
      setErrorMessage('Name, Email or Message is invalid');
        return;
    } else {
      setErrorMessage('Message sent!');
    }
    sendEmail();
    setName('');
    setEmail('');
    setMessage('');
  };
  return (
    <div className='contact-container'>
      <div className='main-title'>
      <h2 className='contact-heading'>Contact Me</h2>
      <p className='text'>Please complete the form below to send me an email
</p>
      </div>
      <form ref={form} className="form">
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
       <input className='form-control'
          value={username}
          name="username"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <input className='form-control'
          value={email}
          name="email"
          onChange={handleInputChange}
          type="text"
          placeholder="Email"
        />
        <textarea className='form_control'
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Message"
        />
       <button className='submit' type="button" onClick={handleFormSubmit}>Send<span><FontAwesomeIcon icon={faPaperPlane}/></span></button>
      {/* </div> */}
      </form>   
    </div> 
  );
}
export default ContactForm;
