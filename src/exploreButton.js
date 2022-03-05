import React from 'react';
import './exploreButton.css';


export default function ExploreButtons (props) {
    return (
        <div className="exploreButtons">
           <div className='btns'><button className="fill" href={props.link}>{props.txt}</button></div>
        </div>
    )
}