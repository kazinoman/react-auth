import React, { useContext, useEffect } from "react";
import { AppBar, Stack, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import userContext from "../context/userInfo";
import { logout } from "../service/userService";

const Navigation = () => {
  const { userInfo } = useContext(userContext);
  // console.log(userInfo.length);

  // if (!userInfo) window.location = "/";

  // useEffect(() => {
  //   // window.location = "/";
  // }, [userInfo]);

  return (
    <>
      <AppBar sx={{ minHeight: "1rem" }}>
        <Toolbar>
          <Stack direction="row" spacing={2}>
            <Typography component={Link} to="home">
              Home
            </Typography>
            <Typography component={Link} to="contact">
              Contact
            </Typography>
            <Typography component={Link} to="profile">
              Profile
            </Typography>
            {/* {!(userInfo.length === 0) ? (
              <p>{userInfo.UserName}</p>
            ) : (
              <Typography>asdf</Typography>
            )} */}
            {userInfo && (
              <>
                <p>{userInfo.UserName}</p>
                <Typography component={Link} to="logout">
                  Logout
                </Typography>
              </>
            )}
            {!userInfo && (
              <>
                <Typography component={Link} to="/">
                  Login
                </Typography>
              </>
            )}
            {/* {userInfo || (
              <Typography component={Link} to="/">
                Login
              </Typography>
            )} */}
          </Stack>
        </Toolbar>
      </AppBar>
      <div style={{ marginBottom: "4rem" }}></div>
    </>
  );
};

export default Navigation;
