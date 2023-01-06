import React from 'react'
import GithubSvg from "../icons/github.svg"
import LinkedinSvg from "../icons/linkedin.svg"
import EmailSvg from "../icons/email.svg"

export default function Home() {
  return (
    <section id="Home">
      <div className="Home-Container">
        <div className="Home-Header"><span>Hi</span>, I'm Chris Lilley</div>
        <div className="Home-Subheader">full stack software engineer</div>
        <div className="Socials">
          <a href="https://github.com/ChrisLilleyDev" target="_blank" rel="noopener noreferrer" className="Socials-Link"><img src={GithubSvg} alt="github" /></a>
          <a href="https://www.linkedin.com/in/chris-lilley-dev/" target="_blank" rel="noopener noreferrer" className="Socials-Link"><img src={LinkedinSvg} alt="linkedin" /></a>
          <a href="mailto:chris.lilley.dev@gmail.com" className="Socials-Link"><img src={EmailSvg} alt="email" /></a>
        </div>
      </div>
      <div className="Arrow">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
  )
}
