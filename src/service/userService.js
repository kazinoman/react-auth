import instance from "./axiosInstance";
import jwt_decode from "jwt-decode";

export const login = async (data) => {
  console.log("callse");
  const jwt = await instance.post("/login", data);
  console.log(jwt);
  localStorage.setItem("token", `Bearer ${jwt.data}`);
};

export const logout = () => {
  localStorage.removeItem("token");
};

export const getCurrentUser = () => {
  try {
    let jwt = localStorage.getItem("token");
    console.log(jwt);
    return jwt_decode(jwt);
  } catch (ex) {
    return null;
  }
};

export default {
  login,
  logout,
  getCurrentUser,
};
