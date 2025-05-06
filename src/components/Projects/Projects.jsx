import projects from "../../data/projects.json";

import styles from "./Projects.module.css";
export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.content}>
        {projects.map((project, id) => {
          return (
            <div className={styles.project} key={id}>
                <div className={styles.special}>
              <p
                className={styles.tag}
                style={{
                  backgroundColor: project.tag ? "rgb(100, 6, 6)" : " ", // or any color you want
                }}
              >
                {project.tag}
              </p>
              <p
                className={styles.tag}
                style={{
                  backgroundColor: project.tag ? "rgb(100, 6, 6)" : " ", // or any color you want
                }}
              >
                {project.type}
              </p>
              </div>
              <h3 className={styles.projName}>{project.title}</h3>
              {/* <img className={styles.iconImg}src={getImageUrl(project.imageSrc)} alt={project.title} /> */}
              <p className={styles.projDescription}>{project.description}</p>
              <ul className={styles.skills}>
                {project.skills.map((skill, id) => {
                  return <li key={id}>{skill}</li>;
                })}
              </ul>
              <div className={styles.buttons}>
                <a href={project.demo} className={styles.link}>
                  Demo
                </a>
                <a href={project.source} className={styles.link}>
                  Source
                </a>
                <a href={project.more} className={project.more ? styles.visibleLink : styles.hiddenLink}>
               
                  Know More
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
