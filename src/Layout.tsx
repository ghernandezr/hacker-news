import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./components";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div>News | Faves</div>
      <Outlet />
    </div>
  );
};

export default Layout;
