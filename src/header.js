import React from "react";
import "./main.css";

export default function Header(){
    return(
        <div className="main">
        <div className="dummy"><nav>
            <li /><li /><li /><li /> <li /><li />
        </nav></div>
        <div className="header">
            <h1>MoneyBack</h1>
            <h4>Helping Others Pay Off Debt Caused by Job-Layoff by using <span className="word_decor">Budgeting Methods</span> and <span className="word_decor">Techniques</span></h4>
            {/* <li>Assist individuals and families </li> */}
            </div>
        </div>
    )
}