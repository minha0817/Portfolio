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
          <h2 className="whyme__reason__title">
            Passion for working with children
          </h2>
          <p className="whyme__reason__explanation">
            Over the years, I have honed my passion in working with children in
            a variety of settings, from part-time after-school programs to
            working as a full-time ECE teacher. I take great joy in seeing the
            excitement and wonderment in their eyes as they discover the world
            and learn new skills. I look forward to discussing how I can
            contribute to your mission of supporting children and families in
            the community.
          </p>
        </div>
        <div className="whyme__reason">
          <img
            className="whyme__reason__icon"
            src="https://img.icons8.com/fluency/100/null/fast-track-female.png"
            alt="fast learning icon"
          />
          <h2 className="whyme__reason__title">Quickly adopt and learn </h2>
          <p className="whyme__reason__explanation">
            One of my greatest strengths is my ability to quickly adopt and
            learn new concepts and technologies. I went from knowing almost
            nothing about web development to being able to build and deploy
            fully functioning web apps in the span of three months. I will
            continue to seek out new learning opportunities and take every
            chance to improve myself.
          </p>
        </div>
        <div className="whyme__reason">
          <img
            src="https://img.icons8.com/color/96/null/teamwork--v1.png"
            className="whyme__reason__icon"
            alt="collaboration icon"
          />
          <h2 className="whyme__reason__title">Collaboration</h2>
          <p className="whyme__reason__explanation">
            My experience as Early Childhood Educator has taught me that working
            with others requires patience, empathy and a willingness to learn
            from those around me. I take pride in being a reliable and
            supportive team member, and I am committed to doing whatever it
            takes to help my colleagues succeed. I am eager to contribute my
            skills and expertise to a team that shares this belief.
          </p>
        </div>
      </div>
    </div>
  );
}
