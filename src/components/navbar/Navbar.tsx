import React from "react";
import { ReactComponent as Logo } from "./logo.svg";
import styles from "./Navbar.module.css";

const Navbar = () => {
  console.log(styles);
  return (
    <nav className={styles.navbar}>
      <Logo className={styles.navbar__logo} />
    </nav>
  );
};

export default Navbar;
