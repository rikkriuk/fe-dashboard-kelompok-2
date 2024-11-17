import React from "react";
import { useLocation } from "react-router-dom";
import TableArticleComponent from "../components/Article/TableArticleComponent";
import FormArticleComponent from "../components/Article/FormArticleComponent";

const ArticleContainer = () => {
  const location = useLocation();
  const isAdd = location.pathname.includes("/add");
  const isEdit = location.pathname.includes("/edit");

  return (
    <>
      {!isAdd && !isEdit && <TableArticleComponent />}

      {(isAdd || isEdit) && <FormArticleComponent isEdit={isEdit} />}
    </>
  );
};

export default ArticleContainer;
