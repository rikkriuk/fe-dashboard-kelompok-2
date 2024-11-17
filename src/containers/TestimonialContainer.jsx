import React from "react";
import TableTestimonialComponent from "../components/Testimonial/TableTestimonialComponent";
import FormTestimonialComponent from "../components/Testimonial/FormTestimonialComponent";
const TestimonialContainer = () => {
  const testimonial = {
    name: "Deni Irawan",
    title: "CEO Academy",
    message: "pelayanan yang sangat mantap",
    date: "12/12/2025",
    image: "https://via.placeholder.com/300",
  };
  const isAdd = location.pathname.includes("/add");
  const isEdit = location.pathname.includes("/edit");

  return (
    <>
      {!isAdd && !isEdit && (
        <TableTestimonialComponent testimonial={testimonial} />
      )}

      {(isAdd || isEdit) && <FormTestimonialComponent isEdit={isEdit} />}
    </>
  );
};

export default TestimonialContainer;
