import React from "react";
import {AiFillHtml5} from "react-icons/ai"
import {AiFillDatabase} from "react-icons/ai"

export default function About() {
  return (
    <section id="about">
      <h1 className="about__title">About me</h1>
      <p className="about__description">
        Full stack web developer transitioning from the early childhood
        education industry. I enjoy the fast-paced, ever-changing environment of
        web development and being able to create websites that make a difference
        in people’s lives.
      </p>

      <ul className="about__majors">
        <li className="major">
          <AiFillHtml5 className="major__icon" style={{ fontSize: 30 }}/>
          <h2 className="major__title">Front-end</h2>
          <p className="major__description">HTML, CSS, Javascript, <br/>React, Web APIs</p>
        </li>
        <li className="major">
          <AiFillDatabase className="major__icon" style={{ fontSize: 30 }}/>
          <h2 className="major__title">Back-end</h2>
          <p className="major__description">Javascript, NodeJS, Express, <br/>Rest APIs, Ruby on Rails, SQL </p>
        </li>
      </ul>

    </section>
  );
}
