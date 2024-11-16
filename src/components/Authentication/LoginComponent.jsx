<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import logo from "../../assets/companylogo.png";
import { Link, useNavigate } from "react-router-dom";
import { userLogin } from "../../utils/api";
import useForm from "../../hooks/useForm";
import { showSuccessAlert } from "../../utils/alert";
import { useAuth } from "../../context/AuthContext";

const LoginComponent = () => {
  const navigate = useNavigate();
  const { isAuthenticated, login } = useAuth();
  const [form, handleChange] = useForm({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [passwordType, setPasswordType] = useState("password");


  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
  };

  // Handle login form submission
  const handleLogin = async (e) => {
    e.preventDefault();

    // Validate inputs
    const newErrors = {};
    if (!form.username) newErrors.username = "Username is required";
    if (!form.password) newErrors.password = "Password is required";
    
    setErrors(newErrors);

    // If no errors, proceed with login
    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await userLogin(form);
        login(response.data.token);
        showSuccessAlert("Success", "Login successful!");
        navigate("/dashboard");
      } catch (error) {
        console.error("Error during login:", error);
        setErrors({ general: "Invalid username or password" });
      }
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-lightPink">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <div className="flex justify-center mb-6">
          <img src={logo} alt="company logo" />
        </div>
        <h2 className="text-center text-2xl font-semibold mb-2 text-primary">
          Logo Ipsum
        </h2>
        <p className="text-center text-sm text-secondary mb-6">
          Better Insights For Business Growth
        </p>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-secondary text-sm font-sem">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              onChange={handleChange}
              value={form.username}
              placeholder="Username"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline ${errors.username ? 'border-red-500' : ''}`}
            />
            {errors.username && (
              <p className="text-red-500 text-xs mt-1">{errors.username}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-secondary text-sm font-sem">
              Password
            </label>
            <div className="relative">
              <input
                type={passwordType}
                id="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                value={form.password}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline ${errors.password ? 'border-red-500' : ''}`}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
              >
                {passwordType === "password" ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>
          {errors.general && (
            <p className="text-red-500 text-xs mb-4">{errors.general}</p>
          )}
          <div className="flex items-center justify-center my-5">
            <button
              type="submit"
              className="bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              SIGN IN
            </button>
          </div>
          <div className="text-center text-secondary">
            <p>
              Don`t have an account? {" "}
              <Link to="/register">
                <span className="text-primary">Register</span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

=======
import React, { useEffect, useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import logo from "../../assets/companylogo.png";
import { Link, useNavigate } from "react-router-dom";
import { userLogin } from "../../utils/api";
import useForm from "../../hooks/useForm";
import { showSuccessAlert } from "../../utils/alert";
import { useAuth } from "../../context/AuthContext";

const LoginComponent = () => {
  const navigate = useNavigate();
  const { isAuthenticated, login } = useAuth();
  const [form, handleChange] = useForm({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [passwordType, setPasswordType] = useState("password");


  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
  };

  // Handle login form submission
  const handleLogin = async (e) => {
    e.preventDefault();

    // Validate inputs
    const newErrors = {};
    if (!form.username) newErrors.username = "Username is required";
    if (!form.password) newErrors.password = "Password is required";
    
    setErrors(newErrors);

    // If no errors, proceed with login
    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await userLogin(form);
        login(response.data.token);
        showSuccessAlert("Success", "Login successful!");
        navigate("/dashboard");
      } catch (error) {
        console.error("Error during login:", error);
        setErrors({ general: "Invalid username or password" });
      }
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-lightPink">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <div className="flex justify-center mb-6">
          <img src={logo} alt="company logo" />
        </div>
        <h2 className="text-center text-2xl font-semibold mb-2 text-primary">
          Logo Ipsum
        </h2>
        <p className="text-center text-sm text-secondary mb-6">
          Better Insights For Business Growth
        </p>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-secondary text-sm font-sem">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              onChange={handleChange}
              value={form.username}
              placeholder="Username"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline ${errors.username ? 'border-red-500' : ''}`}
            />
            {errors.username && (
              <p className="text-red-500 text-xs mt-1">{errors.username}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-secondary text-sm font-sem">
              Password
            </label>
            <div className="relative">
              <input
                type={passwordType}
                id="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                value={form.password}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline ${errors.password ? 'border-red-500' : ''}`}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
              >
                {passwordType === "password" ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>
          {errors.general && (
            <p className="text-red-500 text-xs mb-4">{errors.general}</p>
          )}
          <div className="flex items-center justify-center my-5">
            <button
              type="submit"
              className="bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              SIGN IN
            </button>
          </div>
          <div className="text-center text-secondary">
            <p>
              Don`t have an account? {" "}
              <Link to="/register">
                <span className="text-primary">Register</span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

>>>>>>> 1b1f233 (feat: add authentication, validation, input custom hook, custom api and protected routes)
export default LoginComponent;