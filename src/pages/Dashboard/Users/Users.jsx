import React from "react";
import { Helmet } from "react-helmet-async";

const Users = ({ title }) => {
  return (
    <section>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      Users
    </section>
  );
};

export default Users;
