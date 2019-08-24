import React from "react";
import classNames from "classnames";
import s from "./Pokedex.module.scss";

export default function Pokedex({ main, right }) {
  return (
    <div className={s.container}>
      <div className={s.pokedex}>
        <div className={classNames(s.leftPage)}>
          <div className={s.header}>
            <div className={s.left}>
              <div className={s.mainLight}>
                <div className={s.reflection} />
              </div>
              <div className={s.statusBar}>
                <div className={s.redled} />
                <div className={s.yellowled} />
                <div className={s.greenled} />
              </div>
              <div className={s.border1} />
              <div className={s.border2} />
            </div>
            <div className={s.right}>
              <div className={s.shadow} />
            </div>
          </div>
          <div className={classNames(s.screen)}>{main}</div>
        </div>
        <div className={s.hingerContainer}>
          <div className={s.miniHinger} />
          <div className={s.mainHinger} />
          <div className={s.miniHinger} />
        </div>
        <div className={classNames(s.rightPage)}>
          <div className={s.trapezoid} />
          <div className={s.cutPage}>{right}</div>
        </div>
      </div>
    </div>
  );
}
