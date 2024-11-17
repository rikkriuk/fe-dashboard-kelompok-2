import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/companylogo.png";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { userRegister } from "../../utils/api";
import useForm from "../../hooks/useForm";
import { validatePassword } from "../../utils/validation";
import { showSuccessAlert, showErrorAlert } from "../../utils/alert";
import { useAuth } from "../../context/AuthContext";

const RegisterComponent = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [form, handleChange] = useForm({
    name: "",
    username: "",
    password: "",
    role: "admin",
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

  // Handle form submission
  const validateForm = () => {
    const validationErrors = {};

    if (!form.name.trim()) {
      validationErrors.name = "Name is required";
    }

    if (!form.username.trim()) {
      validationErrors.username = "Username is required";
    }

    const passwordErrors = validatePassword(form.password);
    if (passwordErrors.length > 0) {
      validationErrors.password = passwordErrors.join(", ");
    }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      await userRegister(form);
      showSuccessAlert("Success", "User registered successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error registering user:", error);
      showErrorAlert("Error", "Failed to register user");
    }
  };

  return (
    <div>
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
          <form onSubmit={handleRegister}>
            <div className="mb-4">
              <label className="block text-secondary text-sm font-sem">
                Name
              </label>
              <input
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                id="name"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-secondary text-sm font-sem">
                Username
              </label>
              <input
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                id="username"
                name="username"
                placeholder="Username"
                value={form.username}
                onChange={handleChange}
              />
              {errors.username && (
                <p className="text-red-500 text-sm mt-1">{errors.username}</p>
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
                  value={form.password}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
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
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>
            <div className="flex items-center justify-center my-5">
              <button
                type="submit"
                className="bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                SIGN UP
              </button>
            </div>
            <div className="text-center text-secondary">
              <p>
                Already Have Account?{" "}
                <Link to="/">
                  <span className="text-primary">Login Here</span>
                </Link>{" "}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterComponent;
