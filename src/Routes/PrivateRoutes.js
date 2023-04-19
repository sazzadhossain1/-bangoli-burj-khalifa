import React, { useContext } from "react";
import { AuthContext } from "../Context/UserContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoutes;
