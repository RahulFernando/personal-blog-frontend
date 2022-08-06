import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Paper, Typography } from "@mui/material";

// redcuer functions
import { fetchCategories } from "../../reducers/categorySlice";
import { fetchPosts } from "../../reducers/postSlice";

// helpers
import { urlParams } from "../../helpers/utilHelper";

const Category = () => {
  const dispatch = useDispatch();

  const categories = useSelector(
    (state) => state.category.fetchCategoryData.data
  );

  const clickCategoryHandler = (id) => {
    dispatch(fetchPosts(urlParams({ category: id })));
  };

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    if (categories && categories.length > 0) {
      dispatch(fetchPosts());
    }
  }, [dispatch, categories]);

  return (
    <Paper>
      <Grid container p={2}>
        <Grid item container spacing={2}>
          {categories.map((category) => (
            <Grid key={category._id} item md={3} xs={4}>
              <span onClick={clickCategoryHandler.bind(null, category._id)}>
                <Typography
                  variant="subtitle1"
                  fontWeight={600}
                  sx={{ color: "#4d2e80", cursor: "pointer" }}
                >
                  {category.name}
                </Typography>
              </span>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Category;
