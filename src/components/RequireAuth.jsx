import React from "react";
import { Navigate, useLocation } from "react-router";
import { useAuth } from "utils/hooks";

export default function RequireAuth({ children }) {
  let { isLogin } = useAuth();
  let location = useLocation();

  if (isLogin === false) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
}
