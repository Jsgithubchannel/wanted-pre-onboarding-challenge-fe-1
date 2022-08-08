import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const isLoggedIn = window.localStorage.getItem("token");
  if (!isLoggedIn) alert("다시 로그인 해주세요.");
  return isLoggedIn ? <Outlet /> : <Navigate to="/auth" />;
};
export default PrivateRoute;
