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
                        CardContent="I earned my Bachelor of Science in Computer Science with a minor in Data Science from John Carroll University, a private Jesuit university on the east side of Cleveland. Since graduating, I've spent the past three years building my career in software development—specializing in enterprise integrations at SaaS companies. I'm passionate about creating efficient, scalable solutions that help businesses connect and grow." />
                </div>
                <div className='card'>
                    <MediaCard image={lax} Typography="Student Athlete"
                        CardContent="I'm grateful for the lessons I gained from playing lacrosse at John Carroll University — lessons in discipline, resilience, and teamwork that continue to shape my personal and professional growth. The experience taught me how to lead, collaborate under pressure, and push through challenges. These values have stayed with me well beyond the field and continue to influence how I approach my career and life." 
                        />
                </div>
            </div>
        </div>
    );
}

