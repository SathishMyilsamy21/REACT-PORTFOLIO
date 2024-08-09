<<<<<<< HEAD
import styles from "./About.module.css";
import { getImageURL } from "../../utils";

const About = () => {
  return (
    <div>
      <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
          <img
            src={getImageURL("about/SATHISH_PIC.jpg")}
            alt="my pic"
            className={styles.aboutImage}
          />
          <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
              <img
                src={getImageURL("about/cursorIcon.png")}
                alt="cursor Icon"
              />
              <div className={styles.aboutItemText}>
                <h3>Front End Developer</h3>
                <p>
                  I am front-end developer with experience in building and
                  responsive optimized sites.
                </p>
              </div>
            </li>
            <li className={styles.aboutItem}>
              <img src={getImageURL("about/serverIcon.png")} alt="UI Icon" />
              <div className={styles.aboutItemText}>
                <h3>Back End Developer</h3>
                <p>I have experience developing fast and optimized APIs</p>
              </div>
            </li>
            <li className={styles.aboutItem}>
              <img
                src={getImageURL("about/cursorIcon.png")}
                alt="cursor Icon"
              />
              <div className={styles.aboutItemText}>
                <h3>UI Designer</h3>
                <p>
                  I have designed multiple landing pages and have created design
                  systems as well.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default About;
=======
import styles from "./About.module.css";
import { getImageURL } from "../../utils";

const About = () => {
  return (
    <div>
      <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
          <img
            src={getImageURL("about/SATHISH_PIC.jpg")}
            alt="my pic"
            className={styles.aboutImage}
          />
          <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
              <img
                src={getImageURL("about/cursorIcon.png")}
                alt="cursor Icon"
              />
              <div className={styles.aboutItemText}>
                <h3>Front End Developer</h3>
                <p>
                  I am front-end developer with experience in building and
                  responsive optimized sites.
                </p>
              </div>
            </li>
            <li className={styles.aboutItem}>
              <img src={getImageURL("about/serverIcon.png")} alt="UI Icon" />
              <div className={styles.aboutItemText}>
                <h3>Back End Developer</h3>
                <p>I have experience developing fast and optimized APIs</p>
              </div>
            </li>
            <li className={styles.aboutItem}>
              <img
                src={getImageURL("about/cursorIcon.png")}
                alt="cursor Icon"
              />
              <div className={styles.aboutItemText}>
                <h3>UI Designer</h3>
                <p>
                  I have designed multiple landing pages and have created design
                  systems as well.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default About;
>>>>>>> bca2f0337519fa483cddaff029d2d95ec380c8e5
