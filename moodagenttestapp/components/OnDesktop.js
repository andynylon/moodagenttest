import styles from "../styles/Home.module.scss";
import onDesktopStyles from "../styles/OnDesktop.module.scss";

export default function OnDesktopComponent() {
  return (
    <div
      className={`content__item ${styles.contentItem} ${onDesktopStyles.onDesktop}`}
    >
      <div className={`${onDesktopStyles.listWrapper}`}>
        <h2>Moodagent on desktop:</h2>

        <ul>
          <li className="list-item">
            Lorem ipsum dolor sit amebusdam dolor nihil aliquid. Ut aut nesciunt
            necessitatibus.
          </li>
          <li className="list-item">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            neque praesentium molestiae et nulla alias magni eos, unde
            recusandae itaque fugit quod! Dignissimos, in consectetur quo vel
            repellendus error veniam. Minus ed? Qui dicta ab incidunt, at
            accusantium dolorem eligendi esse, numquam totam dolores culpa cum
            ducimus accusamus maiores rem ratione perferendis possimus libero
            quibusdam dolor nihil aliquid. Ut aut nesciunt necessitatibus.
          </li>
          <li className="list-item">
            Lorem ipsum dolor sit amet coores rem ratione perferendis possimus
            libero quibusdam dolor nihil aliquid. Ut aut nesciunt
            necessitatibus.
          </li>
          <li className="list-item">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            neque praesentium molestiae et nulla alias magni eos, unde
            recusandae itaque fugit quod! Dignissimos, in consectetur quo vel
            repellendus error veniam. Minusdam dolor nihil aliquid. Ut aut
            nesciunt necessitatibus.
          </li>
        </ul>
      </div>
    </div>
  );
}
