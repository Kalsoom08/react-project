import React from 'react';
import './App.css';
import Nav from './Component/navBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './Pages/Contact'
import About  from './Pages/About';
import Home from './Pages/Home'


function App() {
  return ( 
    <div>
      <Router>
        <Nav />
        <Routes>
          
          <Route path="/contact" element={<Contact />} /> {/* Contact route */}
          <Route path="/about" element={<About />} /> {/* About route */}
          <Route path="/" element={<Home />} /> {/* Home route */}
        </Routes>
      </Router>
    </div>
  );
}


export default App;