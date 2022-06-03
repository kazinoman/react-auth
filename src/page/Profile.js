import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <h1>Profile component</h1>
      <Button component={Link} to="/">
        Home
      </Button>
      <Button component={Link} to="/contact">
        Contact
      </Button>
    </div>
  );
};

export default Profile;
