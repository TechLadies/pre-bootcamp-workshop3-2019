import React, { useState, useEffect } from "react";

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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <div>
        <div>
          <img src={image} alt={name} />
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th colSpan="9">{pokemon ? pokemon.name : ""}</th>
          </tr>
        </thead>
        <thead>
          <tr>
            <th colSpan="2">TYPE</th>
            <th colSpan="7">
              {pokemon && pokemon.types
                ? pokemon.types.map(({ type: { name } }, index) => (
                    <button
                      type="button"
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
