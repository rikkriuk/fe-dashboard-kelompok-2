<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 92d722c (fixed conflict)
import React, { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(false);
  
  useEffect(() => {
    const getToken = localStorage.getItem("token");
    if (getToken) {
      setToken(getToken);
      setIsAuthenticated(true);
    } else {
      setToken(false);
      setIsAuthenticated(false);
    }
  }, []);

  // Function to handle auth login
  const login = (token) => {
    localStorage.setItem("token", token);
    setIsAuthenticated(true);
  };

  // Function to handle auth logout
  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { useAuth, AuthProvider };
<<<<<<< HEAD
=======
import React, { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  useEffect(() => {
    const getToken = localStorage.getItem("token");
    if (getToken) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  // Function to handle auth login
  const login = (token) => {
    localStorage.setItem("token", token);
    setIsAuthenticated(true);
  };

  // Function to handle auth logout
  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { useAuth, AuthProvider };
>>>>>>> 1b1f233 (feat: add authentication, validation, input custom hook, custom api and protected routes)
=======
>>>>>>> 92d722c (fixed conflict)
