import React, { useState, useEffect } from 'react'

export default function Navbar() {
  const [burgerClass, setBurgerClass] = useState("BurgerBar Unclicked");
  const [menuClass, setMenuClass] = useState("Menu Hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.matchMedia("(max-width: 650px)").matches);

  useEffect(() => {
    window.matchMedia("(max-width: 650px)").addEventListener('change', e => {
      setIsSmallScreen(e.matches);
      if (!e.matches) {
        setIsMenuClicked(false);
        setBurgerClass("BurgerBar Unclicked");
        setMenuClass("Menu Hidden");
      }
    });
  }, []);

  function updateMenu() {
    if (!isMenuClicked) {
      setBurgerClass("BurgerBar Clicked");
      setMenuClass("Menu Visible");
    } else {
      setBurgerClass("BurgerBar Unclicked");
      setMenuClass("Menu Hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  }

  if (isSmallScreen) {
    return (
      <nav>
        <div className="BurgerMenu" onClick={updateMenu}>
          <div className={burgerClass} ></div>
          <div className={burgerClass} ></div>
          <div className={burgerClass} ></div>
        </div>
        <div className={menuClass}>
          <ol className="Menu-Container">
            <li><a href="#Home" onClick={updateMenu}>Home</a></li>
            <li><a href="#Skills" onClick={updateMenu}>Skills</a></li>
            <li><a href="#Projects" onClick={updateMenu}>Projects</a></li>
            <li><a href="#Contact" onClick={updateMenu}>Contact</a></li>
          </ol>
        </div>
      </nav>
    )
  } else {
    return (
      <nav>
        <ol className="Nav-Container">
          <li><a href="#Home">Home</a></li>
          <li><a href="#Skills">Skills</a></li>
          <li><a href="#Projects">Projects</a></li>
          <li><a href="#Contact">Contact</a></li>
        </ol>
      </nav>
    )
  }
}
