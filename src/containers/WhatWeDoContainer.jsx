import React from "react";
import { useLocation } from "react-router-dom";
import TableWhatWeDoComponent from "../components/WhatWeDo/TableWhatWeDoComponent";
import FormWhatWeDoComponent from "../components/WhatWeDo/FormWhatWeDoComponent";

const WhatWeDoContainer = () => {
  const location = useLocation();
  const isAdd = location.pathname.includes("/add");
  const isEdit = location.pathname.includes("/edit");

  return (
    <>
      {!isAdd && !isEdit && <TableWhatWeDoComponent />}

      {(isAdd || isEdit) && <FormWhatWeDoComponent isEdit={isEdit} />}
    </>
  );
};

export default WhatWeDoContainer;
