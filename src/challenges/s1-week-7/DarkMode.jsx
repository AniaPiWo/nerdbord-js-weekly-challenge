import React from "react";
import css from "./DarkMode.module.css";
import logo from "./img/logo.png";

export const DarkMode = () => {
  return (
    <div>
      <div className={css.header}>
        <div className={css.logo}>
          <img src={logo} alt="" />
          <div className={css.logoDot}></div>
        </div>
        <div className={css.toggle}></div>
        <ul className={css.nav}>
          <li className={css.navItem}>Projects</li>
          <li className={css.navItem}>Services</li>
          <li className={css.navItem}>About</li>
          <li className={css.navItem}>Contact</li>
        </ul>
      </div>
      <div className={css.main}>
        <span lassName={css.title}>Here goes the sun here comes a warmth.</span>
      </div>
    </div>
  );
};
