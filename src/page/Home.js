import React, { useContext } from "react";
import { Button, InputBase } from "@mui/material";
import { Link } from "react-router-dom";

import userContext from "../context/userInfo";
// import instance as request from "../service/axiosInstance";
// import instance from './../service/axiosInstance';

const Home = () => {
  const { userInfo } = useContext(userContext);
  return (
    <div>
      {/* {userInfo.UserId} */}
      <h1>Home component</h1>
      {userInfo && (
        <Button component={Link} to="profile">
          Profile
        </Button>
      )}
      <Button component={Link} to="contact">
        Contact
      </Button>
    </div>
  );
};

export default Home;
