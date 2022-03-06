import React from 'react';
import './main.css';

export default function Navbutton(){
    return (
        <div className="nav">
        <input type="checkbox" />
          <span></span>
          <span></span>
          <div class="menu">
            <li><a href="#home">home</a></li>
            <li><a href="/about">about</a></li>
            <li><a href="#">planner</a></li>
            <li><a href="#">team</a></li>
            <li><a href="#">contact</a></li>
          </div>
      </div>

    )
}