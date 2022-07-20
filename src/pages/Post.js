import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useParams } from "react-router-dom";
import Parser from "html-react-parser";

// components
import Loading from "../components/loading/Loading";

// actions
import { fetchPostById } from "../reducers/postSlice";

const useStyles = makeStyles({
  image: {
    width: 700,
    height: 400,
  },
  center: {
    textAlign: "center",
  },
});

const Post = () => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const { id } = useParams();

  const post = useSelector((state) => state.posts.fetchPostByIdData.data);
  const loading = useSelector((state) => state.posts.fetchPostByIdData.loading);

  useEffect(() => {
    dispatch(fetchPostById(id));
  }, [dispatch, id]);

  return (
    <Box sx={{ marginTop: 8, minHeight: "100vh" }}>
      {!loading && (
        <Grid container spacing={2} mt={2}>
          <Grid item xs={12} className={styles.center}>
            <Typography variant="h3">{post?.title || ""}</Typography>
          </Grid>
          {post?.image && (
            <Grid item xs={12} className={styles.center}>
              <img
                className={styles.image}
                src={`${process.env.REACT_APP_API}/v1/api/images/${post.image}`}
                alt="img"
              />
            </Grid>
          )}
          <Grid
            item
            xs={12}
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            {post && Parser(post?.content)}
          </Grid>
        </Grid>
      )}
      {loading && <Loading />}
    </Box>
  );
};

export default Post;
