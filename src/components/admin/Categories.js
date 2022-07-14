import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Grid, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useFormik } from "formik";
import * as Yup from "yup";

// components
import Modal from "../modal/Modal";
import CategoryForm from "./CategoryForm";

// actions
import { fetchCategories, addCategory, addCategoryReset } from "../../reducers/categorySlice";

const columns = [
  {
    field: "name",
    headerName: "Category",
    flex: 1,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    flex: 1,
    renderCell: (params) => (
      <Typography>
        {new Date(params.row.createdAt).toLocaleDateString("en-US")}
      </Typography>
    ),
  },
  {
    field: "updatedAt",
    headerName: "Updated At",
    flex: 1,
    renderCell: (params) => (
      <Typography>
        {new Date(params.row.updatedAt).toLocaleDateString("en-US")}
      </Typography>
    ),
  },
];

const Categories = () => {
  const dispatch = useDispatch();

  const categories = useSelector(
    (state) => state.category.fetchCategoryData.data
  );
  const loading = useSelector(
    (state) => state.category.fetchCategoryData.loading
  );
  const success = useSelector(
    (state) => state.category.addCategoryData.data
  );

  const [isOpen, setIsOpen] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Category cannot be empty"),
    }),
    onSubmit: (values) => dispatch(addCategory(values)),
  });

  const openModalHandler = () => {
    setIsOpen(true);
  };

  const closeModalHandler = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    if (success) {
      dispatch(addCategoryReset());
      setIsOpen(false);
      formik.resetForm();
      dispatch(fetchCategories());
    }
  }, [dispatch, formik, success]);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Button
            variant="contained"
            sx={{ textTransform: "none" }}
            onClick={openModalHandler}
          >
            New Category
          </Button>
        </Grid>
        <Grid item xs={6} />
        <Grid item xs={12}>
          <DataGrid
            columns={columns}
            rows={categories}
            getRowId={(row) => row._id}
            loading={loading}
            sx={{ minHeight: "200px" }}
            hideFooter
          />
        </Grid>
      </Grid>
      <Modal
        open={isOpen}
        title="New Category"
        onSubmit={formik.handleSubmit}
        onClose={closeModalHandler}
      >
        <CategoryForm formik={formik} />
      </Modal>
    </>
  );
};

export default Categories;
