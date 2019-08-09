import React from "react";
import ThemeContext from "./ThemeContext";

function Header() {
  const { style, toggleStyle } = React.useContext(ThemeContext);

  return (
    <div>
      <h4>My List</h4>
      <button onClick={toggleStyle}>Change Theme</button>
      <span>{style}</span>
    </div>
  );
}

export default Header;
