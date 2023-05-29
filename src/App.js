import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 
'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import MediaCard from './components/Card.js'

function App() {
  return (
    <>
    <Router>
      <Navbar  />
      <Routes>
        <Route path='/' exact />
      </Routes>
      </Router>
      <MediaCard/> <MediaCard/> <MediaCard/>
    </>
  );
}

export default App;
