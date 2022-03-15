import React from 'react';

export default function Team(props) {
    return (
        <div className="person">
            <img src={props.img} />
            <p>{props.content}</p>
        </div>

    )
}

