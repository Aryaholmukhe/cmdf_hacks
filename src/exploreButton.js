import React from 'react';
import './exploreButton.css';
import { Link } from 'react-router-dom';


export default function ExploreButtons (props) {
    return (
        <div className="exploreButtons">
           <div className='btns'><button className="fill"><Link to={props.link}>{props.txt}</Link></button></div>
        </div>
    )
}