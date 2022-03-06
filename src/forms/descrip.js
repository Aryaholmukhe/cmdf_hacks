import React from 'react';


export default function Description(props){
    return(
        <div>
            <h1 style={{"font-size": "75px"}}>{props.title}</h1>
            <p>{props.content}</p>
        </div>
        
    )
}