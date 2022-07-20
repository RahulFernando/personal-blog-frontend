import React from "react";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";

// components
import Card from "../components/card/Card";

const Home = () => {
  const posts = useSelector((state) => state.posts.fetchPostData.data);

  return (
    <Grid container spacing={2} mt={2}>
      {posts.map((post) => (
        <Grid key={post._id} item xs={3}>
          <Card
            image={post.image}
            title={post.title}
            content={post.content}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Home;
