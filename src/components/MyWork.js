import React from "react";
import fithub from "../pics/projects/fithub.png";
import pickmiup from "../pics/projects/pickmiup.png";
import todolist from "../pics/projects/todolist.png";
import "../styles/mywork.css";

export default function MyWork() {
  return (
    <section id="mywork" className="section">
      <h1 className="mywork__title">My Work</h1>
      <p className="mywork__subtitle">Projects</p>
      <div className="mywork__buttons">
        <button className="mywork__button">
          All<span className="mywork__count">3</span>
        </button>
        <button className="mywork__button">
          Completed<span className="mywork__count">2</span>
        </button>
        <button className="mywork__button">
          In Progress<span className="mywork__count">1</span>
        </button>
      </div>
      <div className="projects">
        <a
          href="https://github.com/minha0817/workout_tracker"
          target="_blank"
          className="project"
        >
          <img
            className="project__img"
            src={fithub}
            alt="Project Fithub"
          ></img>
          <div className="project__description">
            <h3>Workout Tracker, Fithub</h3>
            <span>HTML, CSS, JS, React, NodeJS, Express, PostSQL, MUI</span>
          </div>
        </a>
        <a
          href="https://github.com/nicohsfu/pikmiup"
          className="project"
          target="_blank"
        >
          <img
            className="project__img"
            src={pickmiup}
            alt="Project Pickmiup"
          ></img>
          <div className="project__description">
            <h3>Food ordering app, Pickmiup</h3>
            <span>
              HTML, CSS, JS, NodeJS, Express, EJS, jQuery ,PostgreSQL,
              Bootstrap, Sass
            </span>
          </div>
        </a>
        <a
          href="https://github.com/minha0817/to-do-list"
          className="project"
          target="_blank"
        >
          <img
            className="project__img"
            src={todolist}
            alt="Project Todolist"
          ></img>
          <div className="project__description">
            <h3>To Do List app</h3>
            <span>HTML, CSS, JS, React</span>
          </div>
        </a>
      </div>
    </section>
  );
}
