import React from "react";
import { logout } from "../service/userService";

const Logout = () => {
  React.useEffect(() => {
    console.log("logout call");
    logout();
    window.location = "/";
  });

  return null;
};

export default Logout;
