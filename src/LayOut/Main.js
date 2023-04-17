import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/Sheared/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

const Main = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
