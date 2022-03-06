import React from 'react';
import Description from "./descrip"

export default function Inputs(props) {
    return (
        <div class="form__group">
            <input type="number" class="form__input" id="name" placeholder={props.name}  />
            <label for="name" class="form__label">{props.name}</label>
        </div>
    )
}
