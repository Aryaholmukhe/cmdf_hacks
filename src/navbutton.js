import React from 'react';
import './navbutton.css';

export default function Navbutton(){
    return (
        <div className="nav">
        <input type="checkbox" />
          <span></span>
          <span></span>
          <div class="menu">
            <li><a href="#">home</a></li>
            <li><a href="#">about</a></li>
            <li><a href="#">cursos</a></li>
            <li><a href="#">blog</a></li>
            <li><a href="#">contactos</a></li>
          </div>
      </div>

    )
}