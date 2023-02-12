import React, { useState } from "react";
import icon from "../../pics/favicon2.png";
import "../../styles/nav.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavButton } from "./NavButton";

export default function Nav() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [colorChange, setColorChange] = useState(false);

  //Make navbar transparent when it is on the top of the document.
  document.addEventListener("scroll", () => {
    setColorChange(window.scrollY >= 50);
  });

  const handleNav = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  const handleClickScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleBtnClick = (id) => {
    handleClickScroll(id);
    handleNav();
  };

  return (
    <nav id="navbar" className={colorChange ? "navbar__dark" : ""}>
      <div className="navbar__logo">
        <a href="/">
          <img src={icon} alt="icon" className="navbar__logo__icon"></img>
        </a>
      </div>
      <div
        className={!isNavExpanded ? "navbar__menu expanded" : "navbar__menu"}
      >
        <ul className="navbar__menu">
          <NavButton
            navTitle={"Home"}
            navCallback={() => handleBtnClick("home")}
          />
          <NavButton
            navTitle={"About Me"}
            navCallback={() => handleBtnClick("about")}
          />
          <NavButton
            navTitle={"Skills"}
            navCallback={() => handleBtnClick("skills")}
          />
          <NavButton
            navTitle={"My Work"}
            navCallback={() => handleBtnClick("mywork")}
          />
          <NavButton
            navTitle={"Contact"}
            navCallback={() => handleBtnClick("contact")}
          />
        </ul>
      </div>
      <button className="navbar__toggle-btn" onClick={handleNav}>
        <GiHamburgerMenu style={{ fontSize: 30, color: "white" }} />
      </button>
    </nav>
  );
}
