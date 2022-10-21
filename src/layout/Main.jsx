import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/shared/footer/Footer";
import LeftSideNav from "../components/shared/leftSideNav/LeftSideNav";
import NavBar from "../components/shared/NavBar/NavBar";
import RightSideNav from "../components/shared/rightSideNav/RightSideNav";

const Main = () => {
  return (
    <div className=" gap-3">
      <NavBar />
      <div className="container grid lg:grid-cols-12 mx-auto flex flex-col-reverse text-center">
        <div className=" lg:col-span-2 ">
          <LeftSideNav />
        </div>
        <div className="col-span-12 lg:col-span-7">
          <Outlet />
        </div>
        <div className="col-span-12 lg:col-span-3">
          <RightSideNav />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
