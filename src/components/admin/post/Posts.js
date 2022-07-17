import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Grid, Typography, Avatar } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

// actions
import { fetchPosts } from "../../../reducers/postSlice";

const columns = [
  {
    field: "image",
    headerName: "Image",
    flex: 1,
    renderCell: (params) => (
      <Avatar src={params.row.image} alt={params.row.title} variant="square" />
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
  const dispatch = useDispatch();

  const fetchedPosts = useSelector((state) => state.posts.fetchPostData.data);

  const openModalHandler = () => navigate("/admin/new-post");

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const posts =
    fetchedPosts.length > 0 &&
    fetchedPosts.map((post) => {
      return {
        ...post,
        image: `${process.env.REACT_APP_API}/v1/api/images/${post.image}`,
      };
    });

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
          rows={posts}
          sx={{ minHeight: 200 }}
          getRowId={(row) => row._id}
          hideFooter
        />
      </Grid>
    </Grid>
  );
};

export default Posts;
