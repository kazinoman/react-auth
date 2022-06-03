import React from "react";
import { useForm } from "react-hook-form";
import { Button, InputBase } from "@mui/material";
import { throttle } from "throttle-debounce";
import { useNavigate } from "react-router-dom";

import { Input } from "../component/Input";
import auth from "../service/userService";

const Login = () => {
  let navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const Submit = async (data) => {
    try {
      await auth.login(data);
      //   navigate("home", { replace: true });
      window.location = "home";
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        console.log(ex.response.data);
      }
    }
  };

  const throttleFunc = React.useCallback(
    throttle(2000, Submit, { noLeading: true }),
    []
  );

  return (
    <form
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        rowGap: 10,
        height: "80vh",
        marginTop: "auto",
        marginBottom: "auto",
      }}
      onSubmit={handleSubmit(throttleFunc)}
    >
      <Input
        type="text"
        placeholder="username"
        {...register("username", { required: true })}
      />
      {errors.username && <p>username is require.</p>}
      <Input
        type="password"
        placeholder="password"
        {...register("password", { required: true, minLength: 8 })}
      />
      {errors.password && <p>something is wrong</p>}
      <Button variant="contained" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default Login;
