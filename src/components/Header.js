import React, { useState, useEffect} from 'react'
import Navbar from './Navbar'

export default function Header() {
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);
  const [headerClass, setHeaderClass] = useState("Header");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (lastScrollY < window.scrollY) {
        setHeaderClass("Header Header_Hidden");
      } else {
        setHeaderClass("Header");
      }
      setLastScrollY(window.scrollY);
    })
  }, [lastScrollY]);

  return (
    <header className={headerClass}>
      <div className="Header-Container">
        <a href="#Home" className="Logo Header-Logo">
          <div className="C">C</div>
          <div className="L">L</div>
        </a>
        <Navbar />
      </div>
    </header>
  )
}
