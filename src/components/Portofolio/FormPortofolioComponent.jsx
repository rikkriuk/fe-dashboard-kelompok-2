import React from "react";
import { FaHome, FaAngleRight } from "react-icons/fa";

const FormPortofolioComponent = ({ isEdit }) => {
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

          <li class="inline-flex items-center">
            <a
              href="/portofolio"
              class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              <FaAngleRight />
              Portofolio
            </a>
          </li>
          <li aria-current="page">
            <div class="flex items-center">
              <FaAngleRight />
              <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                {isEdit ? "Edit Portofolio" : "Add Portofolio"}
              </span>
            </div>
          </li>
        </ol>
      </nav>

      <div class="relative overflow-x-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center flex-column flex-wrap md:flex-row mb-4">
          <h5 class="text-xl font-bold text-gray-600 dark:text-white">
            {isEdit ? "Edit Portofolio" : "Add Portofolio"}
          </h5>
        </div>

        <form>
          <div class="mb-6">
            <label
              for="title"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Title
            </label>
            <input
              type="title"
              id="title"
              name="title"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="title portofolio"
              required
            />
          </div>
          <div class="mb-6">
            <label
              for="date"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="date portofolio"
              required
            />
          </div>
          <div class="mb-6">
            <label
              for="content"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Content
            </label>
            <textarea
              id="content"
              name="content"
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your content here..."
            ></textarea>
          </div>

          <div className="mb-6">
            <label
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              for="imageUrl"
            >
              Upload Image
            </label>
            <input
              class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              aria-describedby="imageUrl_help"
              id="imageUrl"
              name="imageUrl"
              type="file"
              accept=".jpg, .jpeg, .png"
            />
            <p
              class="mt-1 text-sm text-gray-500 dark:text-gray-300"
              id="imageUrl_help"
            >
              JPEG, JPG or PNG
            </p>
          </div>

          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {isEdit ? "Edit Portofolio" : "Add Portofolio"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormPortofolioComponent;
