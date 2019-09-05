import React from "react";

function ListItem({ name }) {
  const sprite = `https://img.pokemondb.net/sprites/sun-moon/icon/${name}.png`;
  return (
    <li
      style={{
        listStyle: "none"
      }}
    >
      <img src={sprite} alt={name} />
      <span>{name}</span>
    </li>
  );
}

export default ListItem;
