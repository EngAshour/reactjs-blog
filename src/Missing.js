import React from "react";
import { Link } from "react-router-dom";

const Missing = () => {
  return (
    <main>
      <p>This page does not exists</p>
      <Link to={"/"}>Back to Home Page</Link>
    </main>
  );
};

export default Missing;
