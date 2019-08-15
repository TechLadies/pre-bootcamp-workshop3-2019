import React from "react";
import ThemeContext from "./ThemeContext";

function ListItem({ dark, color, sprite, name }) {
  const { style } = React.useContext(ThemeContext);
  return (
    <li
      style={{
        color: color,
        listStyle: "none",
        backgroundColor: style === "light" ? "#ffffff" : "#033333"
      }}
    >
      {style === "light" ? (dark ? "🌚" : "🌝") : dark ? "🌝" : "🌚"} {name}{" "}
      <img src={sprite} alt={name} />
    </li>
  );
}

export default ListItem;
