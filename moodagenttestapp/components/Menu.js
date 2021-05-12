import React from "react";
import Image from "next/image";
import styles from "../styles/Menu.module.scss";

export default function MenuComponent(props) {
  return (
    <div className={`${styles.menu}`}>
      <div className={"menu__bar menu__bar--mobile"}>
        <div className="menu__bar__column">
          <Image
            src="/assets/Logo/Full/Horizontal/Color-white@2x.png"
            alt="Picture of the author"
            width={266}
            height={62}
          ></Image>
        </div>
        <div className="menu__bar__column">
          <ul>
            <li className={"menu__bar__list-item"}>Home</li>
            <li className={"menu__bar__list-item"}>Documents</li>
            <li
              className={
                "menu__bar__list-item menu__bar__list-item--full-width"
              }
            >
              Support
            </li>
            <li className={"menu__bar__list-item"}>Login</li>
          </ul>
        </div>
        <div className="menu__bar__column"></div>
      </div>
    </div>
  );
}
