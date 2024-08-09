import styles from "./ProjectCard.module.css";
import { getImageURL } from "../../utils";

const ProjectCard = ({
  project: { title, imageSrc, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
      <img
        src={getImageURL(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <a className={styles.link} href={demo}>
          Demo
        </a>
        <a className={styles.link} href={source}>
          Source
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
