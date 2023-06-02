import React from 'react';
import { BrowserRouter as Router, Routes, Route } from
  'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import MediaCard from './components/Card.js'

import yellowStone from "/Users/reedstuhlreyer/Desktop/web-dev/reeds-react-app/src/images/Yellowstone.jpeg";
import teamGrad from "/Users/reedstuhlreyer/Desktop/web-dev/reeds-react-app/src/images/teamGrads.jpg"

function App() {
  return (
    <>

      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact />
          <Route path='/home' exact/>
          <Route path='/about' exact/>
          <Route path='/projects' exact/>
        </Routes>
      </Router>
      <div className='info'>
        <div>Hi I am Reed Stuhlreyer and this is my portfolio website!</div>
      </div>
      <div className='cards'>
        <div className='card1'>
          <MediaCard image={yellowStone} Typography="I Love Travel" CardContent="Every year I make sure I travel to a new destination to learn more about world culture." />
        </div>
        <div className='card2'>
          <MediaCard image={teamGrad} Typography="Blue Streaks" CardContent="I recently graduated from John Carroll University with a Bahcelors of Science in Computer Sciecne plus a minor in Data Science. I was a member of the NCAA DIII Mens Lacrosse team during my time at JCU. I will never forget all the amazing teams and leaders that helpedf me accomplish all of my immediate goals." />
        </div>
      </div>
      
    </>
  );
}

export default App;
