import React from 'react';
import MediaCard from '../components/Card.js'
import jcu from '../images/johncarrollcampus.jpg';
import '../pages/About.css'
import lax from '../images/lacrosse.jpg';

export default function About() {
    return (
        <div>
            <div className='cards'>
            <div className='card'>
                    <MediaCard image={jcu} Typography="John Carroll University"
                        CardContent="I recently graduated from John Carroll University with a Bahcelors of Science in Computer Science plus a minor in Data Science. 
                             JCU is an amazing Private Jesuit University located on the East side of Cleveland." />
                </div>
                <div className='card'>
                    <MediaCard image={lax} Typography="Student Athlete - washed up"
                        CardContent="During my four years at JCU I was a midfielder for the NCAA Mens Lacrosse team.
                        Team sports teach a lot of life lessons, with the Blue Streaks the lesson was winning." 
                        />
                </div>
            </div>
        </div>
    );
}

