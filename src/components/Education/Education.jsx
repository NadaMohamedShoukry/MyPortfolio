import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Education.module.css";
export const Education = () => {
  return (
    <section id="education"className={styles.container}>
      <h2 className={styles.title}>Education</h2>
        <img className={styles.eduImg} src={getImageUrl("FCAILOGO.png")} alt="fcai" />
      <div className={styles.eduContent}>
        <p className={styles.college}>
          Faculty of Computers and Artificial Intelligence,Cairo University </p>
          {/* <p>Cairo University</p> */}
       
        <p className={styles.department}>Computer Science Department </p>
        <p className={styles.date}>October 2020 − July 2024</p>
        <ul className={styles.list}>
          <li>Accumulative GPA = 2.95</li>
          <li>Graduation Project = A+</li>
        </ul>
      </div>
    </section>
    
  );
};
