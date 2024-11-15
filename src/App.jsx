<<<<<<< HEAD
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/LayoutComponent";
import "flowbite";
import PortfolioContainer from "./containers/PortfolioContainer";
import TestimonialContainer from "./containers/TestimonialContainer";
import LoginComponent from "./components/Authentication/LoginComponent";
import RegisterComponent from "./components/Authentication/RegisterComponent";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/Authentication/ProtectedRoute";
import ExperticeContainer from "./containers/ExperticeContainer";
import FormExperticeComponent from "./components/Expertice/FormExperticeComponent";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<LoginComponent />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/register" element={<RegisterComponent />} />

          {/* Protected Routes */}
          <Route element={<Layout />}>
            <Route
              path="dashboard"
              element={
                <ProtectedRoute>
                  <h1>Dashboard</h1>
                </ProtectedRoute>
              }
            />
            <Route
              path="dashboard/testimonial"
              element={
                <ProtectedRoute>
                  <TestimonialContainer />
                </ProtectedRoute>
              }
            />
            <Route
              path="dashboard/testimonial/add"
              element={
                <ProtectedRoute>
                  <TestimonialContainer />
                </ProtectedRoute>
              }
            />
            <Route
              path="dashboard/testimonial/edit/:id"
              element={
                <ProtectedRoute>
                  <TestimonialContainer />
                </ProtectedRoute>
              }
            />
            <Route
              path="dashboard/portfolio"
              element={
                <ProtectedRoute>
                  <PortfolioContainer />
                </ProtectedRoute>
              }
            />
            <Route
              path="dashboard/portfolio/add"
              element={
                <ProtectedRoute>
                  <PortfolioContainer />
                </ProtectedRoute>
              }
            />
            <Route
              path="dashboard/portfolio/edit/:id"
              element={
                <ProtectedRoute>
                  <PortfolioContainer />
                </ProtectedRoute>
              }
            />
            <Route
              path="dashboard/expertise"
              element={
                <ProtectedRoute>
                  <ExperticeContainer />
                </ProtectedRoute>
              }
            />
            <Route
              path="dashboard/expertise/add"
              element={
                <ProtectedRoute>
                  <FormExperticeComponent />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;

=======
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

>>>>>>> bd758ea (Feat Create UI For Login Page And Register Page)
