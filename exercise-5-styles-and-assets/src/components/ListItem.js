import React from "react";
import cx from "classnames";
import PokemonContext from "./PokemonContext";
import s from "./ListItem.module.css";

function ListItem({ name }) {
  const { selectedPokemon, setSelectedPokemon } = React.useContext(
    PokemonContext
  );
  const sprite = `https://img.pokemondb.net/sprites/sun-moon/icon/${name}.png`;
  return (
    <li
      className={cx(s.listItem, "nes-container", "is-rounded")}
      style={{
        backgroundColor: selectedPokemon === name ? "#033333" : "#ffffff"
      }}
      onClick={() =>
        selectedPokemon !== name
          ? setSelectedPokemon(name)
          : setSelectedPokemon(null)
      }
    >
      <img className={s.img} src={sprite} alt={name} />
      <span
        className={cx(
          s.content,
          selectedPokemon === name ? s.invert : undefined
        )}
      >
        {name}
      </span>
    </li>
  );
}

export default ListItem;
