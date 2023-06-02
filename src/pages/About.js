import React from 'react';
import MediaCard from '../components/Card.js'
import yellowStone from "/Users/reedstuhlreyer/Desktop/web-dev/reeds-react-app/src/images/Yellowstone.jpeg";
import teamGrad from "/Users/reedstuhlreyer/Desktop/web-dev/reeds-react-app/src/images/teamGrads.jpg"
import '../pages/About.css'

export default function About() {
    return (
        <div>
            <div className='cards'>
                <div className='card1'>
                    <MediaCard image={yellowStone} Typography="Yellowstone Park" CardContent="" />
                </div>
                <div className='card2'>
                    <MediaCard image={teamGrad} Typography="John Carroll Universoity"
                        CardContent="I recently graduated from John Carroll University with a Bahcelors of Science in Computer Science plus a minor in Data Science. 
                        I was a member of the NCAA Mens Lacrosse team and the chess club. (third from the left)" />
                </div>
            </div>
        </div>
    );
}

