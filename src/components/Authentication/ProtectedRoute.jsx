<<<<<<< HEAD
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const ProtectedRoute = ({ children }) => {
   const { isAuthenticated } = useAuth();

   if (!isAuthenticated) {
     return <Navigate to="/" />;
   }
 
   return children;
};

export default ProtectedRoute;
=======
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const ProtectedRoute = ({ children }) => {
   const { isAuthenticated } = useAuth();

   if (!isAuthenticated) {
     return <Navigate to="/" />;
   }
 
   return children;
};

export default ProtectedRoute;
>>>>>>> 1b1f233 (feat: add authentication, validation, input custom hook, custom api and protected routes)
