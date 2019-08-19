import React, { useState, useEffect } from "react";
import classNames from "classnames";
import s from "./Pokemon.module.css";

export default function Pokemon({ name }) {
  const [pokemon, setPokemon] = useState();
  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const pokemon = await response.json();
      setPokemon(pokemon);
    };

    fetchPokemon();
  }, [name]);
  const image = `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/${
    pokemon ? pokemon.id : 0
  }.png`;
  return (
    <div className={s.root}>
      <div className={s.spriteContainer}>
        <div className={classNames(s.sprite, "nes-container", "is-rounded")}>
          <img src={image} alt={name} />
        </div>
      </div>
      <table className="nes-table is-bordered is-centered">
        <thead>
          <tr>
            <th colSpan="2">{name}</th>
          </tr>
        </thead>
        <thead>
          <tr>
            <th>TYPE</th>
            <th>
              {pokemon ? pokemon.types.map(({ type: { name } }) => name) : null}
            </th>
          </tr>
        </thead>
        <tbody>
          {pokemon
            ? pokemon.stats.map(({ base_stat, stat: { name } }) => {
                return (
                  <tr>
                    <td>{name}</td>
                    <td>{base_stat}</td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
    </div>
  );
}
