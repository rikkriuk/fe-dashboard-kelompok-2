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
import ArticleContainer from "./containers/ArticleContainer";
import ContactComponent from "./components/Contact/ContactComponent";
import SubscribeEmailComponent from "./components/SubscribeEmail/SubscribeEmailComponent";
import TeamsContainer from "./containers/TeamsContainer";
import WhatWeDoContainer from "./containers/WhatWeDoContainer";
import AboutUsContainer from "./containers/AboutUsContainer";

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

            {/* Testimonial route */}
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

            {/* About us route */}
            <Route
              path="dashboard/about-us"
              element={
                <ProtectedRoute>
                  <AboutUsContainer />
                </ProtectedRoute>
              }
            />
            <Route
              path="dashboard/about-us/add"
              element={
                <ProtectedRoute>
                  <AboutUsContainer />
                </ProtectedRoute>
              }
            />
            {/* <Route
              path="dashboard/about-us/edit/:id"
              element={
                <ProtectedRoute>
                  <AboutUsContainer />
                </ProtectedRoute>
              }
            /> */}

            {/* Teams route */}
            <Route
              path="dashboard/teams"
              element={
                <ProtectedRoute>
                  <TeamsContainer />
                </ProtectedRoute>
              }
            />
            <Route
              path="dashboard/teams/add"
              element={
                <ProtectedRoute>
                  <TeamsContainer />
                </ProtectedRoute>
              }
            />
            <Route
              path="dashboard/teams/edit/:id"
              element={
                <ProtectedRoute>
                  <TeamsContainer />
                </ProtectedRoute>
              }
            />

            {/* What we do route */}
            <Route
              path="dashboard/what-we-do"
              element={
                <ProtectedRoute>
                  <WhatWeDoContainer />
                </ProtectedRoute>
              }
            />
            <Route
              path="dashboard/what-we-do/add"
              element={
                <ProtectedRoute>
                  <WhatWeDoContainer />
                </ProtectedRoute>
              }
            />
            <Route
              path="dashboard/what-we-do/edit/:id"
              element={
                <ProtectedRoute>
                  <WhatWeDoContainer />
                </ProtectedRoute>
              }
            />

            {/* Testimonial route */}
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

            {/* Article route */}
            <Route
              path="dashboard/article"
              element={
                <ProtectedRoute>
                  <ArticleContainer />
                </ProtectedRoute>
              }
            />

            <Route
              path="dashboard/article/add"
              element={
                <ProtectedRoute>
                  <ArticleContainer />
                </ProtectedRoute>
              }
            />

            <Route
              path="dashboard/article/edit/:id/:slug"
              element={
                <ProtectedRoute>
                  <ArticleContainer />
                </ProtectedRoute>
              }
            />

            {/* Contact route */}
            <Route
              path="dashboard/contact"
              element={
                <ProtectedRoute>
                  <ContactComponent />
                </ProtectedRoute>
              }
            />

            {/* Subscribe Email route */}
            <Route
              path="dashboard/subscribe-email"
              element={
                <ProtectedRoute>
                  <SubscribeEmailComponent />
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
