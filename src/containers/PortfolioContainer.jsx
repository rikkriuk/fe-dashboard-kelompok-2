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
import useForm from "../hooks/useForm";
import LoadingComponent from "../components/LoadingComponent";

const PortfolioContainer = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const isAdd = location.pathname.includes("/add");
  const isEdit = location.pathname.includes("/edit");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [dataPorto, setDataPorto] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [overlayImageUrl, setOverlayImageUrl] = useState(null);

  const {form, setForm, handleChange} = useForm({
    content: "",
    date: "",
    title: "",
    image: "",
  });

  useEffect(() => {
    fetchData();
  }, [refresh]);

  const toggleOverlay = (imageUrl) => {
    if (imageUrl) {
      setOverlayImageUrl(imageUrl);
    }
    setIsOverlayVisible(!isOverlayVisible);
  };

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
        await editPortfolio(id, formData);
        showSuccessAlert("Success", "Data is updated successfully!");
      } else {
        await addPortfolio(formData);
        showSuccessAlert("Success", "Data is added successfully!");
      }
    } catch (error) {
      console.error("Error:", error);
      showErrorAlert("Error", "Something went wrong!");
    } finally {
      setLoading(false);
      handleRefresh();
      navigate("/dashboard/portfolio");
    }
  };

  const handleDelete = async (idpor) => {
    const confirmation = await showConfirmationAlert(
      "Delete confirmation",
      "Are you sure you want to delete this data?"
    );

    if (confirmation.isConfirmed) {
      try {
        setLoading(true);
        await deletePortofolio(idpor);
        showSuccessAlert("Success", "Data is deleted successfully!");
      } catch (error) {
        console.error("Error:", error);
        showErrorAlert("Error", "Something went wrong!");
      } finally {
        setLoading(false);
        handleRefresh();
        navigate("/dashboard/portfolio");
      }
    }
  };

  if (loading) return <LoadingComponent />;

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
          toggleOverlay={toggleOverlay}
          isOverlayVisible={isOverlayVisible}
          overlayImageUrl={overlayImageUrl}
          setIsOverlayVisible={setIsOverlayVisible}
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
