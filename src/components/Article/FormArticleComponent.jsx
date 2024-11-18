import React, { useEffect, useState } from "react";
import { FaHome, FaAngleRight } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import useForm from "../../hooks/useForm";
import { postArticleData, getArticleDataById, putArticleData } from "../../utils/api";
import { showErrorAlert, showSuccessAlert } from "../../utils/alert";
import LoadingComponent from "../LoadingComponent";

const FormArticleComponent = ({ isEdit }) => {
  const { id, slug } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const {form, handleChange, handleFileChange, setForm} = useForm({
    title: "",
    content: "",
    meta_title: "",
    meta_desc: "",
    meta_tag: "",
    date: "",
    writer: "",
    image: null,
  });

  useEffect(() => {
      if (isEdit) {
        setLoading(true);
        getArticleDataById(slug)
        .then((response) => {
            const data = response.data.data;
            const metaTagString = data.meta_tag.join(", ");

            setForm({
              title: data.title,
              content: data.content,
              meta_title: data.meta_title,
              meta_desc: data.meta_desc,
              meta_tag: metaTagString,
              date: data.date,
              writer: data.writer,
              image: data.imageUrl, 
            });
         }).catch((error) => {
            console.err("error", error);
         }).finally(() => {
            setLoading(false);
         });
      }
   }, [isEdit, slug])

  const handleSubmit = async (e) => {
    e.preventDefault();

    const metaTagArray = form.meta_tag.split(",").map((tag) => tag.trim());

    if (!form.image) {
      showErrorAlert("Error", "Please upload an image");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    metaTagArray.forEach((tag) => formData.append("meta_tag[]", tag));;
    formData.append("date", new Date().toISOString());

    Object.entries(form).forEach(([key, value]) => {
      if (!["meta_tag", "date"].includes(key)) {
         formData.append(key, value);
      }
    });

    try {
      if (isEdit) {
         putArticleData(formData, id).then(() => {
            showSuccessAlert("Success", "Article updated successfully");
            navigate("/dashboard/article");
         });
      } else {
         postArticleData(formData).then(() => {
            showSuccessAlert("Success", "Article created successfully");
            navigate("/dashboard/article");
         });
      }
    } catch (error) {
      console.error(error);
      showErrorAlert("Error", "Failed to submit the article!");
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
              to={"/dashboard/article"}
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              <FaAngleRight />
              Article
            </Link>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <FaAngleRight />
              <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                {isEdit ? "Edit article" : "Add article"}
              </span>
            </div>
          </li>
        </ol>
      </nav>

      <div className="relative overflow-x-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center flex-column flex-wrap md:flex-row mb-4">
          <h5 className="text-xl font-bold text-gray-600 dark:text-white">
            {isEdit ? "Edit article" : "Add article"}
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
              placeholder="Enter article title"
              required
            />
          </div>

          {/* Content */}
          <div className="mb-6">
            <label
              htmlFor="content"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Content
            </label>
            <CKEditor
              editor={ClassicEditor}
              data={form.content || "<p>Enter content article</p>"}
              onChange={(event, editor) => {
                const data = editor.getData();
                handleChange({ target: { name: "content", value: data } });
              }}
              required
            />
          </div>

          {/* Meta Title */}
          <div className="mb-6">
            <label
              htmlFor="meta_title"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Meta Title
            </label>
            <input
              type="text"
              id="meta_title"
              name="meta_title"
              value={form.meta_title}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter meta title"
              required
            />
          </div>

          {/* Meta Description */}
          <div className="mb-6">
            <label
              htmlFor="meta_desc"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Meta Description
            </label>
            <textarea
              id="meta_desc"
              name="meta_desc"
              value={form.meta_desc}
              onChange={handleChange}
              rows="2"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter meta description"
              required
            ></textarea>
          </div>

          {/* Meta Tag */}
          <div className="mb-6">
            <label
              htmlFor="meta_tag"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Meta Tag
            </label>
            <input
              type="text"
              id="meta_tag"
              name="meta_tag"
              value={form.meta_tag}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter meta tag (comma-separated)"
              required
            />
          </div>

          {/* Writer */}
          <div className="mb-6">
            <label
              htmlFor="writer"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Writer
            </label>
            <input
              type="text"
              id="writer"
              name="writer"
              value={form.writer}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter writer's name"
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
                  alt="Article Preview"
                  className="max-w-full h-auto rounded"
                />
              </div>
            )}
          </div>

          <button
            type="submit"
            className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {isEdit ? "Edit article" : "Add article"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormArticleComponent;
