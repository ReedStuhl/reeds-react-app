import React from 'react';
import MediaCard from '../components/Card.js';
import hp from '../images/Screenshot 2023-06-07 at 3.28.42 PM.png';
import stocks from '../images/stocks.png';
import './Project.css';

function Projects () {
    return(
        <div>
            <div className='cards'>
                <div className='card'>
                    <MediaCard image={hp} Typography="Affordable"
                        CardContent="Worked on Affordhealth.orgs front end as a React Developer. I developed multiple functional components with 
                        props in order to make them re-useable. Also integrated with Storybook for UAT." 
                        Link="https://www.affordhealth.org/"/>
                        
                </div>
                <div className='card'>
                    <MediaCard image={stocks} Typography="Stock Market Forcasting"
                        CardContent="During my senior year at JCU I stumbled across a Machine Learning Elective.
                         My group and I were able to get a LSTM NN to make stock market predictions based on free data from Kaggle." 
                    />
                        
                </div>
            </div>
        </div>
    );
}

export default Projects;