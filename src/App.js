import "./App.css";
import Header from "./components/Banner"
import Navbar from "./components/Navbar"
import Services from "./components/Services"
import About from "./components/About"
import Projects from "./components/Projects"




function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Services />
      <About />
      <Projects />
    </div>
  );
}

export default App;
