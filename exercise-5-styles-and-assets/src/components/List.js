import React from "react";
import cx from "classnames";
import ListItem from "./ListItem";
import s from "./List.module.css";

function List({ items, loading, loadMore }) {
  return (
    <ul className={cx(s.list, "nes-container", "is-centered")}>
      {items.map(item => (
        <ListItem {...item} />
      ))}
      {loading ? (
        "Loading..."
      ) : (
        <button className="nes-btn is-primary" onClick={() => loadMore()}>
          Load more...
        </button>
      )}
    </ul>
  );
}

export default List;
