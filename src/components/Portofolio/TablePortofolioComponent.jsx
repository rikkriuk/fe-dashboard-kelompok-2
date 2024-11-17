import React from "react";
import {
  FaHome,
  FaEye,
  FaPencilAlt,
  FaTrashAlt,
  FaAngleRight,
  FaPlus,
  FaSearch,
} from "react-icons/fa";

const TablePortofolioComponent = () => {
  return (
    <div class="container mx-auto px-52 pt-10">
      <nav class="flex mb-3" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li class="inline-flex items-center">
            <a
              href="/"
              class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              <FaHome className="mr-2" />
              Home
            </a>
          </li>

          <li aria-current="page">
            <div class="flex items-center">
              <FaAngleRight />
              <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                Portofolio
              </span>
            </div>
          </li>
        </ol>
      </nav>

      <div class="relative overflow-x-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center flex-column flex-wrap md:flex-row justify-between mb-4">
          <h5 class="text-xl font-bold text-gray-600 dark:text-white">
            Portofolio List
          </h5>

          <div class="flex items-center space-x-4">
            <div class="relative">
              <div class="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
                <FaSearch />
              </div>
              <input
                type="text"
                id="table-search"
                class="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-50 h-8 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search"
              />
            </div>
            <button
              type="button"
              class="px-3 py-2 text-xs font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 whitespace-nowrap inline-flex items-center"
            >
              <FaPlus className="mr-2" /> Add Data
            </button>
          </div>
        </div>
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 overflow-x-auto">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                No
              </th>
              <th scope="col" class="px-6 py-3">
                Title
              </th>
              <th scope="col" class="px-6 py-3 max-w-xs">
                Content
              </th>
              <th scope="col" class="px-6 py-3">
                Date
              </th>
              <th scope="col" class="px-6 py-3">
                Image
              </th>
              <th scope="col" class="px-6 py-3">
                action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td class="px-6 py-4">1</td>
              <td class="px-6 py-4">Portofolio</td>
              <td class="px-6 py-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Ducimus consectetur quod rerum, commodi aut impedit sit magni
                maxime et eveniet explicabo vitae vel, aliquam esse nam?
                Corrupti vitae officia mollitia!
              </td>
              <td class="px-6 py-4">12/12/2025</td>
              <td class="px-6 py-4">portofolio.png</td>
              <td class="px-6 py-4 whitespace-nowrap">
                <a
                  href="#"
                  class="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 me-3 hover:text-blue-700 dark:hover:text-blue-400"
                >
                  <FaEye />
                </a>
                <a
                  href="#"
                  class="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 me-3 hover:text-blue-700 dark:hover:text-blue-400"
                >
                  <FaPencilAlt />
                </a>
                <a
                  href="#"
                  class="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:text-blue-700 dark:hover:text-blue-400"
                >
                  <FaTrashAlt />
                </a>
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td class="px-6 py-4">1</td>
              <td class="px-6 py-4">Portofolio</td>
              <td class="px-6 py-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Ducimus consectetur quod rerum, commodi aut impedit sit magni
                maxime et eveniet explicabo vitae vel, aliquam esse nam?
                Corrupti vitae officia mollitia!
              </td>
              <td class="px-6 py-4">12/12/2025</td>
              <td class="px-6 py-4">portofolio.png</td>
              <td class="px-6 py-4 whitespace-nowrap">
                <a
                  href="#"
                  class="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 me-3 hover:text-blue-700 dark:hover:text-blue-400"
                >
                  <FaEye />
                </a>
                <a
                  href="#"
                  class="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 me-3 hover:text-blue-700 dark:hover:text-blue-400"
                >
                  <FaPencilAlt />
                </a>
                <a
                  href="#"
                  class="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:text-blue-700 dark:hover:text-blue-400"
                >
                  <FaTrashAlt />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <nav
          class="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
          aria-label="Table navigation"
        >
          <span class="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
            Showing{" "}
            <span class="font-semibold text-gray-900 dark:text-white">
              1-10
            </span>{" "}
            of{" "}
            <span class="font-semibold text-gray-900 dark:text-white">
              1000
            </span>
          </span>
          <ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Previous
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                1
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                2
              </a>
            </li>

            <li>
              <a
                href="#"
                class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
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

export default TablePortofolioComponent;
