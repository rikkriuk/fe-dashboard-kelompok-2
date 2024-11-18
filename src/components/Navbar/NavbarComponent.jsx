import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import userImage from "../../assets/user-image.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const NavbarComponent = () => {
   const { logout } = useAuth();
   const navigate = useNavigate();
   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

   const toggleDropdown = () => {
      setIsDropdownOpen((prev) => !prev);
   };

   const handleLogout = () => {
      logout();
      navigate("/");
   }

   return (
      <nav className="w-full px-10 bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
         <div className="px-3 py-3 lg:px-5 lg:pl-3 flex justify-between w-full">

            <div className="flex items-center justify-between">
               <div className="flex items-center justify-between">
                  <a className="flex ms-2 md:me-24">
                     <img src={logo} className="w-10 h-10" alt="Logo Ipsum" />
                  </a>
               </div>
            </div>
   
            <div className="flex items-center">
                  <div className="flex items-center ms-3 relative">
                     {/* Avatar */}
                     <img
                        src={userImage}
                        alt="User"
                        className="w-10 h-10 rounded-full cursor-pointer"
                        onClick={toggleDropdown}
                     />

                     {/* Dropdown */}
                     {isDropdownOpen && (
                        <div
                           className="absolute right-0 z-50 top-0 mt-16 w-48 bg-white rounded-lg shadow-lg dark:bg-gray-700"
                        >
                           <ul className="py-1">
                              <li>
                                 <Link
                                    to={"/dashboard"}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                 >
                                    Dashboard
                                 </Link>
                              </li>
                              <li>
                                 <button
                                    onClick={handleLogout}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                 >
                                    Sign out
                                 </button>
                              </li>
                           </ul>
                        </div>
                     )}
                  </div>
               </div>
         </div>
      </nav>
   );
};

export default NavbarComponent;
