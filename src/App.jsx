import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import img from "./assets/000.jpg";
function App() {
  return (
    <div
      className="bg-cover bg-center "
      style={{
        backgroundImage:  `url(${img})`,
      }}
    >
      <Router>
        <Navbar />
        <Routes>
          <Route  path="*" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
