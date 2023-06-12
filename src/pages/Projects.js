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
                        CardContent="Worked on Affordhealth.orgs front end as a React Developer. I developed multiple functional components with 
                        props in order to make them re-useable. Also integrated with Storybook for UAT." 
                        Link="https://www.affordhealth.org/"/>
                        
                </div>
                <div className='card'>
                    <MediaCard image={superbadge} Typography="Salesforce Superbadge"
                        CardContent="After working at Ford as a Salesforce and Mulesoft Developer I have continued working on gaining badges and certificates 
                        on the Salesforce platform." 
                        Link="https://trailblazer.me/id/rstuhlreyer"
                    />
                </div>
                <div className='card'>
                    <MediaCard image={zed} Typography="NFT Blog - Zed Run"
                        CardContent="Back when NFTs were the coolest thing in the world for five minutes I decided to document my experience 
                        buying an NFT that happened to be a horse that I could race for money." 
                        Link="https://fungibleblog.blogspot.com/"/>
                </div>
                <div className='card'>
                    <MediaCard image={stocks} Typography="Stock Market Forcasting"
                        CardContent="During my senior year at JCU I stumbled across a Machine Learning Elective.
                         My group and I were able to get a LSTM NN to make stock market predictions based on free data from Kaggle."
                    />
                </div>
            </div>
    );
}

export default Projects;