import "./App.css";
import Header from "./components/Banner"
import Navbar from "./components/Navbar"
import Services from "./components/Services"
import About from "./components/About"



function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Services />
      <About />
    </div>
  );
}

export default App;
