import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <h1>Contact page.</h1>
      <Button component={Link} to="/">
        Home
      </Button>
      <Button component={Link} to="/profile">
        Profile
      </Button>
    </div>
  );
};

export default Contact;
