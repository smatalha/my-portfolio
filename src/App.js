import "./App.css";
import Header from "./components/Banner"
import Navbar from "./components/Navbar"
import Services from "./components/Services"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"





function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <About />
      <Services />
      <Projects />
      < Contact />
    </div>
  );
}

export default App;
