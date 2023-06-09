import React from 'react';
import MediaCard from '../components/Card.js';
import hp from '../images/Screenshot 2023-06-07 at 3.28.42 PM.png';

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
                    <MediaCard image={hp} Typography="Affordable"
                        CardContent="Worked on Affordhealth.orgs front end as a React Developer. I developed multiple functional components with 
                        props in order to make them re-useable. Also integrated with Storybook for UAT." 
                        Link="https://www.affordhealth.org/"/>
                        
                </div>
            </div>
        </div>
    );
}

export default Projects;