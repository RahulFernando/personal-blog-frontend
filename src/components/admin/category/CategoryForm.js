import React from "react";
import PropTypes from "prop-types";
import { Grid, TextField } from "@mui/material";

const CategoryForm = ({ formik }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          name="name"
          label="Category"
          required
          value={formik.values.name}
          error={formik.errors.name && formik.touched.name}
          helperText={
            formik.errors.name && formik.touched.name && formik.errors.name
          }
          onChange={formik.handleChange}
        />
      </Grid>
    </Grid>
  );
};

CategoryForm.propTypes = {
  formik: PropTypes.object.isRequired,
};

export default CategoryForm;
