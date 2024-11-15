import React from "react";

const LayoutComponent = ({ children }) => {
  return (
    <>
      <main className="w-full">
         {children}
      </main>
    </>
  )
}

export default LayoutComponent;