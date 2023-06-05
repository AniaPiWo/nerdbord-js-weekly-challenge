import React from "react";
import css from "./WebsiteProject.module.css";

export const WebsiteProject = () => {
  return (
    <div className={css.box}>
      <div className={css.textBox}>
        <h2  className={css.textTitle}>Hey, this is my project</h2>
        <p className={css.text}>Short description of a project that I’m sharing in this section. Feel free to drop me a line if you want me to create something similar for you!</p>
      </div>
      <div className={css.imgBox}></div>
    </div>
  );
};
