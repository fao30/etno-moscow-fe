import React from "react";
import { useParams } from "react-router-dom";

const Survey = () => {
  const params = useParams();
  return (
    <section className="pl-longer6 pr-normal themedBg">
      Survey: {params.id}
    </section>
  );
};

export default Survey;
