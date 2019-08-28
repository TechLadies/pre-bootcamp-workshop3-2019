/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import "./App.css";

import Header from "./components/Header";
import List from "./components/List";
import Input from "./components/Input";
import Pokemon from "./components/Pokemon";
import PokemonContext from "./components/PokemonContext";

function useFetchPokemons() {
  const [offset, setOffset] = React.useState(0);
  const [pokemons, setPokemons] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=10`
      );
      const { results } = await response.json();
      const newPokemons = results.map(pokemon => pokemon);
      setPokemons(pokemons.concat(newPokemons));
      setLoading(false);
    };

    fetchPokemon();
  }, [offset]);

  const loadMore = React.useCallback(
    (limit = 10) => {
      setOffset(offset + limit);
    },
    [offset]
  );
  return { pokemons, loading, loadMore };
}

function App() {
  const { pokemons, loading, loadMore } = useFetchPokemons();
  const [selectedPokemon, setSelectedPokemon] = React.useState();
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
            <List items={pokemons} loading={loading} loadMore={loadMore} />
          </div>
          <div
            style={{
              width: 335,
              height: 505,
              padding: 32,
              border: "1px solid grey"
            }}
          >
            <Pokemon name={selectedPokemon} />
          </div>
        </div>
      </div>
    </PokemonContext.Provider>
  );
}

export default App;
