import React from "react";
import Picture from "../pics/profile2.png";
import "../styles/home.css";

export default function Home() {
  return(
    <section id="home">
      <img className="home__picture" src={Picture} alt="Picture"></img>
      <h1 className="home__title">Hello, <br/>I'm Minha Kim</h1>
      <h3 className="home__description">A Front-end Developer currently residing in Vancouver, Canada </h3>
      <button className="home__contact">CONTACT ME</button>
    </section>
  )
}