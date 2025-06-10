import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="flex min-h-screen bg-base-100 text-base-content">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="p-4 flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
