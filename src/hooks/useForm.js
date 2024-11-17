<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 92d722c (fixed conflict)
import React, { useState } from "react";

const useForm = (initialValue) => {
  const [form, setForm] = useState(initialValue);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return [form, handleChange];
};

export default useForm;
<<<<<<< HEAD
=======
import React, { useState } from "react";

const useForm = (initialValue) => {
  const [form, setForm] = useState(initialValue);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return [form, handleChange];
};

export default useForm;
>>>>>>> 1b1f233 (feat: add authentication, validation, input custom hook, custom api and protected routes)
=======
>>>>>>> 92d722c (fixed conflict)
