import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import {
  FaUsers,
  FaBriefcase,
  FaUserTie,
  FaBookOpen,
  FaTasks,
  FaClipboardList,
  FaEnvelope,
  FaRegNewspaper,
  FaSignOutAlt,
  FaChevronDown,
  FaChevronRight,
  FaChevronLeft,
  FaBell,
} from "react-icons/fa";

const SidebarComponent = ({ isSidebarOpen, toggleSidebar }) => {
  const location = useLocation();
  const { logout } = useAuth();
  const [isActivitiesOpen, setIsActivitiesOpen] = useState(true);

  const isActive = (path) => location.pathname === path;
  const toggleActivities = () => setIsActivitiesOpen(!isActivitiesOpen);

  return (
    <div className={`flex border ${isSidebarOpen ? "w-96" : "w-0"}`}>
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="p-2 text-gray-700 top-4 left-4 z-50"
      >
        {isSidebarOpen ? <FaChevronLeft /> : <FaChevronRight />}
      </button>

      {/* Sidebar */}
      <nav
        className={`w-72 h-screen bg-white border-r border-gray-200 transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-52"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center justify-center py-6">
          <h1 className={`font-bold text-lg ${isSidebarOpen ? "text-gray-800" : "text-white"}`}>
            LOGOIPSUM
          </h1>
        </div>

        {/* Sidebar Menu */}
        <ul className="mt-4 space-y-2">
          {/* Dashboard */}
          <li>
            <Link
              to="/dashboard"
              className={`flex items-center p-3 ${
                isActive("/dashboard")
                  ? "bg-primary text-white"
                  : "text-gray-700 hover:bg-gray-100"
              } rounded-md`}
            >
              <FaTasks className={`${isActive("/dashboard") ? "text-white" : "text-primary"}`} />
              <span className="ml-3 font-semibold">Dashboard</span>
            </Link>
          </li>

          {/* Activities */}
          <li>
            <button
              onClick={toggleActivities}
              className="flex items-center w-full p-3 text-gray-700 hover:bg-gray-100 rounded-md"
            >
              <FaClipboardList className="text-primary" />
              <span className="ml-3 font-semibold">Activities</span>
              <span
                className={`ml-auto text-primary transition-transform duration-200 ${
                  isActivitiesOpen ? "rotate-180" : "rotate-0"
                }`}
              >
                <FaChevronDown />
              </span>
            </button>

            {/* Dropdown Items */}
            {isActivitiesOpen && (
              <ul className="mt-2 ml-6 space-y-1">
                <li>
                  <Link
                    to="/dashboard/testimonial"
                    className={`flex items-center p-2 ${
                      isActive("/dashboard/testimonial")
                        ? "bg-primary text-white"
                        : "text-gray-600 hover:bg-gray-100"
                    } rounded-md`}
                  >
                    <FaUsers className={`${isActive("/dashboard/testimonial") ? "bg-primary" : "text-gray-600"}`} />
                    <span className="ml-3">Testimonial</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/portfolio"
                    className={`flex items-center p-2 ${
                      isActive("/dashboard/portfolio")
                        ? "bg-primary text-white"
                        : "text-gray-600 hover:bg-gray-100"
                    } rounded-md`}
                  >
                    <FaBriefcase className={`${isActive("/dashboard/portfolio") ? "bg-primary" : "text-gray-600"}`} />
                    <span className="ml-3">Portfolio</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/expertise"
                    className={`flex items-center p-2 ${
                      isActive("/dashboard/expertise")
                        ? "bg-primary text-white"
                        : "text-gray-600 hover:bg-gray-100"
                    } rounded-md`}
                  >
                    <FaUserTie className={`${isActive("/dashboard/expertise") ? "bg-primary" : "text-gray-600"}`} />
                    <span className="ml-3">Expertise</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/about-us"
                    className={`flex items-center p-2 ${
                      isActive("/dashboard/about-us")
                        ? "bg-primary text-white"
                        : "text-gray-600 hover:bg-gray-100"
                    } rounded-md`}
                  >
                    <FaBookOpen className={`${isActive("/dashboard/about-us") ? "bg-primary" : "text-gray-600"}`} />
                    <span className="ml-3">About Us</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/teams"
                    className={`flex items-center p-2 ${
                      isActive("/dashboard/teams")
                        ? "bg-primary text-white"
                        : "text-gray-600 hover:bg-gray-100"
                    } rounded-md`}
                  >
                    <FaUsers className={`${isActive("/dashboard/teams") ? "bg-primary" : "text-gray-600"}`} />
                    <span className="ml-3">Teams</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/what-we-do"
                    className={`flex items-center p-2 ${
                      isActive("/dashboard/what-we-do")
                        ? "bg-primary text-white"
                        : "text-gray-600 hover:bg-gray-100"
                    } rounded-md`}
                  >
                    <FaTasks className={`${isActive("/dashboard/what-we-do") ? "bg-primary" : "text-gray-600"}`} />
                    <span className="ml-3">What We Do</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/article"
                    className={`flex items-center p-2 ${
                      isActive("/dashboard/article")
                        ? "bg-primary text-white"
                        : "text-gray-600 hover:bg-gray-100"
                    } rounded-md`}
                  >
                    <FaRegNewspaper className={`${isActive("/dashboard/article") ? "bg-primary" : "text-gray-600"}`} />
                    <span className="ml-3">Article</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/contact"
                    className={`flex items-center p-2 ${
                      isActive("/dashboard/contact")
                        ? "bg-primary text-white"
                        : "text-gray-600 hover:bg-gray-100"
                    } rounded-md`}
                  >
                    <FaEnvelope className={`${isActive("/dashboard/contact") ? "bg-primary" : "text-gray-600"}`} />
                    <span className="ml-3">Contact</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/subscribe-email"
                    className={`flex items-center p-2 ${
                      isActive("/dashboard/subscribe-email")
                        ? "bg-primary text-white"
                        : "text-gray-600 hover:bg-gray-100"
                    } rounded-md`}
                  >
                    <FaBell className={`${isActive("/dashboard/subscribe-email") ? "bg-primary" : "text-gray-600"}`} />
                    <span className="ml-3">Subscribe Email</span>
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Logout */}
          <li className="mt-4">
            <button
              onClick={logout}
              className="flex items-center w-full p-3 text-gray-700 hover:bg-gray-100 rounded-md"
            >
              <FaSignOutAlt className="text-primary" />
              <span className="ml-3 font-semibold">Logout</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SidebarComponent;
