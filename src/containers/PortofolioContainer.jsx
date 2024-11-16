import React from "react";
import TablePortofolioComponent from "../components/Portofolio/TablePortofolioComponent";
import FormPortofolioComponent from "../components/Portofolio/FormPortofolioComponent";
import DetailPortofolioComponent from "../components/Portofolio/DetailPortofolioComponent";

const PortofolioContainer = () => {
  const portofolio = {
    title: "Portofolio1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae debitis officiis eveniet ab quia quos id inventore, laboriosam aliquam molestiae? Veniam odio autem quae! Quis deleniti nam laudantium consequatur repellendus!",
    date: "12/12/2025",
    image: "https://via.placeholder.com/300",
  };

  return (
    <>
      <TablePortofolioComponent portofolio={portofolio} />
      <FormPortofolioComponent isEdit={false} />
      <FormPortofolioComponent isEdit={true} />
      <DetailPortofolioComponent portofolio={portofolio} />
    </>
  );
};

export default PortofolioContainer;
