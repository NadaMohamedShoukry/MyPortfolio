import React from "react";
import courses from "../../data/courses.json";
import { getImageUrl } from "../../utils";
import styles from "./Courses.module.css";

export const Courses = () => {
  return (
    <section className={styles.container} id="courses">
      <h2 className={styles.title}>Courses</h2>
      <div className={styles.content}>
        <ul className={styles.experiences}>
          {courses.map((item, id) => {
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
