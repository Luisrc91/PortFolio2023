// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactMe from "./components/ContactMe";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

function App() {
  return (
    <div className="app">
      <Router>
        <header>  
        <NavBar />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/ContactMe" element={<ContactMe />} />
          <Route path="/Resume" element={<Resume />} />
        </Routes>
        <Footer />
      </Router>

     

    
 
     
    </div>
  );
}

export default App;
