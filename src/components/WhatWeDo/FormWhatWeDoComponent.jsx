import React, { useEffect, useState } from "react";
import { FaHome, FaAngleRight } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { postWhatWeDoData, getWhatWeDoData, putWhatWeDoData } from "../../utils/api";
import { showErrorAlert, showSuccessAlert } from "../../utils/alert";
import LoadingComponent from "../LoadingComponent";

const FormWhatWeDoComponent = ({ isEdit }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const {form, handleChange, handleFileChange, setForm} = useForm({
    title: "",
    desc: "",
    image: null,
  });

  useEffect(() => {
      if (isEdit) {
        setLoading(true);
        getWhatWeDoData(id)
        .then((response) => {
            const data = response.data.data;

            const editData = data.find((item) => item.id === id)
            if (editData) {
               setForm({
                   title: editData.title,
                   desc: editData.desc,
                   image: editData.imageUrl,
               })
            } else {
               navigate("/dashboard/what-we-do");
            }
         }).catch((error) => {
            showErrorAlert("Error", "Id is not found");
            console.err("error", error);
         }).finally(() => {
            setLoading(false);
         })
      }
   }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.image) {
      showErrorAlert("Error", "Please upload an image");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      if (isEdit) {
        putWhatWeDoData(formData, id).then(() => {
            showSuccessAlert("Success", "What we do updated successfully");
            navigate("/dashboard/what-we-do");
         });
      } else {
        postWhatWeDoData(formData).then(() => {
            showSuccessAlert("Success", "What we do created successfully");
            navigate("/dashboard/what-we-do");
         });
      }
    } catch (error) {
      console.error(error);
      showErrorAlert("Error", "Failed to submit the what we do!");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <LoadingComponent />;

  return (
    <div className="container mx-auto px-10 pt-10">
      <nav className="flex mb-3" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <Link
              to="/dashboard"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              <FaHome className="mr-2" />
              Home
            </Link>
          </li>

          <li className="inline-flex items-center">
            <Link
              to={"/dashboard/what-we-do"}
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              <FaAngleRight />
              What We Do
            </Link>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <FaAngleRight />
              <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                {isEdit ? "Edit what We Do" : "Add what We Do"}
              </span>
            </div>
          </li>
        </ol>
      </nav>

      <div className="relative overflow-x-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center flex-column flex-wrap md:flex-row mb-4">
          <h5 className="text-xl font-bold text-gray-600 dark:text-white">
            {isEdit ? "Edit what We Do" : "Add what We Do"}
          </h5>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Title */}
          <div className="mb-6">
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={form.title}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter name"
              required
            />
          </div>

          {/* Description */}
          <div className="mb-6">
            <label
              htmlFor="desc"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Description
            </label>
            <input
              type="text"
              id="desc"
              name="desc"
              value={form.desc}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter title"
              required
            />
          </div>

          {/* Image */}
          <div className="mb-6">
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="image"
            >
              Upload Image
            </label>
            <input
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              id="image"
              name="image"
              type="file"
              accept=".jpg, .jpeg, .png"
              onChange={handleFileChange}
            />
            {form.image && (
              <div className="mt-4">
                <img
                  src={form.image || form.image}
                  alt="What We Do Preview"
                  className="max-w-full h-auto rounded"
                />
              </div>
            )}
          </div>

          <button
            type="submit"
            className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {isEdit ? "Edit team" : "Add team"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormWhatWeDoComponent;
