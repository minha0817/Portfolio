import React from "react";
import "../styles/whyme.css";

export default function WhyMe() {
  return (
    <div id="whyme">
      <h1 className="whyme__title">But Why Digital lab should hire me?</h1>
      <div className="whyme__reasons">
        <div className="whyme__reason">
          <img
            className="whyme__reason__icon"
            src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/90/null/external-passion-relationship-flaticons-lineal-color-flat-icons.png"
            alt="passion icon"
          />
          <h2 className="whyme__reason__title">Passion for design and UX</h2>
          <p className="whyme__reason__explanation">
            I have a strong desire to create software and online experiences
            that are both visually appealing and intuitive for users. I am
            always looking for ways to make the user's journey through a website
            as seamless and enjoyable as possible. I believe that design can
            change the way people interact with software.
          </p>
        </div>
        <div className="whyme__reason">
          <img
            className="whyme__reason__icon"
            src="https://img.icons8.com/fluency/100/null/fast-track-female.png"
            alt="fast learning icon"
          />
          <h2 className="whyme__reason__title">Passion for design and UX</h2>
          <p className="whyme__reason__explanation">
            I have a strong desire to create software and online experiences
            that are both visually appealing and intuitive for users. I am
            always looking for ways to make the user's journey through a website
            as seamless and enjoyable as possible. I believe that design can
            change the way people interact with software.
          </p>
        </div>
        <div className="whyme__reason">
          <img
            src="https://img.icons8.com/color/96/null/teamwork--v1.png"
            className="whyme__reason__icon"
            alt="collaboration icon"
          />
          <h2 className="whyme__reason__title">Passion for design and UX</h2>
          <p className="whyme__reason__explanation">
            I have a strong desire to create software and online experiences
            that are both visually appealing and intuitive for users. I am
            always looking for ways to make the user's journey through a website
            as seamless and enjoyable as possible. I believe that design can
            change the way people interact with software.
          </p>
        </div>
      </div>
    </div>
  );
}
