import React from "react";
import "../components/ProgressBar";
import "../styles/skill.css";
import { AiOutlineConsoleSql } from "react-icons/ai";

export default function Skill() {
  const iconStlyes = {
    width: 70,
    margin: 10,
    flexwrap: "wrap",
  };

  return (
    <section id="skills" className="section">
      <h1 className="skill__title">Skills</h1>
      <h2 className="skill__subtitle">Skills & Attributes</h2>
      <span className="skill__description">
        Passion for learning new technologies. Capable of working within a team
        environment and independently.
      </span>
      <div className="skillset">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
          alt="The logo icon for react"
          title="React"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
          alt="The logo icon for HTML 5"
          title="HTML 5"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
          alt="The logo icon for CSS3"
          title="CSS 3"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg"
          alt="The logo icon for TailwindCSS"
          title="Twilwind CSS"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
          alt="The logo icon for NextJS"
          title="Next.JS"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain-wordmark.svg"
          alt="The logo icon for Bootstrap"
          title="Bootstrap"
        />
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/express/express-original-wordmark.svg"
          alt="The logo icon for Express"
          title="Express"
        />
        {/* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg" alt="The logo icon for Firebase" title="Firebase Auth and Data" /> */}
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
          alt="The logo icon for GitHub"
          title="GitHub"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg"
          alt="The logo icon for Git"
          title="Git"
        />
        {/* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original-wordmark.svg" alt="The logo icon for Heroku" title="Heroku" /> */}
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          alt="The logo icon for Javascript"
          title="JavaScript"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg"
          alt="The logo icon for jQuery"
          title="jQuery"
        />
        {/* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg" alt="The logo icon for Markdown" title="Markdown" /> */}
        {/* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" alt="The logo icon for MongoDB" title="Mongo DB" /> */}
        {/* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" alt="The logo icon for MySQL" title="MySQL" /> */}
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
          alt="The logo icon for NPM"
          title="NPM"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
          alt="The logo icon for NodeJS"
          title="Node JS"
        />
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/ruby/ruby-original-wordmark.svg"
          alt="The logo icon for Ruby"
          title="Ruby"
        />
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/rails/rails-original-wordmark.svg"
          alt="The logo icon for Rails"
          title="Rails"
        />
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"
          alt="The logo icon for Sass"
          title="Sass"
        />

        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
          alt="The logo icon for PostgreSQL"
          title="PostgreSQL"
        />
        {/* <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Cypress.png"
          alt="The logo icon for Cypress"
          title="Cypress"
        /> */}

        <img
          src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/storybook/storybook-original-wordmark.svg"
          alt="The logo icon for Storybook"
          title="Storybook"
        />
        {/* <img
          src=""
          alt="The logo icon for Jest"
          title="Jest"
        /> */}
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/mocha/mocha-plain.svg"
          alt="The logo icon for Mocha"
          title="Mocha"
        />
        <img src="https://camo.githubusercontent.com/7ecbd4531436e4f20c1dba52a4fd4ac367cfcc20a2f62cfe7a10f32da306afc6/687474703a2f2f636861696a732e636f6d2f696d672f636861692d6c6f676f2e706e67" alt="The logo icon for Chai" title="Chai" />
      </div>
    </section>
  );
}
