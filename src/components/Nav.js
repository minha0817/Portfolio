import React, {useState} from "react";
import icon from "../pics/favicon2.png";
import "../styles/nav.css";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Nav() {

  const [isNavExpanded, SetisNavExpanded] = useState(false);

  const handleNav = () => {
    SetisNavExpanded(!isNavExpanded)
  };

  const handleClickScroll = (id) => {
    const element  = document.getElementById(id);
    if(element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav id="navbar">
      <div>
        <a href="/" className="navbar__logo">
          <img src={icon} alt="icon" className="navbar__logo__icon"></img>
        </a>
      </div>
      <div className={isNavExpanded? "navbar__menu expanded" : "navbar__menu"}>
        <ul className="navbar__menu">
          <button className="navbar__menu__item" onClick={() => {handleClickScroll('about')}}>About me</button>
          <button className="navbar__menu__item" onClick={() => {handleClickScroll('skills')}}>Skills</button>
          <button className="navbar__menu__item" onClick={() => {handleClickScroll('mywork')}}>My Work</button>
          <button className="navbar__menu__item active" onClick={() => {handleClickScroll('home')}}>Home</button>
          <button className="navbar__menu__item" onClick={() => {handleClickScroll('contact')}}>Contact</button>
        </ul>
      </div>
      <button className="navbar__toggle-btn" onClick={handleNav}>
        <GiHamburgerMenu style={{ fontSize: 30, color: "white" }} />
      </button>
    </nav>
  );
}
