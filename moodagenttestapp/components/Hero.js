import styles from "../styles/Home.module.scss";
import heroStyles from "../styles/Hero.module.scss";

export default function HeroComponent() {
  return (
    <div className={`content__item ${styles.contentItem} ${heroStyles.hero}`}>
      <img
        src="/assets/Device_Image/Moodagent-cutoff.png"
        alt=""
        className={`${styles.mobileOnly}`}
      />
      <img
        src="/assets/Device_Image/Moodagent@2x.png"
        alt=""
        className={`${styles.desktopOnly}`}
      />
    </div>
  );
}
