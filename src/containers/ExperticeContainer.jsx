import React from "react";
import ExperticeComponent from "../components/Expertice/ExperticeComponent";
import FormExperticeComponent from "../components/Expertice/FormExperticeComponent";
import { useLocation } from "react-router-dom";

const ExperticeContainer = () => {
  const location = useLocation();
  const isAdd = location.pathname.includes("/add");
  const isEdit = location.pathname.includes("/edit");

  return (
    <>
      {!isAdd && !isEdit && <ExperticeComponent />}

      {(isAdd || isEdit) && <FormExperticeComponent isEdit={isEdit}/>}

      
      
    </>
  );
};

export default ExperticeContainer;
