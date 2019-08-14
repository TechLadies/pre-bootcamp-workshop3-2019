import React from "react";
import classNames from "classnames";
import ThemeContext from "./ThemeContext";
import s from "./Header.module.css";
import Logo from "../logo.svg";

function Header() {
  const { style, toggleStyle } = React.useContext(ThemeContext);

  return (
    <div className={s.root}>
      <img className={s.logo} src={Logo} alt="logo" />
      <h1
        className={classNames(s.text, style === "light" ? s.light : s.dark)}
        onClick={toggleStyle}
      >
        My List
      </h1>
    </div>
  );
}

export default Header;
