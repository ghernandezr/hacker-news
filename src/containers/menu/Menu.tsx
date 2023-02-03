import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Menu.module.css";

const menuItems = [
  {
    label: "All",
    route: "/",
  },
  {
    label: "My Faves",
    route: "/faves",
  },
];

const Menu = () => {
  const getLinkClassName = ({ isActive }: any) => {
    return `${styles["menu__item-link"]} ${
      isActive ? styles["menu__item-link--active"] : ""
    }`;
  };

  return (
    <ul className={styles.menu}>
      {menuItems.map((item) => (
        <li key={item.label} className={styles.menu__item}>
          <NavLink to={item.route} className={getLinkClassName}>
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
