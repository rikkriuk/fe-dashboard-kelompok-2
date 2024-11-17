import React, { useState } from "react";

const useFormCon = (input) => {
  const [form, setForm] = useState(input);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "image") {
      setForm({
        ...form,
        image: event.target.files[0],
      });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  };

  return [form, setForm, handleChange];
};
export default useFormCon;
