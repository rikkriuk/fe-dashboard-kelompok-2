import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/LayoutComponent";
import "flowbite";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<h1>Hello world</h1>} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
