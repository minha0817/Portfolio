import React, {useState} from "react";
import fithub from "../pics/projects/fithub.png";
import pickmiup from "../pics/projects/pickmiup.png";
import todolist from "../pics/projects/todolist.png";
import "../styles/mywork.css";

const works = [
  {
    title: "Workout Tracker, Fithub",
    description: "HTML, CSS, JS, React, NodeJS, Express, PostSQL, MUI",
    link: "https://github.com/minha0817/workout_tracker",
    src: fithub,
    status: "completed",
  },
  {
    title: "Food ordering app, Pickmiup",
    description:
      "HTML, CSS, JS, NodeJS, Express, EJS, jQuery ,PostgreSQL,Bootstrap, Sass",
    link: "https://github.com/nicohsfu/pikmiup",
    src: pickmiup,
    status: "completed",
  },
  {
    title: "To Do List app",
    description: "HTML, CSS, JS, React",
    link: "https://github.com/minha0817/to-do-list",
    src: todolist,
    status: "inProgress",
  },
];


export default function MyWork() {
  
  const [filteredWork, setFilteredWork] = useState(works);

  const [activeButton, setActiveButton] = useState("all")

  const getFilteredWork = (status) => {

    setActiveButton(status);

    if(status === "all"){
      setFilteredWork(works);
      return;
    }

    setFilteredWork(works.filter(work => work.status === status))
  }
  
  return (
    <section id="mywork" className="section">
      <h1 className="mywork__title">My Work</h1>
      <div className="mywork__buttons">
        <button className={activeButton === "all" ? "mywork__button active" : "mywork__button"} onClick={() => {getFilteredWork("all")}}>
          All<span className="mywork__count">3</span>
        </button>
        <button className={activeButton === "completed" ? "mywork__button active" : "mywork__button"} onClick={() => {getFilteredWork("completed")}}>
          Completed<span className="mywork__count">2</span>
        </button>
        <button className={activeButton === "inProgress"  ? "mywork__button active" : "mywork__button"} onClick={() => {getFilteredWork("inProgress")}}>
          In Progress<span className="mywork__count">1</span>
        </button>
      </div>
      <div className="projects">
        {filteredWork.map((work, index) => (
          <ul key={index}>
            <a href={work.link} target="_blank" className="project">
              <img
                className="project__img"
                src={work.src}
                alt={work.title}
              />
              <div className="project__description">
                <h3>{work.title}</h3>
                <span>{work.description}</span>
              </div>
            </a>
          </ul>
        ))}
      </div>
    </section>
  );
}


