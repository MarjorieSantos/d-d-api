import React, { useState } from 'react';
import './Button.css'

export default function Button(props) {
  return (
    <button
      id={props.id}
      value={props.value}
      onClick={props.handleClick}
      className={props.classButton}>
      {props.children}
    </button>
  )
}