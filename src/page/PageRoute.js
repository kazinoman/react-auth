import React from "react";
import { Routes, Route } from "react-router-dom";
// import Contact from "./Contact";
// import Home from "./Home";
// import Profile from "./Profile";
const Home = React.lazy(() => import("./Home"));
const Contact = React.lazy(() => import("./Contact"));
const Profile = React.lazy(() => import("./Profile"));
const Login = React.lazy(() => import("./Login"));
import Logout from "./Logout";
import ProtectedRoute from "./ProtectedRoute";

const PageRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="home" element={<Home />} />
      <Route element={<ProtectedRoute />}>
        <Route path="logout" element={<Logout />} />
        <Route path="profile" element={<Profile />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default PageRoute;
