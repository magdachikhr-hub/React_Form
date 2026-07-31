import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  return <Navigate to={"/"} replace></Navigate>;
}

export default ProtectedRoute;
