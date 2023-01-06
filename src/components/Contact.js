import React from 'react'

export default function Contact() {
  return (
    <section id="Contact">
      <h1 className="SectionHeader">Contact</h1>
      <form action="" className="Contact-Form">
        <label className="FormName">
          <input className="FormInput" type="text" name="Name" placeholder="Name" />
        </label>
        <label className="FormEmail">
          <input className="FormInput" type="text" name="Email" placeholder="Email" />
        </label>
        <label className="FormSubject">
          <input className="FormInput" type="text" name="Subject" placeholder="Subject" />
        </label>
        <label className="FormMessage">
          <textarea className="FormTextarea" name="Message" placeholder="Message"></textarea>
        </label>
        <input className="FormSubmit" type="submit" value="Send" />
      </form>
    </section>
  )
}
