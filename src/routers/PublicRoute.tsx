import { Outlet, Navigate } from "react-router-dom";

const PublicRoute = ({ restricted }: any) => {
  const isLoggedIn = window.localStorage.getItem("token");
  return isLoggedIn && restricted ? <Navigate to="/" /> : <Outlet />;
};
export default PublicRoute;
