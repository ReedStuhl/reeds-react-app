import React from 'react';
import MediaCard from '../components/Card.js';
import hp from '../images/health.png';
import stocks from '../images/stocks.png';
import zed from '../images/zed.gif';
import superbadge from '../images/done.png';
import './Project.css';

function Projects () {
    return(
            <div className='cards'>
                <div className='card'>
                    <MediaCard image={hp} Typography="Affordable"
                        CardContent="I worked as a React Developer on the front end of Affordhealth.org. 
                            I developed multiple functional components with props to make them reusable. I also integrated with Storybook for UAT." 
                        Link="https://www.affordhealth.org/"/>
                        
                </div>
                <div className='card'>
                    <MediaCard image={superbadge} Typography="Salesforce Superbadge"
                        CardContent="After working as a Salesforce and Mulesoft Developer at Ford, I have continued to gain badges and certificates on the Salesforce platform. 
                            I am passionate about learning new technologies and expanding my skills, and I am always looking for ways to improve my knowledge and expertise." 
                        Link="https://trailblazer.me/id/rstuhlreyer"
                    />
                </div>
                <div className='card'>
                    <MediaCard image={zed} Typography="NFT Blog - Zed Run"
                        CardContent="Back when NFTs were all the rage, I decided to document my experience buying an NFT horse that I could race for money." 
                        Link="https://fungibleblog.blogspot.com/"/>
                </div>
                <div className='card'>
                    <MediaCard image={stocks} Typography="Stock Market Forcasting"
                        CardContent="During my senior year at JCU, I took a Machine Learning elective. My group and I were able to successfully train a Long Short-Term Memory 
                            (LSTM) neural network to forcast stock market prices based on free data from Kaggle."
                    />
                </div>
            </div>
    );
}

export default Projects;