import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/companylogo.png";
import { FaEyeSlash, FaEye } from "react-icons/fa";

const RegisterComponent = () => {
  const [passwordType, setPasswordType] = useState("password");

  const togglePasswordVisibility = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
  };

  return (
    <div>
      <div className="flex items-center justify-center h-screen">
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
          <form>
            <div className="mb-4">
              <label className="block text-secondary text-sm font-sem">
                Name
              </label>
              <input
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                id="name"
                value="contohnya"
              />
            </div>
            <div className="mb-4">
              <label className="block text-secondary text-sm font-sem">
                Email
              </label>
              <input
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                id="email"
                value="contohnya"
              />
            </div>
            <div className="mb-4">
              <label className="block text-secondary text-sm font-sem">
                Password
              </label>
              <div className="relative">
                <input
                  type={passwordType}
                  id="password"
                  value="feryokta"
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
              <div className="flex  items-center justify-center my-5">
                <button
                  type="submit"
                  className="bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  SIGN UP
                </button>
              </div>
            </div>
            <div className="text-center text-secondary">
              <p>
                Alredy Have Account ?{" "}
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
