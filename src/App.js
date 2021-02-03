import "./App.css";
import Header from "./components/Banner"
import Navbar from "./components/Navbar"
import Portfolio from "./components/Portfolio"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Skills from "./components/Skills"


function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <About />
      <Skills />
      <Portfolio />
      <Projects />
      < Contact />
    </div>
  );
}

export default App;
