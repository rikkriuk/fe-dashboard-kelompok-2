import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/LayoutComponent";
import "flowbite";
import PortfolioContainer from "./containers/PortfolioContainer";
import TestimonialContainer from "./containers/TestimonialContainer";
import AboutComponent from "./components/AboutComponent";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<h1>Dashboard</h1>} />
          <Route
            path="dashboard/testimonial"
            element={<TestimonialContainer />}
          />
          <Route
            path="dashboard/testimonial/add"
            element={<TestimonialContainer />}
          />
          <Route
            path="dashboard/testimonial/edit/:id"
            element={<TestimonialContainer />}
          />
          <Route path="dashboard/portfolio" element={<PortfolioContainer />} />
          <Route
            path="dashboard/portfolio/add"
            element={<PortfolioContainer />}
          />
          <Route
            path="dashboard/portfolio/edit/:id"
            element={<PortfolioContainer />}
          />
        </Route>
        <Route path="/dashboard/about-us" element={<AboutComponent />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
