import React from 'react'
import { Grid, Box } from '@mui/material'

// components
import Accordion from '../../components/accordion/Accordion';

const Home = () => {
  return (
    <Box sx={{ marginTop: 8, height: '100vh' }}>
      <Grid container spacing={2} mt={2}>
        <Grid item xs={6}>
          <Accordion title='Categories'>
            <h6>Categories</h6>
          </Accordion>
        </Grid>
        <Grid item xs={6}>
          <Accordion title='Posts'>
            <h6>Posts</h6>
          </Accordion>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Home
