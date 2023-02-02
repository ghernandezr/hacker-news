import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div>Navbar</div>
      <div>News | Faves</div>
      <Outlet />
    </div>
  );
};

export default Layout;
