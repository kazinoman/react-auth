import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import { useForm, Controller } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();
  const [match, setMatch] = React.useState(false);
  const [d, setD] = React.useState({});
  const onSubmit = (data) => {
    console.log(data);
    setD(data);
    console.log(d);
    if (data.password === data.confirmPassword) {
      setMatch(true);
    }
  };
  // console.log(d);

  return (
    <Box width={"50vw"} mx="auto">
      <h1>Form Practice with react-hook-form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={4}>
          <TextField
            placeholder="Full name"
            // defaultValue="Username"
            type="text"
            {...register("fullname")}
          />
          <TextField placeholder="E-mail" type="email" {...register("email")} />
          <TextField
            placeholder="Paaword"
            type="password"
            {...register("password", { required: true })}
          />
          {errors.password?.type === "required" && "First name is required"}

          <TextField
            placeholder="confirm password"
            type="password"
            {...register("confirmPassword", { required: true })}
          />

          {errors.confirmPassword && <span>This field is required</span>}
          {match && <h5>Password is not match</h5>}
          <Controller
            name="checkbox"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <Input {...field} />}
          />
          <Button
            fullWidth
            variant="contained"
            type="submit"
            // disabled={match ? false : true}
          >
            Submit
          </Button>
        </Stack>
      </form>
      {/* <div>{d}</div> */}
    </Box>
  );
};

export default Form;
