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
                        CardContent="I recently graduated from John Carroll University with a Bachelor of Science in Computer Science and a minor in Data Science. 
                            JCU is a private Jesuit university located on the east side of Cleveland.
                            I am excited to start my career in the tech industry and use my skills to make a difference in the world." />
                </div>
                <div className='card'>
                    <MediaCard image={lax} Typography="Student Athlete"
                        CardContent="I'm grateful for the lessons I learned from playing lacrosse at JCU. 
                            They have helped me in my personal and professional life, and I'll carry them with me for the rest of my life." 
                        />
                </div>
            </div>
        </div>
    );
}

