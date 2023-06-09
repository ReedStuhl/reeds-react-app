import React from "react";
import './Footer.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h4>Copyright @ 2023. All Rights Reserved</h4>
                </div>
            </div>
            <div className="col">
                <div>
                    <a className="socials" href='https://www.linkedin.com/in/reed-stuhlreyer/' target="_blank" rel="noreferrer"> <i className='fa-brands fa-linkedin fa-xl' ></i></a> 
                    <a className="socials" href='https://github.com/ReedStuhl' target="_blank" rel="noreferrer" color="white"><i className='fa-brands fa-github fa-xl'/></a>
                </div>
            </div>
        </div>
    );

}