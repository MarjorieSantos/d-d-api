import React, { useState } from 'react';
import Button from '../button/Button.js'
import { FaStream } from 'react-icons/fa';
import './Menu.css'

export default function Menu() {
  const [showMenu, setShowMenu] = useState(false);

  const showMenuOnClick = () => {
    setShowMenu(!false)
  }

  return (
    <header className='header'>
      <h1>Marvel - API</h1>
      <Button classButton='btn-hamburger' handleClick={showMenuOnClick}>
        <FaStream className='icon' />
      </Button>
      {showMenu &&
        <nav className='nav-menu'>
          <ul>
            <li>Home</li>
            <li>Sobre</li>
            <li>Filmes</li>
            <li>Personagens</li>
          </ul>
        </nav>
      }
    </header>
  )
}