import React from "react";
import { useLocation } from "react-router-dom";
import FormAboutUsComponent from "../components/AboutUs/FormAboutUsComponent";
import TableAboutUsComponent from "../components/AboutUs/TableAboutUsComponent";

const AboutUsContainer = () => {
  const location = useLocation();
  const isAdd = location.pathname.includes("/add");
  const isEdit = location.pathname.includes("/edit");

  return (
    <>
      {!isAdd && !isEdit && <TableAboutUsComponent />}

      {(isAdd || isEdit) && <FormAboutUsComponent isEdit={isEdit} />}
    </>
  );
};

export default AboutUsContainer;
