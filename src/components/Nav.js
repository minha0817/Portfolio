import React from "react";
import icon from "../pics/favicon2.png";

export default function Nav() {
  return (
    <nav id="navbar">
      <div className="navbar__logo">
        <a href="/">
          <img src={icon} style={{ width: 20, height: 20 }} alt="icon"></img>
          Minha
        </a>
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
  );
}
