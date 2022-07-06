import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Grid, TextField, Typography, Alert } from "@mui/material";

const Register = ({ formik, onLinkClick }) => {
  const { success, message } = useSelector((state) => state.ui.alertData);

  return (
    <Grid container spacing={2}>
      {message && (
        <Grid item xs={12}>
          <Alert severity={success ? "success" : "error"}>{message}</Alert>
        </Grid>
      )}
      <Grid item xs={12}>
        <TextField
          required
          label="User Name"
          name="user_name"
          value={formik.values.user_name}
          onChange={formik.handleChange}
          error={formik.errors.user_name && formik.touched.user_name}
          helperText={
            formik.errors.user_name &&
            formik.touched.user_name &&
            formik.errors.user_name
          }
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          label="Email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.errors.email && formik.touched.email}
          helperText={
            formik.errors.email && formik.touched.email && formik.errors.email
          }
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          type="password"
          required
          label="Password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.errors.password && formik.touched.password}
          helperText={
            formik.errors.password &&
            formik.touched.password &&
            formik.errors.password
          }
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <span
          style={{ float: "right", cursor: "pointer" }}
          onClick={onLinkClick.bind(null, "LOGIN")}
        >
          <Typography variant="body1">Alredy have an account?</Typography>
        </span>
      </Grid>
    </Grid>
  );
};

Register.propTypes = {
  formik: PropTypes.object.isRequired,
  onLinkClick: PropTypes.func.isRequired,
};

export default Register;
