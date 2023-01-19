import React from "react";
import icon from "../pics/favicon2.png";
import "../styles/nav.css";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Nav() {
  return (
    <nav id="navbar">
      <div>
        <a href="/" className="navbar__logo">
          <img src={icon} alt="icon" className="navbar__logo__icon"></img>
        </a>
      </div>
      <div className="navbar__menu">
        <ul className="navbar__menu">
          <li className="navbar__menu__item active">Home</li>
          <li className="navbar__menu__item">About me</li>
          <li className="navbar__menu__item">Skills</li>
          <li className="navbar__menu__item">My Work</li>
          <li className="navbar__menu__item">Contact</li>
        </ul>
      </div>
      <button className="navbar__toggle-btn">
        <GiHamburgerMenu style={{ fontSize: 30, color: "white" }} />
      </button>
    </nav>
  );
}
