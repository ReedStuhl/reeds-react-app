import React from "react";
import './Footer.css';
import { Link } from 'react-router-dom'

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
                    <i className='fa-brands fa-linkedin' />
                    <i className='fa-brands fa-github' />
                </div>
            </div>
        </div>
    );

}