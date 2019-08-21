import React, { useState, useEffect } from "react";
import classNames from "classnames";
import s from "./Pokemon.module.scss";

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
        <div className={s.sprite}>
          <img className={s.img} src={image} alt={name} />
        </div>
      </div>
      <table
        className="nes-table is-bordered is-centered"
        style={{ width: "calc(100% - 50px)", marginTop: 20 }}
      >
        <thead>
          <tr>
            <th colSpan="9">{name}</th>
          </tr>
        </thead>
        <thead>
          <tr>
            <th colSpan="2">TYPE</th>
            <th colSpan="7">
              {pokemon
                ? pokemon.types.map(({ type: { name } }, index) => (
                    <button
                      type="button"
                      className="nes-btn is-primary"
                      style={index !== 0 ? { marginLeft: 16 } : {}}
                    >
                      {name}
                    </button>
                  ))
                : null}
            </th>
          </tr>
        </thead>
      </table>
    </div>
  );
}
