import React from "react";
import Container from "../container/Container";
import { ReactComponent as Logo } from "./logo.svg";
import styles from "./Navbar.module.css";

const Navbar = () => {
  console.log(styles);
  return (
    <nav className={styles.navbar}>
      <Container>
        <Logo className={styles.navbar__logo} />
      </Container>
    </nav>
  );
};

export default Navbar;
