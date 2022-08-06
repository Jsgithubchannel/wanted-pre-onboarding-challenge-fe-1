import { Outlet, Navigate } from "react-router-dom";

const PublicRoute = ({ restricted }) => {
  const isLoggedIn = window.localStorage.getItem("token");
  return isLoggedIn && restricted ? <Navigate to="/" /> : <Outlet />;
};
export default PublicRoute;
