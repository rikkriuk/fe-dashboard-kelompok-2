import React, { useState } from "react";

const useForm = (initialValue) => {
  const [form, setForm] = useState(initialValue);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setForm({
      ...form,
      image: e.target.files[0],
    });
  };

  return { form, handleChange, handleFileChange, setForm };
};

export default useForm;
