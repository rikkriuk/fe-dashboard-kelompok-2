import React, { useState } from "react";
import {
  FaHome,
  FaPencilAlt,
  FaAngleRight,
  FaPlus,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import OverlayComponent from "../OverlayComponent";

const ExpeticeComponent = ({expertice, navigationForm}) => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [overlayImageUrl, setOverlayImageUrl] = useState(null);
  
  const toggleOverlay = (imageUrl) => {
    if (imageUrl) {
      setOverlayImageUrl(imageUrl);
    }
    setIsOverlayVisible(!isOverlayVisible);
  };
  return (
    <div className="container mx-auto px-10 pt-10">
      <nav className="flex mb-3" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <Link
              to="/"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              <FaHome className="mr-2" />
              Home
            </Link>
          </li>

          <li aria-current="page">
            <div className="flex items-center">
              <FaAngleRight />
              <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                Expertice
              </span>
            </div>
          </li>
        </ol>
      </nav>

      <div className="relative overflow-x-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center flex-column flex-wrap md:flex-row justify-between mb-4">
          <h5 className="text-xl font-bold text-gray-600 dark:text-white">
            Expertice List
          </h5>

          <div className="flex items-center space-x-4">
            <Link to="/dashboard/expertise/add">
              <button
                type="button"
                onClick={() => navigationForm("add","")}
                className="px-3 py-2 text-xs font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 whitespace-nowrap inline-flex items-center"
              >
                <FaPlus className="mr-2" /> Add Data
              </button>
            </Link>
          </div>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 overflow-x-auto">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                No
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3 max-w-xs">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Icon
              </th>
              <th scope="col" className="px-6 py-3">
                action
              </th>
            </tr>
          </thead>
          <tbody>
            {expertice.map((item, index) => (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={index}>
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">{item.title}</td>
                <td className="px-6 py-4 max-w-xs">{item.desc}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => toggleOverlay(item.iconUrl)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    Show Image
                  </button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Link to={`/dashboard/expertise/edit/${item.id}`}>
                    <button
                      className="inline-flex items-center font-medium text-primary dark:text-blue-500 me-3 hover:text-red-700 dark:hover:text-blue-400"
                      onClick={() => navigationForm("edit", item)}
                    >
                      <FaPencilAlt />
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {isOverlayVisible && (
            <OverlayComponent imageUrl={overlayImageUrl} onClose={() => setIsOverlayVisible(false)} />
         )}
      </div>
    </div>
  );
};

export default ExpeticeComponent;
