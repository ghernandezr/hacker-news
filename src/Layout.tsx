import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./components";
import Container from "./components/container/Container";
import Menu from "./containers/menu/Menu";

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
