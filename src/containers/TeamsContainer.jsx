import React from "react";
import { useLocation } from "react-router-dom";
import TableTeamsComponent from "../components/Teams/TableTeamsComponent";
import FormTeamsComponent from "../components/Teams/FormTeamsComponent";

const TeamsContainer = () => {
  const location = useLocation();
  const isAdd = location.pathname.includes("/add");
  const isEdit = location.pathname.includes("/edit");

  return (
    <>
      {!isAdd && !isEdit && <TableTeamsComponent />}

      {(isAdd || isEdit) && <FormTeamsComponent isEdit={isEdit} />}
    </>
  );
};

export default TeamsContainer;
