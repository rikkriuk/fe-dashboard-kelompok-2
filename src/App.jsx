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
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;

