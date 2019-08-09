import React from "react";
import ListItem from "./ListItem";

function List({ items, loading, loadMore }) {
  return (
    <ul style={{ padding: 0 }}>
      {items.map(item => (
        <ListItem {...item} />
      ))}
      {loading ? (
        "Loading..."
      ) : (
        <button onClick={() => loadMore()}>Load more...</button>
      )}
    </ul>
  );
}

export default List;
