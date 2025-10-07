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
                        CardContent="As a Frontend React Developer for Affordhealth.org, I specialized in building highly reusable and modular functional components using TypeScript. I also integrated our component library with Storybook, which was crucial for streamlined User Acceptance Testing (UAT)." 
                        Link="https://www.affordhealth.org"/>
                        
                </div>
                <div className='card'>
                    <MediaCard image={superbadge} Typography="Salesforce Ranger"
                        CardContent="Building on my experience as a Salesforce and Mulesoft Developer at Ford, I've actively expanded my proficiency by earning numerous Salesforce badges and certifications. I have a genuine passion for technology adoption and am driven by the opportunity to continually improve my knowledge and expertise." 
                        Link="https://trailblazer.me/id/rstuhlreyer"
                    />
                </div>
                <div className='card'>
                    <MediaCard image={zed} Typography="NFT Blog"
                        CardContent="My blog captured the excitement of the NFT boom through the lens of owning a Zed Run racehorse. The posts served as a guide, detailing my experiences with purchasing crypto, using OpenSea, transferring blockchain assets, and exploring the role of Decentralized Apps (DApps) in the play-to-earn economy." 
                        Link="https://fungibleblog.blogspot.com"/>
                </div>
                <div className='card'>
                    <MediaCard image={stocks} Typography="Stock Market Forcasting"
                        CardContent="During my time at JCU, my team implemented a predictive model for stock market price forecasting, leveraging Kaggle data. We successfully trained an LSTM network using Keras, supported by Pandas, NumPy, and scikit-learn (sklearn). We also ran a baseline Random Forest model. The results and data analysis were visualized using the matplotlib library."
                        Link="https://github.com/ReedStuhl/machine-learning"
                    />
                </div>
            </div>
    );
}

export default Projects;