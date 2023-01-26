import React, {useEffect, useState} from "react";
import "../components/ProgressBar";
import ProgressBar from "../components/ProgressBar";
import "../styles/skill.css";

const skills = [
  {
    language: "HTML",
    completed: 85,
    bgcolor: "#d17163"
  },
  {
    language: "CSS",
    completed: 80,
    bgcolor: "#d17163"
  },
  {
    language: "Javascript",
    completed: 75,
    bgcolor: "#d17163"
  },
  {
    language: "React",
    completed: 70,
    bgcolor: "#d17163"
  },
  {
    language: "NodeJS",
    completed: 65,
    bgcolor: "#d17163"
  }
];

export default function Skill() {

  const [completed, setCompleted] = useState(0);

  useEffect(() => {

    setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 2000);
    
  }, []);

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
            {skills.map((skill, index) => (
              <div className="languages">
                <div className="language">
                  <span>{skill.language}</span>
                  <span>{`${skill.completed}%`}</span>
                </div>
                <div>
                  <ProgressBar key={index} bgcolor={skill.bgcolor} completed={skill.completed}/>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="skillset__right">
          <span className="skillset__title">Tools</span>
          <div className="skillset__all_right">
            <p>Visual Studio</p>
            <p>Github</p>
            <p>Figma</p>
          </div>
        </div>
      </div>
    </section>
  );
}
