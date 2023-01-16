import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Home />
      <main>Contents</main>
    </div>
  );
}

export default App;
