import React from "react";
import "./navbutton.css";

export default function Header(){
    return(
        <div className="main">
        <div className="dummy"><nav>
            <li /><li /><li /><li /> <li /><li />
        </nav></div>
        <div className="header">
            <h1>MoneyBack</h1>
            <h4>Helping Others Pay Off Debt Caused by Job-Layoff by Spreading Awareness about Budgeting Methods</h4>
            {/* <li>Assist individuals and families </li> */}
            </div>
        </div>
    )
}