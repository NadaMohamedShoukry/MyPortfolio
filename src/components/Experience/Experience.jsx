import React from "react";
import experience from "../../data/experience.json";
import { getImageUrl } from "../../utils";
import styles from "./Experience.module.css";
export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <ul className={styles.experiences}>
          {experience.map((item, id) => {
            return (
              <li className={styles.experience} key={id}>
                <img
                  className={styles.iconImg}
                  src={getImageUrl(item.imageSrc)}
                  alt={item.organisation}
                />

                <div className={styles.experienceContent}>
                  <h3>{`${item.role} , ${item.organisation}`}</h3>
                  <p>{`${item.startDate} - ${item.endDate}`}</p>
                  <ul>
                    {item.experiences.map((exper, id) => {
                      return <li key={id}>{exper}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
