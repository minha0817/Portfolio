import React from "react";
import "../styles/about.css";
import { AiFillHtml5 } from "react-icons/ai";
import { AiFillDatabase } from "react-icons/ai";

export default function About() {
  return (
    <section id="about" className="section section__container">
      <h1 className="about__title">About me</h1>
      <div className="about__description">
        <p className="about__description__detail">
          🏡 <strong>My background was :</strong> Early Childhood Education, Biology.
          <br />
        </p>
        <p className="about__description__detail"> 
          🍎 <strong>I’m interested in :</strong> Miracle Morning, Cooking, Indoor Cycling, Coding
          <br />
        </p>
        <p className="about__description__detail">
          💻 <strong>I’m currently learning :</strong> NextJS <br />
        </p>
        <p className="about__description__detail">
          🌱 <strong>I’m looking to collaborate in :</strong> Education Development <br />
        </p>
      </div>

      <ul className="about__majors">
        <li className="major major__front-end">
          <AiFillHtml5
            className="major__icon"
            style={{ fontSize: 150, color: "f76c6c" }}
          />
          <h2 className="major__title">Front-end</h2>
          <p className="major__description">
            HTML, CSS, Javascript, <br />
            React, Web APIs
          </p>
        </li>
        <li className="major">
          <AiFillDatabase
            className="major__icon"
            style={{ fontSize: 150, color: "f76c6c" }}
          />
          <h2 className="major__title">Back-end</h2>
          <p className="major__description">
            Javascript, NodeJS, Express, <br />
            Rest APIs, Ruby on Rails, SQL{" "}
          </p>
        </li>
      </ul>
    </section>
  );
}
