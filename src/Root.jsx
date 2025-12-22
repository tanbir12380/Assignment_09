import React from "react";
import Header from "./header";
import { Outlet } from "react-router";
import Footer from "./Footer";

const Root = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
