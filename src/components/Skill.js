import React from "react";
import "../styles/skill.css";

export default function Skill() {
  return (
    <section id="skills" className="section">
      <h1 className="skill__title">Skills</h1>
      <h2 className="skill__subtitle">Skills & Attributes</h2>
      <span className="skill__description">
        Passion for learning new technologies. Capable of working within a team
        environment and independently.
      </span>
      <div className="skillset">
        <div className="skillset__left">
          <span className="skillset__title">Skills</span>
          <div className="skillset__all__left">
            <div className="languages">
              <div className="language">
                <span>HTML</span>
                <span>85%</span>
              </div>
            </div>
            <div className="languages">
              <div className="language">
                <span>CSS</span>
                <span>70%</span>
              </div>
            </div>
            <div className="languages">
              <div className="language">
                <span>Javascript</span>
                <span>60%</span>
              </div>
            </div>
            <div className="languages">
              <div className="language">
                <span>React</span>
                <span>60%</span>
              </div>
            </div>
            <div className="languages">
              <div className="language">
                <span>NodeJS</span>
                <span>60%</span>
              </div>
            </div>
          </div>
        </div>
        <div></div>
        <div className="skillset__right">
          <span className="skillset__title">Tools</span>
          <div className="skillset__all_right">
            <span>Git</span>
          </div>
        </div>
      </div>
    </section>
  );
}
