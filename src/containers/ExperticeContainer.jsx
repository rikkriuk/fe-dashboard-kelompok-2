import React from "react";
import ExperticeComponent from "../components/Expertice/ExperticeComponent";
import FormExperticeComponent from "../components/Expertice/FormExperticeComponent";
// import { useLocation } from "react-router-dom";

const ExperticeContainer = () => {
  //   const location = useLocation();
  const uniqueId = Date.now();

  const expertice = [
    {
      id: uniqueId,
      title: "Portfolio1",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae debitis officiis eveniet ab quia quos id inventore, laboriosam aliquam molestiae? Veniam odio autem quae! Quis deleniti nam laudantium consequatur repellendus!",
      icon: "https://via.placeholder.com/300",
    },
    {
      id: uniqueId,
      title: "Portfolio1",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae debitis officiis eveniet ab quia quos id inventore, laboriosam aliquam molestiae? Veniam odio autem quae! Quis deleniti nam laudantium consequatur repellendus!",
      icon: "https://via.placeholder.com/300",
    },
  ];

  //   const isAdd = location.pathname.includes("/add");
  //   const isEdit = location.pathname.includes("/edit");

  return (
    <>
      {/* <ExperticeComponent expertice={expertice} /> */}
      <FormExperticeComponent/>
    </>
  );
};

export default ExperticeContainer;
