import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css" ;
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Portfolio from "./components/Portfolio"
import About from "./components/About"
// import Contacts from "./components/Contacts"
import Skills from "./components/Skills"
import Resume from "./components/Resume"



function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Resume />
      <Portfolio />
      {/* < Contacts /> */}
    </div>
  );
}

export default App;
