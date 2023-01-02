import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = (props) => {
  const auth = localStorage.getItem("@user");
  if (auth) {
    return <Outlet />;
  } else {
    return <Navigate to={"login"} />;
  }
};

export default PrivateRoute;
