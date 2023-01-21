import './globalVariable.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Skill from './components/Skill';
import MyWork from './components/MyWork';
import Contact from './components/Contact';

function App() {

  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
      <Skill />
      <MyWork />
      <Contact />
    </div>
  );
}

export default App;
