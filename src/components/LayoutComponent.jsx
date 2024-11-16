import React, { useState } from "react";
import NavbarComponent from "./NavbarComponent";
import SidebarComponent from "./SidebarComponent";

const LayoutComponent = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex border">
      <SidebarComponent isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <main className="transition-all duration-300 w-full" >
        <NavbarComponent />
        {children}
      </main>
    </div>
  );
};

export default LayoutComponent;
