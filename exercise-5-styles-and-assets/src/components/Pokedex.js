import React from "react";
import classNames from "classnames";
import s from "./Pokedex.module.scss";
import gif from "../pokedex.gif";

export default function Pokedex({ main, right }) {
  return (
    <>
      <div className={classNames(s.root)}>
        <div className={classNames(s.leftPage)}>
          <div className={s.top}>
            <div className={s.left}>
              <div className={s.blueBeep}>
                <div className={s.innerBlueBeep} />
              </div>
              <div className={s.statusBar}>
                <div className={s.beepRed} />
                <div className={s.beepYellow} />
                <div className={s.beepGreen} />
              </div>
              <div className={s.bottomShadow} />
              <div className={s.shadow} />
            </div>
            <div className={s.right} id="topbar-square-2">
              <div className="animated bouneInUp" id="buttonLightRed" />
              <div className="animated bouneInUp" id="buttonGreen" />
              <div className="animated bouneInUp" id="buttontopYellow" />
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
          <div className={s.cutPage}>{right}</div>
        </div>
      </div>
      {/* <div className={s.overlay}>
        <img src={gif} style={{ width: "785px" }} />
      </div> */}
    </>
  );
}
