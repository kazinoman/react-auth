import React, { useContext } from "react";
import { Outlet, Navigate, useNavigate, useLocation } from "react-router-dom";
import userContext from "../context/userInfo";

const useAuth = () => {
  const { userInfo } = useContext(userContext);
  //   console.log(userInfo);
  const authUser = { isLoggedIN: false };
  if (userInfo) {
    authUser.isLoggedIN = true;
  } else return (authUser.isLoggedIN = false);
  console.log(authUser);

  return authUser.isLoggedIN;
  //   if (user) {
  //     return { isLogged: false };
  //   }
};

const ProtectedRoute = () => {
  const isAuth = useAuth();
  let location = useLocation();
  console.log(location);
  console.log(isAuth);

  return isAuth ? <Outlet /> : <Navigate to={-1} />;
};

export default ProtectedRoute;
