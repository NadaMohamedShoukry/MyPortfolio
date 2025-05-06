import React from "react";
import experience from "../../data/experience.json";
import { getImageUrl } from "../../utils";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skillNames}>{
                        skills.map((skill,id)=>{
                            return <div className={styles.skill} key={id}>
                                <div className={styles.skillImg}><img className={styles.iconImg}src={getImageUrl(skill.imageSrc)} alt={skill.title} /></div>
                                <p>{skill.title}</p>
                            </div>
                        })}</div>
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
