import React from "react";
import ListItem from "./ListItem";
import s from "./List.module.css";

function List({ items, loading, loadMore }) {
  return (
    <ul className={s.root}>
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
