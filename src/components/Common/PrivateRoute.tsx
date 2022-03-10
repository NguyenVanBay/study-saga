import * as React from "react";
import { Navigate } from "react-router-dom";

export interface RequireAuthProps {
  children: any;
  redirectTo: string;
}

export function RequireAuth(props: RequireAuthProps) {
  const isAuthenticated = Boolean(localStorage.getItem("access_token"));

  console.log(isAuthenticated);

  return isAuthenticated ? props.children : <Navigate to={props.redirectTo} />;
}
