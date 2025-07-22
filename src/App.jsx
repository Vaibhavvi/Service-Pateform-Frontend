import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages.jsx/Home';
import About from './Pages.jsx/About';
import Contact from './Pages.jsx/Contact';
import Navbar from './components/Navbar';
import Project from './Pages.jsx/Project';
import Login from './Pages.jsx/Login';
import Signup from './Pages.jsx/Signup';
import Footer from './components/Footer';
import Logout from './Pages.jsx/Logout';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/logout' element={<Logout/>} />
        <Route path='/signup' element={<Signup/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
