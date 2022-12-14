import { Button, Grid, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { LoginUse } from "../services/users";
import { CustomeTextField, Toastify } from "../shared";

export const Login = () => {
  const submitHandler = async (user) => {
    try {
      const status = await LoginUse(user);
      if (status === 200) {
        Toastify("login Successfully 😉", "success");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const validationSchema = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string("Enter your password")
      .min(6, "Password should be of minimum 6 characters length")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      submitHandler(values);
    },
  });

  return (
    <Grid container>
      <Grid item xs={4} sm={6} md={4} m={10}>
        <Typography variant="h2" color='primary'>LOGIN</Typography>
        <form onSubmit={formik.handleSubmit}>
          <CustomeTextField
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <CustomeTextField
            name="password"
            label="Password"
            type={"password"}
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Button
            color="success"
            variant="contained"
            fullWidth
            sx={{ mt: "20px", height: "50px" }}
            type="submit">
            Submit
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};
