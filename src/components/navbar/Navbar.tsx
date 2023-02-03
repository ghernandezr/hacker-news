import React from "react";
import Container from "../container/Container";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Container>
        <Logo data-testid="logo" className={styles.navbar__logo} />
      </Container>
    </nav>
  );
};

export default Navbar;
