import React from "react";
import { useParams } from "react-router-dom";

const Survey = () => {
  const params = useParams();
  return <div>Survey: {params.id}</div>;
};

export default Survey;
