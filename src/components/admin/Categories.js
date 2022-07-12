import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  {
    field: "category",
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
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Button variant="contained" sx={{ textTransform: "none" }}>
          New Category
        </Button>
      </Grid>
      <Grid item xs={6} />
      <Grid item xs={12}>
        <DataGrid columns={columns} rows={[]} sx={{ minHeight: '160px' }} hideFooter />
      </Grid>
    </Grid>
  );
};

export default Categories;
