import React from "react";
import { Outlet } from "react-router-dom";

import { Container, Navbar } from "./components";
import { Menu } from "./containers";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <Menu />
        <Outlet />
      </Container>
    </div>
  );
};

export default Layout;
