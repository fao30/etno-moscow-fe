import React from "react";
import { Helmet } from "react-helmet-async";

const Main = ({ title }) => {
  return (
    <section className="themedBg pl-longer6 pr-normal">
      <Helmet>
        <title>{title}</title>
      </Helmet>
      Main
    </section>
  );
};

export default Main;
