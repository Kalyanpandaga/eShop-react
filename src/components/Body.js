import React from "react";
import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

const Body = () => {
  return (
    <div className="flex  flex-col justify-between  min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
