import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/LayoutComponent";
import LoginComponent from "./components/LoginComponent";
import RegisterComponent from "./components/RegisterComponent";

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<LoginComponent />} />
          <Route path="/register" element={<RegisterComponent />} />
        </Routes>
    </Router>
  );
};
  );
};

export default App;

