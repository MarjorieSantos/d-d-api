import React from 'react';
import Button from '../button/Button.js'
import { FaStream } from 'react-icons/fa';
import './Menu.css'

export default function Menu() {

  return (
    <header className='header'>
      <h1>D&D - API</h1>
      <nav className='nav-menu'>
        <ul>
          <li>Home</li>
          <li>Sobre</li>
          <li>Filmes</li>
          <li>Personagens</li>
        </ul>
      </nav>
    </header>
  )
}