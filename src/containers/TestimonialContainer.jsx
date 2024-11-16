import React from "react";

import TableTestimonialComponent from "../components/Testimonial/TableTestimonialComponent";
import FormTestimonialComponent from "../components/Testimonial/FormTestimonialComponent";
import DetailtestimonialComponent from "../components/Testimonial/DetailTestimonialComponent";

const TestimonialContainer = () => {
  const testimonial = {
    name: "Deni Irawan",
    title: "PCEO Academy",
    message: "pelayanan yang sangat mantap",
    date: "12/12/2025",
    image: "https://via.placeholder.com/300",
  };
  return (
    <>
      <TableTestimonialComponent testimonial={testimonial} />
      <FormTestimonialComponent isEdit={false} />
      <FormTestimonialComponent isEdit={true} />
      <DetailtestimonialComponent testimonial={testimonial} />
    </>
  );
};

export default TestimonialContainer;
