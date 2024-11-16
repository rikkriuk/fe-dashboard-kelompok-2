import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/LayoutComponent";
import "flowbite";

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="dashboard" element={<h1>Dashboard</h1>} />
            <Route path="dashboard/testimonial" element={<h1>Testimonial</h1>} />
          </Route>
        </Routes>
    </Router>
  );
};

export default App;
