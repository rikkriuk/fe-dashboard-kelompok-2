import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/LayoutComponent";
import PortofolioContainer from "./containers/PortofolioContainer";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={"Dashboard"} />
          <Route path="/*" element={"tes"} />
          <Route path="/portofolio" element={<PortofolioContainer />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
