import React from "react";
import { Login } from "../components/Login";
import { ToastContainer } from "react-toastify";

const Containers = () => {
  return (
    <div>
      <Login />
      <ToastContainer position="top-left" autoClose={3000} theme="dark" />
    </div>
  );
};

export default Containers;
