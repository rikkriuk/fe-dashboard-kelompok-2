import React from "react";
import {
  FaHome,
  FaPencilAlt,
  FaTrashAlt,
  FaAngleRight,
  FaPlus,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import OverlayComponent from "../OverlayComponent";

const TableTestimonialComponent = ({
  testimonial,
  navigationForm,
  handleDelete,
  isOverlayVisible,
  setIsOverlayVisible,
  overlayImageUrl,
  toggleOverlay,
}) => {
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
                Testimonial
              </span>
            </div>
          </li>
        </ol>
      </nav>

      <div className="relative overflow-x-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center flex-column flex-wrap md:flex-row justify-between mb-4">
          <h5 className="text-xl font-bold text-gray-600 dark:text-white">
            Testimonial List
          </h5>

          <div className="flex items-center space-x-4">
            <button
              type="button"
              onClick={() => navigationForm("add", "")}
              className="px-3 py-2 text-xs font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 whitespace-nowrap inline-flex items-center"
            >
              <FaPlus className="mr-2" /> Add Data
            </button>
          </div>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 overflow-x-auto">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                No
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3 max-w-xs">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Message
              </th>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                action
              </th>
            </tr>
          </thead>
          <tbody>
            {testimonial.map((data, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">{data.name}</td>
                <td className="px-6 py-4">{data.title}</td>
                <td className="px-6 py-4">{data.date}</td>
                <td className="px-6 py-4">{data.message} </td>
                <td>
                  <button
                    onClick={() => toggleOverlay(data.imageUrl)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    Show Image
                  </button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => navigationForm("edit", data)}
                    type="button"
                    className="inline-flex items-center font-medium text-primary dark:text-blue-500 me-3 hover:text-red-700 dark:hover:text-blue-400"
                  >
                    <FaPencilAlt />
                  </button>
                  <button
                    onClick={() => handleDelete(data.id)}
                    type="button"
                    className="inline-flex items-center font-medium text-primary dark:text-blue-500 hover:text-red-700 dark:hover:text-blue-400"
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {isOverlayVisible && (
          <OverlayComponent
            imageUrl={overlayImageUrl}
            onClose={() => setIsOverlayVisible(false)}
          />
        )}
      </div>
    </div>
  );
};

export default TableTestimonialComponent;
