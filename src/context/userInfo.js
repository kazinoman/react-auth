import React, { createContext, useState } from "react";
import auth from "../service/userService";

const userContext = createContext();

export const UserProvider = ({ children }) => {
  //   const [user, setUser] = useState();

  //   console.log("context is run");
  //   let jwt = "";
  console.log("run context");
  let userInfo = auth.getCurrentUser();
  console.log(userInfo);

  return (
    <userContext.Provider value={{ userInfo }}>{children}</userContext.Provider>
  );
};

export default userContext;
