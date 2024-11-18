import React, { useEffect, useState } from "react";
import {
  FaHome,
  FaAngleRight,
} from "react-icons/fa";
import { getContactData } from "../../utils/api";
import LoadingComponent from "../LoadingComponent";

const ContactComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    setLoading(true)
    getContactData()
    .then((response) => {
      setData(response.data.data);
    })
    .catch((error) => {
      console.err("error", error);
    })
    .finally(() => {
      setLoading(false);
    })
  }, []);

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
                Subscribe
              </span>
            </div>
          </li>
        </ol>
      </nav>

      <div className="relative overflow-x-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center flex-column flex-wrap md:flex-row justify-between mb-4">
          <h5 className="text-xl font-bold text-gray-600 dark:text-white">
            Subscribe Email
          </h5>
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
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Phone
              </th>
              <th scope="col" className="px-6 py-3">
                Message
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => (
              <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">{item.name}</td>
                <td className="px-6 py-4">{item.email}</td>
                <td className="px-6 py-4">{item.phone}</td>
                <td className="px-6 py-4">{item.message}</td>
                <td className="px-6 py-4">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactComponent;
