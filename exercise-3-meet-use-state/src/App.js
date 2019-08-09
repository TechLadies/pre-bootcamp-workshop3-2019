import React from "react";
import "./App.css";

import Header from "./components/Header";
import List from "./components/List";
import Input from "./components/Input";
import ThemeContext from "./components/ThemeContext";

function App() {
  const [style, setStyle] = React.useState("light");
  const [items] = React.useState([
    {
      dark: true,
      color: "red",
      children: "Happy"
    },
    {
      color: "blue",
      children: "Santa"
    },
    {
      color: "green",
      children: "Hello world!!!"
    },
    {
      dark: true,
      color: "#111111",
      children: "React"
    },
    {
      color: "cyan",
      children: "JavaScript"
    }
  ]);

  const toggleStyle = () => {
    setStyle(style => (style === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ style, toggleStyle }}>
      <div className="App">
        <Header />
        <Input />
        {/* List */}
        <List items={items} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
