import React, { useState } from "react";
import NavbarComponent from "./Navbar/NavbarComponent";
import SidebarComponent from "./Navbar/SidebarComponent";
import { Outlet } from "react-router-dom";

const LayoutComponent = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex border">
      <SidebarComponent
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />
      <main className="transition-all duration-300 w-full">
        <NavbarComponent />
        <Outlet />
      </main>
    </div>
  );
};

export default LayoutComponent;
