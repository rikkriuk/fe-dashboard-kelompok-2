import React, { useEffect, useState } from "react";
import {
  FaHome,
  FaPencilAlt,
  FaAngleRight,
  FaTrashAlt,
  FaPlus,
  FaSearch,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { getWhatWeDoData, deleteWhatWeDoData } from "../../utils/api"
import { showErrorAlert, showSuccessAlert } from "../../utils/alert";
import OverlayComponent from "../OverlayComponent";

const TableWhatWeDoComponent = () => {
   const [isOverlayVisible, setIsOverlayVisible] = useState(false);
   const [overlayImageUrl, setOverlayImageUrl] = useState(null);
   const [data, setData] = useState([]);

   const toggleOverlay = (imageUrl) => {
      if (imageUrl) {
        setOverlayImageUrl(imageUrl);
      }
      setIsOverlayVisible(!isOverlayVisible);
    };

   useEffect(() => {
      getWhatWeDoData().then((res) => {
         setData(res.data.data);
      }).catch((error) => {
         showErrorAlert("Error", "Failed to fetch data");
         console.log(error)
      })
   }, []);

   const handleDelete = (id) => {
      deleteWhatWeDoData(id)
         .then(() => {
            setData((prevData) => prevData.filter((item) => item.id !== id));
            showSuccessAlert("Success", "What we do deleted successfully");
         })
         .catch((error) => {
            showErrorAlert("Error", "Failed to delete what we do");
            console.error("Error deleting what we do:", error);
         });
   };

   return (
      <div className="container mx-auto px-10 pt-10">
         <nav className="flex mb-3" aria-label="Breadcrumb">
         <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li className="inline-flex items-center">
               <a
               href="/"
               className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
               >
               <FaHome className="mr-2" />
               Home
               </a>
            </li>

            <li aria-current="page">
               <div className="flex items-center">
               <FaAngleRight />
               <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                  What We Do
               </span>
               </div>
            </li>
         </ol>
         </nav>

         <div className="relative overflow-x-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
         <div className="flex items-center flex-column flex-wrap md:flex-row justify-between mb-4">
            <h5 className="text-xl font-bold text-gray-600 dark:text-white">
               What We Do List
            </h5>

            <div className="flex items-center space-x-4">
               <div className="relative">
               <div className="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
                  <FaSearch />
               </div>
               <input
                  type="text"
                  id="table-search"
                  className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-50 h-8 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search"
               />
               </div>
               <Link
               type="button"
               to={"/dashboard/what-we-do/add"}
               className="px-3 py-2 text-xs font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 whitespace-nowrap inline-flex items-center"
               >
               <FaPlus className="mr-2" /> Add Data
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
                  <th scope="col" className="px-6 py-3">
                     Description
                  </th>
                  <th scope="col" className="px-6 py-3">
                     Image
                  </th>
                  <th scope="col" className="px-6 py-3">
                     Action
                  </th>
               </tr>
            </thead>

            <tbody>
               {data?.map((item, index) => (
                  <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                     <td className="px-6 py-4">{index + 1}</td>
                     <td className="px-6 py-4">{item.title}</td>
                     <td className="px-6 py-4">{item.desc}</td>
                     <td className="px-6 py-4">
                     <button
                        onClick={() => toggleOverlay(item.imageUrl)}
                        className="text-blue-500 hover:text-blue-700"
                        >
                        Show Image
                     </button>
                     </td>
                     <td className="px-6 py-4 whitespace-nowrap">
                        <Link
                           to={`/dashboard/what-we-do/edit/${item.id}`}
                           className="inline-flex items-center font-medium text-primary dark:text-blue-500 me-3 hover:text-red-700 dark:hover:text-blue-400"
                           >
                           <FaPencilAlt />
                        </Link>
                        <button
                           onClick={() => handleDelete(item.id)}
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
            <OverlayComponent imageUrl={overlayImageUrl} onClose={() => setIsOverlayVisible(false)} />
         )}
         <nav
            className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
            aria-label="Table navigation"
         >
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
               Showing{" "}
               <span className="font-semibold text-gray-900 dark:text-white">
               1-10
               </span>{" "}
               of{" "}
               <span className="font-semibold text-gray-900 dark:text-white">
               1000
               </span>
            </span>
            <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
               <li>
               <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
               >
                  Previous
               </a>
               </li>
               <li>
               <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
               >
                  1
               </a>
               </li>
               <li>
               <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
               >
                  2
               </a>
               </li>

               <li>
               <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
               >
                  Next
               </a>
               </li>
            </ul>
         </nav>
         </div>
      </div>
   );
};

export default TableWhatWeDoComponent;
