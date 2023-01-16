import React from "react";

export default function Nav() {
  return(
    <nav id="navbar">
      
      <div className="navbar__logo">
      <a href="/">Minha</a>
      </div>
      <div>
        <ul className="navbar__menu">
          <li className="navbar__menu__item">Home</li>
          <li className="navbar__menu__item">About me</li>
          <li className="navbar__menu__item">Skiils</li>
          <li className="navbar__menu__item">My Work</li>
          <li className="navbar__menu__item">Contact</li>
        </ul>

      </div>
    </nav>
  )
}