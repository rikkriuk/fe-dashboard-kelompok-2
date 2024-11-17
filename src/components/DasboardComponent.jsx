import React from "react";
import {
  FaBriefcase,
  FaUsers,
  FaEnvelope,
  FaRegNewspaper,
  FaUser,
  FaBell,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const DashboardComponent = ({
  testimonialCount,
  portfolioCount,
  teamCount,
  articleCount,
  contactCount,
  subscribeCount,
}) => {
  return (
    <>
      <div className="container mx-auto px-10 pt-10">
        <div className="relative overflow-x-auto p-4 bg-white rounded-lg sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-10">
            Dashboard
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Link
              to="/dashboard/testimonial"
              className="flex flex-col items-center bg-white-100 border
               border-gray-200 rounded-lg shadow md:flex-row 
               md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <FaUser className="text-primary text-5xl m-4" />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Testimonial
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {testimonialCount} Data
                </p>
              </div>
            </Link>
            <Link
              to="/dashboard/portfolio"
              className="flex flex-col items-center bg-white-100 border
               border-gray-200 rounded-lg shadow md:flex-row 
               md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <FaBriefcase className="text-primary text-5xl m-4" />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Portofolio
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {portfolioCount} Data
                </p>
              </div>
            </Link>
            <Link
              to="/dashboard/teams"
              className="flex flex-col items-center bg-white-100 border
               border-gray-200 rounded-lg shadow md:flex-row 
               md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <FaUsers className="text-primary text-5xl m-4" />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Teams
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {teamCount} Data
                </p>
              </div>
            </Link>
            <Link
              to="/dashboard/article"
              className="flex flex-col items-center bg-white-100 border
               border-gray-200 rounded-lg shadow md:flex-row 
               md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <FaRegNewspaper className="text-primary text-5xl m-4" />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Article
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {articleCount} Data
                </p>
              </div>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-5 items-center">
            <Link
              to="/dashboard/contact"
              className="flex flex-col items-center bg-white-100 border
               border-gray-200 rounded-lg shadow md:flex-row 
               md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <FaEnvelope className="text-primary text-5xl m-4" />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Contact
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {contactCount} Data
                </p>
              </div>
            </Link>
            <Link
              to="/dashboard/subscribe-email"
              className="flex flex-col items-center bg-white-100 border
               border-gray-200 rounded-lg shadow md:flex-row 
               md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <FaBell className="text-primary text-5xl m-4" />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Subcribe Email
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {subscribeCount} Data
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardComponent;
