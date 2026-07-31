import React from "react";
import { Navigate } from "react-router-dom";

import ImageSlider from "../ImageSlider";

function ProtectedRoute({ children, isRegistered }) {
  if (isRegistered) {
    return children;
  } else {
    return <Navigate to={"/"} replace></Navigate>;
  }
}

export default ProtectedRoute;
