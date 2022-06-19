import React from "react";
import { Grid } from "@mui/material";

// components
import Card from "../../components/card/Card";

const DUMMY_POST = [
  {
    id: 1,
    title: "What is NodeJS",
    content:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    image:
      "https://railsware.com/blog/wp-content/uploads/2018/09/2400%D1%851260-rw-blog-node-js.png",
  },
];

const Home = () => {
  return (
    <Grid container spacing={2} mt={2}>
      {DUMMY_POST.map((post) => (
        <Grid key={post.id} item xs={3}>
          <Card image={post.image} title={post.title} content={post.content} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Home;
