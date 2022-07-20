import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Grid, Typography, Avatar, IconButton } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

// actions
import { fetchPosts, deletePost, deletePostReset } from "../../../reducers/postSlice";

const COLUMNS = [
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

  const loading = useSelector((state) => state.posts.fetchPostData.loading);
  const fetchedPosts = useSelector((state) => state.posts.fetchPostData.data);
  const deleteSuccess = useSelector((state) => state.posts.deletePostData.data);

  const openModalHandler = () => navigate("/admin/new-post");

  const editClickHandler = (id) => navigate(`/admin/update-post/${id}`);

  const deleteClickHandler = (id) => dispatch(deletePost(id));

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  useEffect(() => {
    if (deleteSuccess) {
      dispatch(fetchPosts());
      dispatch(deletePostReset());
    }
  }, [dispatch, deleteSuccess]);

  const columns = [
    ...COLUMNS,
    {
      field: "action",
      headerName: "",
      flex: 1,
      renderCell: (params) => (
        <div style={{ display: "flex" }}>
          <IconButton onClick={editClickHandler.bind(null, params.row._id)}>
            <span class="iconify" data-icon="carbon:edit" />
          </IconButton>
          <IconButton onClick={deleteClickHandler.bind(null, params.row._id)}>
            <span
              class="iconify"
              data-icon="fluent:delete-16-regular"
              style={{ color: "#ed2f2f" }}
            />
          </IconButton>
        </div>
      ),
    },
  ];

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
          loading={loading}
          hideFooter
        />
      </Grid>
    </Grid>
  );
};

export default Posts;
