import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const isLoggedIn = window.localStorage.getItem("token");
  return isLoggedIn ? <Outlet /> : <Navigate to="/auth" />;
};
export default PrivateRoute;
