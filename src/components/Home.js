import React from "react";
import Picture from "../pics/minha.JPG";

export default function Home() {
  return(
    <section id="home">
      <img className="home__picture" style={{width: 120, height: 150}} src={Picture} alt="Picture"></img>
      <h1 className="home__title">Hello, <br/>I'm Minha Kim</h1>
      <h2 className="home__description">A Front-end Developer currently residing in Vancouver, Canada </h2>
      <button className="home__contact">Contact me</button>
    </section>
  )
}