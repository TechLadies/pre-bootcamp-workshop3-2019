import React from "react";
import "./App.css";

import Header from "./components/Header";
import List from "./components/List";
import ListItem from "./components/ListItem";

function App() {
  const [value, setValue] = React.useState("I'm MR. input");
  return (
    <div className="App">
      <Header />

      <input
        value={value}
        onChange={e => {
          setValue(e.nativeEvent.target.value);
        }}
      />
      <h4>{value}</h4>

      {/* List */}
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
