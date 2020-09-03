import React, { useState, useEffect } from 'react';
import Input from '../../components/input/input'
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

  useEffect(() => {
    getItens()
  }, [])

  return (
    <div className='home'>
      <Input type='text' Blur={(e) => getItens(e.target.value)}></Input>
      <div className='return-api'>
        <p>{JSON.stringify(itensApi)}</p>
      </div>
    </div>
  )
}