import React from "react";
import { FaHome, FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { postExperticeData, getExperticeData, putExperticeData } from "../../utils/api";
import { showErrorAlert, showSuccessAlert } from "../../utils/alert";

const FormExperticeComponent = ({ isEdit }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, handleChange, handlefile, setForm] = useForm({
    title: "",
    desc: "",
    icon: null,
  });

  const handleFileChange = (e) => {
    setForm({
      ...form,
      icon: e.target.files[0],
    });
  };

  const fetchData = async () => {
    if (isEdit) {
      try {
        const response = await getExperticeData(id);
        const data = response.data.data;

        const editData = data.find((item) => item.id === id);
        if (editData) {
          setForm({
            title: editData.title,
            desc: editData.desc,
            icon: editData.icon,
          });
        } else {
          navigate("/dashboard/expertice");
        }
      } catch (error) {
        showErrorAlert("Error", "Id is not found");
        console.error("error", error);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!form.icon) {
      showErrorAlert("Error", "Please upload an image");
      return;
    }
  
    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      formData.append(key, value);
    });
  
    try {
      if (isEdit) {
        await putExperticeData(formData, id);
        showSuccessAlert("Success", "Expertice updated successfully");
        navigate("/dashboard/expertice");
      } else {
        await postExperticeData(formData);
        showSuccessAlert("Success", "Expertice created successfully");
        navigate("/dashboard/expertice");
      }
    } catch (error) {
      console.error(error);
      showErrorAlert("Error", "Failed to submit the expertice!");
    }
  };
  

  return (
    <div className="container mx-auto px-52 pt-10">
      <nav className="flex mb-3" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <Link
              to="/"
            >
            <button
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              <FaHome className="mr-2" />
              Home
            </button>
            </Link>  
          </li>

          <li className="inline-flex items-center">
            <a
              href="#"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              <FaAngleRight />
              Expertice
            </a>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <FaAngleRight />
              <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                {isEdit ? "Edit Expertice" : "Add Expertice"}
              </span>
            </div>
          </li>
        </ol>
      </nav>

      <div className="relative overflow-x-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center flex-column flex-wrap md:flex-row mb-4">
          <h5 className="text-xl font-bold text-gray-600 dark:text-white">
            {isEdit ? "Edit Expertice" : "Add Expertice"}
          </h5>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Title
            </label>
            <input
              type="title"
              id="title"
              name="title"
              value={form.title}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="title expertice"
              required
            />
          </div>
          
          <div className="mb-6">
            <label
              htmlFor="desc"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Description
            </label>
            <textarea
              id="desc"
              name="desc"
              value={form.desc}
              onChange={handleChange}
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your content here..."
            ></textarea>
          </div>

          <div className="mb-6">
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="icon"
            >
              Upload Image
            </label>
            <input
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              aria-describedby="icon_help"
              id="icon"
              name="icon"
              type="file"
              accept=".svg, .png"
              onChange={handleFileChange}
            />
            <p
              className="mt-1 text-sm text-gray-500 dark:text-gray-300"
              id="icon_help"
            >
              PNG or SVG
            </p>
          </div>

          <button
            type="submit"
            className="text-white  bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {isEdit ? "Edit Expertice" : "Add Expertice"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormExperticeComponent;
