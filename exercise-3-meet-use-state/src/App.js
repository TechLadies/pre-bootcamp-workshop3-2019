import React, { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import List from "./components/List";
import Input from "./components/Input";
import PokemonContext from "./components/PokemonContext";

function App() {
  // https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10
  const [pokemons] = useState([
    {
      name: "bulbasaur",
      url: "https://pokeapi.co/api/v2/pokemon/1/"
    },
    {
      name: "ivysaur",
      url: "https://pokeapi.co/api/v2/pokemon/2/"
    },
    {
      name: "venusaur",
      url: "https://pokeapi.co/api/v2/pokemon/3/"
    },
    {
      name: "charmander",
      url: "https://pokeapi.co/api/v2/pokemon/4/"
    },
    {
      name: "charmeleon",
      url: "https://pokeapi.co/api/v2/pokemon/5/"
    },
    {
      name: "charizard",
      url: "https://pokeapi.co/api/v2/pokemon/6/"
    },
    {
      name: "squirtle",
      url: "https://pokeapi.co/api/v2/pokemon/7/"
    },
    {
      name: "wartortle",
      url: "https://pokeapi.co/api/v2/pokemon/8/"
    },
    {
      name: "blastoise",
      url: "https://pokeapi.co/api/v2/pokemon/9/"
    },
    {
      name: "caterpie",
      url: "https://pokeapi.co/api/v2/pokemon/10/"
    }
  ]);
  const [selectedPokemon, setSelectedPokemon] = useState();
  return (
    <PokemonContext.Provider value={{ selectedPokemon, setSelectedPokemon }}>
      <div className="App">
        <Header />
        <Input value={selectedPokemon} setValue={setSelectedPokemon} />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center"
          }}
        >
          <div
            style={{
              width: 335,
              height: 505,
              padding: 32,
              border: "1px solid grey",
              overflow: "auto"
            }}
          >
            <List items={pokemons} />
          </div>
        </div>
      </div>
    </PokemonContext.Provider>
  );
}

export default App;
