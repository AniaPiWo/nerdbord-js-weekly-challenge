import React, { useState } from "react";
import css from "./DarkMode.module.css";
import logo from "./img/logo.png";

export const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const containerClassName = `${css.container} ${
    isDarkMode ? css.dark : css.light
  }`;

  return (
    <div className={containerClassName}>
      <div className={css.header}>
        <div className={css.logo}>
          <img src={logo} alt="" />
          <div className={css.logoDot}></div>
        </div>
        <div className={css.toggle} onClick={toggleDarkMode}></div>
        <ul className={css.nav}>
          <li className={css.navItem}>Projects</li>
          <li className={css.navItem}>Services</li>
          <li className={css.navItem}>About</li>
          <li className={css.navItem}>Contact</li>
        </ul>
      </div>
      <div className={css.main}>
        <span className={css.title}>
          Here goes the sun
          <br /> here comes a warmth.
        </span>
      </div>
    </div>
  );
};
