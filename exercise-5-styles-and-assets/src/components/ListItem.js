import React from "react";
import classNames from "classnames";
import ThemeContext from "./ThemeContext";
import s from "./ListItem.module.css";

function ListItem({ dark, color, name }) {
  const { style } = React.useContext(ThemeContext);
  return (
    <li
      className={s.root}
      style={{
        backgroundColor: style === "light" ? "#ffffff" : "#033333"
      }}
    >
      <span className={s.icon}>
        {style === "light" ? (dark ? "🌚" : "🌝") : dark ? "🌝" : "🌚"}
      </span>
      <span
        className={classNames(
          s.content,
          style === "light"
            ? dark
              ? s.invert
              : undefined
            : dark
            ? undefined
            : s.invert
        )}
      >
        {name}
      </span>
    </li>
  );
}

export default ListItem;
