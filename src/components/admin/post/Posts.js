import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Grid, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  {
    field: "image",
    headerName: "Image",
    flex: 1,
    renderCell: (params) => (
      <img
        sx={{ width: 40, height: 40 }}
        src={params.row.image}
        alt={params.row.title}
      />
    ),
  },
  {
    field: "title",
    headerName: "Title",
    flex: 1,
  },
  {
    field: "createdAt",
    headerName: "Created at",
    flex: 1,
    renderCell: (params) => (
      <Typography>
        {new Date(params.row.createdAt).toLocaleDateString("en-US")}
      </Typography>
    ),
  },
  {
    field: "updatedAt",
    headerName: "Updated at",
    flex: 1,
    renderCell: (params) => (
      <Typography>
        {new Date(params.row.updatedAt).toLocaleDateString("en-US")}
      </Typography>
    ),
  },
];

const Posts = () => {
  const navigate = useNavigate();

  const openModalHandler = () => navigate("/admin/new-post");

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Button
          variant="contained"
          sx={{ textTransform: "none" }}
          onClick={openModalHandler}
        >
          New Post
        </Button>
      </Grid>
      <Grid item xs={6} />
      <Grid item xs={12}>
        <DataGrid
          columns={columns}
          rows={[]}
          sx={{ minHeight: 200 }}
          getRowId={(row) => row._id}
          hideFooter
        />
      </Grid>
    </Grid>
  );
};

export default Posts;
