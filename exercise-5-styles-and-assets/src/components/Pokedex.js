import React from "react";
import classNames from "classnames";
import s from "./Pokedex.module.css";

export default function Pokedex({ main, right }) {
  return (
    <div className={classNames(s.root)}>
      <div className={classNames(s.leftPage, "nes-container", "is-centered")}>
        <div className={s.top}>
          <div className={s.left}>
            <div className={s.blueBeep} />
            <div className={s.statusBar}>
              <div className={s.beepRed} />
              <div className={s.beepYellow} />
              <div className={s.beepGreen} />
            </div>
          </div>
          <div className={s.right} id="topbar-square-2">
            <div className="animated bouneInUp" id="buttonLightRed" />
            <div className="animated bouneInUp" id="buttonGreen" />
            <div className="animated bouneInUp" id="buttontopYellow" />
          </div>
        </div>
        <div className={classNames(s.screen)}>{main}</div>
      </div>
      <div />
      <div className={classNames(s.rightPage, "nes-container", "is-centered")}>
        {right}
      </div>
    </div>
  );
}
