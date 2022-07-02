import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";

// redcuer functions
import { fetchCategories } from '../../reducers/categorySlice';

const useStyles = makeStyles({
  link: {
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: 600,
  },
});

const Category = () => {
  const styles = useStyles();
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.category.fetchCategoryData.data);

  useEffect(() => {
    dispatch(fetchCategories())
  }, [dispatch]);

  return (
    <Paper>
      <Grid container p={2}>
        {categories.map((category) => (
          <Grid key={category._id} item xs={3}>
            <Link to="/about" className={styles.link}>
              {category.name}
            </Link>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default Category;
