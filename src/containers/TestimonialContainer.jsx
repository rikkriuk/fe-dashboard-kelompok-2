import React, { useEffect, useState } from "react";
import TableTestimonialComponent from "../components/Testimonial/TableTestimonialComponent";
import FormTestimonialComponent from "../components/Testimonial/FormTestimonialComponent";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import useForm from "../hooks/useForm";
import {
  getTestimonial,
  addTestimonial,
  editTestimonial,
  deleteTestimonial,
} from "../utils/api";
import {
  showConfirmationAlert,
  showErrorAlert,
  showSuccessAlert,
} from "../utils/alert";
import LoadingComponent from "../components/LoadingComponent";

const TestimonialContainer = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [testimonial, setTestimonial] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [refresh, setRefresh] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [overlayImageUrl, setOverlayImageUrl] = useState(null);

  const isAdd = location.pathname.includes("/add");
  const isEdit = location.pathname.includes("/edit");

  const {form, setForm, handleChange} = useForm({
    name: "",
    message: "",
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
      const res = await getTestimonial();
      console.log(res.data.data);
      setTestimonial(res.data.data);
    } catch (err) {
      console.log(err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const navigationForm = (location, data) => {
    if (location == "edit") {
      setForm(data);
      navigate(`edit/${data.id}`);
    } else if (location == "add") {
      setForm({
        name: "",
        message: "",
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
    formData.append("name", form.name);
    formData.append("message", form.message);
    formData.append("date", form.date);
    formData.append("title", form.title);
    formData.append("image", form.image);

    setLoading(true);
    try {
      if (isEdit) {
        await editTestimonial(id, formData);
        showSuccessAlert("Success", "Data is edited successfully!");
      } else {
        await addTestimonial(formData);
        showSuccessAlert("Success", "Data is added successfully!");
      }
    } catch (error) {
      console.error("Error:", error);
      showErrorAlert("Error", "Failed to add data!");
    } finally {
      setLoading(false);
      handleRefresh();
      navigate("/dashboard/testimonial");
    }
  };

  const handleDelete = async (idtestimoni) => {
    const confirmation = await showConfirmationAlert(
      "Delete Confirmation",
      "Are you sure you want to delete this data?"
    );

    if (confirmation.isConfirmed) {
      try {
        setLoading(true);
        await deleteTestimonial(idtestimoni);
        showSuccessAlert("Success", "Successfully deleted data!");
      } catch (error) {
        console.error("Error:", error);
        showErrorAlert("Error", "Failed to delete data!");
      } finally {
        setLoading(false);
        handleRefresh();
        navigate("/dashboard/testimonial");
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
        <TableTestimonialComponent
          testimonial={testimonial}
          navigationForm={navigationForm}
          handleDelete={handleDelete}
          toggleOverlay={toggleOverlay}
          isOverlayVisible={isOverlayVisible}
          overlayImageUrl={overlayImageUrl}
          setIsOverlayVisible={setIsOverlayVisible}
        />
      )}

      {(isAdd || isEdit) && (
        <FormTestimonialComponent
          isEdit={isEdit}
          form={form}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      )}
    </>
  );
};

export default TestimonialContainer;
