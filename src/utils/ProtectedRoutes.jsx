import { Outlet, Navigate } from "react-router-dom";

export const ProtectedRoutes = () => {
  const token = localStorage.getItem("token");
  const condition = typeof token === "string" ? true : false;
  if (!condition) {
    return <Navigate to={"/dashboard"} />;
  }

  return <Outlet />;
};
export const ProtectedLoginRoute = () => {
  const token = localStorage.getItem("token");
  const condition = typeof token === "string" ? true : false;
  if (condition) {
    return <Navigate to={"/dashboard/home"} />;
  }

  return <Outlet />;
};
