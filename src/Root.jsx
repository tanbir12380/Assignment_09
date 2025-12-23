import React, { useEffect } from "react";
import Header from "./header";
import { Outlet } from "react-router";
import Footer from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const Root = () => {

    useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="root-container">
      <Header></Header>
      <div className="outlet-container">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
