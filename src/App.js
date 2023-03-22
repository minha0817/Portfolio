import "./globalVariable.css";
import React from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Skill from "./components/Skill";
import MyWork from "./components/MyWork";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
      <h1>cover letter part </h1>
      <Skill />
      <MyWork />
      <Contact />
    </div>
  );
}

export default App;
