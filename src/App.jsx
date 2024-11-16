import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/LayoutComponent";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route></Route>
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
