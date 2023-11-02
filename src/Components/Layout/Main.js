import React from "react";
import { DefaultSidebar } from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="flex">
      <DefaultSidebar></DefaultSidebar>
      <div className="mt-5 pl-5">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
