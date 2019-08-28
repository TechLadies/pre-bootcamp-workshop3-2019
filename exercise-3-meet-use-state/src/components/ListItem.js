import React from "react";
import PokemonContext from "./PokemonContext";

function ListItem({ name }) {
  const { selectedPokemon, setSelectedPokemon } = React.useContext(
    PokemonContext
  );
  const sprite = `https://img.pokemondb.net/sprites/sun-moon/icon/${name}.png`;
  return (
    <li
      style={{
        listStyle: "none",
        backgroundColor: selectedPokemon !== name ? "#ffffff" : "#033333"
      }}
      onClick={() =>
        selectedPokemon !== name
          ? setSelectedPokemon(name)
          : setSelectedPokemon(null)
      }
    >
      <img src={sprite} alt={name} />
      <span>{name}</span>
    </li>
  );
}

export default ListItem;
