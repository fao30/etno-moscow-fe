import React from "react";
import { Helmet } from "react-helmet-async";
import Login from "../../auth/Login";

const Home = ({ title }) => {
  return (
    <section className="flex justify-center items-center min-h-screen themedBg">
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Login />
    </section>
  );
};

export default Home;
