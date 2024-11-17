import React from "react";
import { useLocation } from "react-router-dom";
import TablePortfolioComponent from "../components/Portofolio/TablePortfolioComponent";
import FormPortfolioComponent from "../components/Portofolio/FormPortfolioComponent";

const PortfolioContainer = () => {
  const location = useLocation();
  const portfolio = {
    title: "Portfolio1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae debitis officiis eveniet ab quia quos id inventore, laboriosam aliquam molestiae? Veniam odio autem quae! Quis deleniti nam laudantium consequatur repellendus!",
    date: "12/12/2025",
    image: "https://via.placeholder.com/300",
  };

  const isAdd = location.pathname.includes("/add");
  const isEdit = location.pathname.includes("/edit");

  return (
    <>
      {!isAdd && !isEdit && <TablePortfolioComponent portfolio={portfolio} />}

      {(isAdd || isEdit) && <FormPortfolioComponent isEdit={isEdit} />}
    </>
  );
};

export default PortfolioContainer;
