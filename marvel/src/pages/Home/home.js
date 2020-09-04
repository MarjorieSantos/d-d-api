import React, { useState } from 'react';
import './home.css'

export default function Home() {
  const [itensApi, setItensApi] = useState({});

  const options = {
    method: 'GET',
  }

  const getItens = (item = "") => {
    fetch(`https://www.dnd5eapi.co/api/${item}`, options)
      .then((res) => res.json())
      .then((res) => setItensApi(res))
  }

  return (
    <div className='home'>
      <label>Abaixo você poderá pesquisar sobre:</label>
      <select onChange={(e) => getItens(e.target.value)}>
        <option >selecione uma opção</option>
        <option value='classes'>classes</option>
        <option value='subclasses'>subclasses</option>
        <option value='monsters'>monsters</option>
        <option value='spells'>spells</option>
        <option value='features'>features</option>
      </select>
      <div className='div-all'>
        {itensApi.results && itensApi.results.map(item => (
          <div className='div-result'>
            <p>Name: {item.name}</p>
            <p>URL: {item.url}</p>
            <p>Index: {item.index}</p>
          </div>
        ))}
      </div>
    </div>
  )
}