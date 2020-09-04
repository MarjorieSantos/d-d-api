import React, { useState, useEffect } from 'react';
import './home.css'

export default function Home() {
  const [itensApi, setItensApi] = useState([]);

  const options = {
    method: 'GET',
  }

  const getItens = (item = "") => {
    fetch(`https://www.dnd5eapi.co/api/${item}`, options)
      .then((res) => res.json())
      .then((res) => setItensApi(res))
  }

  // useEffect(() => {
  //   getItens()
  // }, [])

  return (
    <div className='home'>
      <label>Abaixo você poderá pesquisar sobre:</label>
      <select onChange={(e) => getItens(e.target.value)}>
        <option value='classes'>classes</option>
        <option value='subclasses'>subclasses</option>
        <option value='monsters'>monsters</option>
        <option value='spells'>spells</option>
        <option value='features'>features</option>
      </select>
      <p>{JSON.stringify(itensApi)}</p>
    </div>
  )
}