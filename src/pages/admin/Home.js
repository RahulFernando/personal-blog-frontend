import React from 'react'
import { Grid, Box } from '@mui/material'

// components
import Accordion from '../../components/accordion/Accordion';
import Categories from '../../components/admin/category/Categories';
import Posts from '../../components/admin/post/Posts';

const Home = () => {
  return (
    <Box sx={{ marginTop: 8, height: '100vh' }}>
      <Grid container spacing={2} mt={2}>
        <Grid item xs={6}>
          <Accordion title='Categories'>
            <Categories />
          </Accordion>
        </Grid>
        <Grid item xs={6}>
          <Accordion title='Posts'>
            <Posts />
          </Accordion>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Home
