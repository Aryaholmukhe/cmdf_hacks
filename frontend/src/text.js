import React from 'react';
import './main.css';

export default function Text(){
    return(
        <div>
        <div className='info'>
            <div className='how'>
            <ul><h2><span className='orange'>How?</span></h2></ul>
            <li>Create Planners</li>
            <li>Personalized Plans</li>
            <li>Research</li>
            </div>
            <div className='why'>
            <h2><span className='orange'>Why?</span></h2>
            <li>To help pay off debt created by the pandemic</li>
            <li>To help financially for future crisis</li>
            <li>Help retirement plans</li>
            </div>
            </div>
        </div>
    )
}