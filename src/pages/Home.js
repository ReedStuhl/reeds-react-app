import React from 'react';
import './Home.css';
import headShot from '../images/weddingg.jpg';

function Home() {
    return (
        <div>
            <div className='wrap'>
                <div className='left'>
                    <h1>Technical Product Leader</h1>
                    <div>
                        <h3 className='intro'>Hi, I'm Reed Stuhlreyer. A versatile and results-oriented professional, I bridge the gap between technology and business, combining a technical understanding with the strategic leadership needed to solve complex product problems.</h3>
                    </div>
                    <div className='icons'>
                        <i class="fa-brands fa-square-js fa-2xl "style={{color: "#f7df1c",}}></i>
                        <i class="fa-brands fa-html5 fa-2xl color: #ff7b0f;"style={{color: "#ff7b0f",}}></i>
                        <i class="fa-brands fa-react fa-2xl"style={{color: "#60d7f8",}}></i>
                    </div>
                </div>
                <div classname='right'>
                    <img className="headshot" src={headShot} alt='headshot' />
                </div>
            </div>
        </div>
    );
}

export default Home;