import React from "react";
import { Helmet } from "react-helmet-async";

const Users = ({ title }) => {
  return (
    <section className="themedBg pl-longer6 pr-normal">
      <Helmet>
        <title>{title}</title>
      </Helmet>
      Users
    </section>
  );
};

export default Users;
