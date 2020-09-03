import React from 'react';
import './input.css'

export default function Input(props) {
    return (
        <input
            type={props.type}
            id={props.id}
            value={props.value}
            onBlur={props.Blur}
            className='input'>
            {props.children}
        </input>
    )
}