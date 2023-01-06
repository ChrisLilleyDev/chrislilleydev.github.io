import React from 'react'
import DiscoverAfricaPng from "../images/discoverAfrica.png"
import PathfindingPng from "../images/pathfinding.png"
import PhpSvg from "../icons/php.svg"
import MySqlSvg from "../icons/mySql.svg"
import BootstrapSvg from "../icons/bootstrap.svg"
import CSharpSvg from "../icons/cSharp.svg"

export default function Projects() {
  return (
    <section id="Projects">
      <h1 className="SectionHeader">Projects</h1>
      <div className="Projects-Container">
        <div className="Project">
          <div className="Project-Face">
            <div className="Project-Tags">
              <div className="Tags-Container">
                <img src={PhpSvg} alt="Php" />
                <img src={MySqlSvg} alt="MySql" />
                <img src={BootstrapSvg} alt="Bootstrap" />
              </div>
            </div>
            <div className="Project-Image"><img src={DiscoverAfricaPng} alt="Discover Africa screenshot" /></div>
          </div>
          <div className="Project-Body">
            <div className="Project-Text">
              <div className="Project-Heading">Discover Africa</div>
              <div className="Project-Description">
                Using Php and Bootstrap, this website is responsive throughout and serves
                dynamically generated pages from an SQL database of 30 animals. All the animals can be browsed
                on the animals page using pagination.
              </div>
            </div>
            <div className="Project-Links">
              <a href="https://github.com/ChrisLilleyDev/Discover-Africa" className="Button" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
              <a href="https://chris-lilley.000webhostapp.com/" className="Button" target="_blank" rel="noopener noreferrer">Live Demo</a>
            </div>
          </div>
        </div>

        <div className="Project">
          <div className="Project-Face">
            <div className="Project-Tags">
              <div className="Tags-Container">
                <img src={CSharpSvg} alt="C Sharp" />
              </div>
            </div>
            <div className="Project-Image"><img src={PathfindingPng} alt="Pathfinding screenshot" /></div>
          </div>
          <div className="Project-Body">
            <div className="Project-Text">
              <div className="Project-Heading">C# Pathfinding</div>
              <div className="Project-Description">
                Using Php and Bootstrap, this website is responsive throughout and serves
                dynamically generated pages from an SQL database of 30 animals. All the animals can be browsed
                on the animals page using pagination.
              </div>
            </div>
            <div className="Project-Links">
              <a href="https://github.com/ChrisLilleyDev/C-Sharp-Pathfinding" className="Button" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
            </div>
          </div>
        </div>

        <div className="Project">
          <div className="Project-Face"></div>
          <div className="Project-Body"></div>
        </div>
      </div>
    </section>
  )
}
