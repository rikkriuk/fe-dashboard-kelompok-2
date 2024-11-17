import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import TablePortfolioComponent from "../components/Portofolio/TablePortfolioComponent";
import FormPortfolioComponent from "../components/Portofolio/FormPortfolioComponent";
import {
  showSuccessAlert,
  showErrorAlert,
  showConfirmationAlert,
} from "../utils/alert";
import {
  getPortfolio,
  addPortfolio,
  editPortfolio,
  deletePortofolio,
} from "../utils/api";
import useForm2 from "../hooks/useForm2";

const PortfolioContainer = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const isAdd = location.pathname.includes("/add");
  const isEdit = location.pathname.includes("/edit");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dataPorto, setDataPorto] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const [form, setForm, handleChange] = useForm2({
    content: "",
    date: "",
    title: "",
    image: "",
  });

  useEffect(() => {
    fetchData();
  }, [refresh]);

  const handleRefresh = () => {
    setRefresh((prev) => !prev);
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await getPortfolio();
      console.log(res.data.data);
      setDataPorto(res.data.data);
    } catch (err) {
      console.log(err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const navigationForm = (location, data) => {
    if (location == "edit") {
      console.log(data);
      setForm(data);
      navigate(`edit/${data.id}`);
    } else if (location == "add") {
      setForm({
        content: "",
        date: "",
        title: "",
        image: "",
      });
      navigate("add");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("content", form.content);
    formData.append("date", form.date);
    formData.append("title", form.title);
    formData.append("image", form.image);

    setLoading(true);
    try {
      if (isEdit) {
        const response = await editPortfolio(id, formData);
        console.log("Success:", response.data);
        showSuccessAlert("Data berhasil diedit !");
      } else {
        const response = await addPortfolio(formData);
        console.log("Success:", response.data);
        showSuccessAlert("Data berhasil ditambahkan !");
      }
    } catch (error) {
      console.error("Error:", error);
      showErrorAlert("Terjadi kesalahan data!");
    } finally {
      setLoading(false);
      handleRefresh();
      navigate("/dashboard/portfolio");
    }
  };

  const handleDelete = async (idpor) => {
    const confirmation = await showConfirmationAlert(
      "Konfirmasi Hapus",
      "Apakah Anda yakin ingin menghapus data ini?"
    );

    if (confirmation.isConfirmed) {
      try {
        setLoading(true);
        const response = await deletePortofolio(idpor);
        console.log("Success:", response.data);
        showSuccessAlert("Data berhasil dihapus!");
      } catch (error) {
        console.error("Error:", error);
        showErrorAlert("Terjadi kesalahan saat menghapus data!");
      } finally {
        setLoading(false);
        handleRefresh();
        navigate("/dashboard/portfolio");
      }
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      {!isAdd && !isEdit && (
        <TablePortfolioComponent
          portfolio={dataPorto}
          navigationForm={navigationForm}
          handleDelete={handleDelete}
        />
      )}

      {(isAdd || isEdit) && (
        <FormPortfolioComponent
          isEdit={isEdit}
          form={form}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      )}
    </>
  );
};

export default PortfolioContainer;
