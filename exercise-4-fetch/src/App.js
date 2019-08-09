/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import "./App.css";

import Header from "./components/Header";
import List from "./components/List";
import Input from "./components/Input";
import ThemeContext from "./components/ThemeContext";

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
      setPokemons(pokemons.concat(results));
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
  const [style, setStyle] = React.useState("light");
  const { pokemons, loading, loadMore } = useFetchPokemons();

  const toggleStyle = () => {
    setStyle(style => (style === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ style, toggleStyle }}>
      <div className="App">
        <Header />
        <Input />
        {/* List */}
        <List items={pokemons} loading={loading} loadMore={loadMore} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
