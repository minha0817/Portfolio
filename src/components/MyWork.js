import React, { useState } from "react";
import fithub from "../pics/projects/fithub.png";
import pickmiup from "../pics/projects/pickmiup.png";
import todolist from "../pics/projects/todolist.png";
import shoppy from "../pics/projects/shoppy.png";
import hipapa from "../pics/projects/hipapa.png";
import "../styles/my-work.css";

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
  {
    title: "Shoppy",
    description: "HTML, CSS, JS, React, Firebase, Cloudinary",
    link: "https://github.com/minha0817/shoppy",
    src: shoppy,
    status: "inProgress",
  },
  {
    title: "HiPapa",
    description: "HTML, CSS, JS, React, NextJS",
    link: "https://github.com/minha0817/hi-papa",
    src: hipapa,
    status: "inProgress",
  },
];

export default function MyWork() {
  const [filteredWork, setFilteredWork] = useState(works);

  const [activeButton, setActiveButton] = useState("all");

  const getFilteredWork = (status) => {
    setActiveButton(status);

    if (status === "all") {
      setFilteredWork(works);
      return;
    }

    setFilteredWork(works.filter((work) => work.status === status));
  };

  const getfilteredCount = (status) => {
    if(status === "all"){
      return works.length
    }

    return works.filter((work) => work.status === status).length;
  }

  return (
    <section id="mywork" className="section">
      <h1 className="mywork__title">My Work</h1>
      <div className="mywork__buttons">
        <button
          className={
            activeButton === "all" ? "mywork__button active" : "mywork__button"
          }
          onClick={() => {
            getFilteredWork("all");
          }}
        >
          All<span className="mywork__count">{getfilteredCount("all")}</span>
        </button>
        <button
          className={
            activeButton === "completed"
              ? "mywork__button active"
              : "mywork__button"
          }
          onClick={() => {
            getFilteredWork("completed");
          }}
        >
          Completed<span className="mywork__count">{getfilteredCount("completed")}</span>
        </button>
        <button
          className={
            activeButton === "inProgress"
              ? "mywork__button active"
              : "mywork__button"
          }
          onClick={() => {
            getFilteredWork("inProgress");
          }}
        >
          In Progress<span className="mywork__count">{getfilteredCount("inProgress")}</span>
        </button>
      </div>
      <div className="projects">
        {filteredWork.map((work, index) => (
          <ul key={index}>
            <a href={work.link} target="_blank" className="project">
              <img className="project__img" src={work.src} alt={work.title} />
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
