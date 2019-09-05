import React from "react";
import "./App.css";

import Header from "./components/Header";
import List from "./components/List";

function App() {
  const items = [
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
  ];
  return (
    <div className="App">
      <Header />
      <List items={items} />
    </div>
  );
}

export default App;
