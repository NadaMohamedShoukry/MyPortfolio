import { getImageUrl } from "../../utils";
import React from "react";
import styles from "./About.module.css";
export const About = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Nada Shoukry</h1>
        <p className={styles.description}>I am a fresh graduate frontend developer using React , ReactNative.I also have basic backend development experience using Express and Django</p>
         <div className={styles.btns}>
        <a className={styles.contactBtn} href="mailto:nadashoukry23@gmail.com">Contact Me</a>
        <a className={styles.contactBtn} href="https://drive.google.com/file/d/1NExalZY6HbJ4eWeHTqhXleaw8YKZjXfb/view?usp=sharing">My CV</a>
        </div> 
      </div>
      <img className={styles.aboutImg} src={getImageUrl("undraw_software-engineer_xv60.svg")} alt="aboutImage" />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};
