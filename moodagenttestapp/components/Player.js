import styles from "../styles/Home.module.scss";
import playerStyles from "../styles/Player.module.scss";

export default function PlayerComponent() {
  return (
    <div
      className={`content__item ${styles.contentItem} ${playerStyles.player}`}
    >
      <img src="/assets/Device_Image/Desktop_player.png" alt="" />
    </div>
  );
}
