import React, {useState} from "react";
import icon from "../pics/favicon2.png";
import "../styles/nav.css";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Nav() {

  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [colorChange, setColorChange] = useState(false);


  //Make navbar transparent when it is on the top of the document.
  document.addEventListener('scroll', () => {
    if(window.scrollY >= 50) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  })

  const handleNav = () => {
    setIsNavExpanded(!isNavExpanded)
  };
  
  const handleClickScroll = (id) => {
    const element  = document.getElementById(id);
    if(element) {
      element.scrollIntoView({ behavior: 'smooth'});
    }
  };

  const handleClickBtn = (id) => {
    handleClickScroll(id);
    handleNav();
  }

  return (
    <nav id="navbar" className={colorChange ? "navbar__dark" : ""}>
      <div>
        <a href="/" className="navbar__logo">
          <img src={icon} alt="icon" className="navbar__logo__icon"></img>
        </a>
      </div>
      <div className={!isNavExpanded? "navbar__menu expanded" : "navbar__menu"}>
        <ul className="navbar__menu">
          <button className="navbar__menu__item" onClick={() => {handleClickBtn('home')}}>Home</button>
          <button className="navbar__menu__item" onClick={() => {handleClickBtn('about')}}>About me</button>
          <button className="navbar__menu__item" onClick={() => {handleClickBtn('skills')}}>Skills</button>
          <button className="navbar__menu__item" onClick={() => {handleClickBtn('mywork')}}>My Work</button>
          <button className="navbar__menu__item" onClick={() => {handleClickBtn('contact')}}>Contact</button>
        </ul>
      </div>
      <button className="navbar__toggle-btn" onClick={handleNav}>
        <GiHamburgerMenu style={{ fontSize: 30, color: "white" }} />
      </button>
    </nav>
  );
}
