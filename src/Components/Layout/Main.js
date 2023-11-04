import React from "react";
import { DefaultSidebar } from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import Header from "../Header";

const Main = () => {
  return (
    <div className="">
      <Header></Header>
      <div className="flex">
        <DefaultSidebar></DefaultSidebar>
        <div className="mt-5 px-2 lg:px-5">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Main;
