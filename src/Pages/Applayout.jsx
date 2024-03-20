import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";

const Applayout = () => {
  return (
    <div className=" h-screen pt-4 px-2">
      <Navbar />
      <main className="container m-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Applayout;
