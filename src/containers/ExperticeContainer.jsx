import React from "react";
import ExperticeComponent from "../components/Expertice/ExperticeComponent";
import FormExperticeComponent from "../components/Expertice/FormExperticeComponent";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import useForm from "../hooks/useForm";
import {
  postExperticeData,
  putExperticeData,
  getExperticeData,
  deleteExperticeData,
} from "../utils/api";
import { showConfirmationAlert, showErrorAlert, showSuccessAlert } from "../utils/alert";

const ExperticeContainer = () => {
  const location = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [expertice, setExpertice] = useState([
    {
      id: 1,
      title: "Portfolio1",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae debitis officiis eveniet ab quia quos id inventore, laboriosam aliquam molestiae? Veniam odio autem quae! Quis deleniti nam laudantium consequatur repellendus!",
      icon: "https://via.placeholder.com/300",
    },
  ]);
  const [error, setError] = useState(null);
  const [form, handleChange, handlefile, setForm] = useForm({
    title: "",
    desc: "",
    icon: null,
  });

  const fetchData = async () => {
    try {
      const res = await getExperticeData();
      console.log(res.data.data);
      setExpertice(res.data.data);
    } catch (err) {
      console.log(err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const navigationForm = (location, data) => {
    if (location == "edit") {
      setForm(data);
    } else if (location == "add") {
      setForm({
        title: "",
        desc: "",
        icon: "",
      });
    }
  };

  const handleFileChange = (e) => {
    setForm({
      ...form,
      icon: e.target.files[0],
    });
  };

  const handleDelete = async (id) => {
    const confirmation = await showConfirmationAlert(
      "Konfirmasi Hapus",
      "Apakah Anda yakin ingin menghapus data ini?"
    )

    if (confirmation.isConfirmed) {
      try{
        setLoading(true);
        const response = await deleteExperticeData(id);
        console.log("Success:", response.data);
        showSuccessAlert("Data berhasil dihapus!");
        fetchData();
      }catch (error) {
        console.error("Error:", error);
        showErrorAlert("Terjadi kesalahan saat menghapus data!");
      } finally {
        setLoading(false);
        fetchData();
        navigate("/dashboard/expertise");
      }
    }
  }
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
        fetchData();
        navigate("/dashboard/expertise");
      } else {
        await postExperticeData(formData);
        showSuccessAlert("Success", "Expertice created successfully");
        fetchData();
        navigate("/dashboard/expertise");
      }
    } catch (error) {
      console.error(error);
      showErrorAlert("Error", "Failed to submit the expertice!");
    }
  };

  const isAdd = location.pathname.includes("/add");
  const isEdit = location.pathname.includes("/edit");

  return (
    <>
      {!isAdd && !isEdit && (
        <ExperticeComponent
          expertice={expertice}
          loading={loading}
          navigationForm={navigationForm}
          handleDelete={handleDelete}
          error={error}
        />
      )}
      {(isAdd || isEdit) && (
        <FormExperticeComponent
          isEdit={isEdit}
          isAdd={isAdd}
          handleChange={handleChange}
          handleFileChange={handleFileChange}
          handleSubmit={handleSubmit}
          loading={loading}
          error={error}
          form={form}
        />
      )}
    </>
  );
};

export default ExperticeContainer;
