import React from 'react';
import './Home.css';
import headShot from '../images/Screenshot 2023-06-07 at 4.24.06 PM.png';

function Home() {
    return (
        <div className='wrap'>

            <div id='one'>
                <h1>Software Developer</h1>
                <div id='two'>
                    <h3>Hi I am Reed Stuhlreyer and this is my portfolio website!</h3>
                </div>

            </div>
            <div id='three'>
                <img className="headshot" src={headShot} alt='headshot'/>
            </div>

        </div>
    );
}

export default Home;