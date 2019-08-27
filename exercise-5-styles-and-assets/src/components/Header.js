import React from "react";
import s from "./Header.module.css";
import Logo from "../logo.png";

function Header() {
  return (
    <div className={s.header}>
      <img className={s.logo} src={Logo} alt="logo" />
    </div>
  );
}

export default Header;
