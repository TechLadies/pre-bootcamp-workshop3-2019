import React from "react";

function ListItem({ dark, color, children }) {
  return (
    <li
      style={{
        color: color,
        listStyle: "none"
      }}
    >
      {dark ? "🌚" : "🌝"} {children}
    </li>
  );
}

export default ListItem;
