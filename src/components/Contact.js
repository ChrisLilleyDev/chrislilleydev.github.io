import React, { useState } from 'react'
import emailjs from 'emailjs-com'

const SERVICE_ID = "service_kaal3v7";
const TEMPLATE_ID = "template_mp7er3p";
const USER_ID = "hSO9JBjSCYTWZm6gL";

export default function Contact() {
  const [snackbarClass, setSnackbarClass] = useState("Snackbar Contact-Snackbar");
  const [snackbarMessage, setSnackbarMessage] = useState();

  function handleOnSubmit(e) {
    e.preventDefault();
    console.log(e.target);
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        showSnackbar(true);
      }, (error) => {
        showSnackbar(false);
      });
    e.target.reset();
  }

  function showSnackbar(success) {
    if (success == true) {
      setSnackbarClass("Snackbar Snackbar_Success");
      setSnackbarMessage("Message Sent Successfully");
    } else {
      setSnackbarClass("Snackbar Snackbar_Error");
      setSnackbarMessage("Message Failed");
    }
    setTimeout(() => {
      setSnackbarClass("Snackbar");
      setSnackbarMessage("");
    }, 3000);
  }

  return (
    <section id="Contact">
      <h1 className="SectionHeader">Contact</h1>
      <form onSubmit={handleOnSubmit} className="Contact-Form">
        <label className="FormName">
          <input className="FormInput" type="text" name="name" placeholder="Name" required />
        </label>
        <label className="FormEmail">
          <input className="FormInput" type="text" name="email" placeholder="Email" required />
        </label>
        <label className="FormSubject">
          <input className="FormInput" type="text" name="subject" placeholder="Subject" required />
        </label>
        <label className="FormMessage">
          <textarea className="FormTextarea" name="message" placeholder="Message" required></textarea>
        </label>
        <input className="FormSubmit" type="submit" value="Send" />
      </form>
      <div className={snackbarClass}>{snackbarMessage}</div>
    </section>
  )
}
