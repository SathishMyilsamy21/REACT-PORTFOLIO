import styles from "./Hero.module.css";
import { getImageURL } from "../../utils";

const Hero = () => {
  return (
    <div>
      <section className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Hi, I am Sathish</h1>
          <p className={styles.description}>
            Have specialized expertise in JavaScript and ReactJS. I collaborate
            well with cross-functional teams and deliver projects within
            stringent timelines.
          </p>
          <a
            className={styles.contactBtn}
            href="https://drive.google.com/file/d/1RhFeZuBkf9KdIx1veRiQ8kMUf2Pkp-Is/view?usp=sharing"
          >
            Download Resume
          </a>
        </div>
        <img
          className={styles.heroImg}
          src={getImageURL("hero/PIC.jpg")}
          alt="my pic"
        />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
      </section>
    </div>
  );
};

export default Hero;
