import React from "react";

export default function Skill() {
  return (
    <section id="skills">
      <h1 className="skill__title">Skills</h1>
      <h2 className="skill__subtitle">Skills & Attributes</h2>
      <p className="skill__description">
        Passion for learning new technologies. Capable of working within a team
        environment and independently.
      </p>
      <div className="skillset">
        <div className="skillset__left">
          <h3 className="skillset__title">Skills</h3>
          <div className="skill">
            <div className="skill__description">
              <span>HTML</span>
              <span>85%</span>
            </div>
          </div>
          <div className="skill">
            <div className="skill__description">
              <span>CSS</span>
              <span>70%</span>
            </div>
          </div>
          <div className="skill">
            <div className="skill__description">
              <span>Javascript</span>
              <span>60%</span>
            </div>
          </div>
          <div className="skill">
            <div className="skill__description">
              <span>React</span>
              <span>60%</span>
            </div>
          </div>
          <div className="skill">
            <div className="skill__description">
              <span>NodeJS</span>
              <span>60%</span>
            </div>
          </div>
        </div>
        <div className="skillset__right">
          <h3>Tools</h3>
          <span>Git</span>
        </div>
      </div>
    </section>
  );
}
