import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Grid, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

// actions
import { fetchCategories } from "../../reducers/categorySlice";

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

  const categories = useSelector((state) => state.category.fetchCategoryData.data);
  const loading = useSelector((state) => state.category.fetchCategoryData.loading);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Button variant="contained" sx={{ textTransform: "none" }}>
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
          sx={{ minHeight: "160px" }}
          hideFooter
        />
      </Grid>
    </Grid>
  );
};

export default Categories;
