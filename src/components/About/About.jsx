import { getImageUrl } from "../../utils";
import React from "react";
import styles from "./About.module.css";
export const About = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Nada Shoukry</h1>
        <p className={styles.description}>
          Computer Science graduate and Frontend Developer experienced in
          building responsive web applications with React, TypeScript, and
          Tailwind CSS, with additional backend experience using Node.js and
          Express.js. I also work as a software instructor, teaching programming
          and modern web development through practical, project-based learning.
        </p>
        <div className={styles.btns}>
          <a
            className={styles.contactBtn}
            href="mailto:nadashoukry23@gmail.com"
          >
            Contact Me
          </a>
          <a
            className={styles.contactBtn}
            href="https://drive.google.com/file/d/1U40tGma9PIBYpf51LpbDYOThBkMtJqnR/view?usp=sharing"
          >
            My CV
          </a>
        </div>
      </div>
      <img
        className={styles.aboutImg}
        src={getImageUrl("undraw_programmer_raqr.svg")}
        alt="aboutImage"
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};
