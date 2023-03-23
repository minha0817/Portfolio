import "./globalVariable.css";
import React from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Skill from "./components/Skill";
import MyWork from "./components/MyWork";
import Contact from "./components/Contact";
import WhyDigitalLab from "./components/WhyDigitalLab";
import WhyMe from "./components/WhyMe";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
      <WhyDigitalLab />
      <WhyMe />
      <Skill />
      <MyWork />
      <Contact />
    </div>
  );
}

export default App;
