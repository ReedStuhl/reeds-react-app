import React from 'react';
import { BrowserRouter as Router, Routes, Route } from
  'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import About from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className='page-container'>
      <div className='content-wrap'>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path='/' Component={Home} />
            <Route exact path='/about' Component={About} />
            <Route exact path='/projects' Component={Projects} />
            <Route exact path='/contact' Component={Contact} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
