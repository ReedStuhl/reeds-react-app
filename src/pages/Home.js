import React from 'react';
import './Home.css';
import headShot from '../images/plsWork.png';

function Home() {
    return (
        <div>
            <div className='wrap'>
                <div id='one'>
                    <h1>Software Developer</h1>
                    <div>
                        <h3>Hi I am Reed Stuhlreyer and this is my portfolio website!</h3>
                    </div>
                    <div className='icons'>
                        <i id='js' class="fa-brands fa-square-js fa-2xl "style={{color: "#f7df1c",}}></i>
                        <i id='two' class="fa-brands fa-html5 fa-2xl color: #ff7b0f;"style={{color: "#ff7b0f",}}></i>
                        <i id='rct' class="fa-brands fa-react fa-2xl"style={{color: "#60d7f8",}}></i>
                    </div>
                </div>
                <div id='three'>
                    <img className="headshot" src={headShot} alt='headshot' />
                </div>
            </div>
        </div>
    );
}

export default Home;