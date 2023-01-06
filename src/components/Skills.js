import React from 'react'

export default function Skills() {
  return (
    <section id="Skills">
      <h1 className="SectionHeader">Skills</h1>
      <div className="Skills-Grid">
        <div className="Grid-Square">
          <div className="Square-Header SkillsHeader0">
            Frontend
          </div>
          <div className="Square-Body">
            Experienced with Typescript in both React and Angular.
            A deep understanding of HTML, CSS, and JS, bring responsive
            and eye-catching designs to life.
          </div>
        </div>
        <div className="Grid-Square">
          <div className="Square-Header SkillsHeader1">
            Backend
          </div>
          <div className="Square-Body">
            Passionate about elegantly designed solutions to complex issues.
            Experienced using C#.NET & T-SQL in both OOP and Procedural paradigms.
            Skilled in the design and maintenance of relational and NoSQL databases
            throughout their life cycle.
          </div>
        </div>
        <div className="Grid-Square">
          <div className="Square-Header SkillsHeader2">
            Software Development
          </div>
          <div className="Square-Body">
            Advocating Agile philosophy to deliver software to both
            internal teams and business clients.
            Extensively knowledgeable in using Jira scrums to deliver
            both greenfield projects and extend existing technologies.
          </div>
        </div>
        <div className="Grid-Square">
          <div className="Square-Body">
            "You miss 100% of the shots you don't take."
            -Michael Scott
          </div>
        </div>
      </div>
    </section>
  )
}
