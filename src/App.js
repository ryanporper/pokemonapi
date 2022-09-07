import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const App = props =>  {
  const [pokemon, setPokemon] = useState([]);
  
  const handleOnClick = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon')
    .then((response) => {
      setPokemon(response.data.results);
    })
  }

  return (
    <div style={{marginTop: "20px", justifyContent: "center"}}>
      <button onClick={handleOnClick}>Fetch Pokemon</button>
      {pokemon.map((val, idx) => {
        return <p key={idx}>{val.name}</p>
      })}
    </div>
  );
}

export default App;
