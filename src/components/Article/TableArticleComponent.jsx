import React, { useEffect, useState } from "react";
import {
  FaHome,
  FaPencilAlt,
  FaTrashAlt,
  FaAngleRight,
  FaPlus,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { getArticleData } from "../../utils/api"
import { deleteArticleData } from "../../utils/api";
import { showErrorAlert, showSuccessAlert } from "../../utils/alert";
import OverlayComponent from "../OverlayComponent";
import LoadingComponent from "../LoadingComponent";

const TableArticleComponent = () => {
   const [isOverlayVisible, setIsOverlayVisible] = useState(false);
   const [overlayImageUrl, setOverlayImageUrl] = useState(null);
   const [loading, setLoading] = useState(false);
   const [data, setData] = useState([]);

   const toggleOverlay = (imageUrl) => {
      if (imageUrl) {
        setOverlayImageUrl(imageUrl);
      }
      setIsOverlayVisible(!isOverlayVisible);
    };

   useEffect(() => {
      setLoading(true);
      getArticleData().then((res) => {
         setData(res.data.data);
      }).catch((error) => {
         console.log(error)
      }).finally(() => {
         setLoading(false);
      })
   }, []);

   const handleDelete = (id) => {
      setLoading(true);
      deleteArticleData(id)
         .then(() => {
            setData((prevData) => prevData.filter((item) => item.id !== id));
            showSuccessAlert("Success", "Article deleted successfully");
         })
         .catch((error) => {
            showErrorAlert("Error", "Failed to delete article");
            console.error("Error deleting article:", error);
         })
         .finally(() => {
            setLoading(false);
         });
   };

   if (loading) return <LoadingComponent />;

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
                  Article
               </span>
               </div>
            </li>
         </ol>
         </nav>

         <div className="relative overflow-x-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
         <div className="flex items-center flex-column flex-wrap md:flex-row justify-between mb-4">
            <h5 className="text-xl font-bold text-gray-600 dark:text-white">
               Article List
            </h5>

            <div className="flex items-center space-x-4">
               <Link
               type="button"
               to={"/dashboard/article/add"}
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
                     Content
                  </th>
                  <th scope="col" className="px-6 py-3">
                     Meta Title
                  </th>
                  <th scope="col" className="px-6 py-3">
                     Meta Description
                  </th>
                  <th scope="col" className="px-6 py-3">
                     Meta Tag
                  </th>
                  <th scope="col" className="px-6 py-3">
                     Writer
                  </th>
                  <th scope="col" className="px-6 py-3">
                     Image
                  </th>
                  <th scope="col" className="px-6 py-3">
                     Date
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
                     <td className="px-6 py-4">{item.content}</td>
                     <td className="px-6 py-4">{item.meta_title}</td>
                     <td className="px-6 py-4">{item.meta_desc}</td>
                     <td className="px-6 py-4">{item.meta_tag}</td>
                     <td className="px-6 py-4">{item.writer}</td>
                     <td className="px-6 py-4">
                     <button
                        onClick={() => toggleOverlay(item.imageUrl)}
                        className="text-blue-500 hover:text-blue-700"
                        >
                        Show Image
                     </button>
                     </td>
                     <td className="px-6 py-4">{item.date}</td>
                     <td className="px-6 py-4 whitespace-nowrap">
                        <Link
                           to={`/dashboard/article/edit/${item.id}/${item.slug}`}
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
         </div>
      </div>
   );
};

export default TableArticleComponent;
