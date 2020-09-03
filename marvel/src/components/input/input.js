import React from 'react';

export default function Input(props) {
    return (
        <input
            type={props.type}
            id={props.id}
            value={props.value}
            onBlur={props.Blur}
            className={props.classButton}>
            {props.children}
        </input>
    )
}