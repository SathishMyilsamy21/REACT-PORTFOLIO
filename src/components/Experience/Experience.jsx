<<<<<<< HEAD
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageURL } from "../../utils";

const Experience = () => {
  return (
    <section id="experience" className={styles.container}>
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img
                    className={styles.skillImage}
                    src={getImageURL(skill.imageSrc)}
                    alt={skill.title}
                  />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={getImageURL(historyItem.imageSrc)}
                  alt={`${historyItem.organization} Logo`}
                  className={styles.historyImage}
                />
                <div className={styles.historyItemDetails}>
                  <h3>
                    {`${historyItem.role}, ${historyItem.organization}`}
                    {/* {`[${historyItem.startDate} - ${historyItem.endDate}]`} */}
                    <ul>
                      {historyItem.experiences.map((experience, id) => {
                        return <li key={id}>{experience}</li>;
                      })}
                    </ul>
                  </h3>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
=======
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageURL } from "../../utils";

const Experience = () => {
  return (
    <section id="experience" className={styles.container}>
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img
                    className={styles.skillImage}
                    src={getImageURL(skill.imageSrc)}
                    alt={skill.title}
                  />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={getImageURL(historyItem.imageSrc)}
                  alt={`${historyItem.organization} Logo`}
                  className={styles.historyImage}
                />
                <div className={styles.historyItemDetails}>
                  <h3>
                    {`${historyItem.role}, ${historyItem.organization}`}
                    {/* {`[${historyItem.startDate} - ${historyItem.endDate}]`} */}
                    <ul>
                      {historyItem.experiences.map((experience, id) => {
                        return <li key={id}>{experience}</li>;
                      })}
                    </ul>
                  </h3>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
>>>>>>> bca2f0337519fa483cddaff029d2d95ec380c8e5
