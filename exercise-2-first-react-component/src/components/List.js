import React from "react";
import ListItem from "./ListItem";

function List({ items }) {
  return (
    <ul style={{ padding: 0 }}>
      {items.map(item => (
        <ListItem {...item} />
      ))}
    </ul>
  );
}

export default List;
