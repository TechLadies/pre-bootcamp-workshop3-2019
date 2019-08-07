import React from "react";
import "./App.css";

import Header from "./components/Header";
import List from "./components/List";
import ListItem from "./components/ListItem";

function App() {
  return (
    <div className="App">
      <Header />
      <List>
        <ListItem dark={true} color="red">
          Happy
        </ListItem>
        <ListItem color="green">Hello world!!!</ListItem>
        <ListItem dark={true} color="blue">
          Santa
        </ListItem>
        <ListItem color="#111111">React</ListItem>
        <ListItem color="cyan">JavaScript</ListItem>
      </List>
    </div>
  );
}

export default App;
