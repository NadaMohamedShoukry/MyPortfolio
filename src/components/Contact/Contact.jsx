import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";
export const Contact = () => {
  return (
    <footer id="contact"className={styles.container}>
      <div>
        <h2 className={styles.title}>Contact</h2>
        <p className={styles.description}>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img className={styles.iconImg} src={getImageUrl("gmail.png")} alt="Gmail" />
          <a href="mailto:nadashoukry23@gmail.com">nadashoukry23@gmail.com</a>
          </li>
          <li className={styles.link}>
          <img className={styles.iconImg} src={getImageUrl("linkedin.webp")} alt="Linkedin" />
          <a href="https://www.linkedin.com/in/nada-shoukry-420309223/">
            Nada Shoukry
          </a>
          </li>
          <li className={styles.link}>
          <img className={styles.iconImg} src={getImageUrl("github.png")} alt="GitHub" />
          <a href="https://github.com/NadaMohamedShoukry">NadaMohamedShoukry</a>
        </li>
      </ul>
    
    </footer>
    
  );
};
