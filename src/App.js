import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

import PokemonList from "./components/PokemonList";
import Pagination from "./components/Pagination";

function App() {
  const [pokemon, setPokemon] = useState([]);

  const pokeId = () => {
    const min = Math.ceil(1);
    const max = Math.floor(151);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  axios.get("https://pokeapi.co/api/v2/pokemon" + pokeId()).then((res) => {
    setPokemon(res.data.results.map((p) => p.name));
  });

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios(
  // "https://pokeapi.co/api/v2/pokemon/" + pokeId()
  //   "https://pokeapi.co/api/v2/pokemon"
  // );
  // console.log(result);
  // setPokemon(`${result.data.sprites.front_default}`);
  //     setPokemon(`${result.data.results[0].name}`);
  //   };

  //   fetchData();
  // }, []);

  return (
    <div className="App">
      {/* <img src={pokemon} alt="picpoke" /> */}
      {/* <div>{pokemon}</div> */}
      {/* {pokemon.map((pk) => {
        return (
          <div key={pk.id}>
            <img src={pk.sprites.front_default} alt="pokemon" />
          </div>
        );
      })} */}
      <PokemonList pokemon={pokemon} />
      {/* <Pagination /> */}
    </div>
  );
}

export default App;
