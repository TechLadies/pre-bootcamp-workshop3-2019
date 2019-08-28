import React from "react";
import "./App.css";

import Header from "./components/Header";
import List from "./components/List";

function App() {
  return (
    <div className="App">
      <Header />
      <List
        items={[
          {
            dark: true,
            color: "red",
            children: "Happy"
          },
          {
            color: "green",
            children: "Coding"
          },
          {
            dark: true,
            color: "blue",
            children: "Hellow world!!"
          },
          {
            dark: false,
            color: "#111111",
            children: "TechLadies"
          },
          {
            color: "rgba(0.0, 255, 255, 1.0)",
            children: "React"
          },
          {
            color: "#ffab00",
            children: "JavaScript"
          }
        ]}
      />
    </div>
  );
}

export default App;
